"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Download, FolderOpen } from "lucide-react"
import { Particles } from "./particles"
import { FloatingTechIcons } from "./floating-tech-icons"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const [subtitleText, setSubtitleText] = useState("")
  const terminalText = "$ deploying portfolio..."
  const subtitle = "DevOps Engineer"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= terminalText.length) {
        setTypedText(terminalText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= subtitle.length) {
          setSubtitleText(subtitle.slice(0, index))
          index++
        } else {
          clearInterval(interval)
        }
      }, 100)
      return () => clearInterval(interval)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated gradient mesh background */}
      <div className="gradient-mesh" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Floating particles */}
      <Particles />

      {/* Terminal typing text - top left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-24 left-6 font-mono text-sm text-[#06b6d4] md:top-28 md:left-12"
      >
        {typedText}
        <span className="blink">|</span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="section-label mb-6 justify-center"
        >
          HELLO, I&apos;M
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">TUHEEN</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-4 h-10 font-mono text-2xl font-semibold text-[#f1f5f9] md:text-3xl"
        >
          {subtitleText}
          <span className="blink text-[#06b6d4]">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-[#94a3b8] md:text-xl"
        >
          Building reliable infrastructure, one pipeline at a time
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => handleNavClick("#projects")}
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] px-8 py-3.5 font-semibold text-[#0a0a0f] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
          >
            <FolderOpen size={20} />
            View Projects
          </button>
          <button className="group relative flex items-center gap-2 rounded-lg border border-transparent bg-transparent px-8 py-3.5 font-semibold text-[#f1f5f9] transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:border before:border-transparent before:bg-gradient-to-r before:from-[#06b6d4] before:to-[#8b5cf6] before:content-[''] after:absolute after:inset-[1px] after:rounded-[7px] after:bg-[#0a0a0f] after:transition-all after:content-[''] hover:after:bg-gradient-to-r hover:after:from-[#06b6d4] hover:after:to-[#8b5cf6] hover:text-[#0a0a0f]">
            <span className="relative z-10 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </span>
          </button>
        </motion.div>

        {/* Floating tech icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <FloatingTechIcons />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs font-medium tracking-wider text-[#94a3b8]">
          Scroll to explore
        </span>
        <ChevronDown className="scroll-bounce h-6 w-6 text-[#06b6d4]" />
      </motion.div>
    </section>
  )
}
