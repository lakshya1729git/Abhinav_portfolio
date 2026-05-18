import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contact@abhinav.com', label: 'Email' },
  ]

  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <footer className="bg-cinematic-900 border-t border-cinematic-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cinematic-accent to-cinematic-light bg-clip-text text-transparent mb-4">
              Abhinav Sharma
            </h3>
            <p className="text-cinematic-light/70">3D Artist • UI/UX Designer • Motion Designer</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-cinematic-accent font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-cinematic-light/70">
              <a href="mailto:contact@abhinav.com" className="hover:text-cinematic-accent transition-colors flex items-center gap-2">
                <Mail size={16} /> contact@abhinav.com
              </a>
              <a href="tel:+91XXXXXXXXXX" className="hover:text-cinematic-accent transition-colors flex items-center gap-2">
                <Phone size={16} /> +91 XXX XXX XXXX
              </a>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-cinematic-accent font-semibold mb-4">Built With</h4>
            <div className="text-cinematic-light/70 text-sm space-y-1">
              <p>React • Vite • Tailwind CSS</p>
              <p>Framer Motion • GSAP</p>
              <p>React Router DOM</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div className="flex justify-center gap-6 mb-8 border-t border-cinematic-accent/20 pt-8">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={contactVariants}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              className="text-cinematic-accent hover:text-cinematic-light transition-colors"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-cinematic-light/50 text-sm"
        >
          <p>&copy; {currentYear} Abhinav Sharma. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
