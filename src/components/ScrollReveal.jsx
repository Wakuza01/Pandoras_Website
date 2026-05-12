import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Wraps children with a scroll-triggered reveal animation.
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {object} [props.variants] - Framer Motion variants
 * @param {string} [props.className]
 * @param {number} [props.delay]
 * @param {number} [props.threshold] - Intersection ratio to trigger (0–1)
 */
export default function ScrollReveal({
  children,
  variants,
  className = '',
  delay = 0,
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  const defaultVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants || defaultVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
