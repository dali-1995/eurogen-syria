import { useEffect, useRef, useState } from 'react'
import { Wrench, Settings, Cpu, Clock, Package, Lightbulb, Zap, ChevronLeft } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'توريد المولدات',
    description: 'نوفر مجموعة واسعة من المولدات الكهربائية من 10kVA حتى 3000kVA بمحركات عالمية Perkins، Cummins، Volvo، Mitsubishi وغيرها.',
  },
  {
    icon: Settings,
    title: 'التركيب والتشغيل',
    description: 'فريق مهندسونا يتولى تركيب المولدات بشكل احترافي شامل التوصيلات الكهربائية، نظام العادم، وخزان الوقود.',
  },
  {
    icon: Cpu,
    title: 'تكامل ATS ولوحة التحكم',
    description: 'تركيب أنظمة نقل أوتوماتيكي ATS للتبديل الفوري بين الكهرباء الرئيسية والاحتياطية في أقل من 10 ثوانٍ.',
  },
  {
    icon: Wrench,
    title: 'الصيانة والإصلاح',
    description: 'عقود صيانة دورية شاملة تشمل فحوصات منتظمة، تغيير زيوت، وصيانة وقائية لضمان أداء مثالي.',
  },
  {
    icon: Package,
    title: 'قطع الغيار',
    description: 'توفر مستمر لقطع الغيار الأصلية لمحركات Perkins، Cummins، Volvo وغيرها مع ضمان الجودة.',
  },
  {
    icon: Lightbulb,
    title: 'استشارات المشاريع',
    description: 'تحليل احتياجاتك من الطاقة واقتراح الحل الأمثل حسب نوع التطبيق، ساعات التشغيل، والميزانية.',
  },
  {
    icon: Zap,
    title: 'حلول الطاقة الصناعية',
    description: 'تصميم وتنفيذ محطات توليد مركزية للمصانع والمجمعات الصناعية الكبرى مع التوزيع الذكي.',
  },
  {
    icon: Clock,
    title: 'دعم 24/7',
    description: 'فريق دعم فني متواجد على مدار الساعة للاستجابة السريعة لأي طوارئ أو أعطال.',
  },
]

export default function Services() {
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
            OUR SERVICES
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-[#F5F0EC] mt-3">
            خدماتنا
          </h1>
          <p className="mt-4 text-[15px] text-[#8A8A93] max-w-2xl mx-auto">
            من التوريد إلى التشغيل، نقدم حلولاً شاملة لجميع احتياجات الطاقة
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-[#151517] rounded-lg p-8 hover:bg-[#1E1E22] transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[rgba(74,91,111,0.15)] flex items-center justify-center mb-5 group-hover:bg-[rgba(74,91,111,0.25)] transition-colors">
                  <service.icon size={24} className="text-[#4A5B6F]" />
                </div>
                <h3 className="font-display text-xl text-[#F5F0EC] mb-3">{service.title}</h3>
                <p className="text-[13px] text-[#8A8A93] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10 bg-[#151517]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-[#F5F0EC] mb-4">
            هل تحتاج إلى خدمة مخصصة؟
          </h2>
          <p className="text-[15px] text-[#8A8A93] mb-8 max-w-xl mx-auto">
            تواصل مع فريقنا للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
          </p>
          <a
            href="https://wa.me/963935582732"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4A5B6F] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#5D7A99] transition-colors"
          >
            <span>تواصل معنا</span>
            <ChevronLeft size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
