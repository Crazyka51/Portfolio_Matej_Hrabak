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
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
    title: "Next.js 15 - Co je nového?",
    slug: "nextjs-15-co-je-noveho",
    excerpt:
      "Podrobný průvodce nejnovější verzí Next.js 15. Objevte nové funkce, vylepšení a změny, které přináší tato aktualizace.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    date: "20. 1. 2025",
    readTime: 10,
    tags: ["Next.js", "React", "Framework"],
  },
  {
    title: "TypeScript tipy pro efektivnější typování",
    slug: "typescript-tipy-pro-efektivnejsi-typovani",
    excerpt:
      "Pokročilé techniky a best practices v TypeScriptu. Naučte se psát lepší a bezpečnější kód s využitím pokročilých TypeScript funkcí.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    date: "18. 1. 2025",
    readTime: 12,
    tags: ["TypeScript", "Best Practices", "Tipy"],
  },
  {
    title: "Web pro všechny = více zákazníků: Proč přístupnost není jen morálka",
    slug: "pristupnost-webu-proc-je-dulezita",
    excerpt: "15% populace má nějaké omezení. Ignorovat je = házet peníze oknem. Ukazuji, proč přístupnost není morální povinnost, ale chytrý byznys.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    date: "15. 1. 2025",
    readTime: 8,
    tags: ["Přístupnost", "UX", "Byznys"],
  },
  {
    title: "Tailwind CSS: Od skeptika k fanouškoví",
    slug: "tailwind-css-od-skeptika-k-fanouskovi",
    excerpt:
      "Moje cesta od odporu k Tailwind CSS až k tomu, že ho používám v každém projektu. Co mě přesvědčilo a proč byste mu měli dát šanci.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=300&fit=crop",
    date: "12. 1. 2025",
    readTime: 9,
    tags: ["Tailwind CSS", "CSS", "Styling"],
  },
  {
    title: "Jak optimalizovat výkon React aplikací",
    slug: "jak-optimalizovat-vykon-react-aplikaci",
    excerpt:
      "Praktické tipy a triky pro zrychlení React aplikací. Od lazy loading přes memoizaci až po optimalizaci re-renderů.",
    image: "/images/jakoptimalizovatreact.webp",
    date: "10. 1. 2025",
    readTime: 13,
    tags: ["React", "Optimalizace", "Performance"],
  },
  {
    title: "Serverless funkce: Kdy je použít a kdy ne",
    slug: "serverless-funkce-kdy-pouzit",
    excerpt:
      "Průvodce serverless architekturou. Zjistěte, kdy jsou serverless funkce ideální řešení a kdy je lepší zvolit tradiční přístup.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    date: "8. 1. 2025",
    readTime: 11,
    tags: ["Serverless", "Cloud", "Architektura"],
  },
  {
    title: "Docker pro frontend vývojáře",
    slug: "docker-pro-frontend-vyvojare",
    excerpt:
      "Vše, co potřebujete vědět o Dockeru jako frontend vývojář. Od základů kontejnerizace až po praktické použití v development workflow.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop",
    date: "5. 1. 2025",
    readTime: 14,
    tags: ["Docker", "DevOps", "Nástroje"],
  },
  {
    title: "Jak jsem implementoval GraphQL a proč to změnilo můj přístup k API",
    slug: "jak-jsem-implementoval-graphql",
    excerpt:
      "Moje zkušenosti s implementací GraphQL API. Výhody, nevýhody a porovnání s REST API na reálných projektech.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
    date: "2. 1. 2025",
    readTime: 15,
    tags: ["GraphQL", "API", "Backend"],
  },
  {
    title: "Rychlý web = více zákazníků: Proč rychlost rozhoduje o úspěchu",
    slug: "optimalizace-vykonu",
    excerpt:
      "Každá sekunda zpoždění znamená ztrátu zákazníků. Ukazuji reálná čísla a vysvětluji, proč rychlost webu není technický detail, ale byznysová nutnost.",
    image: "/images/jakoptimalizovatreact.webp",
    date: "10. 11. 2025",
    readTime: 12,
    tags: ["Rychlost", "UX", "Konverze"],
  },
  {
    title: "Jak vytvářím e-shopy: Můj přístup k úspěšnému online obchodu",
    slug: "ecommerce-reseni",
    excerpt:
      "Desítky vytvořených e-shopů mě naučily, co funguje a co ne. Sdílím svou filozofii tvorby e-shopů: od konzultace přes výběr technologie až po automatizaci a bezpečnost.",
    image: "/images/ecommerce-project.webp",
    date: "9. 11. 2025",
    readTime: 15,
    tags: ["E-commerce", "Byznys", "Konverze"],
  },
  {
    title: "Moderní web, který s vámi poroste: Proč technologie rozhoduje o budoucnosti",
    slug: "react-nextjs",
    excerpt:
      "Staré technologie vás omezují. Moderní řešení rostou s vaším byznysem. Vysvětluji, jak volím technologie podle potřeb projektu a proč to není jen technický detail.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    date: "8. 11. 2025",
    readTime: 10,
    tags: ["Moderní technologie", "Škálovatelnost", "Budoucnost"],
  },
  {
    title: "Design webu, který prodává: Proč vzhled rozhoduje o penězích",
    slug: "frontend-development",
    excerpt: "První dojem rozhoduje za 0,05 sekundy. Design není o tom, jak to vypadá - je o tom, jak to funguje a kolik to přinese zákazníků.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    date: "6. 11. 2025",
    readTime: 11,
    tags: ["Design", "UX/UI", "Konverze"],
  },
  {
    title: "Backend development: Síla, která stojí za každým webem",
    slug: "backend-development",
    excerpt:
      "Backend je mozek vaší aplikace. Bez kvalitního backendu je i nejhezčí web jen prázdná slupka. Vysvětluji, proč backend rozhoduje o úspěchu.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    date: "5. 11. 2025",
    readTime: 13,
    tags: ["Backend", "API", "Architektura"],
  },
]
