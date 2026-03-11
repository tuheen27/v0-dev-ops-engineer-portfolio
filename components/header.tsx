"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { number: "01", name: "About", href: "#about" },
  { number: "02", name: "Skills", href: "#skills" },
  { number: "03", name: "Projects", href: "#projects" },
  { number: "04", name: "Experience", href: "#experience" },
  { number: "05", name: "Blog", href: "#blog" },
  { number: "06", name: "Contact", href: "#contact" },
]

// Text scramble effect
function useTextScramble(text: string, isHovering: boolean) {
  const [displayText, setDisplayText] = useState(text)
  const chars = "!<>-_\\/[]{}—=+*^?#________"
  const frameRef = useRef<number>()
  const iterationRef = useRef(0)

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text)
      return
    }

    iterationRef.current = 0
    const scramble = () => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterationRef.current) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      if (iterationRef.current < text.length) {
        iterationRef.current += 1 / 3
        frameRef.current = requestAnimationFrame(scramble)
      }
    }

    frameRef.current = requestAnimationFrame(scramble)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isHovering, text])

  return displayText
}

function NavLink({ link, isActive }: { link: typeof navLinks[0]; isActive: boolean }) {
  const [isHovering, setIsHovering] = useState(false)
  const displayText = useTextScramble(link.name, isHovering)

  return (
    <a
      href={link.href}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`font-mono text-[13px] transition-colors ${
        isActive ? "text-[#06b6d4]" : "text-[#8892b0] hover:text-[#06b6d4]"
      }`}
    >
      <span className="text-[#06b6d4]">{link.number}.</span>{" "}
      <span>{displayText}</span>
    </a>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    
    // Show/hide nav based on scroll direction
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    lastScrollY.current = currentScrollY

    // Background on scroll
    setIsScrolled(currentScrollY > 50)

    // Active section detection
    const sections = navLinks.map((link) => link.href.replace("#", ""))
    for (const section of [...sections].reverse()) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 150) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] ${
          isScrolled 
            ? "bg-[#0a192f]/90 backdrop-blur-sm border-b border-[#1d3461]" 
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <a href="#" className="font-mono text-[#06b6d4] text-base tracking-tight">
            tuheen<span className="blink">_</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                link={link}
                isActive={activeSection === link.href.replace("#", "")}
              />
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 rounded border border-[#06b6d4] px-4 py-2 font-mono text-[13px] text-[#06b6d4] transition-all hover:bg-[#06b6d4]/10"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center text-[#06b6d4] lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu - Right slide panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-[#0a192f]/80 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(75vw,300px)] bg-[#112240] p-12 lg:hidden"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-[#06b6d4]"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <nav className="flex h-full flex-col items-center justify-center">
                <ul className="flex flex-col items-center gap-6">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-center font-mono"
                      >
                        <span className="block text-sm text-[#06b6d4]">{link.number}.</span>
                        <span className="text-lg text-[#ccd6f6]">{link.name}</span>
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="mt-4"
                  >
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-[#06b6d4] px-6 py-3 font-mono text-sm text-[#06b6d4]"
                    >
                      Resume
                    </a>
                  </motion.li>
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
