"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, ArrowRight, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
    excerpt: "Learn how to implement rolling updates, blue-green deployments, and canary releases in your Kubernetes clusters for seamless application updates.",
    date: "March 5, 2026",
    readTime: "8 min read",
    category: "Kubernetes",
    slug: "zero-downtime-kubernetes",
  },
  {
    title: "Terraform Best Practices for Large Teams",
    excerpt: "Discover how to structure your Terraform codebase, implement state management, and enforce code review processes for enterprise-scale infrastructure.",
    date: "February 20, 2026",
    readTime: "12 min read",
    category: "IaC",
    slug: "terraform-best-practices",
  },
  {
    title: "Implementing GitOps with ArgoCD",
    excerpt: "A comprehensive guide to setting up GitOps workflows using ArgoCD, including multi-environment management and automated sync strategies.",
    date: "February 8, 2026",
    readTime: "10 min read",
    category: "CI/CD",
    slug: "gitops-argocd",
  },
  {
    title: "AWS Cost Optimization Strategies",
    excerpt: "Practical tips and automation techniques to reduce your AWS bill by up to 40% without sacrificing performance or reliability.",
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
        <div className="h-full p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
          {/* Image placeholder */}
          <div className="h-40 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center mb-4 overflow-hidden">
            <FileText className="w-12 h-12 text-primary/30 group-hover:scale-110 transition-transform" />
          </div>

          {/* Category Badge */}
          <Badge variant="secondary" className="mb-3">
            {post.category}
          </Badge>

          {/* Title */}
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          {/* Read more */}
          <div className="mt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
    <section id="blog" className="py-20 md:py-32 relative">
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
              {"// 06. Blog"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2"
            >
              Latest Articles
            </motion.h2>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
