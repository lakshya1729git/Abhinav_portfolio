import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  // Scroll indicator animation
  useEffect(() => {
    const observer = new MutationObserver(() => {})
    observer.observe(document.body, { characterData: true })
    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.5,
      scale: 1,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-900/60 via-cinematic-900/40 to-cinematic-900/60" />
        
        {/* Glow Effects */}
        <motion.div
          variants={glowVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-cinematic-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          variants={glowVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cinematic-accent/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content - Minimal with focus on video */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        {/* Small Cinematic Caption */}
        <motion.div
          variants={itemVariants}
          className="mb-auto mt-32"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(109, 182, 217, 0.2)',
                '0 0 40px rgba(109, 182, 217, 0.4)',
                '0 0 20px rgba(109, 182, 217, 0.2)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block px-6 py-3 border border-cinematic-accent/40 rounded-full text-cinematic-accent text-sm font-light tracking-widest"
          >
            Premium Digital Craftsmanship
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Cinematic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="scroll-indicator flex flex-col items-center gap-3 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <p className="text-cinematic-accent text-xs font-light tracking-widest opacity-80">SCROLL TO DISCOVER</p>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="text-cinematic-accent" size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Subtle Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cinematic-light/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 0.6, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  )
}
