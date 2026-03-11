"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2 } from "lucide-react"

interface Experience {
  company: string
  role: string
  period: string
  description: string[]
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
  },
  {
    company: "StartupHub Inc",
    role: "Junior DevOps Engineer",
    period: "2019 - 2020",
    description: [
      "Set up CI/CD pipelines using Jenkins and GitHub Actions",
      "Managed Docker containerization for development and production environments",
      "Implemented centralized logging using ELK stack",
      "Collaborated with developers to optimize application performance",
    ],
  },
  {
    company: "Digital Agency Co",
    role: "System Administrator",
    period: "2018 - 2019",
    description: [
      "Managed Linux servers and network infrastructure",
      "Automated routine tasks using Bash and Python scripts",
      "Implemented backup and recovery procedures",
      "Provided technical support for development teams",
    ],
  },
]

function TimelineItem({ experience, index, isLeft }: { experience: Experience; index: number; isLeft: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className={`p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/30 transition-colors ${isLeft ? "md:ml-auto" : "md:mr-auto"} max-w-lg`}>
          {/* Company logo placeholder */}
          <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div className={isLeft ? "md:text-right" : ""}>
              <h3 className="font-semibold">{experience.role}</h3>
              <p className="text-sm text-primary">{experience.company}</p>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground mb-4 font-mono">{experience.period}</p>
          
          <ul className={`space-y-2 text-sm text-muted-foreground ${isLeft ? "md:text-right" : ""}`}>
            {experience.description.map((item, i) => (
              <li key={i} className={`flex items-start gap-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                <span className="text-primary mt-1.5 flex-shrink-0">{">"}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline dot - hidden on mobile */}
      <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full bg-primary border-4 border-background relative z-10" />

      {/* Empty space for alternating layout - hidden on mobile */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div ref={ref}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm"
            >
              {"// 04. Work Experience"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2"
            >
              Where I Have Worked
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={experience.company}
                  experience={experience}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
