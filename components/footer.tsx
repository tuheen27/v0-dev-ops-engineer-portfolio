"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Terminal } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-4 w-4" />,
    url: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
    url: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-4 w-4" />,
    url: "https://twitter.com",
  },
  {
    name: "Email",
    icon: <Mail className="h-4 w-4" />,
    url: "mailto:hello@example.com",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm text-[#94a3b8]"
          >
            tuheen<span className="blink text-[#06b6d4]">_</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] transition-colors hover:text-[#06b6d4]"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </motion.div>

          {/* Built with badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-xs text-[#94a3b8]"
          >
            <Terminal className="h-3 w-3 text-[#06b6d4]" />
            <span>Built with Next.js & deployed via CI/CD</span>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-xs text-[#94a3b8]"
        >
          &copy; {currentYear} Tuheen. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
