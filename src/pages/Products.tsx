import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, Filter } from 'lucide-react'

interface Product {
  id: string
  series: string
  nameAr: string
  nameEn: string
  engine: string
  powerRange: string
  category: string
  description: string
  image: string
}

const allProducts: Product[] = [
  { id: '1', series: 'Perkins', nameAr: 'سلسلة Perkins', nameEn: 'Perkins Series', engine: 'Perkins', powerRange: '10 – 2500 kVA', category: 'all', description: 'محركات Perkins البريطانية الموثوقة لجميع التطبيقات.', image: '/product-ep10.jpg' },
  { id: '2', series: 'Cummins', nameAr: 'سلسلة Cummins', nameEn: 'Cummins Series', engine: 'Cummins', powerRange: '30 – 2750 kVA', category: 'industrial', description: 'أداء عالمي مع دعم عالمي واسع.', image: '/product-ep200.jpg' },
  { id: '3', series: 'Volvo', nameAr: 'سلسلة Volvo', nameEn: 'Volvo Series', engine: 'Volvo', powerRange: '95 – 700 kVA', category: 'industrial', description: 'كفاءة عالية وتقنية سويدية متقدمة.', image: '/product-ep500.jpg' },
  { id: '4', series: 'Mitsubishi', nameAr: 'سلسلة Mitsubishi', nameEn: 'Mitsubishi Series', engine: 'Mitsubishi', powerRange: '515 – 2500 kVA', category: 'industrial', description: 'قوة يابانية للتطبيقات الصناعية الثقيلة.', image: '/product-ep1000.jpg' },
  { id: '5', series: 'Ricardo', nameAr: 'سلسلة Ricardo', nameEn: 'Ricardo Series', engine: 'Ricardo', powerRange: '17 – 500 kVA', category: 'commercial', description: 'حل اقتصادي موثوق للتطبيقات التجارية.', image: '/product-ep50.jpg' },
  { id: '6', series: 'Titan', nameAr: 'سلسلة Titan', nameEn: 'Titan Series', engine: 'Titan', powerRange: '17 – 500 kVA', category: 'commercial', description: 'أداء قوي بتكلفة تنافسية.', image: '/product-ep200.jpg' },
  { id: '7', series: 'Leyland', nameAr: 'سلسلة Leyland', nameEn: 'Leyland Series', engine: 'Leyland', powerRange: '44 – 220 kVA', category: 'portable', description: 'حلول محمولة للمواقع والمناسبات.', image: '/product-ep50.jpg' },
  { id: '8', series: 'Doosan', nameAr: 'سلسلة Doosan', nameEn: 'Doosan Series', engine: 'Doosan', powerRange: '95 – 830 kVA', category: 'industrial', description: 'تقنية كورية متقدمة للقطاع الصناعي.', image: '/product-ep500.jpg' },
  { id: '9', series: 'Scania', nameAr: 'سلسلة Scania', nameEn: 'Scania Series', engine: 'Scania', powerRange: '280 – 771 kVA', category: 'industrial', description: 'كفاءة وقود ممتازة وأداء سويدي.', image: '/product-ep500.jpg' },
  { id: '10', series: 'SDEC', nameAr: 'سلسلة SDEC', nameEn: 'SDEC Series', engine: 'SDEC', powerRange: '77 – 1012 kVA', category: 'commercial', description: 'محركات صينية بتقنية أوروبية.', image: '/product-ep200.jpg' },
  { id: '11', series: 'Deutz', nameAr: 'سلسلة Deutz', nameEn: 'Deutz Series', engine: 'Deutz', powerRange: '35 – 850 kVA', category: 'industrial', description: 'تقنية ألمانية عريقة في المحركات.', image: '/product-ep200.jpg' },
  { id: '12', series: 'Baudouin', nameAr: 'سلسلة Baudouin', nameEn: 'Baudouin Series', engine: 'Baudouin', powerRange: '11 – 1900 kVA', category: 'marine', description: 'محركات فرنسية متخصصة للبحرية والصناعة.', image: '/product-ep500.jpg' },
  { id: '13', series: 'Isuzu', nameAr: 'سلسلة Isuzu', nameEn: 'Isuzu Series', engine: 'Isuzu', powerRange: '28 – 50 kVA', category: 'portable', description: 'مولدات مدمجة وخفيفة للتطبيقات الصغيرة.', image: '/product-ep10.jpg' },
  { id: '14', series: 'Yavuz', nameAr: 'سلسلة Yavuz', nameEn: 'Yavuz Series', engine: 'Yavuz', powerRange: '32 – 110 kVA', category: 'portable', description: 'حلول تركية عملية للمواقع المتنقلة.', image: '/product-ep50.jpg' },
]

const filters = [
  { key: 'all', label: 'الكل' },
  { key: 'industrial', label: 'صناعي' },
  { key: 'commercial', label: 'تجاري' },
  { key: 'portable', label: 'متنقل' },
  { key: 'marine', label: 'بحري' },
]

const features = [
  'متوافق مع ATS',
  'غطاء عازل للصوت',
  'وحدة تحكم رقمية',
  'جاهز للمراقبة عن بُعد',
  'معتمد CE',
]

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const filteredProducts = activeFilter === 'all'
    ? allProducts
    : allProducts.filter((p) => p.category === activeFilter)

  return (
    <div style={{ '--shader-intensity': '0.7' } as React.CSSProperties}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <span
            className="text-[12px] uppercase tracking-[0.15em] text-[#8A8A93]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            PRODUCT CATALOG
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-[#F5F0EC] mt-3">
            سلسلة المولدات
          </h1>
          <p className="mt-4 text-[15px] text-[#8A8A93] max-w-2xl mx-auto">
            من وحدات 10kVA المحمولة حتى محطات الطاقة الصناعية 3000kVA
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-[#151517] border-y border-[rgba(245,240,236,0.08)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4">
          <div className="flex items-center gap-3 overflow-x-auto">
            <Filter size={16} className="text-[#8A8A93] flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`text-[13px] uppercase tracking-wider px-5 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-[#4A5B6F] text-white'
                    : 'bg-transparent border border-[rgba(245,240,236,0.15)] text-[#8A8A93] hover:text-white hover:border-[rgba(245,240,236,0.3)]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={sectionRef} className="py-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-[#151517] rounded-lg overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-[#1E1E22]">
                  <img
                    src={product.image}
                    alt={product.nameAr}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-lg text-[#F5F0EC]">{product.nameAr}</h3>
                  </div>
                  <p className="text-[12px] text-[#4A5B6F] uppercase tracking-wider mb-2">
                    {product.powerRange}
                  </p>
                  <p className="text-[13px] text-[#8A8A93] leading-relaxed line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <a
                    href="https://wa.me/963935582732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] uppercase tracking-[0.1em] text-[#F5F0EC] hover:text-[#4A5B6F] transition-colors group/link"
                  >
                    <span>اطلب عرض سعر</span>
                    <ChevronLeft size={14} className="group-hover/link:-translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 lg:px-10 bg-[#151517]">
        <div className="max-w-[1400px] mx-auto">
          <span
            className="text-[12px] uppercase tracking-[0.15em] text-[#8A8A93] block mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            INCLUDED WITH ALL UNITS
          </span>
          <div className="flex flex-wrap gap-3">
            {features.map((feature) => (
              <span
                key={feature}
                className="bg-[#1E1E22] border border-[rgba(245,240,236,0.08)] text-[13px] text-[#F5F0EC] px-5 py-2.5 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
