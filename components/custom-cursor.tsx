"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Add hover detection for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, [data-cursor-hover]')
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true))
        el.addEventListener("mouseleave", () => setIsHovering(false))
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    
    // Initial setup and mutation observer for dynamic content
    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      observer.disconnect()
      window.removeEventListener("resize", checkMobile)
    }
  }, [cursorX, cursorY])

  if (isMobile) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        className="rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8,
          backgroundColor: isHovering ? "transparent" : "#06b6d4",
          borderWidth: isHovering ? 1 : 0,
          borderColor: "#06b6d4",
        }}
        transition={{ duration: 0.2 }}
        style={{
          opacity: isVisible ? 1 : 0,
          borderStyle: "solid",
        }}
      />
    </motion.div>
  )
}
