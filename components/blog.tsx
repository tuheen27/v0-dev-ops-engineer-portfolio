"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, ArrowRight, FileText } from "lucide-react"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Zero-Downtime Kubernetes Deployments",
    excerpt:
      "Learn how to implement rolling updates, blue-green deployments, and canary releases in your Kubernetes clusters.",
    date: "March 5, 2026",
    readTime: "8 min read",
    category: "Kubernetes",
    slug: "zero-downtime-kubernetes",
  },
  {
    title: "Terraform Best Practices for Large Teams",
    excerpt:
      "Discover how to structure your Terraform codebase, implement state management, and enforce code review processes.",
    date: "February 20, 2026",
    readTime: "12 min read",
    category: "IaC",
    slug: "terraform-best-practices",
  },
  {
    title: "Implementing GitOps with ArgoCD",
    excerpt:
      "A comprehensive guide to setting up GitOps workflows using ArgoCD, including multi-environment management.",
    date: "February 8, 2026",
    readTime: "10 min read",
    category: "CI/CD",
    slug: "gitops-argocd",
  },
  {
    title: "AWS Cost Optimization Strategies",
    excerpt:
      "Practical tips and automation techniques to reduce your AWS bill by up to 40% without sacrificing performance.",
    date: "January 25, 2026",
    readTime: "7 min read",
    category: "Cloud",
    slug: "aws-cost-optimization",
  },
]

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <a href={`/blog/${post.slug}`} className="block h-full">
        <div className="glass-card card-shine h-full overflow-hidden rounded-xl p-6 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          {/* Image placeholder */}
          <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
            <FileText className="h-12 w-12 text-[#94a3b8]/30 transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Category Badge */}
          <span className="mb-3 inline-block rounded-full bg-[#06b6d4]/10 px-3 py-1 text-xs font-medium text-[#06b6d4]">
            {post.category}
          </span>

          {/* Title */}
          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-[#f1f5f9] transition-colors group-hover:text-[#06b6d4]">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 line-clamp-3 text-sm text-[#94a3b8]">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-auto flex items-center justify-between text-xs text-[#94a3b8]">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          {/* Read more */}
          <div className="mt-4 flex items-center text-sm font-medium text-[#06b6d4] opacity-0 transition-opacity group-hover:opacity-100">
            Read More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </a>
    </motion.article>
  )
}

export function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div ref={ref}>
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-label mb-4"
          >
            BLOG
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-12 text-3xl font-bold text-[#f1f5f9] md:text-4xl"
          >
            Latest Articles
          </motion.h2>

          {/* Blog Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
