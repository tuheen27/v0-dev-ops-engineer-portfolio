"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Github, Linkedin, Twitter, Mail, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    url: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    url: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
    url: "https://twitter.com",
  },
  {
    name: "Email",
    icon: <Mail className="h-5 w-5" />,
    url: "mailto:hello@example.com",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06b6d4]/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <motion.div ref={ref}>
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-label mb-4 justify-center"
          >
            GET IN TOUCH
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-4 text-center text-3xl font-bold text-[#f1f5f9] md:text-4xl"
          >
            Let&apos;s Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-12 max-w-md text-center text-[#94a3b8]"
          >
            Have a project in mind or want to discuss DevOps solutions? I&apos;d
            love to hear from you.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <CheckCircle2 className="mb-4 h-16 w-16 text-[#10b981]" />
                <h3 className="mb-2 text-xl font-bold text-[#f1f5f9]">
                  Message Sent!
                </h3>
                <p className="text-[#94a3b8]">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className={`border-[rgba(255,255,255,0.08)] bg-[#1e293b] text-[#f1f5f9] placeholder:text-[#94a3b8] focus:border-[#06b6d4] ${
                      errors.name ? "border-[#ef4444]" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-[#ef4444]">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className={`border-[rgba(255,255,255,0.08)] bg-[#1e293b] text-[#f1f5f9] placeholder:text-[#94a3b8] focus:border-[#06b6d4] ${
                      errors.email ? "border-[#ef4444]" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-[#ef4444]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className={`border-[rgba(255,255,255,0.08)] bg-[#1e293b] text-[#f1f5f9] placeholder:text-[#94a3b8] focus:border-[#06b6d4] ${
                      errors.message ? "border-[#ef4444]" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#ef4444]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] py-3.5 font-semibold text-[#0a0a0f] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            )}
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-8 flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card flex h-12 w-12 items-center justify-center rounded-full text-[#94a3b8] transition-all duration-300 hover:text-[#06b6d4] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
