import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from 'lucide-react'

interface BlogPostLayoutProps {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({
  title,
  date,
  imageSrc,
  imageAlt,
  children
}: BlogPostLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigace zpět */}
      <div className="mb-8">
        <Link href="/blog" className="flex items-center text-red-500 hover:text-red-600 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          <span>Zpět na blog</span>
        </Link>
      </div>

      {/* Hlavička článku */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-400 mb-4">Publikováno: {date}</p>
        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6">
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>

      {/* Obsah článku */}
      <div className="prose prose-lg prose-invert max-w-none">
        {children}
      </div>
    </div>
  )
}
