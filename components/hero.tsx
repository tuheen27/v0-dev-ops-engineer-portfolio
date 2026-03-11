"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Magnetic button component
function MagneticButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { stiffness: 150, damping: 15 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.15)
    y.set((e.clientY - centerY) * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="group relative rounded border border-[#06b6d4] px-7 py-4 font-mono text-sm text-[#06b6d4] transition-colors hover:bg-[#06b6d4]/10"
    >
      {children}
    </motion.button>
  )
}

export function Hero() {
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
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 lg:px-12">
      {/* Subtle aurora background */}
      <div className="aurora-bg" />

      {/* Content - left aligned */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-5 font-mono text-[#06b6d4]"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[clamp(40px,8vw,80px)] font-extrabold leading-[1.1] text-[#ccd6f6]"
        >
          Tuheen.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[clamp(40px,8vw,80px)] font-extrabold leading-[1.1] text-[#8892b0]"
        >
          I build reliable infrastructure.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-[#8892b0]"
        >
          I&apos;m a DevOps engineer specializing in CI/CD pipelines, cloud infrastructure, 
          and container orchestration. Currently focused on building automated, 
          self-healing systems at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <MagneticButton onClick={() => handleNavClick("#projects")}>
            Check out my projects <ArrowRight className="ml-2 inline h-4 w-4" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
