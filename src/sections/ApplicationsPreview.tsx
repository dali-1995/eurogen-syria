import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, Hospital, Factory, Hotel, Building2, Tractor, TowerControl } from 'lucide-react'

const applications = [
  {
    icon: Hospital,
    title: 'المستشفيات',
    description: 'طاقة احتياطية فورية لغرف العمليات والأجهزة الحيوية.',
    image: '/app-hospital.jpg',
  },
  {
    icon: Factory,
    title: 'المصانع',
    description: 'تشغيل مستمر للخطوط الإنتاجية والمعدات الصناعية الثقيلة.',
    image: '/app-factory.jpg',
  },
  {
    icon: Hotel,
    title: 'الفنادق',
    description: 'ضمان تجربة ضيوف سلسة دون انقطاع للكهرباء.',
    image: '/app-hotel.jpg',
  },
  {
    icon: Building2,
    title: 'المباني السكنية',
    description: 'حلول موثوقة للمجمعات السكنية والأبراج.',
    image: '/app-residential.jpg',
  },
  {
    icon: Tractor,
    title: 'المزارع',
    description: 'ري مزارع، تدفئة دفيئات، وتشغيل المعدات الزراعية.',
    image: '/app-farm.jpg',
  },
  {
    icon: TowerControl,
    title: 'الاتصالات',
    description: 'طاقة غير منقطعة لأبراج الاتصالات ومحطات البث.',
    image: '/app-telecom.jpg',
  },
]

export default function ApplicationsPreview() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <span
              className="text-[12px] uppercase tracking-[0.15em] text-[#8A8A93]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              APPLICATIONS
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-[#F5F0EC] mt-2">
              تطبيقاتنا
            </h2>
          </div>
          <Link
            to="/applications"
            className="flex items-center gap-2 text-[13px] uppercase tracking-[0.1em] text-[#F5F0EC] hover:text-[#4A5B6F] transition-colors group"
          >
            <span>عرض جميع التطبيقات</span>
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <div
              key={app.title}
              className={`group relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 80}ms`, transition: 'all 0.6s ease' }}
            >
              {/* Background Image */}
              <img
                src={app.image}
                alt={app.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.9)] via-[rgba(10,10,10,0.4)] to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(74,91,111,0.3)] backdrop-blur-sm flex items-center justify-center">
                    <app.icon size={20} className="text-[#5D7A99]" />
                  </div>
                  <h3 className="font-display text-xl text-[#F5F0EC]">{app.title}</h3>
                </div>
                <p className="text-[13px] text-[#8A8A93] leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
