# Struktura Projektů v Portfoliu

## 📋 Přehled

Tento dokument popisuje, jak jsou implementovány projekty ve webovém vývojářském portfoliu, včetně datových struktur, komponent a routing patterns.

## 🗂️ Struktura Souborů

```
/app/webovy-vyvojar/
  page.tsx                    # Hlavní stránka webového vývojáře
  /projekty/
    page.tsx                  # Seznam všech projektů (TODO)
    loading.tsx               # Loading state
    /moje-portfolio/
      page.tsx                # Detail projektu - Matěj Hrabák Portfolio
    /pavel-fiser/
      page.tsx                # Detail projektu - Pavel Fišer
    /salon-zuza/
      page.tsx                # Detail projektu - Salon Zuza
    /strawstav/
      page.tsx                # Detail projektu - Strawstav
```

## 📊 Datový Model Projektu

### Project Interface

```typescript
interface Project {
  title: string              // Název projektu
  description: string        // Krátký popis (1-2 věty)
  image: string             // URL obrázku preview (v /public/images/)
  category: string          // Kategorie (např. "Portfolio", "Firemní web")
  year: string              // Rok dokončení
  technologies: string[]    // Pole použitých technologií
  github: string            // URL GitHub repozitáře (může být prázdné)
  live: string              // URL živého webu
  detailUrl: string         // Interní URL na detail projektu
}
```

### Příklad dat (z page.tsx)

```typescript
const projects: Project[] = [
  {
    title: "Salon Zuza",
    description: "Moderní webové stránky pro kadeřnický salon s rezervačním systémem a prezentací služeb.",
    image: "/images/salonzuza-project.webp",
    category: "Profesionální portfolio kadeřnického salónu",
    year: "2023",
    technologies: ["PHP", "HTML", "CSS"],
    github: "",
    live: "https://salon-zuza.cz",
    detailUrl: "/webovy-vyvojar/projekty/salon-zuza",
  },
  {
    title: "Pavel Fišer",
    description: "Osobní webové stránky pro zastupitele MČ Praha 4 s prezentací aktivit a kontaktními informacemi.",
    image: "/images/fiserpavel-project.webp",
    category: "Profesionální portfolio",
    year: "2025",
    technologies: ["NextJS", "Node", "CSS", "TypeScript", "Tailwind CSS"],
    github: "",
    live: "https://fiserpavel.cz",
    detailUrl: "/webovy-vyvojar/projekty/pavel-fiser",
  },
  {
    title: "Straw Stav",
    description: "Firemní web pro stavební společnost s prezentací služeb, referencí a kontaktním formulářem.",
    image: "/images/strawstav-project.webp",
    category: "Firemní porfolio",
    year: "2025",
    technologies: ["NextJS", "Node", "CSS", "TypeScript", "Tailwind CSS"],
    github: "",
    live: "https://strawstav.cz",
    detailUrl: "/webovy-vyvojar/projekty/strawstav",
  },
  {
    title: "Matěj Hrabák",
    description: "Osobní portfolio a blog s prezentací služeb pojišťovacího poradce a webového vývojáře.",
    image: "/images/matejhrabak_portfolio.webp",
    category: "Portfolio",
    year: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "",
    live: "https://matejhrabak.cz",
    detailUrl: "/webovy-vyvojar/projekty/moje-portfolio",
  },
]
```

## 🎨 Komponenty

### ProjectCard Component

Komponenta pro zobrazení projektu na hlavní stránce:

```typescript
interface ProjectCardProps {
  project: Project
  index: number  // Pro staggered animation delay
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all group"
    >
      {/* Preview Image */}
      <div className="relative h-48">
        <Link href={project.detailUrl || "#"}>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </Link>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">
            {project.category}
          </span>
          <span className="mx-2">•</span>
          <span>{project.year}</span>
        </div>
        
        <Link href={project.detailUrl || "#"}>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        {/* Technologies & Links */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {project.technologies.map((tech: string, i: number) => (
              <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
```

**Použití:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <ProjectCard key={index} project={project} index={index} />
  ))}
</div>
```

## 📄 Detailní Stránka Projektu

### Struktura Detail Page

Každá detailní stránka projektu má konzistentní strukturu:

```tsx
export default function ProjectDetailPage() {
  // Gallery images pro ProjectGallery komponentu
  const galleryImages = [
    {
      src: "/images/project-screenshot-1.webp",
      alt: "Popis obrázku",
      caption: "Caption text"
    },
    // ... další obrázky
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#010714] text-white">
        <WebDevNavbar />

        <main className="container mx-auto px-4 py-16">
          {/* 1. Back Button */}
          <Link href="/webovy-vyvojar/projekty">
            <ArrowLeft /> Zpět na projekty
          </Link>

          {/* 2. Project Header */}
          <div className="mb-12">
            <motion.h1>{project.title}</motion.h1>
            
            {/* Technology badges */}
            <motion.div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">
                Next.js 14
              </span>
              {/* ... další technologie */}
            </motion.div>
            
            {/* External links */}
            <motion.div className="flex items-center space-x-4">
              <a href={liveUrl}>Navštívit web</a>
              <a href={githubUrl}>GitHub</a>
            </motion.div>
          </div>

          {/* 3. Project Gallery */}
          <motion.div className="mb-16">
            <h2>Ukázky projektu</h2>
            <ProjectGallery images={galleryImages} />
          </motion.div>

          {/* 4. Key Features */}
          <motion.div className="mb-16">
            <h2>Klíčové funkce</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature cards */}
            </div>
          </motion.div>

          {/* 5. Project Description (2 column layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Left column - Main description */}
            <motion.div className="lg:col-span-2">
              <h2>Popis projektu</h2>
              <div className="prose prose-lg prose-invert">
                {/* Detailní popis */}
              </div>
            </motion.div>

            {/* Right column - Technical details */}
            <motion.div>
              <h2>Technické detaily</h2>
              <div className="space-y-6">
                {/* Frontend technologie */}
                {/* Deployment */}
                {/* Doba realizace */}
                {/* Status */}
              </div>
            </motion.div>
          </div>

          {/* 6. Next Projects (Related projects) */}
          <motion.div className="border-t border-gray-800 pt-12">
            <h2>Další projekty</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Karty dalších projektů */}
            </div>
          </motion.div>
        </main>

        <WebDevFooter />
      </div>
    </PageTransition>
  )
}
```

### Použité Komponenty

#### 1. **WebDevNavbar** & **WebDevFooter**
- Navigace specifická pro webovou vývojářskou sekci
- Obsahuje odkazy na `/webovy-vyvojar/*` stránky

#### 2. **PageTransition**
- Wrapper pro plynulé přechody mezi stránkami
- Používá Framer Motion

#### 3. **ProjectGallery**
```typescript
interface ProjectGalleryProps {
  images: Array<{
    src: string
    alt: string
    caption: string
  }>
}
```

- Zobrazuje galerii obrázků projektu
- Implementuje lightbox pro zvětšení
- Responzivní grid layout

## 🎨 Styling Konvence

### Barevné Schéma Pro Projekty

```tsx
// Background
bg-[#010714]              // Hlavní pozadí (tmavší než insurance)

// Cards
bg-gray-900/50            // Card background
border-gray-800           // Default border
hover:border-blue-500/30  // Hover border

// Technology badges
bg-blue-900/50 text-blue-300      // Next.js, React
bg-purple-900/50 text-purple-300  // TypeScript, Backend
bg-green-900/50 text-green-300    // Tailwind, CSS
bg-amber-900/50 text-amber-300    // Framer Motion, WordPress
bg-red-900/50 text-red-300        // MDX, Database
bg-indigo-900/50 text-indigo-300  // Shadcn UI, Design

// Feature section colors
bg-blue-900/30 text-blue-400      // Primary features
bg-green-900/30 text-green-400    // Gallery/Images
bg-purple-900/30 text-purple-400  // Design/UX
bg-amber-900/30 text-amber-400    // Performance/Tech
```

### Responsive Grid

```tsx
// Project cards na hlavní stránce
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// Related projects na detail stránce
className="grid grid-cols-1 md:grid-cols-3 gap-6"

// Feature cards
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

## 🔗 Routing Struktura

```
/webovy-vyvojar                              # Hlavní stránka vývojáře
  → Zobrazuje 4 hlavní projekty

/webovy-vyvojar/projekty                     # Všechny projekty (TODO - neimplementováno)

/webovy-vyvojar/projekty/moje-portfolio      # Detail: Matěj Hrabák
/webovy-vyvojar/projekty/pavel-fiser         # Detail: Pavel Fišer
/webovy-vyvojar/projekty/salon-zuza          # Detail: Salon Zuza
/webovy-vyvojar/projekty/strawstav           # Detail: Strawstav
```

## 📸 Image Assets

### Umístění

```
/public/images/
  salonzuza-project.webp       # Preview Salon Zuza
  fiserpavel-project.webp      # Preview Pavel Fišer
  strawstav-project.webp       # Preview Strawstav
  matejhrabak_portfolio.webp   # Preview Matěj Hrabák
  pojistovaciporadce.webp      # Screenshot Matěj - homepage
  sluzby_p.webp                # Screenshot Matěj - služby
  blog.webp                    # Screenshot Matěj - blog
  omne_p.webp                  # Screenshot Matěj - o mně
```

### Image Optimization

```tsx
<Image
  src="/images/project.webp"
  alt="Descriptive alt text"
  fill                          // Pro cover images
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
  loading="lazy"               // Lazy load kromě above-the-fold
  quality={85}                 // Optimální kvalita
/>
```

## 🎭 Animace Patterns

### Staggered Cards Animation

```tsx
{projects.map((project, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}  // Stagger delay
  >
    {/* Card content */}
  </motion.div>
))}
```

### Sequential Section Animation

```tsx
{/* Header - delay: 0 */}
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

{/* Badges - delay: 0.1 */}
<motion.div
  transition={{ duration: 0.6, delay: 0.1 }}
>

{/* Links - delay: 0.2 */}
<motion.div
  transition={{ duration: 0.6, delay: 0.2 }}
>

{/* Gallery - delay: 0.3 */}
<motion.div
  transition={{ duration: 0.8, delay: 0.3 }}
>
```

### Hover Effects

```tsx
// Card hover
className="group hover:border-blue-500/30 transition-all"

// Image zoom on hover
className="transition-transform duration-500 group-hover:scale-105"

// Title color change
className="group-hover:text-blue-400 transition-colors"
```

## 📝 Přidání Nového Projektu

### Krok 1: Přidat do pole `projects` v `/app/webovy-vyvojar/page.tsx`

```typescript
const projects = [
  // ... existující projekty
  {
    title: "Nový Projekt",
    description: "Krátký popis projektu (max 2 věty)",
    image: "/images/novy-projekt-preview.webp",
    category: "Kategorie projektu",
    year: "2025",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/...",  // nebo ""
    live: "https://projekt.cz",
    detailUrl: "/webovy-vyvojar/projekty/novy-projekt",
  },
]
```

### Krok 2: Vytvořit složku a detail stránku

```bash
mkdir app/webovy-vyvojar/projekty/novy-projekt
```

### Krok 3: Vytvořit `page.tsx` v nové složce

Použij template z existujícího projektu (např. `moje-portfolio/page.tsx`) a uprav:

```tsx
export default function NovyProjektPage() {
  const galleryImages = [
    {
      src: "/images/novy-projekt-screen1.webp",
      alt: "Screenshot 1",
      caption: "Popis screenshotu"
    },
    // ... další screenshots
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#010714] text-white">
        <WebDevNavbar />
        
        <main className="container mx-auto px-4 py-16">
          {/* Implementace podle struktury výše */}
        </main>

        <WebDevFooter />
      </div>
    </PageTransition>
  )
}
```

### Krok 4: Přidat obrázky

```bash
# Přidat do /public/images/
novy-projekt-preview.webp    # Pro kartu na hlavní stránce
novy-projekt-screen1.webp    # Screenshots pro galerii
novy-projekt-screen2.webp
# ... další
```

### Krok 5: Přidat do "Related Projects"

V existujících projekt detail stránkách přidat kartu na nový projekt do sekce "Další projekty".

## 🔍 TODO & Vylepšení

### Chybějící Implementace

- [ ] `/webovy-vyvojar/projekty/page.tsx` - kompletní přehled všech projektů
- [ ] Filtrování projektů podle technologie
- [ ] Filtrování projektů podle kategorie
- [ ] Vyhledávání v projektech
- [ ] Pagination pokud projektů bude více než 12

### Možná Vylepšení

- [ ] Centralizovaná konfigurace projektů (JSON/database)
- [ ] API route pro projekty (`/api/projects`)
- [ ] MDX pro psaní project descriptions
- [ ] Automatické generování meta tagů pro SEO
- [ ] Social sharing preview images
- [ ] Testimonials od klientů
- [ ] Project metrics (návštěvnost, performance scores)

## 💡 Best Practices

### ✅ SPRÁVNĚ

```tsx
// 1. Konzistentní naming
detailUrl: "/webovy-vyvojar/projekty/nazev-projektu"  // kebab-case

// 2. Sémantické obrázky
alt="Konkrétní popis co je na obrázku"  // NE: "screenshot" nebo "image"

// 3. Lazy loading mimo above-the-fold
<Image loading="lazy" />

// 4. Proper link types
<Link href="/internal">Internal</Link>
<a href="https://external.com" target="_blank" rel="noopener noreferrer">External</a>

// 5. Technology badges consistency
<span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">
  Next.js 14
</span>
```

### ❌ ŠPATNĚ

```tsx
// 1. Nekonzistentní naming
detailUrl: "/webovy-vyvojar/projekty/NovyProjekt"  // PascalCase - ŠPATNĚ

// 2. Prázdné alt texty
alt=""  // Vždy vyplň popisný text

// 3. Všechny obrázky eager loading
<Image priority />  // Použij pouze pro above-the-fold

// 4. External link bez security
<a href="https://external.com">  // Chybí target a rel

// 5. Inline styles místo Tailwind
style={{ padding: "12px" }}  // Použij Tailwind classes
```

## 📚 Related Documentation

- [copilot-instructions.md](.github/copilot-instructions.md) - Obecné instrukce
- [frontend.instructions.md](.github/frontend.instructions.md) - Frontend specifické instrukce
- [docs-guide.md](docs-guide.md) - JSDoc dokumentace
- [PERFORMANCE.md](PERFORMANCE.md) - Performance optimalizace

---

**Poslední update**: 25. ledna 2026
