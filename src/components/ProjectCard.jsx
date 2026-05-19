import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.1,
      },
    },
  }

  // Determine card grid span based on size variation
  const spanClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-2',
    large: 'col-span-1 md:col-span-2 md:row-span-2',
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`${spanClasses[project.size] || spanClasses.small}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card Container */}
      <motion.div
        className="relative h-full rounded-3xl overflow-hidden group cursor-pointer glass-effect border border-cinematic-accent/30 hover:border-cinematic-accent/60 transition-all"
        whileHover={{
          y: -8,
          borderColor: 'rgba(107, 182, 217, 0.8)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Glow Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cinematic-accent/20 via-transparent to-cinematic-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          animate={isHovered ? { opacity: 0.25 } : { opacity: 0 }}
        />

        {/* Glow Aura */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-cinematic-accent/20 via-cinematic-light/10 to-cinematic-accent/20 rounded-3xl -z-20 blur-xl opacity-0"
          animate={isHovered ? { opacity: [0.4, 0.7, 0.4] } : { opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Content Container */}
        <div className="relative h-full flex flex-col overflow-hidden bg-gradient-to-br from-cinematic-900/40 to-cinematic-800/60">
          {/* Media Section */}
          <div className="relative flex-1 overflow-hidden">
            {project.type === 'video' ? (
              <motion.video
                src={project.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            ) : (
              <motion.img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            )}

            {/* Overlay Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-cinematic-900/80 via-transparent to-transparent"
              animate={isHovered ? { opacity: 0.5 } : { opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            />

            {/* Glow Border on Hover */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 border-2 border-cinematic-accent/40 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    'inset 0 0 20px rgba(107, 182, 217, 0.3)',
                    'inset 0 0 40px rgba(107, 182, 217, 0.5)',
                    'inset 0 0 20px rgba(107, 182, 217, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </div>

          {/* Title Section - Premium Typography */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
            animate={isHovered ? { y: 0 } : { y: 4 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 2 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-cinematic-accent mb-2 drop-shadow-lg">
                {project.title}
              </h3>
              {project.category && (
                <p className="text-cinematic-light/70 text-xs md:text-sm uppercase tracking-widest drop-shadow-lg">
                  {project.category}
                </p>
              )}
            </motion.div>
          </motion.div>

          {/* Play Icon for Videos - Hover Effect */}
          {project.type === 'video' && !isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={isHovered ? { opacity: 0, scale: 1.5 } : { opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-r from-cinematic-accent/50 to-cinematic-light/30 flex items-center justify-center backdrop-blur-sm border border-cinematic-accent/50"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-8 h-8 text-cinematic-light ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
