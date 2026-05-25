import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const products = [
  {
    image: '/product-ep10.jpg',
    series: 'EP10',
    name: 'سلسلة EP10',
    engine: 'Perkins 403D-11G',
    power: '10 kVA',
    description: 'مولد مدمج مثالي للاستخدامات السكنية والتجارية الصغيرة.',
  },
  {
    image: '/product-ep50.jpg',
    series: 'EP50',
    name: 'سلسلة EP50',
    engine: 'Perkins 1103A-33TG1',
    power: '50 kVA',
    description: 'حل موثوق للمنشآت التجارية المتوسطة ومواقع البناء.',
  },
  {
    image: '/product-ep200.jpg',
    series: 'EP200',
    name: 'سلسلة EP200',
    engine: 'Cummins 6CTAA8.3-G2',
    power: '200 kVA',
    description: 'قوة صناعية حقيقية للمصانع والمستشفيات والفنادق.',
  },
  {
    image: '/product-ep500.jpg',
    series: 'EP500',
    name: 'سلسلة EP500',
    engine: 'Cummins QSX15-G8',
    power: '500 kVA',
    description: 'وحدة ثقيلة للتطبيقات الصناعية الكبرى ومحطات الطاقة.',
  },
]

export default function ProductsShowcase() {
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
              SERIES FEATURED
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-[#F5F0EC] mt-2">
              المنتجات المميزة
            </h2>
          </div>
          <Link
            to="/products"
            className="flex items-center gap-2 text-[13px] uppercase tracking-[0.1em] text-[#F5F0EC] hover:text-[#4A5B6F] transition-colors group"
          >
            <span>عرض جميع المنتجات</span>
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.series}
              className={`group bg-[#151517] rounded-lg overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-[#1E1E22]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl text-[#F5F0EC]">
                    {product.name}
                  </h3>
                  <span className="text-[13px] text-[#4A5B6F] font-medium tabular-nums">
                    {product.power}
                  </span>
                </div>
                <p className="text-[12px] text-[#8A8A93] uppercase tracking-wider mb-3">
                  {product.engine}
                </p>
                <p className="text-[13px] text-[#8A8A93] leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 text-[12px] uppercase tracking-[0.1em] text-[#F5F0EC] hover:text-[#4A5B6F] transition-colors group/link"
                >
                  <span>التفاصيل</span>
                  <ChevronLeft size={14} className="group-hover/link:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
