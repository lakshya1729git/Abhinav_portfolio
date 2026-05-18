import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const location = useLocation()

  // Handle scroll effect with glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (id) => {
    setIsOpen(false)
    
    // If not on home page, navigate home first
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }

    // Scroll to element
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { name: 'Home', onClick: () => {
      setIsOpen(false)
      if (location.pathname !== '/') {
        window.location.href = '/'
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }},
    { name: 'About Me', onClick: () => handleSmoothScroll('about') },
    { name: 'Projects', onClick: () => {
      setIsOpen(false)
      window.location.href = '/projects'
    }},
    { name: 'Contact Me', onClick: () => handleSmoothScroll('contact') },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
      } 
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, y: -20 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' } 
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
    }),
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <>
      {/* Premium Glassmorphism Navbar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'navbar-glass-scrolled'
            : 'navbar-glass-top'
        }`}
      >
        {/* Glass background layer with inner glow effect */}
        <div className="absolute inset-0 -z-10 navbar-glass-background" />
        
        {/* Subtle top reflection/glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cinematic-accent/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 sm:py-5">
          {/* Logo with SVG */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="h-10 sm:h-12 cursor-pointer relative group flex items-center"
            >
              <img 
                src="/logo/Abhinav_logo.svg" 
                alt="Abhinav Logo" 
                className="h-full w-auto object-contain"
              />
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cinematic-accent via-cinematic-light to-cinematic-accent opacity-0 group-hover:opacity-40 blur-lg -z-10 rounded-lg"
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex gap-1 sm:gap-2 lg:gap-8 px-4 py-2 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                onHoverStart={() => setHoveredItem(i)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <motion.button
                  onClick={item.onClick}
                  className="relative px-4 py-2 text-sm lg:text-base font-medium text-cinematic-light bg-transparent border-0 cursor-pointer group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background hover effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-cinematic-accent/20 to-cinematic-light/10 opacity-0"
                    animate={{
                      opacity: hoveredItem === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Text */}
                  <span className="relative z-10 group-hover:text-cinematic-accent transition-colors duration-300">
                    {item.name}
                  </span>

                  {/* Animated underline with glow */}
                  <motion.span
                    className="absolute bottom-1 left-0 h-0.5 bg-gradient-to-r from-cinematic-accent via-cinematic-light to-cinematic-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredItem === i ? '100%' : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute -inset-2 rounded-lg bg-gradient-to-r from-cinematic-accent/30 to-cinematic-light/20 blur-md opacity-0 -z-10"
                    animate={{
                      opacity: hoveredItem === i ? 0.5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative text-cinematic-light hover:text-cinematic-accent transition-colors p-2"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          variants={mobileMenuVariants}
          className="md:hidden navbar-glass-mobile backdrop-blur-lg"
        >
          <motion.div 
            className="flex flex-col gap-2 px-4 py-4 space-y-1"
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.name}
                custom={i}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                variants={linkVariants}
                onClick={item.onClick}
                className="relative px-4 py-3 text-cinematic-light hover:text-cinematic-accent text-left bg-transparent border-0 cursor-pointer transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-cinematic-accent/20 hover:to-cinematic-light/10 group"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 group-hover:text-cinematic-accent">
                  {item.name}
                </span>
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-cinematic-accent to-cinematic-light rounded-full"
                  animate={{ height: isOpen && hoveredItem === i ? 24 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Top glow line indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cinematic-accent/50 to-transparent z-40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </>
  )
}
