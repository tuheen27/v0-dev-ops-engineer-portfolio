"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Container, 
  Cloud, 
  GitBranch, 
  Server, 
  Activity, 
  Code2,
  Box,
  Layers,
  Workflow,
  CloudCog,
  LineChart,
  Terminal
} from "lucide-react"

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Containers",
    icon: <Container className="w-5 h-5" />,
    skills: [
      { name: "Docker", level: 95, icon: <Box className="w-4 h-4" /> },
      { name: "Kubernetes", level: 90, icon: <Layers className="w-4 h-4" /> },
      { name: "Helm", level: 85, icon: <Workflow className="w-4 h-4" /> },
      { name: "Podman", level: 75, icon: <Container className="w-4 h-4" /> },
    ],
  },
  {
    title: "IaC",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Terraform", level: 95, icon: <CloudCog className="w-4 h-4" /> },
      { name: "Ansible", level: 85, icon: <Server className="w-4 h-4" /> },
      { name: "Pulumi", level: 70, icon: <Code2 className="w-4 h-4" /> },
      { name: "CloudFormation", level: 80, icon: <Cloud className="w-4 h-4" /> },
    ],
  },
  {
    title: "CI/CD",
    icon: <GitBranch className="w-5 h-5" />,
    skills: [
      { name: "GitHub Actions", level: 95, icon: <GitBranch className="w-4 h-4" /> },
      { name: "Jenkins", level: 85, icon: <Workflow className="w-4 h-4" /> },
      { name: "ArgoCD", level: 90, icon: <GitBranch className="w-4 h-4" /> },
      { name: "GitLab CI", level: 80, icon: <GitBranch className="w-4 h-4" /> },
    ],
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "AWS", level: 95, icon: <Cloud className="w-4 h-4" /> },
      { name: "Azure", level: 80, icon: <Cloud className="w-4 h-4" /> },
      { name: "GCP", level: 75, icon: <Cloud className="w-4 h-4" /> },
    ],
  },
  {
    title: "Monitoring",
    icon: <Activity className="w-5 h-5" />,
    skills: [
      { name: "Prometheus", level: 90, icon: <LineChart className="w-4 h-4" /> },
      { name: "Grafana", level: 90, icon: <Activity className="w-4 h-4" /> },
      { name: "ELK Stack", level: 80, icon: <LineChart className="w-4 h-4" /> },
      { name: "Datadog", level: 75, icon: <Activity className="w-4 h-4" /> },
    ],
  },
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Python", level: 85, icon: <Code2 className="w-4 h-4" /> },
      { name: "Bash", level: 95, icon: <Terminal className="w-4 h-4" /> },
      { name: "Go", level: 70, icon: <Code2 className="w-4 h-4" /> },
      { name: "YAML", level: 95, icon: <Code2 className="w-4 h-4" /> },
    ],
  },
]

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Header */}
      <div className="relative flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="relative space-y-4">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="space-y-2"
          >
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">{skill.icon}</span>
                {skill.name}
              </div>
              <span className={`text-xs transition-opacity ${hoveredSkill === skill.name ? "opacity-100" : "opacity-0"}`}>
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
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
    <section id="skills" className="py-20 md:py-32 relative">
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
              {"// 02. Skills & Tools"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2"
            >
              Technical Expertise
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
