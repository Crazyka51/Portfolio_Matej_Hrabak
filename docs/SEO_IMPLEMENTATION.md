# SEO Implementace - Dokumentace

Tento dokument popisuje implementované SEO optimalizace a návod na jejich použití.

## 📋 Přehled implementace

### 1. Meta Tagy

Všechny klíčové stránky mají optimalizované meta tagy:

- **Title:** 48-55 znaků (optimální pro Google)
- **Description:** 140-160 znaků (zobrazí se kompletně v SERP)
- **Keywords:** Relevantní klíčová slova
- **Canonical URL:** Prevence duplicate content

### 2. Schema Markup (Structured Data)

#### Homepage (`/app/layout.tsx`)

Implementováno JSON-LD schema:
- **Person schema** - základní informace o Matěji Hrabákovi
- **ProfessionalService schema** - služby webového vývoje

#### Blog posty

Pro blog posty použijte utility funkci v `/app/lib/schema.tsx`:

```tsx
import { ArticleSchemaScript } from "@/app/lib/schema"

export default function BlogPost() {
  return (
    <>
      <head>
        <ArticleSchemaScript
          title="Váš článek"
          description="Popis článku"
          datePublished="2025-01-28"
          slug="slug-clanku"
          imageUrl="/images/article.webp"
          tags={["Next.js", "React", "TypeScript"]}
        />
      </head>
      {/* Obsah článku */}
    </>
  )
}
```

### 3. Hierarchie nadpisů

Dodržujte správnou hierarchii:
- **H1** - pouze jeden na stránce, hlavní nadpis
- **H2** - hlavní sekce
- **H3** - podsekce

Příklad:
```tsx
<h1>Matěj Hrabák - Expert na Next.js</h1>
<section>
  <h2>Moje Klíčové Služby</h2>
  <div>
    <h3>Frontend Development</h3>
    <h3>Backend Development</h3>
  </div>
</section>
```

### 4. Alt texty obrázků

Popisné alt texty (50-100 znaků) obsahující:
- Co je na obrázku
- Kontext/technologie
- Bez zbytečných slov jako "obrázek", "fotka"

**Špatně:**
```tsx
<Image alt="logo" />
```

**Dobře:**
```tsx
<Image alt="Nexos e-commerce šablona v Next.js a TypeScript - moderní eshop" />
```

### 5. Interní prolinkování

Používejte keyword-rich anchor texty:

**Špatně:**
```tsx
<Link href="/projekty">Klikněte zde</Link>
<Link href="/blog">Více</Link>
```

**Dobře:**
```tsx
<Link href="/projekty">moje portfolio projektů v Next.js a React</Link>
<Link href="/blog">blogu o Next.js, React a TypeScript</Link>
```

## 🎯 SEO Checklist pro nové stránky

Při vytváření nové stránky:

- [ ] Vytvořit `layout.tsx` nebo `page.tsx` s metadata
- [ ] Title: 48-55 znaků, obsahuje klíčové slovo
- [ ] Description: 140-160 znaků, obsahuje CTA
- [ ] Canonical URL v `alternates.canonical`
- [ ] Pouze jeden H1 tag
- [ ] Správná hierarchie H1 > H2 > H3
- [ ] Schema markup (pokud relevantní)
- [ ] Popisné alt texty pro obrázky
- [ ] Keyword-rich interní odkazy
- [ ] OpenGraph a Twitter meta tagy

## 📊 Klíčová slova

Primární klíčová slova pro cílení:
- Next.js
- React
- Webový Vývojář
- TypeScript
- Node.js
- Full-stack developer
- Matěj Hrabák

## 🔍 Nástroje pro testování

Po nasazení otestujte:

1. **Google Search Console**
   - Rich Results Test: https://search.google.com/test/rich-results
   - URL Inspection

2. **Schema Markup Validator**
   - https://validator.schema.org/

3. **Meta Tags Preview**
   - https://metatags.io/

4. **Lighthouse**
   - Chrome DevTools > Lighthouse > SEO audit

## 📝 Poznámky

- Canonical URLs se automaticky generují z `metadataBase` v Next.js
- Schema markup je vloženo přímo do HTML hlavičky
- Alt texty jsou optimalizovány pro čtečky obrazovky i SEO
- Interní odkazy pomáhají robotům mapovat strukturu webu

## 🚀 Další kroky

Pro další vylepšení SEO:
1. Přidat více článků do blogu s TechArticle schema
2. Implementovat BreadcrumbList schema pro navigaci
3. Přidat FAQ schema na relevantní stránky
4. Vytvořit sitemap.xml (Next.js to generuje automaticky)
5. Optimalizovat Core Web Vitals

---

**Poslední aktualizace:** 28. ledna 2025  
**Autor:** GitHub Copilot Agent
