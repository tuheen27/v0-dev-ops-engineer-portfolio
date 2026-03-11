"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, ChevronRight } from "lucide-react"

interface Experience {
  company: string
  role: string
  period: string
  description: string[]
  techUsed: string[]
}

const experiences: Experience[] = [
  {
    company: "TechCorp Industries",
    role: "Senior DevOps Engineer",
    period: "2022 - Present",
    description: [
      "Lead a team of 5 DevOps engineers managing infrastructure for 100+ microservices",
      "Architected and implemented multi-region Kubernetes deployment strategy",
      "Reduced deployment time from 2 hours to 15 minutes through CI/CD automation",
      "Achieved 99.99% uptime SLA through proactive monitoring and incident response",
    ],
    techUsed: ["Kubernetes", "ArgoCD", "Terraform", "AWS"],
  },
  {
    company: "CloudScale Solutions",
    role: "DevOps Engineer",
    period: "2020 - 2022",
    description: [
      "Migrated legacy infrastructure to AWS, reducing operational costs by 40%",
      "Implemented Infrastructure as Code using Terraform across 3 environments",
      "Built automated security scanning pipeline for container images",
      "Designed disaster recovery strategy with RPO of 1 hour and RTO of 4 hours",
    ],
    techUsed: ["AWS", "Terraform", "Docker", "Jenkins"],
  },
  {
    company: "StartupHub Inc",
    role: "Junior DevOps Engineer",
    period: "2019 - 2020",
    description: [
      "Set up CI/CD pipelines using Jenkins and GitHub Actions",
      "Managed Docker containerization for development and production environments",
      "Implemented centralized logging using ELK stack",
    ],
    techUsed: ["Docker", "Jenkins", "ELK Stack", "Linux"],
  },
  {
    company: "Digital Agency Co",
    role: "System Administrator",
    period: "2018 - 2019",
    description: [
      "Managed Linux servers and network infrastructure",
      "Automated routine tasks using Bash and Python scripts",
      "Implemented backup and recovery procedures",
    ],
    techUsed: ["Linux", "Bash", "Python", "Nginx"],
  },
]

function TimelineItem({
  experience,
  index,
}: {
  experience: Experience
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-[#06b6d4] to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center">
        <div className="h-4 w-4 rounded-full border-2 border-[#06b6d4] bg-[#0a0a0f]" />
        <div className="absolute h-4 w-4 animate-ping rounded-full bg-[#06b6d4]/30" />
      </div>

      {/* Content Card */}
      <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1e293b]">
              <Building2 className="h-6 w-6 text-[#06b6d4]" />
            </div>
            <div>
              <h3 className="font-bold text-[#f1f5f9]">{experience.role}</h3>
              <p className="text-sm text-[#06b6d4]">{experience.company}</p>
            </div>
          </div>
          <span className="whitespace-nowrap rounded-full bg-[#1e293b] px-3 py-1 font-mono text-xs text-[#94a3b8]">
            {experience.period}
          </span>
        </div>

        {/* Description */}
        <ul className="mb-4 space-y-2">
          {experience.description.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-[#94a3b8]"
            >
              <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#06b6d4]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {experience.techUsed.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#06b6d4]/10 px-3 py-1 text-xs font-medium text-[#06b6d4]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div ref={ref}>
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-label mb-4"
          >
            EXPERIENCE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-12 text-3xl font-bold text-[#f1f5f9] md:text-4xl"
          >
            Where I&apos;ve Worked
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
