import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Award, Heart, Target, Eye } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

// ─── PAGE HERO ───────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85"
          alt="Interior design studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/70 to-navy-900/40" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pb-20 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-label"
        >
          Our Story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="heading-xl text-white max-w-2xl"
        >
          Crafting Beautiful Spaces with Passion
        </motion.h1>
      </div>
    </section>
  )
}

// ─── INTRO ───────────────────────────────────────────────────────────────────
function AboutIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                  alt="Our team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card-hover hidden md:block"
              >
                <p className="text-4xl font-display font-bold text-gold">12+</p>
                <p className="text-navy-700/70 text-sm font-medium">Years of Excellence</p>
              </motion.div>
              <div className="absolute top-6 -left-6 w-24 h-24 rounded-2xl bg-gold/10 hidden md:block" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="section-label">Who We Are</p>
            <h2 className="heading-md text-navy-900 mb-6">
              Pandora Box Interiors — Where Vision Meets Craftsmanship
            </h2>
            <p className="text-navy-700/70 leading-relaxed mb-5">
              Pandora Box Interiors is a South African interior solutions company specialising in blinds, curtains, wallpapers, window tinting, monkey screens, upholstery, custom couches, and interior décor enhancements.
            </p>
            <p className="text-navy-700/70 leading-relaxed mb-5">
              We are committed to delivering stylish, practical, and high-quality interior solutions tailored to both residential and commercial environments. Our focus is on combining functionality, comfort, and modern aesthetics to transform every space into something exceptional.
            </p>
            <p className="text-navy-700/70 leading-relaxed mb-8">
              With a passion for workmanship and customer satisfaction, Pandora Box Interiors provides professional installations, premium materials, and reliable after-sales service to ensure long-lasting quality and customer confidence.
            </p>
            <div className="space-y-3 mb-8">
              {[
                'Premium quality materials carefully selected',
                'Professional installations with precision and care',
                'Reliable after-sales support and maintenance',
                'Residential and commercial expertise',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700/80 text-sm">{point}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary">
              Book a Consultation <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── MISSION & VISION ────────────────────────────────────────────────────────
function MissionVision() {
  const cards = [
    {
      icon: Target,
      title: 'Our Mission',
      text: 'To provide stylish, affordable, and high-quality interior solutions that enhance comfort, privacy, and elegance for every client.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      text: 'To become one of South Africa\'s leading interior improvement and décor solution providers known for quality workmanship, innovation, and customer satisfaction.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      text: 'Professionalism, Quality Workmanship, Reliability, Customer Satisfaction, Integrity, Attention to Detail, Innovation and Excellence — these are the principles that guide everything we do.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-xl">
        <ScrollReveal className="text-center mb-14">
          <p className="section-label">What Drives Us</p>
          <h2 className="heading-lg text-navy-900 mb-4">Mission, Vision & Values</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-400 border border-gray-100 hover:border-gold/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-navy-900 group-hover:bg-gold transition-colors duration-300 flex items-center justify-center mb-6">
                <c.icon size={24} className="text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="heading-md text-navy-900 mb-4">{c.title}</h3>
              <p className="text-navy-700/65 leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TIMELINE ────────────────────────────────────────────────────────────────
const milestones = [
  { year: '2012', title: 'Company Founded', desc: 'Pandora Box Interiors was established with a small but dedicated team of window treatment specialists.' },
  { year: '2015', title: 'Service Expansion', desc: 'We expanded our offerings to include wallpapers and professional window tinting, tripling our client base.' },
  { year: '2018', title: 'Commercial Division', desc: 'We launched a dedicated commercial division serving offices, hotels, and retail spaces across KwaZulu-Natal.' },
  { year: '2021', title: '1,000 Projects', desc: 'A landmark milestone — our 1,000th completed project, a full-home transformation in Sandton.' },
  { year: '2024', title: 'Smart Blinds Launch', desc: 'We introduced our motorised and smart-home compatible blind range, leading the local market in innovation.' },
]

function Timeline() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 opacity-50" />
      <div className="container-xl relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="section-label">Our Journey</p>
          <h2 className="heading-lg text-white mb-4">A Decade of Excellence</h2>
          <p className="text-white/40 max-w-lg mx-auto">
            From humble beginnings to becoming a leading interior solutions brand — every year has been defined by growth, learning, and an unwavering commitment to our craft.
          </p>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row pl-20 md:pl-0`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-gold border-4 border-navy-950 z-10" />

              {/* Content */}
              <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className="text-gold font-bold text-2xl font-display">{m.year}</span>
                <h3 className="text-white font-semibold text-lg mt-1 mb-2">{m.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── QUALITY GUARANTEE ───────────────────────────────────────────────────────
function QualityGuarantee() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <p className="section-label">Our Commitment</p>
            <h2 className="heading-lg text-navy-900 mb-6">
              Your Satisfaction is Our Guarantee
            </h2>
            <p className="text-navy-700/70 leading-relaxed mb-4">
              At Pandora Box Interiors, quality workmanship is at the heart of everything we do. We carefully select materials and ensure that every installation and project is completed with precision, professionalism, and attention to detail.
            </p>
            <p className="text-navy-700/70 leading-relaxed mb-6">
              Our relationship with clients continues long after installation. We pride ourselves on dependable after-sales support and maintenance services to ensure lasting customer satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: 'Product Warranty', value: '2–5 Years' },
                { label: 'Workmanship Guarantee', value: '12 Months' },
                { label: 'Response Time', value: 'Within 48 hrs' },
                { label: 'Client Satisfaction', value: '98%' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="text-gold font-display font-bold text-2xl">{item.value}</p>
                  <p className="text-navy-700/60 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Quality craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 w-24 h-24 rounded-2xl bg-gold flex items-center justify-center shadow-gold">
                <Award size={36} className="text-white" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function AboutCTA() {
  return (
    <section className="section-padding bg-navy-900 text-center">
      <div className="container-xl">
        <ScrollReveal>
          <p className="section-label">Work With Us</p>
          <h2 className="heading-lg text-white mb-6 max-w-xl mx-auto">
            Ready to Experience the Pandora Box Difference?
          </h2>
          <p className="text-white/50 max-w-lg mx-auto mb-10">
            Let us show you why hundreds of South African homeowners and businesses choose us for their interior solutions. Begin with a complimentary consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book a Free Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-outline">
              View Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
export default function About() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <MissionVision />
      <Timeline />
      <QualityGuarantee />
      <AboutCTA />
    </>
  )
}
