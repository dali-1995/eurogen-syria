import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[rgba(245,240,236,0.08)] relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-[#F5F0EC] tracking-wider">
                EUROGEN
              </span>
            </Link>
            <p className="mt-3 text-[13px] text-[#8A8A93] leading-relaxed">
              حلول توليد الطاقة الصناعية<br />
              Power Generation Solutions
            </p>
            <div className="mt-4">
              <span className="text-[12px] text-[#8A8A93] uppercase tracking-wider">
                الوكيل الحصري في سوريا
              </span>
              <p className="text-sm text-[#F5F0EC] mt-1 font-medium">
                DALI Group Engineering
              </p>
              <p className="text-[12px] text-[#8A8A93] mt-1">
                اللاذقية، سوريا
              </p>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.1em] text-[#8A8A93] mb-5">
              المنتجات
            </h4>
            <ul className="space-y-3">
              {[
                'سلسلة Perkins',
                'سلسلة Cummins',
                'سلسلة Volvo',
                'سلسلة Mitsubishi',
                'سلسلة Deutz',
                'سلسلة Baudouin',
              ].map((item) => (
                <li key={item}>
                  <span className="text-[14px] text-[#8A8A93] hover:text-[#F5F0EC] transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.1em] text-[#8A8A93] mb-5">
              الشركة
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'من نحن' },
                { to: '/services', label: 'خدماتنا' },
                { to: '/applications', label: 'التطبيقات' },
                { to: '/contact', label: 'اتصل بنا' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[14px] text-[#8A8A93] hover:text-[#F5F0EC] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.1em] text-[#8A8A93] mb-5">
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/963935582732"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#8A8A93] hover:text-[#F5F0EC] transition-colors"
              >
                <Phone size={16} className="text-[#4A5B6F]" />
                <span className="text-[13px]">+963 935 582 732</span>
              </a>
              <div className="flex items-center gap-3 text-[#8A8A93]">
                <Mail size={16} className="text-[#4A5B6F]" />
                <span className="text-[13px]">info@eurogen-syria.com</span>
              </div>
              <div className="flex items-start gap-3 text-[#8A8A93]">
                <MapPin size={16} className="text-[#4A5B6F] mt-0.5" />
                <span className="text-[13px]">اللاذقية، سوريا</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-[12px] uppercase tracking-[0.1em] text-[#8A8A93] mb-3">
                النشرة البريدية
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 bg-[#151517] border border-[rgba(245,240,236,0.08)] text-[#F5F0EC] text-[13px] px-4 py-2.5 rounded-r-md focus:outline-none focus:border-[#4A5B6F] placeholder:text-[#8A8A93]"
                />
                <button className="bg-[#4A5B6F] text-white text-[12px] uppercase tracking-wider px-4 py-2.5 rounded-l-md hover:bg-[#5D7A99] transition-colors">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(245,240,236,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#8A8A93]">
            2026 EUROGEN. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[12px] text-[#8A8A93] hover:text-[#F5F0EC] transition-colors cursor-pointer">
              سياسة الخصوصية
            </span>
            <span className="text-[12px] text-[#8A8A93] hover:text-[#F5F0EC] transition-colors cursor-pointer">
              الشروط والأحكام
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
