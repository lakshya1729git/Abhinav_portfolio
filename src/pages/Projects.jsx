import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cinematic-accent to-cinematic-light bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-cinematic-light/70 text-xl">
            Explore my collection of creative works and digital experiences
          </p>
        </motion.div>

        {/* Projects grid will be added here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will be added in next steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-effect p-6 rounded-lg border border-cinematic-accent/20 hover:border-cinematic-accent/50 transition-all h-64 flex items-center justify-center"
          >
            <p className="text-cinematic-light/50">Project cards coming soon...</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
