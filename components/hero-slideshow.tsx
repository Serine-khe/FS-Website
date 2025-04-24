"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  image: string
  title: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
}

interface HeroSlideshowProps {
  slides: Slide[]
  autoplaySpeed?: number
  height?: string
}

export function HeroSlideshow({ slides, autoplaySpeed = 5000, height = "h-[500px]" }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToNextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToPrevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(goToNextSlide, autoplaySpeed)
    return () => clearInterval(interval)
  }, [autoplaySpeed])

  return (
    <div className={`relative ${height} overflow-hidden group`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image && slide.image.trim() !== "" ? slide.image : "/placeholder.svg?height=500&width=1000"}
            alt={slide.title || "Slide image"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
            <div className="max-w-4xl px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">{slide.title}</h1>
              {slide.subtitle && <p className="max-w-2xl mx-auto mb-8 text-sm md:text-base">{slide.subtitle}</p>}
              {slide.buttonText && slide.buttonLink && (
                <Link
                  href={slide.buttonLink}
                  className="inline-block bg-white text-[#205375] px-6 py-2 rounded-sm font-medium 
                  hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
                >
                  {slide.buttonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 transform hover:scale-110 transition-transform"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 transform hover:scale-110 transition-transform"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
