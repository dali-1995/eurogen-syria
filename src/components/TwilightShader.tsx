import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const twilightVert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`

const twilightFrag = `
precision highp float;
varying vec2 vUv;
uniform float u_time;
uniform vec2 u_resolution;
uniform float u_intensity;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float vignette(vec2 uv, float intensity, float roundness) {
  vec2 d = abs(uv - 0.5);
  float vig = smoothstep(0.5, 0.5 - 0.3 * roundness, length(d));
  return clamp(pow(vig, intensity), 0.0, 1.0);
}

float filmGrain(vec2 uv, float t, float intensity) {
  float grain = hash(uv * t);
  grain = (grain - 0.5) * intensity;
  grain *= smoothstep(0.8, 0.2, uv.y);
  return grain;
}

float gridPattern(vec2 uv, float t) {
  vec2 grid = abs(fract(uv * 30.0) - 0.5);
  grid = smoothstep(0.05, 0.0, grid);
  float gridLine = max(grid.x, grid.y);
  gridLine *= smoothstep(0.15, 0.5, uv.y);
  gridLine *= (0.5 + 0.5 * sin(t * 0.5));
  return gridLine * 0.25;
}

void main() {
  vec2 uv = vUv;
  float t = u_time * 0.08;

  vec3 colorTop = vec3(0.04, 0.05, 0.07);
  vec3 colorMid = vec3(0.29, 0.36, 0.44);
  vec3 colorWarm = vec3(0.35, 0.30, 0.25);

  float gradientFactor = smoothstep(0.0, 0.6, uv.y);
  vec3 color = mix(colorWarm, colorMid, gradientFactor);
  color = mix(color, colorTop, smoothstep(0.3, 1.0, uv.y));

  color += filmGrain(uv, u_time, 0.08);
  color += gridPattern(uv, u_time) * vec3(0.2, 0.25, 0.3);

  color *= u_intensity;

  float vig = vignette(uv, 1.2, 0.8);
  color *= 0.5 + 0.5 * vig;

  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`

export default function TwilightShader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const material = new THREE.ShaderMaterial({
      vertexShader: twilightVert,
      fragmentShader: twilightFrag,
      uniforms: {
        u_time: { value: 0.0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_intensity: { value: 1.0 },
      },
    })
    materialRef.current = material

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    const scene = new THREE.Scene()
    scene.add(mesh)
    const camera = new THREE.Camera()

    const animate = (time: number) => {
      material.uniforms.u_time.value = time * 0.001
      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Read intensity from CSS custom property
    const updateIntensity = () => {
      const val = getComputedStyle(container).getPropertyValue('--shader-intensity').trim()
      const intensity = parseFloat(val) || 1.0
      material.uniforms.u_intensity.value = intensity
    }
    const observer = new MutationObserver(updateIntensity)
    observer.observe(container, { attributes: true, attributeFilter: ['style'] })
    updateIntensity()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
