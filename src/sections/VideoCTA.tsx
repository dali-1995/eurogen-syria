import { useEffect, useRef, useState } from 'react'
import { Play, ChevronLeft } from 'lucide-react'

export default function VideoCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/data-center-install.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/hero-brand-video.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(74, 91, 111, 0.08) 0%, rgba(10, 10, 10, 0.65) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <h2
            className={`font-display text-4xl lg:text-5xl text-[#F5F0EC] leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            هل أنت جاهز لتشغيل
            <br />
            <span className="text-[#5D7A99]">عملياتك؟</span>
          </h2>
          <p
            className={`mt-6 text-[15px] text-[rgba(245,240,236,0.7)] leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            مهندسونا سيعملون على تصميم حل طاقة مخصص حسب مواصفاتك الدقيقة.
          </p>
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <a
              href="https://wa.me/963935582732"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#4A5B6F] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#5D7A99] transition-colors"
            >
              <span>اطلب عرض سعر</span>
              <ChevronLeft size={16} />
            </a>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-2 border border-[rgba(245,240,236,0.3)] text-[#F5F0EC] text-sm font-medium px-8 py-3.5 rounded-full hover:border-[#4A5B6F] hover:text-white transition-colors"
            >
              <Play size={16} fill="currentColor" />
              <span>شاهد الفيلم</span>
            </button>
          </div>
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
