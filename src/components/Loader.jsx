import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ isLoading, onLoadComplete }) {
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    // Simulate content loading with a minimum display time for cinematic effect
    const loadingTimer = setTimeout(() => {
      if (videoReady) {
        onLoadComplete()
      }
    }, 3500) // Extended to 3.5 seconds for premium cinematic feel

    return () => clearTimeout(loadingTimer)
  }, [videoReady, onLoadComplete])

  const loaderVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
  }

  const videoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.8, ease: 'easeOut' },
    },
  }

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 0.4,
      scale: 1,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      initial="visible"
      animate={isLoading ? 'visible' : 'exit'}
      variants={loaderVariants}
      className="fixed inset-0 z-[9999] bg-cinematic-900 flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Premium dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinematic-900 via-cinematic-800 to-cinematic-900" />

      {/* Subtle glow effects */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cinematic-accent/15 rounded-full blur-3xl"
      />
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cinematic-accent/10 rounded-full blur-3xl"
      />

      {/* Loading animation video */}
      <motion.div
        variants={videoContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center justify-center w-full h-full"
      >
        <div className="w-full h-full flex items-center justify-center">
          <video
            autoPlay
            muted
            playsInline
            loop
            onCanPlayThrough={() => setVideoReady(true)}
            className="max-w-2xl max-h-2xl w-auto h-auto object-contain"
          >
            <source src="/videos/Buffer_animation.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Subtle top and bottom gradients for depth */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-cinematic-900/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-cinematic-900/50 to-transparent pointer-events-none" />

      {/* Cinematic shine effect (optional premium touch) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cinematic-light/5 to-transparent pointer-events-none"
        animate={{
          x: ['0%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.div>
  )
}
