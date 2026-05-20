import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import {
  ArrowRight, CheckCircle, Award, Users, Clock, Star,
  Layers, Droplets, Image, Sun, Grid, Wrench,
} from 'lucide-react'

import ServiceCard from '../components/ServiceCard'
import TestimonialSlider from '../components/TestimonialSlider'
import AnimatedCounter from '../components/AnimatedCounter'
import ScrollReveal from '../components/ScrollReveal'
import { services } from '../data/services'

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const words = ['Style,', 'Comfort', '&', 'Quality']

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1800&q=85"
          alt="Luxury interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-800/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
      </motion.div>

      {/* Floating accent shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-gold/10"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full border border-white/5"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-label mb-4"
        >
          Premium Interior Solutions
        </motion.p>

        <h1 className="heading-xl text-white mb-6 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="block"
          >
            Transform Your Space
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="block"
          >
            with{' '}
            <span className="text-gradient-gold">Style, Comfort</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="block text-gradient-gold"
          >
            &amp; Quality
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          Expert blinds, curtains, wallpapers, window tinting and more — designed and installed to perfection for homes and offices across South Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-wrap gap-4"
        >
          <Link to="/services" className="btn-primary">
            View Services <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-wrap gap-6 mt-14"
        >
          {[
            { icon: Award, label: 'Premium Quality' },
            { icon: CheckCircle, label: 'Expert Installation' },
            { icon: Star, label: '5-Star Service' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/60 text-sm">
              <Icon size={16} className="text-gold" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-gold/60 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}

// ─── SERVICES OVERVIEW ───────────────────────────────────────────────────────
function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50 bg-pattern">
      <div className="container-xl">
        <ScrollReveal className="text-center mb-14">
          <p className="section-label">What We Offer</p>
          <h2 className="heading-lg text-navy-900 mb-4">
            Our Interior Solutions
          </h2>
          <p className="text-navy-700/60 max-w-xl mx-auto text-lg">
            Every product is precision-crafted and professionally installed to elevate your living and working spaces.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link to="/services" className="btn-navy">
            Explore All Services <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── WHY CHOOSE US ───────────────────────────────────────────────────────────
const reasons = [
  { icon: Award, title: 'Premium Quality Materials', desc: 'We carefully select only the finest fabrics, films, and materials for every installation.' },
  { icon: CheckCircle, title: 'Skilled Workmanship', desc: 'Every project is completed with precision, professionalism, and meticulous attention to detail.' },
  { icon: Users, title: 'Customer-Focused', desc: 'We listen, advise, and tailor every solution to your unique space, style, and budget.' },
  { icon: Clock, title: 'Fast Turnaround Times', desc: 'We respect your time and deliver projects efficiently without compromising on quality.' },
  { icon: Star, title: 'Affordable Custom Solutions', desc: 'Premium interior solutions made accessible — quality craftsmanship at fair, transparent pricing.' },
  { icon: Wrench, title: 'Reliable After-Sales Support', desc: 'Our relationship with clients continues long after installation with dependable ongoing support.' },
]

function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-900/50 to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gold/5"
        />
      </div>

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <ScrollReveal>
            <p className="section-label">Why Pandora Box</p>
            <h2 className="heading-lg text-white mb-6">
              The Standard of Excellence in Interior Design
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              We are committed to delivering stylish, practical, and high-quality interior solutions tailored to both residential and commercial environments. Our focus is on combining functionality, comfort, and modern aesthetics to transform every space into something exceptional.
            </p>
            <Link to="/about" className="btn-primary">
              Our Story <ArrowRight size={18} />
            </Link>
          </ScrollReveal>

          {/* Right — grid of reason cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group glass rounded-2xl p-6 border border-white/5 hover:border-gold/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <r.icon size={20} className="text-gold" />
                </div>
                <h3 className="text-white font-semibold mb-2">{r.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── STATS ───────────────────────────────────────────────────────────────────
const stats = [
  { value: '1500', suffix: '+', label: 'Projects Completed' },
  { value: '12', suffix: '+', label: 'Years of Experience' },
  { value: '98', suffix: '%', label: 'Client Satisfaction' },
  { value: '6', suffix: '', label: 'Premium Services' },
]

function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-gold-600 via-gold to-gold-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      <div className="container-xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-white font-display font-bold text-5xl md:text-6xl mb-2 tabular-nums">
                <AnimatedCounter end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white/70 font-medium text-sm md:text-base tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── GALLERY PREVIEW ─────────────────────────────────────────────────────────
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', alt: 'Elegant blinds installation', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', alt: 'Luxury curtains', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&q=80', alt: 'Designer wallpaper', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', alt: 'Modern interior', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=600&q=80', alt: 'Window treatment', span: 'col-span-1' },
]

function GalleryPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <ScrollReveal className="text-center mb-14">
          <p className="section-label">Our Work</p>
          <h2 className="heading-lg text-navy-900 mb-4">Featured Projects</h2>
          <p className="text-navy-700/60 max-w-lg mx-auto">
            A glimpse into the spaces we have transformed with precision craftsmanship and refined taste.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${img.span} relative overflow-hidden rounded-2xl group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROCESS ─────────────────────────────────────────────────────────────────
const steps = [
  { step: '01', title: 'Consultation', desc: 'We visit your space, take measurements, and understand your vision and requirements.' },
  { step: '02', title: 'Design & Quote', desc: 'We present tailored solutions with samples and a detailed, transparent quotation.' },
  { step: '03', title: 'Fabrication', desc: 'Your chosen products are precisely crafted or sourced to your exact specifications.' },
  { step: '04', title: 'Installation', desc: 'Our expert team installs everything to perfection, leaving your space immaculate.' },
]

function Process() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-xl">
        <ScrollReveal className="text-center mb-16">
          <p className="section-label">How It Works</p>
          <h2 className="heading-lg text-navy-900 mb-4">Our Simple Process</h2>
          <p className="text-navy-700/60 max-w-lg mx-auto">
            From your first call to the final installation, every step is designed to be effortless and enjoyable.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gold/30 flex items-center justify-center shadow-card relative z-10">
                  <span className="font-display font-bold text-gold text-xl">{s.step}</span>
                </div>
              </div>
              <h3 className="font-semibold text-navy-900 text-lg mb-2">{s.title}</h3>
              <p className="text-navy-700/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="container-xl">
        <ScrollReveal className="text-center mb-14">
          <p className="section-label">What Clients Say</p>
          <h2 className="heading-lg text-navy-900 mb-4">Trusted by Hundreds of Clients</h2>
          <p className="text-navy-700/60 max-w-lg mx-auto">
            Real experiences from homeowners, designers, and businesses who trust Pandora Box Interiors.
          </p>
        </ScrollReveal>
        <TestimonialSlider />
      </div>
    </section>
  )
}

// ─── CTA BANNER ──────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
          alt="Interior background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
      </div>
      <div className="relative z-10 container-xl text-center">
        <ScrollReveal>
          <p className="section-label mb-4">Ready to Begin?</p>
          <h2 className="heading-lg text-white mb-6 max-w-2xl mx-auto">
            Let&rsquo;s Create Something Beautiful Together
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 text-lg">
            Book your free in-home consultation today and let our experts bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-outline">
              Browse Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Stats />
      <GalleryPreview />
      <Process />
      <Testimonials />
      <CTABanner />
    </>
  )
}
