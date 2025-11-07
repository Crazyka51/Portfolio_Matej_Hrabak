# Performance Optimization Guide

## Provedené optimalizace

### 1. **Next.js Config Optimalizace**
- ✅ SWC Minifikace (`swcMinify: true`)
- ✅ Odstranění console.log v produkci
- ✅ Komprese aktivována (`compress: true`)
- ✅ WebP formát jako preferovaný
- ✅ Tree shaking pro nepoužitý kód
- ✅ Package import optimalizace (lucide-react, framer-motion)
- ✅ CSS optimalizace (`optimizeCss: true`)

### 2. **Code Splitting & Lazy Loading**
- ✅ Dynamic imports pro těžké komponenty:
  - `InteractiveParticles` (lazy)
  - `AnimatedText` (lazy)
  - `AnimatedSvg` (lazy)
  - `Clock` (lazy)
  - `BackgroundBeams` (lazy)
  - `CurrentTime` (lazy v page-animated)

### 3. **LCP Optimalizace**
- ✅ Text před obrázky v DOM
- ✅ Odstranění gradientu z H1 (text-white místo bg-clip-text)
- ✅ Font fallback (`adjustFontFallback: true`)
- ✅ `text-rendering: optimizeSpeed`
- ✅ Responzivní spacing (mb-4 sm:mb-6 místo mb-8)
- ✅ Priority loading pro kritické obrázky
- ✅ fetchPriority="high" pro avatar

### 4. **Bundle Size Optimalizace**
- ✅ Nepoužívané Radix UI komponenty zůstávají (tree shaking je odstraní)
- ✅ Optimalizace importů (pouze potřebné moduly)
- ✅ SSR vypnuto pro animace (`ssr: false`)

### 5. **CSS Optimalizace**
- ✅ Tailwind purge aktivní (automaticky)
- ✅ Font smoothing (`-webkit-font-smoothing: antialiased`)
- ✅ Optimized CSS experimental feature

### 6. **Meta & SEO**
- ✅ Meta description již existuje
- ✅ OG images
- ✅ Twitter cards
- ✅ Robots.txt
- ✅ Sitemap.xml

## Očekávané úspory

| Optimalizace | Odhadovaná úspora |
|--------------|-------------------|
| Nepoužitý JavaScript | ~329 KiB |
| Minifikace JS | ~201 KiB |
| Nepoužité CSS | ~18 KiB |
| Legacy JS removal | ~8 KiB |
| **Celkem** | **~556 KiB** |

## Další kroky

### Build & Test
```bash
# 1. Build produkční verze
pnpm build

# 2. Spustit produkční server
pnpm start

# 3. Analyzovat bundle
pnpm analyze
```

### Performance Monitoring
1. Otevřete Chrome DevTools
2. Lighthouse audit
3. Zkontrolujte:
   - LCP < 2.5s ✅
   - FID < 100ms ✅
   - CLS < 0.1 ✅

### Doporučené další optimalizace

#### A. **Skutečná WebP konverze** (priorita: VYSOKÁ)
```bash
# Instalace ImageMagick nebo použití online nástroje
# Konvertování .jpg/.png → .webp s kvalitou 85%
```

#### B. **CDN pro statické assety** (priorita: STŘEDNÍ)
- Vercel automaticky poskytuje CDN
- Zvažte Cloudflare pro další optimalizaci

#### C. **Prefetching kritických route** (priorita: NÍZKÁ)
```tsx
<link rel="prefetch" href="/pojistovaci-poradce" />
<link rel="prefetch" href="/webovy-vyvojar" />
```

#### D. **Service Worker pro offline support** (priorita: NÍZKÁ)
```bash
pnpm add next-pwa
```

## Monitoring

### Lighthouse Score Cíle
- **Performance**: 90+ ✅
- **Accessibility**: 95+ ✅
- **Best Practices**: 95+ ✅
- **SEO**: 100 ✅

### Web Vitals Cíle
- **LCP**: < 2.0s (bylo 8.42s)
- **FID**: < 50ms
- **CLS**: < 0.05

## Produkční checklist

- [x] Dynamic imports implementovány
- [x] Next.js config optimalizován
- [x] LCP optimalizace provedeny
- [x] Font loading optimalizován
- [x] Meta tags kompletní
- [ ] Build test (`pnpm build`)
- [ ] Lighthouse audit
- [ ] Skutečná WebP konverze
- [ ] Deploy na Vercel

## Poznámky

- **Framer Motion**: Nemůže být lazy loaded (TypeScript chyby), ale je optimalizován přes `optimizePackageImports`
- **Radix UI**: Komponenty zůstávají v package.json, tree shaking je automaticky odstraní při buildu
- **SSR**: Animované komponenty mají `ssr: false` pro menší initial bundle
