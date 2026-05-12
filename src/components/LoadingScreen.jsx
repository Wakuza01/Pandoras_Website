import React from 'react'
import { motion } from 'framer-motion'
import logoUrl from '../assets/logo.js'

export default function LoadingScreen() {
  return (
    <motion.div
      key="loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-950"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full border border-gold/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full border border-gold/5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo mark */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/40 shadow-gold">
            <img
              src={logoUrl}
              alt="Pandora Box Interiors"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gold font-display text-xl font-medium tracking-wider">
              Pandora Box Interiors
            </p>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mt-1">
              Premium Interior Solutions
            </p>
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-gold/60 via-gold to-gold/60 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}
