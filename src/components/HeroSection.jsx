import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) * 0.05
      const moveY = (clientY - window.innerHeight / 2) * 0.05

      setMousePosition({ x: moveX, y: moveY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll indicator animation
  useEffect(() => {
    gsap.to('.scroll-indicator', {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
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

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        {/* Main Heading with Parallax */}
        <motion.div
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          variants={itemVariants}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cinematic-accent via-cinematic-light to-cinematic-accent bg-clip-text text-transparent">
              Abhinav Sharma
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          variants={itemVariants}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-cinematic-light/80 font-light tracking-widest">
            3D Artist • UI/UX Designer • Motion Designer
          </p>
        </motion.div>

        {/* Animated glow text */}
        <motion.div
          variants={itemVariants}
          className="mt-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(109, 182, 217, 0.3)',
                '0 0 40px rgba(109, 182, 217, 0.5)',
                '0 0 20px rgba(109, 182, 217, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block px-6 py-2 border border-cinematic-accent/50 rounded-full text-cinematic-accent text-sm font-light"
          >
            Crafting Digital Excellence
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="scroll-indicator flex flex-col items-center gap-2 cursor-pointer"
          >
            <p className="text-cinematic-accent text-sm font-light">Scroll to explore</p>
            <ChevronDown className="text-cinematic-accent animate-bounce" size={24} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating particles effect (optional enhancement) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cinematic-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  )
}
