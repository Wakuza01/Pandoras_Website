import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { services } from '../data/services'
import ScrollReveal from '../components/ScrollReveal'

// ─── HERO ────────────────────────────────────────────────────────────────────
function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://vawdasinteriors.co.za/wp-content/uploads/2022/06/wave-3.jpg"
          alt="Interior services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-navy-800/30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pb-20 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-label"
        >
          What We Do Best
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="heading-xl text-white max-w-2xl"
        >
          Premium Interior Solutions, Expertly Delivered
        </motion.h1>
      </div>
    </section>
  )
}

// ─── INTRO STRIP ─────────────────────────────────────────────────────────────
function ServicesIntro() {
  return (
    <section className="bg-white py-16">
      <div className="container-xl px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-navy-700/70 text-lg leading-relaxed">
              At Pandora Box Interiors, we specialise in six core services — each delivered with the same obsessive attention to detail, premium materials, and expert craftsmanship that has made us the trusted choice for homeowners, interior designers, and commercial clients across South Africa.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── INDIVIDUAL SERVICE SECTIONS ─────────────────────────────────────────────
function ServiceSection({ service, index }) {
  const isEven = index % 2 === 0

  return (
    <section
      id={service.id}
      className={`section-padding ${isEven ? 'bg-gray-50' : 'bg-white'}`}
    >
      <div className="container-xl">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>
          {/* Image */}
          <ScrollReveal className={!isEven ? 'lg:order-2' : ''}>
            <div className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 rounded-3xl`} />
              </div>
              {/* Service number */}
              <div className="absolute -top-5 -left-5 w-14 h-14 rounded-2xl bg-gold flex items-center justify-center shadow-gold text-white font-bold font-display text-lg">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.15} className={!isEven ? 'lg:order-1' : ''}>
            <p className="section-label">{`Service 0${index + 1}`}</p>
            <h2 className="heading-md text-navy-900 mb-5">{service.title}</h2>
            <p className="text-navy-700/70 leading-relaxed mb-8">{service.description}</p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-gold" />
                  </div>
                  <span className="text-navy-700/80 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-primary">
              Enquire About {service.title} <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function ServicesCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85"
          alt="Luxury interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <ScrollReveal>
          <p className="section-label mb-4">Ready to Get Started?</p>
          <h2 className="heading-lg text-white mb-6 max-w-2xl mx-auto">
            Not Sure Which Service Suits Your Space?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 text-lg">
            Our consultants will assess your space and recommend the perfect solution for your lifestyle, aesthetic, and budget — completely free of charge.
          </p>
          <Link to="/contact" className="btn-primary">
            Book a Free Consultation <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── SERVICES PAGE ───────────────────────────────────────────────────────────
export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      {services.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}
      <ServicesCTA />
    </>
  )
}
