import React from 'react'
import logoUrl from '../assets/logo.js'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ChevronRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  'Blinds',
  'Curtains',
  'Wallpapers',
  'Window Tinting',
  'Monkey Screens',
  'Blind Repairs',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <ScrollReveal className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/40 group-hover:border-gold transition-colors duration-300">
                <img src={logoUrl} alt="Pandora Box Interiors" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-display font-semibold text-base">Pandora Box</p>
                <p className="text-gold text-[10px] tracking-[0.2em] uppercase">Interiors</p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium interior solutions crafted with precision, passion and an unwavering commitment to quality. Transforming spaces across South Africa since our founding.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-300"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-300"
              >
                <Instagram size={15} />
              </a>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.1}>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-white/50 hover:text-gold text-sm transition-colors duration-300 group"
                  >
                    <ChevronRight size={14} className="text-gold/40 group-hover:text-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal delay={0.2}>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-white/50 hover:text-gold text-sm transition-colors duration-300 group"
                  >
                    <ChevronRight size={14} className="text-gold/40 group-hover:text-gold transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.3}>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors duration-300 group">
                  <MapPin size={16} className="mt-0.5 text-gold flex-shrink-0" />
                  <span>Durban, KwaZulu-Natal<br />South Africa</span>
                </a>
              </li>
              <li>
                <a href="tel:+27000000000" className="flex items-center gap-3 text-white/50 hover:text-gold text-sm transition-colors duration-300">
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  +27 (0) 00 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:info@pandoraboxinteriors.co.za" className="flex items-center gap-3 text-white/50 hover:text-gold text-sm transition-colors duration-300">
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  info@pandoraboxinteriors.co.za
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <Clock size={16} className="mt-0.5 text-gold flex-shrink-0" />
                  <div>
                    <p>Mon – Fri: 8:00 – 17:00</p>
                    <p>Sat: 8:00 – 13:00</p>
                  </div>
                </div>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {year} Pandora Box Interiors. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Premium Interior Solutions | South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
