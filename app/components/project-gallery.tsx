"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface ProjectGalleryProps {
  images: GalleryImage[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
    if (e.key === "Escape") setIsFullscreen(false)
  }

  return (
    <div className="w-full" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Main Gallery */}
      <div className="relative rounded-xl overflow-hidden mb-4 bg-gray-900/50 border border-gray-800">
        <div className="relative aspect-video w-full">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
            {images[currentIndex].caption}
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Toggle fullscreen"
        >
          <Maximize2 size={20} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            title={`View image ${index + 1}`}
            className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? "border-blue-500 scale-[1.02]"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image 
              src={image.src || "/placeholder.svg"} 
              alt={`Thumbnail ${index + 1}`} 
              fill 
              sizes="120px"
              className="object-cover" 
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={toggleFullscreen}
          >
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Close fullscreen"
            >
              <X size={24} />
            </button>

            <div className="relative w-full max-w-7xl h-full max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full h-full">
                <Image
                  src={images[currentIndex].src || "/placeholder.svg"}
                  alt={images[currentIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Fullscreen Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={30} />
              </button>

              {/* Caption */}
              {images[currentIndex].caption && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white py-2 px-4 rounded-lg text-center max-w-2xl">
                  {images[currentIndex].caption}
                </div>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white py-1 px-3 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
