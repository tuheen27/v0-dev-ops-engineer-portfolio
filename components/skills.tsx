"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Cloud, Container, GitBranch, Wrench, Activity, Code } from "lucide-react"

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  id: string
  title: string
  icon: React.ReactNode
  skills: Skill[]
  size: "large" | "normal"
}

const skillCategories: SkillCategory[] = [
  {
    id: "containers",
    title: "Containers",
    icon: <Container className="h-5 w-5" />,
    size: "large",
    skills: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 90 },
      { name: "Helm", level: 85 },
      { name: "Podman", level: 75 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: <Cloud className="h-5 w-5" />,
    size: "large",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Azure", level: 78 },
      { name: "GCP", level: 75 },
    ],
  },
  {
    id: "cicd",
    title: "CI/CD",
    icon: <GitBranch className="h-5 w-5" />,
    size: "normal",
    skills: [
      { name: "GitHub Actions", level: 95 },
      { name: "Jenkins", level: 85 },
      { name: "ArgoCD", level: 82 },
      { name: "GitLab CI", level: 80 },
    ],
  },
  {
    id: "iac",
    title: "IaC",
    icon: <Wrench className="h-5 w-5" />,
    size: "normal",
    skills: [
      { name: "Terraform", level: 92 },
      { name: "Ansible", level: 88 },
      { name: "Pulumi", level: 70 },
      { name: "CloudFormation", level: 80 },
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring",
    icon: <Activity className="h-5 w-5" />,
    size: "normal",
    skills: [
      { name: "Prometheus", level: 88 },
      { name: "Grafana", level: 90 },
      { name: "ELK Stack", level: 82 },
      { name: "Datadog", level: 78 },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    size: "normal",
    skills: [
      { name: "Python", level: 88 },
      { name: "Bash", level: 92 },
      { name: "Go", level: 75 },
      { name: "YAML", level: 95 },
    ],
  },
]

function BentoCard({
  category,
  index,
  isInView,
}: {
  category: SkillCategory
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group card-highlight rounded-lg bg-[#112240] p-6 transition-all duration-300 ${
        category.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-[#06b6d4]">{category.icon}</span>
        <h3 className="text-lg font-semibold text-[#ccd6f6]">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className={`space-y-3 ${category.size === "large" ? "lg:space-y-4" : ""}`}>
        {category.skills.map((skill) => (
          <div key={skill.name} className="group/skill">
            <div className="mb-1 flex items-center justify-between">
              <span className="font-mono text-sm text-[#8892b0]">{skill.name}</span>
              <span 
                className={`font-mono text-xs text-[#06b6d4] transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                {skill.level}%
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ "--progress": skill.level / 100 } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div ref={ref}>
          {/* Section Heading */}
          <h2 className="section-heading mb-10 text-2xl font-bold text-[#ccd6f6]">
            <span className="mr-2 font-mono text-xl text-[#06b6d4]">02.</span>
            Tech Stack
          </h2>

          {/* Bento Grid - asymmetric layout */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <BentoCard
                key={category.id}
                category={category}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
