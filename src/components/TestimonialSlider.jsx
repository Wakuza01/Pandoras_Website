import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, paused])

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.35, ease: 'easeIn' } }),
  }

  const t = testimonials[current]

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="bg-white rounded-3xl p-8 md:p-12 shadow-card max-w-3xl mx-auto text-center"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} className="text-gold fill-gold" />
              ))}
            </div>

            {/* Quote */}
            <div className="relative mb-8">
              <span className="absolute -top-4 -left-2 text-7xl text-gold/10 font-display leading-none select-none">
                &ldquo;
              </span>
              <p className="text-navy-800 text-lg md:text-xl leading-relaxed font-light italic relative z-10">
                {t.text}
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center text-gold font-bold text-sm flex-shrink-0">
                {t.avatar}
              </div>
              <div className="text-left">
                <p className="font-semibold text-navy-900">{t.name}</p>
                <p className="text-navy-600/60 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-600 hover:border-gold hover:text-gold transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-navy-200 hover:bg-gold/50'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-600 hover:border-gold hover:text-gold transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
