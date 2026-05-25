import { useEffect, useRef, useState } from 'react'
import { Play, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-video-thumbnail.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/hero-brand-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(74, 91, 111, 0.08) 0%, rgba(10, 10, 10, 0.70) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Video Thumbnail / Play Button */}
          <div
            className={`mb-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => setShowVideo(true)}
              className="relative group mx-auto w-full max-w-lg aspect-video rounded-lg overflow-hidden border border-[rgba(245,240,236,0.15)] hover:border-[#4A5B6F] transition-all duration-300"
            >
              <img
                src="/hero-video-thumbnail.jpg"
                alt="EUROGEN Power Facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[rgba(10,10,10,0.3)] group-hover:bg-[rgba(10,10,10,0.2)] transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#4A5B6F] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[rgba(74,91,111,0.4)]">
                  <Play size={28} className="text-white mr-1" fill="white" />
                </div>
              </div>
            </button>
          </div>

          {/* Headline */}
          <h1
            className={`font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#F5F0EC] uppercase tracking-[0.04em] leading-[1.1] transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            حلول طاقة موثوقة
            <br />
            <span className="text-[#5D7A99]">لجميع المشاريع</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-6 text-[15px] text-[#8A8A93] uppercase tracking-[0.08em] transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            مولدات EUROGEN — الوكيل الحصري في سوريا: شركتا DALI Group Engineering و ONYX
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://wa.me/963935582732"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#4A5B6F] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#5D7A99] transition-colors duration-200"
            >
              <span>اطلب عرض سعر</span>
              <ChevronLeft size={16} />
            </a>
            <Link
              to="/products"
              className="flex items-center gap-2 border border-[rgba(245,240,236,0.25)] text-[#F5F0EC] text-sm font-medium px-8 py-3.5 rounded-full hover:border-[#4A5B6F] hover:text-white transition-colors duration-200"
            >
              <span>استكشف المنتجات</span>
              <ChevronLeft size={16} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[11px] text-[#8A8A93] uppercase tracking-wider">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#4A5B6F] to-transparent" />
        </div>
      </section>

      {/* Video Lightbox */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[100] bg-[rgba(10,10,10,0.9)] flex items-center justify-center"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-[90vw] max-w-5xl aspect-video">
            <video
              autoPlay
              controls
              className="w-full h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <source src="/hero-brand-video.mp4" type="video/mp4" />
            </video>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-[#F5F0EC] text-sm hover:text-white transition-colors"
            >
              إغلاق ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
