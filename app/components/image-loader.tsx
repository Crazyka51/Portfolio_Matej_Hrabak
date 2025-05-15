"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onLoadingComplete"> {
  fadeIn?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fadeIn = true,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Reset loaded state when src changes
  useEffect(() => {
    setIsLoaded(false)
  }, [src])

  return (
    <div className="relative overflow-hidden">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${fadeIn ? (isLoaded ? "opacity-100" : "opacity-0") : ""} transition-opacity duration-500`}
        onLoadingComplete={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  )
}
