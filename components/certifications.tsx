"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, Cloud, Container, CloudCog, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certification {
  name: string
  issuer: string
  date: string
  credentialUrl: string
  icon: React.ReactNode
  color: string
}

const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "December 2023",
    credentialUrl: "https://aws.amazon.com/verification",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "October 2023",
    credentialUrl: "https://www.cncf.io/certification/cka/",
    icon: <Container className="w-8 h-8" />,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "August 2023",
    credentialUrl: "https://www.hashicorp.com/certification",
    icon: <CloudCog className="w-8 h-8" />,
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    name: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "June 2023",
    credentialUrl: "https://learn.microsoft.com/certifications",
    icon: <Server className="w-8 h-8" />,
    color: "from-cyan-500/20 to-blue-500/20",
  },
]

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
      
      <div className="relative p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 text-primary`}>
          {cert.icon}
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
          <p className="text-xs text-primary font-mono">{cert.date}</p>
        </div>

        {/* Verify Link */}
        <Button asChild variant="ghost" size="sm" className="mt-4 w-full justify-start">
          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
            <Award className="w-4 h-4 mr-2" />
            Verify Credential
            <ExternalLink className="w-3 h-3 ml-auto" />
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 md:py-32 relative">
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
              {"// 05. Certifications"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2"
            >
              Professional Credentials
            </motion.h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.name} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
