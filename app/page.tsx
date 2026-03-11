import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Global background effects */}
      <div className="pointer-events-none fixed inset-0 dot-grid" />
      <div className="pointer-events-none fixed inset-0 noise-overlay" />
      
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
