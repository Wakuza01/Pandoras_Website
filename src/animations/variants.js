// Reusable Framer Motion animation variants

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export const imageReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
}

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
}

export const navbarVariants = {
  transparent: {
    backgroundColor: 'rgba(0,0,0,0)',
    backdropFilter: 'blur(0px)',
    borderColor: 'rgba(255,255,255,0)',
    boxShadow: '0 0 0 rgba(0,0,0,0)',
  },
  solid: {
    backgroundColor: 'rgba(6, 15, 34, 0.96)',
    backdropFilter: 'blur(20px)',
    borderColor: 'rgba(255,255,255,0.08)',
    boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
  },
}

export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
}

export const mobileMenuItemVariants = {
  closed: { opacity: 0, x: 30 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07 + 0.1, duration: 0.4, ease: 'easeOut' },
  }),
}
