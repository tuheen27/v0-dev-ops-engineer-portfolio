"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, Check, Grid3X3 } from "lucide-react"

interface Project {
  title: string
  shortDescription: string
  fullDescription: string
  achievements: string[]
  techStack: string[]
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: "Kubernetes Multi-Cluster Platform",
    shortDescription:
      "GitOps-based multi-cluster management with ArgoCD and Crossplane",
    fullDescription:
      "Built a comprehensive multi-cluster management platform enabling teams to deploy and manage applications across 15+ Kubernetes clusters using GitOps principles.",
    achievements: [
      "Zero-downtime deployments across all clusters",
      "90% reduction in cluster provisioning time",
      "Automated compliance and security policies",
    ],
    techStack: ["Kubernetes", "ArgoCD", "Crossplane", "Terraform", "Go"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "CI/CD Pipeline Framework",
    shortDescription:
      "Reusable GitHub Actions framework with security scanning",
    fullDescription:
      "Developed a modular CI/CD framework that standardizes deployment pipelines across 50+ repositories, including built-in security scanning and multi-environment support.",
    achievements: [
      "80% reduction in pipeline setup time",
      "Integrated SAST/DAST security scanning",
      "Automatic rollback on failed deployments",
    ],
    techStack: ["GitHub Actions", "Docker", "Python", "Trivy"],
    githubUrl: "https://github.com",
  },
  {
    title: "Infrastructure Monitoring Stack",
    shortDescription:
      "Comprehensive monitoring with Prometheus and Grafana",
    fullDescription:
      "Implemented an enterprise-grade monitoring solution with custom dashboards, intelligent alerting, and automated incident response workflows.",
    achievements: [
      "60% reduction in MTTR",
      "Custom SLO/SLI tracking dashboards",
      "PagerDuty and Slack integrations",
    ],
    techStack: ["Prometheus", "Grafana", "AlertManager", "Loki"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "AWS Cost Optimization Tool",
    shortDescription:
      "Automated cloud cost analysis and optimization",
    fullDescription:
      "Created an intelligent cost optimization platform that continuously analyzes AWS spending patterns and automatically implements cost-saving recommendations.",
    achievements: [
      "35% average cost reduction",
      "Automated rightsizing recommendations",
      "Reserved instance optimization",
    ],
    techStack: ["AWS", "Python", "Terraform", "Lambda"],
    githubUrl: "https://github.com",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="flip-card h-[420px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="flip-card-inner relative h-full w-full"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div className="flip-card-front absolute inset-0 glass-card rounded-xl p-6">
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]" />

          {/* Placeholder image */}
          <div className="mb-5 flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
            <Grid3X3 className="h-12 w-12 text-[#94a3b8]/30" />
          </div>

          <h3 className="mb-2 text-lg font-bold text-[#f1f5f9]">
            {project.title}
          </h3>
          <p className="mb-4 text-sm text-[#94a3b8]">
            {project.shortDescription}
          </p>

          {/* Tech badges */}
          <div className="mt-auto flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="glass-card rounded-full px-3 py-1 text-xs text-[#94a3b8]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back absolute inset-0 glass-card rounded-xl p-6">
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]" />

          <h3 className="mb-3 text-lg font-bold text-[#f1f5f9]">
            {project.title}
          </h3>
          <p className="mb-4 text-sm text-[#94a3b8] leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Achievements */}
          <ul className="mb-5 space-y-2">
            {project.achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-[#94a3b8]"
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#06b6d4]" />
                {achievement}
              </li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className="mt-auto flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#1e293b] py-2.5 text-sm font-medium text-[#f1f5f9] transition-colors hover:bg-[#334155]"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] py-2.5 text-sm font-medium text-[#0a0a0f] transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div ref={ref}>
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-label mb-4"
          >
            PROJECTS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-12 text-3xl font-bold text-[#f1f5f9] md:text-4xl"
          >
            Featured Work
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
