"use client"

import type React from "react"
import { useRef, useEffect, useCallback } from "react"
import type { ColorPalette } from "@/types"

interface AnimatedBackgroundProps {
  colors: ColorPalette
}

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ colors }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof window === "undefined") return

    canvas.width = window.innerWidth
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight)

    // Recreate particles on resize
    const particleCount = Math.min(70, Math.floor((canvas.width * canvas.height) / 15000))
    const accentColorRGB = hexToRgb(colors.accent)

    particlesRef.current = []
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(canvas, accentColorRGB))
    }
  }, [colors.accent])

  class Particle {
    x: number
    y: number
    radius: number
    vx: number
    vy: number
    color: string
    canvas: HTMLCanvasElement

    constructor(canvas: HTMLCanvasElement, accentColorRGB: { r: number; g: number; b: number } | null) {
      this.canvas = canvas
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.radius = Math.random() * 1.5 + 0.5
      this.vx = (Math.random() - 0.5) * 0.4
      this.vy = (Math.random() - 0.5) * 0.4
      this.color = `rgba(${accentColorRGB?.r || 255}, ${accentColorRGB?.g || 200}, ${accentColorRGB?.b || 87}, 0.8)`
    }

    update() {
      this.x += this.vx
      this.y += this.vy

      if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1
      if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }

  const connectParticles = useCallback(
    (ctx: CanvasRenderingContext2D, accentColorRGB: { r: number; g: number; b: number } | null) => {
      const maxDistance = 120
      const particles = particlesRef.current

      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5
            ctx.strokeStyle = `rgba(${accentColorRGB?.r || 255}, ${accentColorRGB?.g || 200}, ${accentColorRGB?.b || 87}, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    },
    [],
  )

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!ctx || !canvas) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const accentColorRGB = hexToRgb(colors.accent)
    const particles = particlesRef.current

    particles.forEach((particle) => {
      particle.update()
      particle.draw(ctx)
    })

    connectParticles(ctx, accentColorRGB)
    animationFrameRef.current = requestAnimationFrame(animate)
  }, [colors.accent, connectParticles])

  useEffect(() => {
    if (typeof window === "undefined") return

    resizeCanvas()
    animate()

    const handleResize = () => {
      resizeCanvas()
    }

    const observer = new MutationObserver(() => {
      const canvas = canvasRef.current
      if (canvas && canvas.height !== document.body.scrollHeight) {
        resizeCanvas()
      }
    })

    observer.observe(document.body, { attributes: true, childList: true, subtree: true })
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      observer.disconnect()
    }
  }, [resizeCanvas, animate])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    />
  )
}

export default AnimatedBackground
