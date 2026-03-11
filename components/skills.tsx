"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "containers",
    title: "Containers",
    skills: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 90 },
      { name: "Helm", level: 85 },
      { name: "Podman", level: 75 },
    ],
  },
  {
    id: "iac",
    title: "IaC",
    skills: [
      { name: "Terraform", level: 92 },
      { name: "Ansible", level: 88 },
      { name: "Pulumi", level: 70 },
      { name: "CloudFormation", level: 80 },
    ],
  },
  {
    id: "cicd",
    title: "CI/CD",
    skills: [
      { name: "GitHub Actions", level: 95 },
      { name: "Jenkins", level: 85 },
      { name: "ArgoCD", level: 82 },
      { name: "GitLab CI", level: 80 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Azure", level: 78 },
      { name: "GCP", level: 75 },
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring",
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
    skills: [
      { name: "Python", level: 88 },
      { name: "Bash", level: 92 },
      { name: "Go", level: 75 },
      { name: "YAML", level: 95 },
    ],
  },
]

const categories = [
  "All",
  "Containers",
  "IaC",
  "CI/CD",
  "Cloud",
  "Monitoring",
  "Languages",
]

function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: Skill
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group glass-card card-shine relative overflow-hidden rounded-xl p-5 transition-all duration-300 ${
        isHovered
          ? "-translate-y-1 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          : ""
      }`}
      style={{
        borderColor: isHovered ? "rgba(6, 182, 212, 0.5)" : undefined,
      }}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br from-[#06b6d4]/10 to-[#8b5cf6]/10 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1e293b] text-2xl">
          {getSkillIcon(skill.name)}
        </div>
        <h4 className="mb-3 font-semibold text-[#f1f5f9]">{skill.name}</h4>

        {/* Progress bar - only visible on hover */}
        <div
          className={`transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 h-0"
          }`}
        >
          <div className="flex items-center justify-between text-xs text-[#94a3b8] mb-1">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[#1e293b]">
            <motion.div
              initial={{ width: 0 }}
              animate={isHovered ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function getSkillIcon(name: string): string {
  const icons: Record<string, string> = {
    Docker: "🐳",
    Kubernetes: "☸️",
    Helm: "⎈",
    Podman: "🦭",
    Terraform: "🏗️",
    Ansible: "🅰️",
    Pulumi: "🫁",
    CloudFormation: "☁️",
    "GitHub Actions": "⚡",
    Jenkins: "🔧",
    ArgoCD: "🐙",
    "GitLab CI": "🦊",
    AWS: "☁️",
    Azure: "🔷",
    GCP: "🌐",
    Prometheus: "🔥",
    Grafana: "📊",
    "ELK Stack": "🦌",
    Datadog: "🐕",
    Python: "🐍",
    Bash: "💻",
    Go: "🐹",
    YAML: "📄",
  }
  return icons[name] || "🔧"
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredSkills =
    activeCategory === "All"
      ? skillCategories.flatMap((cat) => cat.skills)
      : skillCategories.find(
          (cat) => cat.title.toLowerCase() === activeCategory.toLowerCase()
        )?.skills || []

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div ref={ref}>
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-label mb-4"
          >
            TECH STACK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-10 text-3xl font-bold text-[#f1f5f9] md:text-4xl"
          >
            Tools & Technologies I Work With
          </motion.h2>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-10 flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-[#0a0a0f]"
                    : "glass-card text-[#94a3b8] hover:text-[#f1f5f9]"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
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
