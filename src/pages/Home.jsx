import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'

export default function Home() {
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

  const skills = [
    { category: 'Design', items: ['UI/UX Design', '3D Modeling', 'Motion Graphics', 'Branding'] },
    { category: 'Development', items: ['React', 'Frontend Development', 'Web Design', 'Responsive Design'] },
    { category: 'Tools', items: ['Figma', 'Blender', 'Adobe Suite', 'VS Code'] },
  ]

  return (
    <div className="min-h-screen bg-cinematic-900">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cinematic-900 to-cinematic-800">
        <div className="max-w-6xl mx-auto">
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

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Bio */}
              <motion.div variants={itemVariants} className="flex flex-col justify-center">
                <p className="text-cinematic-light/90 text-lg leading-relaxed mb-6">
                  I'm a passionate designer and developer focused on creating premium digital experiences. With a background in 3D modeling, UI/UX design, and web development, I bridge the gap between creative vision and technical excellence.
                </p>
                <p className="text-cinematic-light/80 text-lg leading-relaxed">
                  My goal is to craft beautiful, functional, and immersive digital products that leave a lasting impression. Every project is an opportunity to push creative boundaries and deliver exceptional results.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="flex flex-col justify-center gap-8">
                <div className="glass-effect p-6 rounded-lg border border-cinematic-accent/20">
                  <div className="text-3xl font-bold text-cinematic-accent mb-2">50+</div>
                  <p className="text-cinematic-light/70">Projects Completed</p>
                </div>
                <div className="glass-effect p-6 rounded-lg border border-cinematic-accent/20">
                  <div className="text-3xl font-bold text-cinematic-accent mb-2">5+</div>
                  <p className="text-cinematic-light/70">Years of Experience</p>
                </div>
                <div className="glass-effect p-6 rounded-lg border border-cinematic-accent/20">
                  <div className="text-3xl font-bold text-cinematic-accent mb-2">100%</div>
                  <p className="text-cinematic-light/70">Client Satisfaction</p>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="mt-20">
              <h3 className="text-3xl font-bold text-cinematic-light mb-12">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skillGroup, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="glass-effect p-8 rounded-lg border border-cinematic-accent/20 hover:border-cinematic-accent/50 transition-all"
                  >
                    <h4 className="text-xl font-semibold text-cinematic-accent mb-6">{skillGroup.category}</h4>
                    <ul className="space-y-3">
                      {skillGroup.items.map((skill, i) => (
                        <li key={i} className="text-cinematic-light/80 flex items-center">
                          <span className="w-2 h-2 bg-cinematic-accent rounded-full mr-3" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cinematic-800 to-cinematic-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center"
          >
            {/* Section Title */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cinematic-accent to-cinematic-light bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p className="text-cinematic-light/70 text-xl mb-8">
                Have a project in mind or want to collaborate? Let's talk!
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-cinematic-accent to-cinematic-light rounded-full mx-auto" />
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <a
                href="mailto:abhinav@example.com"
                className="glass-effect p-8 rounded-lg border border-cinematic-accent/20 hover:border-cinematic-accent/50 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-cinematic-accent text-3xl mb-4"
                >
                  ✉️
                </motion.div>
                <h3 className="text-xl font-semibold text-cinematic-light mb-2">Email</h3>
                <p className="text-cinematic-light/70 group-hover:text-cinematic-accent transition-colors">abhinav@example.com</p>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-8 rounded-lg border border-cinematic-accent/20 hover:border-cinematic-accent/50 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-cinematic-accent text-3xl mb-4"
                >
                  🔗
                </motion.div>
                <h3 className="text-xl font-semibold text-cinematic-light mb-2">LinkedIn</h3>
                <p className="text-cinematic-light/70 group-hover:text-cinematic-accent transition-colors">Connect with me</p>
              </a>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="mailto:abhinav@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-12 py-4 bg-gradient-to-r from-cinematic-accent to-cinematic-light text-cinematic-900 font-semibold rounded-lg hover:shadow-glow transition-all"
              >
                Let's Start a Project
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
