import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail, Github, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/abhinav-sharma-2033ba344',
    color: 'hover:text-cinematic-accent'
  },

  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/abhi._3d',
    color: 'hover:text-cinematic-accent'
  },

  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:cgabhinav19@gmail.com',
    color: 'hover:text-cinematic-accent'
  },
]

  return (
    <footer className="relative w-full bg-gradient-to-b from-cinematic-900 to-cinematic-800 border-t border-cinematic-accent/20">
      {/* Top subtle glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cinematic-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            {/* Left: Logo & Description */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cinematic-accent to-cinematic-light bg-clip-text text-transparent mb-4">
                Abhinav
              </h3>
              <p className="text-cinematic-light/70 text-sm leading-relaxed mb-6">
                Premium 3D artist and motion graphics designer crafting cinematic visuals for brands and creators worldwide.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-cinematic-light/60 ${social.color} transition-colors`}
                    title={social.name}
                  >
                    <motion.div
                      animate={{
                        textShadow: [
                          '0 0 0px rgba(107, 182, 217, 0)',
                          '0 0 12px rgba(107, 182, 217, 0.4)',
                          '0 0 0px rgba(107, 182, 217, 0)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <social.icon size={20} strokeWidth={1.5} />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Center: Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-cinematic-accent mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-cinematic-light/70 hover:text-cinematic-accent transition-colors inline-flex items-center gap-2 group text-sm"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity -ml-5">
                        <ExternalLink size={14} />
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-cinematic-accent mb-6">Contact</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-cinematic-light/60 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:cgabhinav19@gmail.com"
                    className="text-cinematic-light/80 hover:text-cinematic-accent transition-colors text-sm group"
                  >
                    cgabhinav19@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-cinematic-light/60 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a
                    href="tel:+919001057405"
                    className="text-cinematic-light/80 hover:text-cinematic-accent transition-colors text-sm"
                  >
                    +91 9001057405
                  </a>
                </div>
                <div>
                  <p className="text-cinematic-light/60 text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="text-cinematic-light/80 text-sm">Jaipur, India</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-cinematic-accent/20 to-transparent mb-8"
          />

          {/* Bottom Section: Copyright & Credits */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          >
            <p className="text-cinematic-light/50 text-sm">
              &copy; {currentYear} Abhinav. All rights reserved.
            </p>
            <p className="text-cinematic-light/40 text-xs">
              Crafted with precision • Designed with passion • Built with Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom subtle glow */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cinematic-accent/10 to-transparent" />
    </footer>
  )
}
