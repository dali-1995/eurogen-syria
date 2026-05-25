import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { to: '/', labelAr: 'الرئيسية', labelEn: 'Home' },
  { to: '/products', labelAr: 'المنتجات', labelEn: 'Products' },
  { to: '/services', labelAr: 'الخدمات', labelEn: 'Services' },
  { to: '/applications', labelAr: 'التطبيقات', labelEn: 'Applications' },
  { to: '/about', labelAr: 'من نحن', labelEn: 'About' },
  { to: '/contact', labelAr: 'اتصل بنا', labelEn: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-[rgba(245,240,236,0.08)]'
          : 'bg-transparent'
      }`}
      style={{ height: 72 }}
    >
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <span className="font-display text-2xl font-bold text-[#F5F0EC] tracking-wider">
            EUROGEN
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[13px] uppercase tracking-[0.08em] transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-white'
                  : 'text-[#8A8A93] hover:text-white'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.labelAr}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/963935582732"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#4A5B6F] text-white text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-[#5D7A99] transition-colors duration-200"
          >
            <Phone size={14} />
            <span>اطلب عرض سعر</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50 text-[#F5F0EC]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-display text-3xl text-[#F5F0EC] hover:text-[#4A5B6F] transition-colors"
              style={{
                transitionDelay: isOpen ? `${i * 60}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              {link.labelAr}
            </Link>
          ))}
          <a
            href="https://wa.me/963935582732"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center gap-2 bg-[#4A5B6F] text-white text-sm font-medium px-8 py-3 rounded-full"
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 60}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            <Phone size={16} />
            <span>اطلب عرض سعر</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
