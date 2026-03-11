"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Terminal } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com" },
  { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, url: "https://linkedin.com" },
  { name: "Twitter", icon: <Twitter className="w-4 h-4" />, url: "https://twitter.com" },
  { name: "Email", icon: <Mail className="w-4 h-4" />, url: "mailto:hello@example.com" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground text-center md:text-left"
          >
            &copy; {currentYear} John Doe. All rights reserved.
          </motion.p>

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
                className="text-muted-foreground hover:text-primary transition-colors"
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
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Terminal className="w-3 h-3" />
            <span>Built with Next.js & deployed via CI/CD</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
