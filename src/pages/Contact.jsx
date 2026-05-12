import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ChevronDown, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { faqs } from '../data/faqs'

// ─── HERO ────────────────────────────────────────────────────────────────────
function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
          alt="Contact us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/65 to-navy-800/30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pb-20 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-label"
        >
          Reach Out
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="heading-xl text-white max-w-2xl"
        >
          Let&rsquo;s Start Your Project Today
        </motion.h1>
      </div>
    </section>
  )
}

// ─── CONTACT CARDS ───────────────────────────────────────────────────────────
const contactItems = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Durban, KwaZulu-Natal', 'South Africa'],
    link: '#',
    linkLabel: 'Get Directions',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+27 (0) 00 000 0000', 'Mon – Sat during business hours'],
    link: 'tel:+27000000000',
    linkLabel: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@pandoraboxinteriors.co.za', 'We reply within 24 hours'],
    link: 'mailto:info@pandoraboxinteriors.co.za',
    linkLabel: 'Send Email',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Fri: 08:00 – 17:00', 'Saturday: 08:00 – 13:00'],
    link: null,
    linkLabel: null,
  },
]

function ContactCards() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-xl">
        <ScrollReveal className="text-center mb-14">
          <p className="section-label">Get in Touch</p>
          <h2 className="heading-lg text-navy-900 mb-4">We&rsquo;re Here to Help</h2>
          <p className="text-navy-700/60 max-w-lg mx-auto">
            Whether you have a question, need advice, or are ready to book, our friendly team is here for you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-400 border border-gray-100 hover:border-gold/20 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy-900 group-hover:bg-gold transition-colors duration-300 flex items-center justify-center mb-5">
                <item.icon size={22} className="text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-navy-900 mb-3">{item.title}</h3>
              <div className="flex-1">
                {item.lines.map((line, li) => (
                  <p key={li} className="text-navy-700/60 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
              {item.link && (
                <a
                  href={item.link}
                  className="mt-5 text-gold font-semibold text-sm hover:underline inline-flex items-center gap-1"
                >
                  {item.linkLabel}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
const serviceOptions = [
  'Blinds',
  'Curtains',
  'Wallpapers',
  'Window Tinting',
  'Monkey Screens',
  'Blind Repairs',
  'Multiple Services',
  'General Enquiry',
]

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!fields.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[\d\s\+\-\(\)]{7,15}$/.test(fields.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!fields.service) errors.service = 'Please select a service.'
  if (!fields.message.trim()) errors.message = 'Please enter your message.'
  return errors
}

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        const fieldErrors = validate({ ...fields, [name]: value })
        if (fieldErrors[name]) next[name] = fieldErrors[name]
        else delete next[name]
        return next
      })
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    const fieldErrors = validate(fields)
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const allErrors = validate(fields)
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors)
      setTouched({ name: true, email: true, phone: true, service: true, message: true })
      return
    }

    setStatus('submitting')
    // Simulate API call
    await new Promise((r) => setTimeout(r, 2000))
    setStatus('success')
    setFields({ name: '', email: '', phone: '', service: '', message: '' })
    setTouched({})
    setErrors({})
  }

  const inputClass = (field) =>
    `w-full bg-white/5 border ${
      errors[field] ? 'border-red-400/60 focus:border-red-400' : 'border-white/15 focus:border-gold'
    } rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-all duration-300 focus:bg-white/8`

  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-gold/5"
        />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <ScrollReveal>
            <p className="section-label">Send a Message</p>
            <h2 className="heading-lg text-white mb-6">
              Tell Us About Your Project
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Fill in the form with your details and project requirements and one of our consultants will be in touch within 24 hours to discuss how we can help transform your space.
            </p>
            <div className="space-y-4">
              {[
                'Free, no-obligation consultation',
                'In-home measurement service',
                'Personalised product recommendations',
                'Transparent, detailed quotation',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-gold flex-shrink-0" />
                  <span className="text-white/60 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={0.15}>
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/10 shadow-glass">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-display font-semibold text-2xl mb-3">Message Sent!</h3>
                  <p className="text-white/50 mb-6">
                    Thank you for reaching out. A member of our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-gold font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <FormField label="Full Name" error={errors.name}>
                      <input
                        type="text"
                        name="name"
                        value={fields.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        className={inputClass('name')}
                        autoComplete="name"
                      />
                    </FormField>

                    {/* Email */}
                    <FormField label="Email Address" error={errors.email}>
                      <input
                        type="email"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="your@email.com"
                        className={inputClass('email')}
                        autoComplete="email"
                      />
                    </FormField>

                    {/* Phone */}
                    <FormField label="Phone Number" error={errors.phone}>
                      <input
                        type="tel"
                        name="phone"
                        value={fields.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+27 00 000 0000"
                        className={inputClass('phone')}
                        autoComplete="tel"
                      />
                    </FormField>

                    {/* Service */}
                    <FormField label="Service Interested In" error={errors.service}>
                      <select
                        name="service"
                        value={fields.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputClass('service')} appearance-none cursor-pointer`}
                      >
                        <option value="" className="bg-navy-900 text-white/60">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s} className="bg-navy-900 text-white">{s}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Message */}
                  <div className="mt-5">
                    <FormField label="Your Message" error={errors.message}>
                      <textarea
                        name="message"
                        value={fields.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell us about your project, space, or any questions you have..."
                        rows={5}
                        className={`${inputClass('message')} resize-none`}
                      />
                    </FormField>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center mt-6 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, error, children }) {
  return (
    <div>
      <label className="block text-white/70 text-xs font-medium tracking-wide uppercase mb-2">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5"
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── MAP PLACEHOLDER ─────────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="bg-gray-100 relative">
      <div className="w-full h-80 md:h-96 bg-navy-100 relative overflow-hidden">
        {/* Map placeholder with styling */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-navy-200 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
            <MapPin size={24} className="text-gold" />
          </div>
          <div className="text-center">
            <p className="text-navy-700 font-semibold">Durban, KwaZulu-Natal</p>
            <p className="text-navy-600/60 text-sm">South Africa</p>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy text-sm px-6 py-2.5 mt-2"
          >
            Open in Google Maps
          </a>
        </div>
        {/* Subtle grid overlay to simulate a map feel */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(30,58,112,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,112,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </section>
  )
}

// ─── FAQ SECTION ─────────────────────────────────────────────────────────────
function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left group hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-navy-900 pr-4 text-sm md:text-base leading-snug">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors duration-200"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-gray-100 mb-4" />
              <p className="text-navy-700/70 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQSection() {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-xl">
        <ScrollReveal className="text-center mb-14">
          <p className="section-label">Common Questions</p>
          <h2 className="heading-lg text-navy-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-navy-700/60 max-w-lg mx-auto">
            Find answers to the questions we hear most from our clients. Can&rsquo;t find what you&rsquo;re looking for? Get in touch directly.
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.id} delay={i * 0.05}>
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT PAGE ────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <MapSection />
      <FAQSection />
    </>
  )
}
