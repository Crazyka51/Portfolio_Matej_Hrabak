// Utility functions for image optimization

/**
 * Generates a simple SVG placeholder for blurDataURL
 * @param width Width of the placeholder
 * @param height Height of the placeholder
 * @param color Background color of the placeholder
 * @returns Base64 encoded SVG
 */
export function generatePlaceholderSVG(width: number, height: number, color = "#202020"): string {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${color}"/></svg>`
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

/**
 * Calculates responsive sizes attribute for Next.js Image component
 * @param defaultWidth Default width of the image
 * @param breakpoints Breakpoints and corresponding widths
 * @returns Sizes attribute string
 */
export function generateSizesAttribute(
  defaultWidth: number,
  breakpoints: { [key: string]: number } = { "768px": 100 },
): string {
  const breakpointEntries = Object.entries(breakpoints)
    .map(([breakpoint, width]) => `(max-width: ${breakpoint}) ${width}vw`)
    .join(", ")

  return `${breakpointEntries}, ${defaultWidth}px`
}

/**
 * Optimizes image URL for different services
 * @param url Original image URL
 * @param width Desired width
 * @param quality Desired quality (0-100)
 * @returns Optimized image URL
 */
export function optimizeImageUrl(url: string, width: number, quality = 80): string {
  // Handle Unsplash images
  if (url.includes("unsplash.com")) {
    // Unsplash already has a built-in optimization API
    const baseUrl = url.split("?")[0]
    return `${baseUrl}?q=${quality}&w=${width}&auto=format&fit=crop`
  }

  // For other image sources, return the original URL
  return url
}
