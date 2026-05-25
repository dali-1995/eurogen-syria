import { useEffect, useRef, useState } from 'react'
import { Hospital, Factory, Hotel, Building2, Tractor, HardHat, ShoppingCart, TowerControl, ChevronLeft } from 'lucide-react'

const applications = [
  {
    icon: Hospital,
    title: 'المستشفيات',
    description: 'لا يمكن أن تتوقف المستشفيات عن العمل. مولدات EUROGEN توفر طاقة احتياطية فورية لغرف العمليات، أجهزة الإنعاش، والأنظمة الحيوية مع ATS أوتوماتيكي يبدأ في أقل من 10 ثوانٍ.',
    image: '/app-hospital.jpg',
    details: ['استجابة فورية < 10 ثوانٍ', 'نظام ATS أوتوماتيكي', 'صيانة وقائية دورية', 'دعم فني 24/7'],
  },
  {
    icon: Factory,
    title: 'المصانع',
    description: 'تشغيل مستمر للخطوط الإنتاجية والمعدات الصناعية الثقيلة. مولداتنا الصناعية مصممة للعمل بكامل طاقتها لساعات طويلة دون توقف.',
    image: '/app-factory.jpg',
    details: ['قدرة عالية مستمرة', 'تحمل بيئات صناعية قاسية', 'تحكم ذكي متقدم', 'كفاءة وقود ممتازة'],
  },
  {
    icon: Hotel,
    title: 'الفنادق',
    description: 'ضمان تجربة ضيوف سلسة دون انقطاع للكهرباء. مولدات EUROGEN تعمل بصمت وتندمج بشكل أنيق مع البنية التحتية للفندق.',
    image: '/app-hotel.jpg',
    details: ['تشغيل هادئ', 'تصميم أنيق', 'ربط سلس مع الشبكة', 'تحكم مركزي'],
  },
  {
    icon: Building2,
    title: 'المباني السكنية',
    description: 'حلول موثوقة للمجمعات السكنية والأبراج. ضمان توفر الكهرباء للمصاعد، الإنارة، وأنظمة الأمن حتى في أوقات الطوارئ.',
    image: '/app-residential.jpg',
    details: ['حماية كاملة للمبنى', 'تشغيل آمن للمصاعد', 'ربط أوتوماتيكي', 'صيانة دورية'],
  },
  {
    icon: Tractor,
    title: 'المزارع والمشاريع الزراعية',
    description: 'ري المزارع، تدفئة الدفيئات، وتشغيل المعدات الزراعية. مولدات EUROGEN تتحمل ظروف العمل في البيئات الزراعية.',
    image: '/app-farm.jpg',
    details: ['تحمل الظروف الصحراوية', 'تشغيل المعدات الثقيلة', 'حلول الري', 'صيانة ميدانية'],
  },
  {
    icon: HardHat,
    title: 'مواقع البناء',
    description: 'طاقة موثوقة لمواقع البناء والإنشاءات. مولدات متنقلة ومحمولة توفر الكهرباء للمعدات والإنارة في أي مكان.',
    image: '/construction-site.jpg',
    details: ['مولدات محمولة', 'تركيب سريع', 'تحمل الأتربة والاهتزازات', 'تشغيل المعدات الثقيلة'],
  },
  {
    icon: ShoppingCart,
    title: 'المراكز التجارية',
    description: 'ضمان استمرارية الأعمال في المراكز التجارية والمولات. إنارة، تكييف، وأنظمة الأمن تعمل دون انقطاع.',
    image: '/app-residential.jpg',
    details: ['تغطية شاملة', 'تشغيل متعدد الأنظمة', 'تحكم ذكي', 'صيانة وقائية'],
  },
  {
    icon: TowerControl,
    title: 'الاتصالات والأنظمة الحرجة',
    description: 'طاقة غير منقطعة لأبراج الاتصالات ومحطات البث. مولدات EUROGEN تضمن استمرارية الشبكات الحيوية.',
    image: '/app-telecom.jpg',
    details: ['استمرارية 99.9%', 'مراقبة عن بُعد', 'استجابة فورية', 'دعم فني متخصص'],
  },
]

export default function Applications() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ '--shader-intensity': '0.6' } as React.CSSProperties}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <span
            className="text-[12px] uppercase tracking-[0.15em] text-[#8A8A93]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            APPLICATIONS
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-[#F5F0EC] mt-3">
            تطبيقاتنا
          </h1>
          <p className="mt-4 text-[15px] text-[#8A8A93] max-w-2xl mx-auto">
            حلول طاقة متخصصة لمختلف القطاعات والصناعات
          </p>
        </div>
      </section>

      {/* Applications List */}
      <section ref={sectionRef} className="py-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto space-y-12">
          {applications.map((app, index) => (
            <div
              key={app.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms`, transition: 'all 0.6s ease' }}
            >
              {/* Image */}
              <div className={`aspect-video rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(74,91,111,0.15)] flex items-center justify-center">
                    <app.icon size={24} className="text-[#4A5B6F]" />
                  </div>
                  <h2 className="font-display text-3xl text-[#F5F0EC]">{app.title}</h2>
                </div>
                <p className="text-[15px] text-[#8A8A93] leading-relaxed mb-6">
                  {app.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {app.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-[13px] text-[#F5F0EC]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A5B6F]" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/963935582732"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.1em] text-[#4A5B6F] hover:text-[#5D7A99] transition-colors group"
                >
                  <span>اطلب استشارة</span>
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
