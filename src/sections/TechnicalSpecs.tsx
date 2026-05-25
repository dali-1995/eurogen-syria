import { useEffect, useRef, useState } from 'react'

const specs = [
  { name: 'Prime Power', ep10: '10 kVA', ep50: '50 kVA', ep200: '200 kVA' },
  { name: 'Engine', ep10: 'Perkins 403D-11G', ep50: 'Perkins 1103A-33TG1', ep200: 'Cummins 6CTAA8.3-G2' },
  { name: 'Fuel Consumption', ep10: '2.8 L/h', ep50: '12.4 L/h', ep200: '48.2 L/h' },
  { name: 'Noise Level', ep10: '65 dB(A)', ep50: '72 dB(A)', ep200: '78 dB(A)' },
  { name: 'Weight', ep10: '380 kg', ep50: '980 kg', ep200: '2,850 kg' },
  { name: 'Voltage', ep10: '400/230V', ep50: '400/230V', ep200: '400/230V' },
  { name: 'Frequency', ep10: '50 Hz', ep50: '50 Hz', ep200: '50 Hz' },
  { name: 'Cooling', ep10: 'Water', ep50: 'Water', ep200: 'Water' },
]

export default function TechnicalSpecs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#151517]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <span
              className="text-[12px] uppercase tracking-[0.15em] text-[#8A8A93]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              SPECIFICATIONS
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-[#F5F0EC] mt-2 leading-tight">
              مواصفات هندسية
              <br />
              <span className="text-[#4A5B6F]">دقيقة</span>
            </h2>
            <p className="mt-6 text-[15px] text-[#8A8A93] leading-relaxed">
              كل مولد EUROGEN مبني لتجاوز معايير ISO 8528. من كفاءة الوقود إلى تخفيض الضوضاء،
              مواصفاتنا تضع المعيار للطاقة الصناعية.
            </p>
          </div>

          {/* Right Column - Spec Table */}
          <div className="lg:col-span-3">
            {/* Table Header */}
            <div className="hidden lg:grid grid-cols-4 gap-4 pb-4 border-b border-[rgba(245,240,236,0.08)]">
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#8A8A93]">المواصفة</span>
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#8A8A93] text-center">EP10</span>
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#8A8A93] text-center">EP50</span>
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#8A8A93] text-center">EP200</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[rgba(245,240,236,0.08)]">
              {specs.map((spec, index) => (
                <div
                  key={spec.name}
                  className={`grid grid-cols-2 lg:grid-cols-4 gap-4 py-4 hover:bg-[rgba(74,91,111,0.05)] transition-colors px-2 -mx-2 rounded ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms`, transition: 'all 0.5s ease' }}
                >
                  <span className="text-[13px] text-[#8A8A93] uppercase">{spec.name}</span>
                  <span className="text-[13px] text-[#F5F0EC] tabular-nums text-left lg:text-center">{spec.ep10}</span>
                  <span className="text-[13px] text-[#F5F0EC] tabular-nums text-left lg:text-center">{spec.ep50}</span>
                  <span className="text-[13px] text-[#F5F0EC] tabular-nums text-left lg:text-center">{spec.ep200}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
