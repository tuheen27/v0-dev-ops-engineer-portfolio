"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { User } from "lucide-react"

function AnimatedCounter({
  end,
  label,
  suffix = "",
}: {
  end: number
  label: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, end])

  return (
    <div ref={ref} className="glass-card rounded-xl p-4 text-center">
      <div className="text-3xl font-bold md:text-4xl">
        <span className="gradient-text">
          {count}
          {suffix}
        </span>
      </div>
      <div className="mt-1 text-sm text-[#94a3b8]">{label}</div>
    </div>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-label mb-4"
          >
            ABOUT ME
          </motion.div>

          {/* Glass Card Container */}
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-[40%_60%]">
              {/* Photo with rotating gradient border */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative mx-auto"
              >
                <div className="relative h-64 w-64 md:h-80 md:w-80">
                  {/* Rotating gradient border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] p-[3px]"
                  >
                    <div className="h-full w-full rounded-full bg-[#0a0a0f]" />
                  </motion.div>
                  {/* Inner circle with placeholder */}
                  <div className="absolute inset-3 flex items-center justify-center rounded-full bg-[#111827]">
                    <User className="h-24 w-24 text-[#94a3b8]/50" />
                  </div>
                </div>
              </motion.div>

              {/* Bio content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-[#f1f5f9] md:text-3xl">
                  Passionate about automating everything
                </h2>
                <p className="text-[#94a3b8] leading-relaxed">
                  DevOps Engineer with 5+ years of experience designing and
                  implementing CI/CD pipelines, cloud infrastructure, and
                  container orchestration. I believe in infrastructure as code,
                  GitOps, and making deployments boring (in the best way).
                </p>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-3 gap-4 pt-4"
                >
                  <AnimatedCounter
                    end={5}
                    suffix="+"
                    label="Years Experience"
                  />
                  <AnimatedCounter
                    end={50}
                    suffix="+"
                    label="Pipelines Built"
                  />
                  <AnimatedCounter
                    end={99}
                    suffix=".9%"
                    label="Uptime Achieved"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
