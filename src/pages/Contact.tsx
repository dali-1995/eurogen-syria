import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, ChevronLeft, Send } from 'lucide-react'

const interests = [
  'صناعي',
  'تجاري',
  'بحري',
  'خدمة',
  'أخرى',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    power: '',
    city: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0ACompany: ${formData.company}%0AInterest: ${formData.interest}%0APower: ${formData.power} kVA%0ACity: ${formData.city}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/963935582732?text=${message}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div style={{ '--shader-intensity': '0.6' } as React.CSSProperties}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <span
            className="text-[12px] uppercase tracking-[0.15em] text-[#8A8A93]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            CONTACT US
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-[#F5F0EC] mt-3">
            تواصل معنا
          </h1>
          <p className="mt-4 text-[15px] text-[#8A8A93] max-w-2xl mx-auto">
            نحن هنا لمساعدتك في اختيار المولد المناسب لمشروعك
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] text-[#8A8A93] uppercase tracking-wider mb-2">
                      الاسم
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#151517] border border-[rgba(245,240,236,0.08)] text-[#F5F0EC] text-[15px] px-4 py-3.5 rounded-md focus:outline-none focus:border-[#4A5B6F] placeholder:text-[#8A8A93]"
                      placeholder="اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#8A8A93] uppercase tracking-wider mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#151517] border border-[rgba(245,240,236,0.08)] text-[#F5F0EC] text-[15px] px-4 py-3.5 rounded-md focus:outline-none focus:border-[#4A5B6F] placeholder:text-[#8A8A93]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] text-[#8A8A93] uppercase tracking-wider mb-2">
                      الشركة
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#151517] border border-[rgba(245,240,236,0.08)] text-[#F5F0EC] text-[15px] px-4 py-3.5 rounded-md focus:outline-none focus:border-[#4A5B6F] placeholder:text-[#8A8A93]"
                      placeholder="اسم الشركة"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#8A8A93] uppercase tracking-wider mb-2">
                      نوع الاهتمام
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-[#151517] border border-[rgba(245,240,236,0.08)] text-[#F5F0EC] text-[15px] px-4 py-3.5 rounded-md focus:outline-none focus:border-[#4A5B6F]"
                    >
                      <option value="" className="bg-[#151517]">اختر...</option>
                      {interests.map((i) => (
                        <option key={i} value={i} className="bg-[#151517]">{i}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] text-[#8A8A93] uppercase tracking-wider mb-2">
                      القدرة المطلوبة (kVA)
                    </label>
                    <input
                      type="text"
                      name="power"
                      value={formData.power}
                      onChange={handleChange}
                      className="w-full bg-[#151517] border border-[rgba(245,240,236,0.08)] text-[#F5F0EC] text-[15px] px-4 py-3.5 rounded-md focus:outline-none focus:border-[#4A5B6F] placeholder:text-[#8A8A93]"
                      placeholder="مثال: 100"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#8A8A93] uppercase tracking-wider mb-2">
                      المدينة
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-[#151517] border border-[rgba(245,240,236,0.08)] text-[#F5F0EC] text-[15px] px-4 py-3.5 rounded-md focus:outline-none focus:border-[#4A5B6F] placeholder:text-[#8A8A93]"
                      placeholder="اللاذقية"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] text-[#8A8A93] uppercase tracking-wider mb-2">
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-[#151517] border border-[rgba(245,240,236,0.08)] text-[#F5F0EC] text-[15px] px-4 py-3.5 rounded-md focus:outline-none focus:border-[#4A5B6F] placeholder:text-[#8A8A93] resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#4A5B6F] text-white text-[15px] font-medium py-4 rounded-md hover:bg-[#5D7A99] transition-colors"
                >
                  <Send size={18} />
                  <span>إرسال الاستفسار</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-[#151517] rounded-lg p-8">
                <h3 className="font-display text-2xl text-[#F5F0EC] mb-6">
                  معلومات التواصل
                </h3>

                <div className="space-y-6">
                  <a
                    href="https://wa.me/963935582732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[rgba(74,91,111,0.15)] flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-[#4A5B6F]" />
                    </div>
                    <div>
                      <span className="text-[12px] text-[#8A8A93] uppercase tracking-wider block">الهاتف / واتساب</span>
                      <span className="text-[15px] text-[#F5F0EC] group-hover:text-[#4A5B6F] transition-colors">+963 935 582 732</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(74,91,111,0.15)] flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#4A5B6F]" />
                    </div>
                    <div>
                      <span className="text-[12px] text-[#8A8A93] uppercase tracking-wider block">البريد الإلكتروني</span>
                      <span className="text-[15px] text-[#F5F0EC]">info@daligrouptr.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(74,91,111,0.15)] flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#4A5B6F]" />
                    </div>
                    <div>
                      <span className="text-[12px] text-[#8A8A93] uppercase tracking-wider block">الموقع</span>
                      <span className="text-[15px] text-[#F5F0EC]">اللاذقية، سوريا</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(74,91,111,0.15)] flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-[#4A5B6F]" />
                    </div>
                    <div>
                      <span className="text-[12px] text-[#8A8A93] uppercase tracking-wider block">ساعات العمل</span>
                      <span className="text-[15px] text-[#F5F0EC]">السبت - الخميس: 9:00 - 18:00</span>
                      <span className="text-[13px] text-[#8A8A93] block">الجمعة: مغلق</span>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp CTA */}
                <div className="mt-8 pt-6 border-t border-[rgba(245,240,236,0.08)]">
                  <a
                    href="https://wa.me/963935582732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-medium py-3.5 rounded-md hover:bg-[#22c35e] transition-colors w-full"
                  >
                    <span>تواصل عبر واتساب</span>
                    <ChevronLeft size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
