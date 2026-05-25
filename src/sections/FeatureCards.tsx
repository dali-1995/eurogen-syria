import { useEffect, useRef, useState } from 'react'
import { Zap, Shield, Wifi } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'الطاقة الصناعية',
    titleEn: 'INDUSTRIAL POWER',
    description: 'مولدات للتشغيل المستمر من 10kVA حتى 3000kVA للقطاعات الصناعية والتعدينية ومحطات الطاقة.',
    accent: '#4A5B6F',
  },
  {
    icon: Shield,
    title: 'الاحتياطي الحرج',
    titleEn: 'CRITICAL BACKUP',
    description: 'أنظمة ATS أوتوماتيكية تبدأ في أقل من 10 ثوانٍ للمستشفيات ومراكز البيانات والاتصالات.',
    accent: '#B8860B',
  },
  {
    icon: Wifi,
    title: 'المراقبة عن بُعد',
    titleEn: 'REMOTE MONITORING',
    description: 'إدارة المولدات عبر السحابة مع تشخيص فوري، صيانة وقائية، وتنبيهات 24/7.',
    accent: '#4A5B6F',
  },
]

export default function FeatureCards() {
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.titleEn}
              className={`relative bg-[#151517] rounded-lg p-8 lg:p-10 overflow-hidden group hover:bg-[#1E1E22] transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
                borderTop: `2px solid ${feature.accent}`,
              }}
            >
              {/* Background Icon */}
              <feature.icon
                size={120}
                className="absolute top-4 right-4 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity"
                style={{ color: feature.accent }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: `${feature.accent}15` }}
              >
                <feature.icon size={24} style={{ color: feature.accent }} />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl lg:text-[28px] text-[#F5F0EC] mb-3">
                {feature.title}
              </h3>
              <p className="text-[14px] text-[#8A8A93] leading-relaxed line-clamp-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
