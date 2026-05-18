import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, Box, Sparkles, Rocket, Sun, Layers, Package, Zap, Wand2, LayoutGrid, Palette, Film } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const skillsCarouselRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const skillsCarouselData = [
    { title: 'Blender', Icon: Box, description: 'Professional 3D modeling, rendering, and animation' },
    { title: 'Motion Graphics', Icon: Sparkles, description: 'Dynamic animations and cinematic motion design' },
    { title: 'Unreal Engine', Icon: Rocket, description: 'Real-time rendering and interactive visualization' },
    { title: 'Rendering', Icon: Sun, description: 'Advanced lighting, materials, and cinematic output' },
    { title: 'Adobe Suite', Icon: Layers, description: 'After Effects, Premiere Pro, and creative tools' },
    { title: 'Product Viz', Icon: Package, description: 'Product visualization and commercial rendering' },
    { title: 'Animation', Icon: Zap, description: 'Character animation and motion capture workflows' },
    { title: 'Cinematic VFX', Icon: Wand2, description: 'Visual effects and post-production expertise' },
    { title: 'Figma', Icon: LayoutGrid, description: 'UI/UX design and collaborative prototyping' },
    { title: 'UI/UX', Icon: Palette, description: 'Premium user interface and experience design' },
    { title: 'Video Editing', Icon: Film, description: 'Post-production and video composition' },
    { title: 'VFX Compositing', Icon: Sparkles, description: 'Complex compositing and effects integration' },
  ]

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skillsCarouselData.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, skillsCarouselData.length])

  return (
    <div className="min-h-screen bg-cinematic-900">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section - Premium 2-Column Layout */}
      <section id="about" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cinematic-900 to-cinematic-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Section Title */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cinematic-accent to-cinematic-light bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cinematic-accent to-cinematic-light rounded-full" />
            </motion.div>

            {/* 2-Column Layout: Photo + Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Photo with Glass Frame */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  {/* Glass Frame */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cinematic-accent/25 via-transparent to-cinematic-light/15 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-3xl overflow-hidden border border-cinematic-accent/40 backdrop-blur-lg p-1.5 group-hover:border-cinematic-accent/70 transition-all shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-cinematic-accent/15 to-transparent rounded-3xl" />
                    <img
                      src="/images/Abhinav_photo.png"
                      alt="Abhinav"
                      className="w-full max-w-md aspect-square object-cover rounded-2xl relative z-10"
                    />
                  </div>
                  {/* Glow on hover */}
                  <motion.div
                    className="absolute -inset-8 bg-gradient-to-r from-cinematic-accent/0 via-cinematic-accent/0 to-cinematic-light/0 rounded-3xl -z-10"
                    animate={{
                      opacity: [0, 0],
                    }}
                    whileHover={{
                      opacity: [0.4, 0.15],
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Right: Content + Experience */}
              <motion.div variants={itemVariants} className="flex flex-col justify-center">
                {/* Bio */}
                <h3 className="text-3xl md:text-4xl font-bold text-cinematic-light mb-6">
                  3D Artist & Motion Designer
                </h3>
                <p className="text-cinematic-light/90 text-lg leading-relaxed mb-4">
                  I'm a passionate 3D artist and motion graphics designer creating immersive visual experiences. With expertise in cutting-edge 3D modeling, animation, and creative design tools, I transform concepts into stunning cinematic visuals that captivate and inspire.
                </p>
                <p className="text-cinematic-light/80 text-lg leading-relaxed mb-10">
                  Specializing in character animation, visual effects, and brand storytelling, I combine technical precision with artistic vision to deliver premium content for film, advertising, and interactive media.
                </p>

                {/* Experience Cards */}
                <h4 className="text-xl font-semibold text-cinematic-accent mb-6">Professional Experience</h4>
                <div className="space-y-4">
                  {/* Experience 1 */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="glass-effect p-6 rounded-lg border border-cinematic-accent/20 hover:border-cinematic-accent/50 transition-all cursor-pointer group backdrop-blur-md"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="text-lg font-semibold text-cinematic-light group-hover:text-cinematic-accent transition-colors">
                        Senior 3D Artist & Motion Graphics Designer
                      </h5>
                      <span className="text-sm text-cinematic-accent/70 whitespace-nowrap ml-4">1+ Year</span>
                    </div>
                    <p className="text-cinematic-light/70 mb-3 font-medium">Neetara Production</p>
                    <p className="text-cinematic-light/60 text-sm leading-relaxed">Worked on cinematic music visuals, motion graphics, VFX-based edits, product visualization, and 3D creative assets for music content published through T-Series Rajasthan and digital platforms.</p>
                  </motion.div>

                  {/* Experience 2 */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="glass-effect p-6 rounded-lg border border-cinematic-accent/20 hover:border-cinematic-accent/50 transition-all cursor-pointer group backdrop-blur-md"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="text-lg font-semibold text-cinematic-light group-hover:text-cinematic-accent transition-colors">
                        Freelance 3D Artist
                      </h5>
                      <span className="text-sm text-cinematic-accent/70 whitespace-nowrap ml-4">1–2 Years</span>
                    </div>
                    <p className="text-cinematic-light/70 mb-3 font-medium">Self-Employed</p>
                    <p className="text-cinematic-light/60 text-sm leading-relaxed">Worked on freelance 3D visualization projects, environment design concepts, branding visuals, architectural renders, and contributed to the IIC RTU internship website project and other creative client works.</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Premium Overlapping Carousel */}
      <section id="skills" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cinematic-800 via-cinematic-900 to-cinematic-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Section Title */}
            <motion.div variants={itemVariants} className="mb-20 text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cinematic-accent to-cinematic-light bg-clip-text text-transparent">
                  Skills & Expertise
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cinematic-accent to-cinematic-light rounded-full mx-auto" />
            </motion.div>

            {/* Premium Overlapping Carousel */}
            <motion.div
              ref={skillsCarouselRef}
              className="relative py-12"
              variants={itemVariants}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Container - Overlapping Layout */}
              <div className="flex justify-center items-center min-h-96 perspective">
                {skillsCarouselData.map((skill, index) => {
                  const isCenter = index === activeSkillIndex
                  const distance = Math.abs(index - activeSkillIndex)
                  const isAdjacent = distance === 1 || (activeSkillIndex === 0 && index === skillsCarouselData.length - 1) || (activeSkillIndex === skillsCarouselData.length - 1 && index === 0)
                  
                  // Calculate position for overlapping effect
                  let xOffset = 0
                  let zIndex = 10
                  if (index < activeSkillIndex) {
                    xOffset = -100 - distance * 30
                    zIndex = 5 - distance
                  } else if (index > activeSkillIndex) {
                    xOffset = 100 + distance * 30
                    zIndex = 5 - distance
                  }

                  return (
                    <motion.div
                      key={index}
                      className="absolute w-72"
                      animate={{
                        x: xOffset,
                        opacity: isCenter ? 1 : isAdjacent ? 0.65 : 0.3,
                        scale: isCenter ? 1 : isAdjacent ? 0.85 : 0.7,
                        zIndex: isCenter ? zIndex + 10 : zIndex,
                        filter: isCenter ? 'blur(0px)' : isAdjacent ? 'blur(0px)' : 'blur(2px)',
                      }}
                      transition={{
                        duration: 0.05,
                        ease: [0.32, 0.72, 0, 1],
                      }}
                    >
                      {/* Card */}
                      <motion.div
                        onClick={() => {
                          setActiveSkillIndex(index)
                          setIsPaused(false)
                        }}
                        className={`relative h-80 rounded-3xl border backdrop-blur-xl p-8 flex flex-col justify-between cursor-pointer transition-all overflow-hidden group ${
                          isCenter
                            ? 'border-cinematic-accent/70 glass-effect shadow-2xl'
                            : 'border-cinematic-accent/20 glass-effect hover:border-cinematic-accent/50'
                        }`}
                        whileHover={{
                          y: isCenter ? -8 : -4,
                          borderColor: isCenter ? 'rgba(107, 182, 217, 0.9)' : 'rgba(107, 182, 217, 0.6)',
                        }}
                      >
                        {/* Animated Gradient Background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-cinematic-accent/15 via-transparent to-cinematic-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                          animate={isCenter ? { opacity: 0.2 } : { opacity: 0 }}
                        />

                        {/* Glow Effect */}
                        <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-r from-cinematic-accent/20 via-cinematic-light/10 to-cinematic-accent/20 rounded-3xl -z-20 blur-lg opacity-0"
                          animate={isCenter ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0 }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Icon Section */}
                        <motion.div
                          className="mb-6"
                          animate={isCenter ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                          transition={{
                            duration: 2,
                            repeat: isCenter ? Infinity : 0,
                            repeatDelay: 1.5,
                          }}
                        >
                          <motion.div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 ${
                              isCenter
                                ? 'bg-gradient-to-br from-cinematic-accent/30 to-cinematic-light/15'
                                : 'bg-gradient-to-br from-cinematic-accent/20 to-cinematic-light/10'
                            }`}
                            whileHover={{ scale: 1.12 }}
                          >
                            <skill.Icon
                              size={32}
                              className={`transition-colors ${
                                isCenter
                                  ? 'text-cinematic-accent'
                                  : 'text-cinematic-light group-hover:text-cinematic-accent'
                              }`}
                              strokeWidth={1.5}
                            />
                          </motion.div>
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                          className={`text-2xl font-bold mb-3 transition-colors ${
                            isCenter
                              ? 'text-cinematic-accent'
                              : 'text-cinematic-light group-hover:text-cinematic-accent'
                          }`}
                          animate={isCenter ? { y: [0, -2, 0] } : { y: 0 }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
                        >
                          {skill.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          className="text-cinematic-light/70 text-sm leading-relaxed"
                          animate={isCenter ? { opacity: 1 } : { opacity: 0.6 }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.description}
                        </motion.p>

                        {/* Active Indicator - Animated Pulse */}
                        {isCenter && (
                          <motion.div
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cinematic-accent rounded-full"
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [1, 0.3, 1],
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                          />
                        )}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Navigation Dots - Refined */}
              <div className="flex justify-center gap-2 mt-24">
                {skillsCarouselData.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setActiveSkillIndex(index)
                      setIsPaused(false)
                    }}
                    className={`rounded-full transition-all ${
                      index === activeSkillIndex
                        ? 'w-8 h-2.5 bg-gradient-to-r from-cinematic-accent to-cinematic-light shadow-lg shadow-cinematic-accent/50'
                        : 'w-2.5 h-2.5 bg-cinematic-accent/30 hover:bg-cinematic-accent/60'
                    }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    animate={index === activeSkillIndex ? { boxShadow: ['0 0 0px rgba(107, 182, 217, 0)', '0 0 20px rgba(107, 182, 217, 0.8)', '0 0 0px rgba(107, 182, 217, 0)'] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                ))}
              </div>

              {/* Auto-play Indicator */}
              {isPaused && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 right-0 text-cinematic-accent/60 text-xs font-semibold tracking-widest uppercase"
                >
                  Paused
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section - Premium with Lucide Icons */}
      <section id="contact" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cinematic-800 to-cinematic-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Section Title */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cinematic-accent to-cinematic-light bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p className="text-cinematic-light/70 text-xl mb-8">
                Have a project in mind or want to collaborate? Let's create something amazing together.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-cinematic-accent to-cinematic-light rounded-full" />
            </motion.div>

            {/* 2-Column Layout: Info + Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Contact Info with Lucide Icons */}
              <motion.div variants={itemVariants} className="flex flex-col justify-start space-y-6">
                {/* Email Card */}
                <motion.a
                  href="mailto:cgabhinav19@gmail.com"
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="glass-effect p-8 rounded-lg border border-cinematic-accent/20 hover:border-cinematic-accent/50 transition-all group backdrop-blur-md"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-cinematic-accent flex-shrink-0 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 10 }}
                    >
                      <Mail size={32} strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-cinematic-light mb-2">Email</h4>
                      <p className="text-cinematic-accent hover:text-cinematic-light transition-colors">
                        cgabhinav19@gmail.com
                      </p>
                    </div>
                  </div>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  href="tel:+919001057405"
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="glass-effect p-8 rounded-lg border border-cinematic-accent/20 hover:border-cinematic-accent/50 transition-all group backdrop-blur-md"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-cinematic-accent flex-shrink-0 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: -10 }}
                    >
                      <Phone size={32} strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-cinematic-light mb-2">Phone</h4>
                      <p className="text-cinematic-accent hover:text-cinematic-light transition-colors">
                        +91 9001057405
                      </p>
                    </div>
                  </div>
                </motion.a>

                {/* Location Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="glass-effect p-8 rounded-lg border border-cinematic-accent/20 hover:border-cinematic-accent/50 transition-all group backdrop-blur-md"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-cinematic-accent flex-shrink-0 group-hover:scale-110 transition-transform"
                      whileHover={{ y: -4 }}
                    >
                      <MapPin size={32} strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-cinematic-light mb-2">Location</h4>
                      <p className="text-cinematic-light/70">Jaipur, India</p>
                      <p className="text-cinematic-light/60 text-sm mt-1">Available for Remote & On-site</p>
                    </div>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="glass-effect p-8 rounded-lg border border-cinematic-accent/20 hover:border-cinematic-accent/50 transition-all group backdrop-blur-md"
                >
                  <h4 className="text-lg font-semibold text-cinematic-light mb-6">Connect With Me</h4>
                  <div className="flex gap-5">
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-cinematic-accent hover:text-cinematic-light transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={28} strokeWidth={1.5} />
                    </motion.a>
                    <motion.a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-cinematic-accent hover:text-cinematic-light transition-colors"
                      title="Instagram"
                    >
                      <Instagram size={28} strokeWidth={1.5} />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/919001057405"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-cinematic-accent hover:text-cinematic-light transition-colors"
                      title="WhatsApp"
                    >
                      <MessageCircle size={28} strokeWidth={1.5} />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div variants={itemVariants} className="glass-effect p-8 rounded-lg border border-cinematic-accent/30 backdrop-blur-md">
                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-cinematic-light font-medium mb-3">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-cinematic-900/50 border border-cinematic-accent/30 rounded-lg text-cinematic-light placeholder-cinematic-light/40 focus:outline-none focus:border-cinematic-accent/70 focus:ring-1 focus:ring-cinematic-accent/30 transition-all backdrop-blur-sm"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-cinematic-light font-medium mb-3">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-cinematic-900/50 border border-cinematic-accent/30 rounded-lg text-cinematic-light placeholder-cinematic-light/40 focus:outline-none focus:border-cinematic-accent/70 focus:ring-1 focus:ring-cinematic-accent/30 transition-all backdrop-blur-sm"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-cinematic-light font-medium mb-3">Subject</label>
                    <input
                      type="text"
                      placeholder="Project collaboration"
                      className="w-full px-4 py-3 bg-cinematic-900/50 border border-cinematic-accent/30 rounded-lg text-cinematic-light placeholder-cinematic-light/40 focus:outline-none focus:border-cinematic-accent/70 focus:ring-1 focus:ring-cinematic-accent/30 transition-all backdrop-blur-sm"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-cinematic-light font-medium mb-3">Message</label>
                    <textarea
                      placeholder="Tell me about your project..."
                      rows="5"
                      className="w-full px-4 py-3 bg-cinematic-900/50 border border-cinematic-accent/30 rounded-lg text-cinematic-light placeholder-cinematic-light/40 focus:outline-none focus:border-cinematic-accent/70 focus:ring-1 focus:ring-cinematic-accent/30 transition-all backdrop-blur-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cinematic-accent to-cinematic-light text-cinematic-900 font-semibold rounded-lg hover:shadow-glow transition-all"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
