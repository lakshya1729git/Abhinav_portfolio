import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  // Project data with real video and image projects - asymmetrical cinematic layout
  const projectsData = [
    {
      title: 'Cinematic Intro',
      category: 'Motion Graphics',
      type: 'video',
      src: '/videos/Hero.mp4',
      size: 'large',
    },
    {
      title: 'Monkey Statue Animation',
      category: '3D Animation',
      type: 'video',
      src: '/videos/Monkey_statue.mp4',
      size: 'small',
    },
    {
      title: 'Luxury Water Reveal',
      category: 'Product Motion',
      type: 'video',
      src: '/videos/Hero1.mp4',
      size: 'medium',
    },
    {
      title: 'Interior Architecture Visualization',
      category: 'Visualization',
      type: 'image',
      src: '/images/room_architecture.png',
      size: 'large',
    },
    {
      title: 'Footwear Product Visualization',
      category: 'Product Viz',
      type: 'video',
      src: '/videos/Footwear_Showroom.mp4',
      size: 'large',
    },
    {
      title: 'Rabbit Brand Motion Visual',
      category: 'Branding',
      type: 'video',
      src: '/videos/rabbit_brand.mp4',
      size: 'medium',
    },
    {
      title: 'Room Infrastructure Design',
      category: '3D Design',
      type: 'image',
      src: '/images/Room_infra.png',
      size: 'small',
    },
    {
      title: 'Eyewear Product Showcase',
      category: 'Product Motion',
      type: 'video',
      src: '/videos/lenses.mp4',
      size: 'medium',
    },
    {
      title: 'Defender Automotive Render',
      category: 'Automotive Viz',
      type: 'video',
      src: '/videos/defender_still.mp4',
      size: 'small',
    },
    {
      title: 'Mercedes Cinematic Render',
      category: 'Automotive Viz',
      type: 'video',
      src: '/videos/mursedes_stills.mp4',
      size: 'small',
    },
    {
      title: 'Interior Mood Design',
      category: 'Design Concept',
      type: 'image',
      src: '/images/room_design.png',
      size: 'small',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cinematic-900 via-cinematic-800 to-cinematic-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Premium Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={titleVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cinematic-accent to-cinematic-light bg-clip-text text-transparent">
                Creative Portfolio
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cinematic-accent to-cinematic-light rounded-full mx-auto" />
          </motion.div>

          <motion.p
            variants={titleVariants}
            className="text-cinematic-light/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore a curated collection of cinematic works, 3D art, motion graphics, and premium visual experiences
          </motion.p>
        </motion.div>

        {/* Asymmetrical Grid Layout - Premium Masonry Style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-6 md:gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More on Instagram - Premium Glass Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-20 md:mt-32"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative glass-effect px-8 md:px-12 py-4 md:py-5 rounded-2xl border border-cinematic-accent/40 hover:border-cinematic-accent/70 transition-all overflow-hidden"
          >
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cinematic-accent/20 via-transparent to-cinematic-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Glow Aura */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-cinematic-accent/30 to-cinematic-light/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-20"
            />

            {/* Button Content */}
            <div className="relative flex items-center gap-3 md:gap-4">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Instagram size={20} className="text-cinematic-accent group-hover:text-cinematic-light transition-colors" />
              </motion.div>
              <span className="text-lg md:text-xl font-semibold bg-gradient-to-r from-cinematic-accent to-cinematic-light bg-clip-text text-transparent group-hover:from-cinematic-light group-hover:to-cinematic-accent transition-all">
                View More on Instagram
              </span>
            </div>

            {/* Border Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              animate={
                {
                  boxShadow: [
                    'inset 0 0 20px rgba(107, 182, 217, 0.3), 0 0 30px rgba(107, 182, 217, 0.2)',
                    'inset 0 0 40px rgba(107, 182, 217, 0.5), 0 0 50px rgba(107, 182, 217, 0.4)',
                    'inset 0 0 20px rgba(107, 182, 217, 0.3), 0 0 30px rgba(107, 182, 217, 0.2)',
                  ],
                }
              }
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 md:mt-32 h-px bg-gradient-to-r from-transparent via-cinematic-accent/40 to-transparent origin-center"
        />
      </div>
    </div>
  )
}
