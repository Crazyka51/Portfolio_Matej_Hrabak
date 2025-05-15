"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ChevronRight, Search } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // Extract all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  // Filter posts based on search query and active tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTag = activeTag ? post.tags.includes(activeTag) : true

    return matchesSearch && matchesTag
  })

  return (
    <div className="min-h-screen bg-[#010714] text-white">
      <WebDevNavbar />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-300">Články o webovém vývoji, moderních technologiích a best practices.</p>
        </motion.div>

        {/* Search and Tags */}
        <div className="mb-12">
          <div className="relative w-full max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Hledat články..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeTag === null ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Všechny
            </button>

            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  activeTag === tag ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && !searchQuery && !activeTag && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Nejnovější článek</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={filteredPosts[0].image || "/placeholder.svg"}
                  alt={filteredPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{filteredPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{filteredPosts[0].readTime} min čtení</span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{filteredPosts[0].title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{filteredPosts[0].excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {filteredPosts[0].tags.map((tag) => (
                    <span key={tag} className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/webovy-vyvojar/blog/${filteredPosts[0].slug}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Číst více <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            // Skip the first post if we're showing it as featured and there's no search or tag filter
            (searchQuery || activeTag ? filteredPosts : filteredPosts.slice(1)).map((post, index) => (
              <BlogPostCard key={post.slug} post={post} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">Žádné články neodpovídají vašemu vyhledávání.</p>
            </div>
          )}
        </div>
      </main>

      <WebDevFooter />
    </div>
  )
}

function BlogPostCard({ post, index }: { post: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all group"
    >
      <div className="relative h-48">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <Calendar className="mr-1 h-4 w-4" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <Clock className="mr-1 h-4 w-4" />
          <span>{post.readTime} min čtení</span>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag: string) => (
            <span key={tag} className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/webovy-vyvojar/blog/${post.slug}`}
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          Číst více <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

// Sample Data for blog posts
const blogPosts = [
  {
    title: "Jak optimalizovat výkon React aplikací",
    slug: "jak-optimalizovat-vykon-react-aplikaci",
    excerpt:
      "Praktické tipy a triky pro zlepšení výkonu vašich React aplikací, od memoizace až po lazy loading komponent.",
    image: "/placeholder.svg?height=192&width=384&text=React+Performance",
    date: "15. 4. 2025",
    readTime: 8,
    tags: ["React", "Performance", "Frontend"],
  },
  {
    title: "Next.js 15: Co je nového a proč byste měli upgradovat",
    slug: "nextjs-15-co-je-noveho",
    excerpt: "Přehled nových funkcí a vylepšení v Next.js 15 a jak je můžete využít ve svých projektech.",
    image: "/placeholder.svg?height=192&width=384&text=Next.js+15",
    date: "2. 4. 2025",
    readTime: 6,
    tags: ["Next.js", "Frontend", "JavaScript"],
  },
  {
    title: "TypeScript: Tipy pro efektivnější typování",
    slug: "typescript-tipy-pro-efektivnejsi-typovani",
    excerpt: "Pokročilé techniky typování v TypeScriptu, které vám pomohou psát bezpečnější a čitelnější kód.",
    image: "/placeholder.svg?height=192&width=384&text=TypeScript",
    date: "20. 3. 2025",
    readTime: 10,
    tags: ["TypeScript", "JavaScript", "Development"],
  },
  {
    title: "Tailwind CSS: Od skeptika k fanouškovi",
    slug: "tailwind-css-od-skeptika-k-fanouskovi",
    excerpt: "Moje cesta s Tailwind CSS a proč jsem změnil názor na utility-first přístup k CSS.",
    image: "/placeholder.svg?height=192&width=384&text=Tailwind+CSS",
    date: "5. 3. 2025",
    readTime: 7,
    tags: ["CSS", "Tailwind", "Frontend"],
  },
  {
    title: "Jak jsem implementoval GraphQL do existující aplikace",
    slug: "jak-jsem-implementoval-graphql",
    excerpt: "Praktický průvodce implementací GraphQL do existující REST API aplikace a výhody, které to přineslo.",
    image: "/placeholder.svg?height=192&width=384&text=GraphQL",
    date: "18. 2. 2025",
    readTime: 12,
    tags: ["GraphQL", "API", "Backend"],
  },
  {
    title: "Serverless funkce: Kdy je použít a kdy ne",
    slug: "serverless-funkce-kdy-pouzit",
    excerpt: "Výhody a nevýhody serverless architektury a kdy je vhodné ji použít ve vašich projektech.",
    image: "/placeholder.svg?height=192&width=384&text=Serverless",
    date: "3. 2. 2025",
    readTime: 9,
    tags: ["Serverless", "Architecture", "Cloud"],
  },
  {
    title: "Přístupnost webu: Proč je důležitá a jak ji zlepšit",
    slug: "pristupnost-webu-proc-je-dulezita",
    excerpt: "Praktický průvodce implementací přístupnosti do vašich webových projektů a proč by měla být prioritou.",
    image: "/placeholder.svg?height=192&width=384&text=Accessibility",
    date: "15. 1. 2025",
    readTime: 8,
    tags: ["Accessibility", "Frontend", "UX"],
  },
  {
    title: "Docker pro frontend vývojáře",
    slug: "docker-pro-frontend-vyvojare",
    excerpt: "Jak využít Docker pro konzistentní vývojové prostředí a zjednodušení nasazení frontend aplikací.",
    image: "/placeholder.svg?height=192&width=384&text=Docker",
    date: "2. 1. 2025",
    readTime: 11,
    tags: ["Docker", "DevOps", "Frontend"],
  },
]
