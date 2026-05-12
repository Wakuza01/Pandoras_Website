import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Reusable service card component with hover animations.
 */
export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`} />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white font-display font-semibold text-xl">{service.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <p className="text-navy-700/80 text-sm leading-relaxed mb-5 flex-1">
          {service.shortDesc}
        </p>

        <Link
          to="/services"
          className="flex items-center gap-2 text-gold font-semibold text-sm group/link w-fit"
        >
          <span>Learn More</span>
          <motion.span
            className="inline-flex"
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
          </motion.span>
        </Link>
      </div>

      {/* Gold accent border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  )
}
