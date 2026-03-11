"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink } from "lucide-react"

interface Certification {
  name: string
  issuer: string
  date: string
  credentialUrl: string
  icon: string
  gradient: string
}

const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "December 2023",
    credentialUrl: "https://aws.amazon.com/verification",
    icon: "☁️",
    gradient: "from-[#ff9900]/20 to-[#ffb84d]/20",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "October 2023",
    credentialUrl: "https://www.cncf.io/certification/cka/",
    icon: "☸️",
    gradient: "from-[#326ce5]/20 to-[#06b6d4]/20",
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "August 2023",
    credentialUrl: "https://www.hashicorp.com/certification",
    icon: "🏗️",
    gradient: "from-[#7b42bc]/20 to-[#8b5cf6]/20",
  },
  {
    name: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "June 2023",
    credentialUrl: "https://learn.microsoft.com/certifications",
    icon: "🔷",
    gradient: "from-[#0078d4]/20 to-[#06b6d4]/20",
  },
]

function CertificationCard({
  cert,
  index,
}: {
  cert: Certification
  index: number
}) {
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
      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cert.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="glass-card relative flex h-full flex-col rounded-xl p-6 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        {/* Badge Icon */}
        <div
          className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${cert.gradient} text-3xl`}
        >
          {cert.icon}
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="mb-1 font-bold text-[#f1f5f9]">{cert.name}</h3>
          <p className="mb-2 text-sm text-[#94a3b8]">{cert.issuer}</p>
          <p className="font-mono text-xs text-[#06b6d4]">{cert.date}</p>
        </div>

        {/* Verify Link */}
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-sm text-[#94a3b8] transition-colors hover:text-[#06b6d4]"
        >
          <Award className="h-4 w-4" />
          Verify Credential
          <ExternalLink className="ml-auto h-3 w-3" />
        </a>
      </div>
    </motion.div>
  )
}

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div ref={ref}>
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-label mb-4"
          >
            CERTIFICATIONS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-12 text-3xl font-bold text-[#f1f5f9] md:text-4xl"
          >
            Professional Credentials
          </motion.h2>

          {/* Certifications Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.name} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
