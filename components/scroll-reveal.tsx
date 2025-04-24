"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "left" | "right" | "fade"

interface ScrollRevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  direction = "fade",
  delay = 0,
  duration = 800,
  distance = 50,
  threshold = 0.1,
  className,
  once = true,
}: ScrollRevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce: once,
  })

  // Define the initial and animated states based on direction
  const getInitialStyles = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, transform: `translateY(${distance}px)` }
      case "down":
        return { opacity: 0, transform: `translateY(-${distance}px)` }
      case "left":
        return { opacity: 0, transform: `translateX(${distance}px)` }
      case "right":
        return { opacity: 0, transform: `translateX(-${distance}px)` }
      case "fade":
      default:
        return { opacity: 0 }
    }
  }

  const getAnimatedStyles = () => {
    return { opacity: 1, transform: "translate(0, 0)" }
  }

  // Combine styles based on intersection state
  const styles = isIntersecting
    ? {
        ...getAnimatedStyles(),
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: `${delay}ms`,
      }
    : {
        ...getInitialStyles(),
        transition: "none",
      }

  return (
    <div ref={ref} style={styles} className={cn(className)}>
      {children}
    </div>
  )
}
