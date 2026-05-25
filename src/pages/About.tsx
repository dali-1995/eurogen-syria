import { useEffect, useRef, useState } from 'react'
import { Award, Globe, Leaf, ChevronLeft } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'الهندسة أولاً',
    description: 'كل قرار تصميم يبدأ من فيزياء الطاقة. لا حلول وسطى، فقط حلول هندسية دقيقة.',
  },
  {
    icon: Award,
    title: 'لا مجال للمساومة',
    description: 'المواد، الأبعاد، الاختبارات — لا شيء "يكفي". كل وحدة تخضع لاختبارات صارمة قبل التسليم.',
  },
  {
    icon: Globe,
    title: 'دعم عالمي',
    description: 'شبكة خدمة على مدار الساعة تمتد عبر أكثر من 40 دولة لضمان استمرارية عملياتك.',
  },
  {
    icon: Leaf,
    title: 'الاستدامة',
    description: 'نقود الانتقال نحو منصات الطاقة الهجينة والجاهزة للوقود الحيوي لبيئة أكثر نظافة.',
  },
]

export default function About() {
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
    <div style={{ '--shader-intensity': '0.5' } as React.CSSProperties}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <span
            className="text-[12px] uppercase tracking-[0.15em] text-[#8A8A93]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            ABOUT US
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-[#F5F0EC] mt-3">
            مبني على الدقة
          </h1>
          <p className="mt-4 text-[15px] text-[#8A8A93] max-w-2xl mx-auto">
            أربعة عقود من التميز الهندسي في توليد الطاقة
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="/about-engineer.jpg"
                alt="EUROGEN Engineer"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span
                className="text-[12px] uppercase tracking-[0.15em] text-[#8A8A93]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                OUR STORY
              </span>
              <h2 className="font-display text-4xl lg:text-5xl text-[#F5F0EC] mt-2 mb-6">
                قصتنا
              </h2>
              <div className="space-y-4 text-[15px] text-[#F5F0EC] leading-[1.8]">
                <p>
                  تأسست EUROGEN على قناعة بسيطة: أن الطاقة الموثوقة ليست رفاهية، بل ضرورة حيوية
                  للمجتمعات والصناعات. منذ أكثر من أربعة عقود، نحن نصمم ونصنع مولدات الديزل
                  التي تشغل البنية التحتية الحيوية في أكثر من 40 دولة.
                </p>
                <p>
                  كل مولد EUROGEN هو نتاج فكر هندسي دقيق. نبدأ من احتياجات العميل، نحللها،
                  ثم نصمم الحل الأمثل. لا نبيع منتجات جاهزة — نقدم حلولاً مخصصة.
                </p>
                <p>
                 في سوريا، تمثل شركتا DALI Group Engineering و ONYX الوكيل الحصري لعلامة EUROGEN، مع تقديم خدمات المبيعات والتركيب والصيانة ودعم ما بعد البيع في جميع أنحاء سوريا.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={sectionRef} className="py-16 px-6 lg:px-10 bg-[#151517]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-[12px] uppercase tracking-[0.15em] text-[#8A8A93]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              OUR VALUES
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-[#F5F0EC] mt-2">
              قيمنا
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-[#1E1E22] rounded-lg p-8 transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[rgba(74,91,111,0.15)] flex items-center justify-center mb-5">
                  <value.icon size={24} className="text-[#4A5B6F]" />
                </div>
                <h3 className="font-display text-xl text-[#F5F0EC] mb-3">{value.title}</h3>
                <p className="text-[13px] text-[#8A8A93] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '40+', label: 'دولة' },
              { value: '10k+', label: 'مولد مُركب' },
              { value: '14', label: 'سلسلة محركات' },
              { value: '24/7', label: 'دعم فني' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl lg:text-5xl text-[#4A5B6F] tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-2 text-[14px] text-[#8A8A93]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10 bg-[#151517]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-[#F5F0EC] mb-4">
            هل تريد معرفة المزيد؟
          </h2>
          <p className="text-[15px] text-[#8A8A93] mb-8 max-w-xl mx-auto">
            فريقنا جاهز للإجابة على جميع استفساراتك حول مولدات EUROGEN
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
