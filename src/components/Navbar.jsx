import React, { useState, useEffect } from 'react'
import logoUrl from '../assets/logo.js'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.header
        initial={false}
        animate={scrolled ? 'solid' : 'transparent'}
        variants={{
          transparent: {
            backgroundColor: 'rgba(6,15,34,0)',
            borderBottomColor: 'rgba(255,255,255,0)',
            boxShadow: '0 0 0 rgba(0,0,0,0)',
          },
          solid: {
            backgroundColor: 'rgba(6,15,34,0.95)',
            borderBottomColor: 'rgba(255,255,255,0.08)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
          },
        }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm"
        style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-gold/40 group-hover:border-gold transition-colors duration-300 flex-shrink-0">
                <img
                  src={logoUrl}
                  alt="Pandora Box Interiors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-display font-semibold text-base tracking-wide">
                  Pandora Box
                </span>
                <span className="text-gold text-[10px] font-medium tracking-[0.2em] uppercase">
                  Interiors
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} label={link.label} />
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+27817190823"
                className="hidden lg:flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-300 text-sm"
              >
                <Phone size={15} />
                <span>Call Us</span>
              </a>
              <Link
                to="/contact"
                className="hidden md:inline-flex btn-primary text-sm px-6 py-2.5"
              >
                Get a Quote
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden text-white p-1.5 hover:text-gold transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-navy-950 flex flex-col"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/40">
                  <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-white font-display font-semibold">Pandora Box</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-gold transition-colors p-1.5"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-10 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.15, duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-4xl font-display font-medium py-3 transition-colors duration-300 border-b border-white/5 ${
                      location.pathname === link.to ? 'text-gold' : 'text-white hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Get a Free Quote
                </Link>
              </motion.div>
            </nav>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-10 pb-10 text-white/30 text-sm"
            >
              <a href="tel:+27817190823" className="hover:text-gold transition-colors">
                +27 (0) 00 000 0000
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ to, label }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className="relative group text-sm font-medium transition-colors duration-300"
    >
      <span className={isActive ? 'text-gold' : 'text-white/80 group-hover:text-white'}>
        {label}
      </span>
      <motion.span
        initial={false}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold origin-left"
      />
      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Link>
  )
}
