import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import TwilightShader from './TwilightShader'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Set shader intensity based on page
  const getShaderIntensity = () => {
    switch (location.pathname) {
      case '/': return 1.0
      case '/about': return 0.5
      case '/products': return 0.7
      case '/services': return 0.6
      case '/applications': return 0.6
      case '/contact': return 0.6
      default: return 1.0
    }
  }

  return (
    <div className="relative min-h-screen">
      <TwilightShader />
      <div
        className="relative z-10"
        style={{ '--shader-intensity': getShaderIntensity() } as React.CSSProperties}
      >
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  )
}
