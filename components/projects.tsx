"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
}

const projects: Project[] = [
  {
    title: "Kubernetes Multi-Cluster Management",
    description: "Built a GitOps-based multi-cluster management platform using ArgoCD and Crossplane. Automated deployment across 15+ clusters with zero-downtime updates.",
    techStack: ["Kubernetes", "ArgoCD", "Crossplane", "Terraform", "Go"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "CI/CD Pipeline Framework",
    description: "Developed a reusable CI/CD framework using GitHub Actions, reducing pipeline setup time by 80%. Includes security scanning, testing, and multi-environment deployments.",
    techStack: ["GitHub Actions", "Docker", "Python", "YAML"],
    githubUrl: "https://github.com",
  },
  {
    title: "Infrastructure Monitoring Stack",
    description: "Implemented a comprehensive monitoring solution with Prometheus, Grafana, and custom alerting. Reduced MTTR by 60% through proactive alerting.",
    techStack: ["Prometheus", "Grafana", "AlertManager", "Python"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "AWS Cost Optimization Platform",
    description: "Created an automated cost optimization tool that analyzes AWS spending and implements savings. Achieved 35% cost reduction for enterprise clients.",
    techStack: ["AWS", "Python", "Terraform", "Lambda"],
    githubUrl: "https://github.com",
  },
  {
    title: "Container Security Scanner",
    description: "Built a container security scanning pipeline that integrates with CI/CD. Scans for vulnerabilities, secrets, and compliance issues before deployment.",
    techStack: ["Trivy", "Docker", "GitHub Actions", "Go"],
    githubUrl: "https://github.com",
  },
  {
    title: "Serverless Event Platform",
    description: "Designed and deployed a serverless event-driven architecture handling 1M+ events daily. Used AWS Lambda, EventBridge, and SQS for reliable processing.",
    techStack: ["AWS Lambda", "EventBridge", "SQS", "Terraform"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-[360px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border p-6 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Architecture diagram placeholder */}
          <div className="flex-shrink-0 h-32 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center mb-4">
            <Layers className="w-12 h-12 text-primary/50" />
          </div>
          
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.techStack.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl bg-card/80 backdrop-blur-sm border border-primary/30 p-6 flex flex-col"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <h3 className="text-lg font-semibold mb-3 text-primary">{project.title}</h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 my-4">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-3">
            <Button asChild size="sm" variant="outline" className="flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
            {project.liveUrl && (
              <Button asChild size="sm" className="flex-1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
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
    <section id="projects" className="py-20 md:py-32 relative">
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
              {"// 03. Featured Projects"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2"
            >
              What I Have Built
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
