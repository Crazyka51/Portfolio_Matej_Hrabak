/**
 * Generate Article Schema for blog posts
 * @param title - Article title
 * @param description - Article description/excerpt
 * @param datePublished - Publication date in ISO format
 * @param slug - Article URL slug
 * @param imageUrl - Featured image URL
 * @param tags - Article tags/keywords
 * @returns JSON-LD schema object
 */
export function generateArticleSchema({
  title,
  description,
  datePublished,
  slug,
  imageUrl = "/avatar.webp",
  tags = [],
}: {
  title: string
  description: string
  datePublished: string
  slug: string
  imageUrl?: string
  tags?: string[]
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.matejhrabak.eu"
  
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": description,
    "image": `${baseUrl}${imageUrl}`,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Person",
      "name": "Matěj Hrabák",
      "url": baseUrl,
    },
    "publisher": {
      "@type": "Person",
      "name": "Matěj Hrabák",
      "url": baseUrl,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/webovy-vyvojar/blog/${slug}`,
    },
    "keywords": tags.join(", "),
  }
}

/**
 * Component to render Article Schema in blog posts
 * Usage: <ArticleSchema title="..." description="..." ... />
 */
export function ArticleSchemaScript(props: Parameters<typeof generateArticleSchema>[0]) {
  const schema = generateArticleSchema(props)
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
