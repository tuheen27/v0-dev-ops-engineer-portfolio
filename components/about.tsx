"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const techStack = [
  "Kubernetes", "Terraform",
  "AWS", "Docker",
  "GitHub Actions", "Python",
  "ArgoCD", "Prometheus"
]

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
    <div ref={ref} className="glass-card rounded-lg p-5 text-center">
      <div className="text-3xl font-bold text-[#06b6d4] md:text-4xl">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm text-[#8892b0]">{label}</div>
    </div>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}
          <h2 className="section-heading mb-10 text-2xl font-bold text-[#ccd6f6]">
            <span className="mr-2 font-mono text-xl text-[#06b6d4]">01.</span>
            About Me
          </h2>

          {/* Two column layout */}
          <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
            {/* Left: Text content */}
            <div className="space-y-4 text-[#8892b0] leading-[1.7]">
              <p>
                Hello! I&apos;m Tuheen, a DevOps engineer with a passion for automating 
                infrastructure and building resilient systems. My journey into DevOps 
                started back in 2019 when I discovered the power of infrastructure as code 
                and never looked back.
              </p>
              <p>
                Fast-forward to today, I&apos;ve had the privilege of working at{" "}
                <span className="text-[#06b6d4]">startups</span>,{" "}
                <span className="text-[#06b6d4]">enterprise companies</span>, and{" "}
                <span className="text-[#06b6d4]">consulting firms</span>. My main focus 
                these days is building automated deployment pipelines and designing 
                cloud-native architectures that scale.
              </p>
              <p>
                Here are a few technologies I&apos;ve been working with recently:
              </p>

              {/* Tech list */}
              <ul className="grid grid-cols-2 gap-2 pt-2">
                {techStack.map((tech) => (
                  <li key={tech} className="cyan-arrow font-mono text-sm text-[#8892b0]">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mx-auto w-full max-w-[300px]"
            >
              <div className="photo-overlay relative aspect-square w-full overflow-hidden rounded">
                {/* Gradient placeholder with pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#112240] to-[#0a192f]">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl text-[#06b6d4]/20">T</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats - Glass cards ONLY here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-4"
          >
            <AnimatedCounter end={5} suffix="+" label="Years Experience" />
            <AnimatedCounter end={50} suffix="+" label="Pipelines Built" />
            <AnimatedCounter end={99} suffix=".9%" label="Uptime Achieved" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
