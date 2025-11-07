"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, Search, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Příspěvky blogu
  const blogPosts = [
    {
      title: "Pojištění odpovědnosti: Proč je důležité a jak ho správně nastavit",
      excerpt:
        "Pojištění odpovědnosti vás chrání před finančními následky škod, které způsobíte jiným. Zjistěte, proč je nezbytné a jak ho správně nastavit.",
      image: "/images/liability-insurance.webp",
      date: "12. 6. 2025",
      readTime: 9,
      category: "Pojištění odpovědnosti",
      slug: "pojisteni-odpovednosti-proc-je-dulezite",
    },
    {
      title: "Investiční strategie pro začátečníky: Jak začít budovat své bohatství",
      excerpt:
        "Průvodce základními principy investování, různými typy investic a praktickými kroky, jak začít budovat své investiční portfolio.",
      image: "/images/investment-strategy.webp",
      date: "5. 6. 2025",
      readTime: 11,
      category: "Investice",
      slug: "investicni-strategie-pro-zacatecniky",
    },
    {
      title: "Penzijní připojištění a spoření na důchod",
      excerpt:
        "Jak se finančně zajistit na stáří, využít státní podpory a vybrat správnou investiční strategii pro důchodové spoření.",
      image: "/images/dashboard-project.webp",
      date: "22. 5. 2025",
      readTime: 10,
      category: "Penzijní připojištění",
      slug: "penzijni-pripojisteni-a-sporeni-na-duchod",
    },
    {
      title: "Pojištění majetku a domácnosti",
      excerpt:
        "Komplexní průvodce pojištěním nemovitosti a domácnosti pro maximální ochranu vašeho majetku před nepředvídatelnými událostmi.",
      image: "/images/home-insurance.webp",
      date: "15. 5. 2025",
      readTime: 8,
      category: "Pojištění majetku",
      slug: "pojisteni-majetku-a-domacnosti",
    },
    {
      title: "Cestovní pojištění: Jak se správně pojistit na cesty",
      excerpt:
        "Průvodce výběrem správného cestovního pojištění, které vás ochrání před nečekanými událostmi na vašich cestách.",
      image: "/images/travel-insurance.webp",
      date: "28. 5. 2025",
      readTime: 7,
      category: "Cestovní pojištění",
      slug: "cestovni-pojisteni-jak-se-spravne-pojistit-na-cesty",
    },
    {
      title: "Jak správně nastavit životní pojištění",
      excerpt:
        "Průvodce nastavením životního pojištění, které skutečně chrání vás i vaši rodinu v případě neočekávaných událostí.",
      image: "/images/liability-insurance.webp",
      date: "15. 4. 2025",
      readTime: 8,
      category: "Životní pojištění",
      slug: "jak-spravne-nastavit-zivotni-pojisteni",
    },
    {
      title: "Investice vs. spoření: Co je výhodnější?",
      excerpt:
        "Porovnání různých investičních a spořících produktů a jejich výhod a nevýhod pro různé životní situace.",
      image: "/images/portfolio-allocation.webp",
      date: "2. 4. 2025",
      readTime: 10,
      category: "Investice",
      slug: "investice-vs-sporeni",
    },
    {
      title: "Pojištění majetku: Na co si dát pozor",
      excerpt:
        "Nejčastější chyby při sjednávání pojištění majetku a jak se jim vyhnout, abyste byli skutečně chráněni.",
      image: "/images/home_insurance_watchout.webp",
      date: "20. 3. 2025",
      readTime: 7,
      category: "Pojištění majetku",
      slug: "pojisteni-majetku-na-co-si-dat-pozor",
    },
    {
      title: "Penzijní připojištění: Jak začít",
      excerpt: "Kompletní průvodce penzijním připojištěním - od výběru fondu až po daňové výhody a státní příspěvky.",
      image: "/images/penzijko.webp",
      date: "5. 3. 2025",
      readTime: 9,
      category: "Penzijní připojištění",
      slug: "penzijni-pripojisteni-jak-zacit",
    },
    {
      title: "Chytré cestovní pojištění: Cestujte bez obav po celý rok",
      excerpt: "S celoročním cestovkem s opakovanými výjezdy.",
      image: "/images/travel-insurance.webp",
      date: "18. 2. 2025",
      readTime: 6,
      category: "Cestovní pojištění",
      slug: "cestovni-pojisteni-celorocni",
    },
    {
      title: "Pojištění odpovědnosti: Ochrana před finančními dopady nehod",
      excerpt:
        "Jak vás může pojištění odpovědnosti ochránit před vysokými finančními nároky v případě způsobení škody.",
      image: "/images/pojistka_na_blbost.webp",
      date: "3. 2. 2025",
      readTime: 8,
      category: "Pojištění odpovědnosti",
      slug: "pojisteni-odpovednosti-ochrana-pred-financnimi-dopady",
    },
  ]

  // Extrahujeme unikátní kategorie
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  // Filtrujeme příspěvky podle vyhledávání a kategorie
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory ? post.category === activeCategory : true

    return matchesSearch && matchesCategory
  })

  return (
    <main className="container mx-auto px-4 py-12 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
      >
        Blog o pojištění a financích
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
      >
        Užitečné informace, tipy a rady ze světa pojištění, investic a osobních financí
      </motion.p>

      {/* Vyhledávání a filtry */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12"
      >
        <div className="relative w-full max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Hledat články..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#111827]/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              activeCategory === null
                ? "bg-red-600 text-white"
                : "bg-[#111827]/50 backdrop-blur-sm text-gray-300 hover:bg-[#111827]"
            }`}
          >
            Všechny
          </motion.button>

          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-[#111827]/50 backdrop-blur-sm text-gray-300 hover:bg-[#111827]"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Featured Post */}
      {filteredPosts.length > 0 && !searchQuery && !activeCategory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Nejnovější článek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#111827]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-red-500/30 transition-all shadow-lg">
            <div className="relative h-64 md:h-auto">
              <Image
                src={filteredPosts[0].image || "/placeholder.svg"}
                alt={filteredPosts[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60"></div>
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
                <span className="bg-red-900/30 text-red-300 px-2 py-1 rounded text-xs">
                  {filteredPosts[0].category}
                </span>
              </div>

              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link
                  href={`/blog/${filteredPosts[0].slug}`}
                  className="inline-flex items-center text-red-400 hover:text-red-300"
                >
                  Číst více <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          // Skip the first post if we're showing it as featured and there's no search or tag filter
          (searchQuery || activeCategory ? filteredPosts : filteredPosts.slice(1)).map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400 text-lg">Žádné články neodpovídají vašemu vyhledávání.</p>
          </div>
        )}
      </div>
    </main>
  )
}

// Blog Post Card Component
function BlogPostCard({ post, index }: { post: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-900/20 rounded-lg transform rotate-1" />
      <div className="relative z-10 bg-[#111827]/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-red-500/30 transition-colors shadow-lg">
        <div className="relative h-48">
          <Image 
            src={post.image || "/placeholder.svg"} 
            alt={post.title} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-400 mb-3">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <Clock className="mr-1 h-4 w-4" />
            <span>{post.readTime} min čtení</span>
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition-colors">{post.title}</h3>
          <p className="text-gray-400 mb-4">{post.excerpt}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-red-900/30 text-red-300 px-2 py-1 rounded text-xs">{post.category}</span>
          </div>

          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-red-400 hover:text-red-300">
              Číst více <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
