### Osobní webová stránka Matěje Hrabáka




















Komplexní osobní webová stránka s dvojím profesním zaměřením - pojišťovací poradce a webový vývojář. Projekt je postavený na moderních technologiích s důrazem na responzivní design, výkon a uživatelský zážitek.

## 📑 Obsah

- [Přehled](#přehled)
- [Technologie](#technologie)
- [Požadavky](#požadavky)
- [Instalace](#instalace)
- [Příkazy](#příkazy)
- [Struktura projektu](#struktura-projektu)
- [Přidání nových komponent](#přidání-nových-komponent)
- [Přidání nových stránek](#přidání-nových-stránek)
- [Stylování](#stylování)
- [Řešení problémů](#řešení-problémů)
- [Optimalizace](#optimalizace)
- [Nasazení](#nasazení)
- [Přispívání](#přispívání)
- [Licence](#licence)


## 📋 Přehled

Projekt představuje osobní webovou stránku Matěje Hrabáka, která je rozdělena na dvě hlavní profesní sekce:

1. **Pojišťovací poradce** - sekce zaměřená na pojišťovací služby, včetně detailních stránek pro jednotlivé typy pojištění
2. **Webový vývojář** - moderní portfolio webového vývojáře s animacemi, projekty, blogem a kontaktním formulářem


Obě sekce mají vlastní navigaci, design a obsah, ale sdílejí společnou základní strukturu a komponenty.

## 🛠️ Technologie

Projekt využívá následující technologie a knihovny:

- **Next.js 14** - React framework s App Routerem
- **React 18** - JavaScript knihovna pro tvorbu uživatelských rozhraní
- **TypeScript** - Typový systém pro JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Knihovna pro animace
- **Lucide React** - Sada ikon
- **ESLint** - Nástroj pro statickou analýzu kódu
- **Prettier** - Formátovač kódu


## 📋 Požadavky

Pro správné fungování projektu potřebujete:

- Node.js 18.17.0 nebo novější
- npm 9.6.7 nebo novější (případně yarn/pnpm)
- Git


## 🚀 Instalace

Následujte tyto kroky pro instalaci projektu:

1. **Klonování repozitáře**


```shellscript
git clone https://github.com/Crazyka51/username/matej-hrabak-website.git
cd matej-hrabak-website
```

2. **Instalace závislostí**


```shellscript
npm install
# nebo
yarn install
# nebo
pnpm install
```

3. **Vytvoření .env souboru**


Vytvořte soubor `.env.local` v kořenovém adresáři projektu a přidejte potřebné proměnné prostředí:

```plaintext
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Spuštění vývojového serveru**


```shellscript
npm run dev
# nebo
yarn dev
# nebo
pnpm dev
```

Aplikace bude dostupná na adrese [http://localhost:3000](http://localhost:3000).

## 🔧 Příkazy

V projektu jsou k dispozici následující příkazy:

- `npm run dev` - Spustí vývojový server
- `npm run build` - Vytvoří produkční build
- `npm run start` - Spustí produkční build
- `npm run lint` - Spustí ESLint pro kontrolu kódu
- `npm run format` - Formátuje kód pomocí Prettier
- `npm run analyze` - Analyzuje velikost bundle pomocí @next/bundle-analyzer


## 📁 Struktura projektu

```plaintext
├── app/                      # Hlavní adresář aplikace (Next.js App Router)
│   ├── components/           # Sdílené komponenty
│   │   ├── navbar.tsx        # Navigace pro pojišťovacího poradce
│   │   ├── footer.tsx        # Patička pro pojišťovacího poradce
│   │   ├── webdev-navbar.tsx # Navigace pro webového vývojáře
│   │   └── webdev-footer.tsx # Patička pro webového vývojáře
│   ├── globals.css           # Globální styly
│   ├── layout.tsx            # Hlavní layout aplikace
│   ├── page.tsx              # Úvodní stránka
│   ├── pojistovaci-poradce/  # Sekce pojišťovacího poradce
│   │   └── page.tsx          # Hlavní stránka pojišťovacího poradce
│   ├── webovy-vyvojar/       # Sekce webového vývojáře
│   │   ├── page.tsx          # Hlavní stránka webového vývojáře
│   │   ├── projekty/         # Stránka s projekty
│   │   ├── o-mne/            # Stránka o vývojáři
│   │   ├── kontakt/          # Kontaktní stránka
│   │   └── blog/             # Blog sekce
│   ├── o-mne/                # Stránka o pojišťovacím poradci
│   ├── projekty/             # Projekty pojišťovacího poradce
│   ├── blog/                 # Blog pojišťovacího poradce
│   ├── galerie/              # Galerie pojišťovacího poradce
│   ├── schuzka/              # Stránka pro sjednání schůzky
│   └── sluzby/               # Služby pojišťovacího poradce
│       ├── generali-investice/
│       ├── pojisteni-majetku/
│       ├── pojisteni-mazlicku/
│       └── ...
├── public/                   # Statické soubory
├── .eslintrc.json           # Konfigurace ESLint
├── .gitignore               # Ignorované soubory pro Git
├── next.config.mjs          # Konfigurace Next.js
├── package.json             # Závislosti a skripty
├── postcss.config.js        # Konfigurace PostCSS
├── tailwind.config.ts       # Konfigurace Tailwind CSS
└── tsconfig.json            # Konfigurace TypeScript
```

## 🧩 Přidání nových komponent

### Vytvoření nové komponenty

1. Vytvořte nový soubor v adresáři `app/components/`
2. Importujte potřebné závislosti
3. Vytvořte a exportujte komponentu


Příklad:

```typescriptreact
// app/components/alert.tsx
import React from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

export default function Alert({ type, message }: AlertProps) {
  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  }[type];

  return (
    <div className={`${bgColor} text-white p-4 rounded-md`}>
      {message}
    </div>
  );
}
```

### Použití komponenty

```typescriptreact
import Alert from '@/app/components/alert';

export default function Page() {
  return (
    <div>
      <Alert type="success" message="Operace byla úspěšná!" />
    </div>
  );
}
```

## 📄 Přidání nových stránek

### Vytvoření nové stránky pro pojišťovacího poradce

1. Vytvořte nový adresář v `app/` nebo `app/sluzby/` podle typu stránky
2. Vytvořte soubor `page.tsx` v novém adresáři
3. Použijte existující komponenty (navbar, footer) pro konzistentní vzhled


Příklad:

```typescriptreact
// app/sluzby/nova-sluzba/page.tsx
import Link from "next/link"
import Image from "next/image"
import { Home, User, FolderKanban, FileText, ImageIcon, Star, ArrowRight, Check } from 'lucide-react'

export default function NovaSluzbaPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex justify-center">
          {/* Navigace */}
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Obsah stránky */}
      </main>

      <footer className="container mx-auto px-4 py-8 mt-24 border-t border-gray-800">
        {/* Patička */}
      </footer>
    </div>
  )
}
```

### Vytvoření nové stránky pro webového vývojáře

1. Vytvořte nový adresář v `app/webovy-vyvojar/`
2. Vytvořte soubor `page.tsx` v novém adresáři
3. Použijte komponenty `WebDevNavbar` a `WebDevFooter` pro konzistentní vzhled


## 🎨 Stylování

Projekt používá Tailwind CSS pro stylování. Hlavní konfigurace je v souboru `tailwind.config.ts`.

### Přidání vlastních barev

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#e63946',
        'custom-blue': '#1d3557',
      },
    },
  },
  plugins: [],
}
export default config
```

### Použití vlastních barev

```typescriptreact
<div className="bg-custom-red text-white">
  Vlastní červené pozadí
</div>
```

## ❓ Řešení problémů

### Problém: Stránka se nenačítá správně

**Řešení:**

1. Zkontrolujte, zda běží vývojový server
2. Vyčistěte cache Next.js: `rm -rf .next`
3. Restartujte vývojový server


### Problém: Chyba při instalaci závislostí

**Řešení:**

1. Zkontrolujte verzi Node.js: `node -v` (měla by být 18.17.0 nebo vyšší)
2. Smažte `node_modules` a `package-lock.json`: `rm -rf node_modules package-lock.json`
3. Znovu nainstalujte závislosti: `npm install`


### Problém: Animace nefungují správně

**Řešení:**

1. Zkontrolujte, zda je správně importována knihovna Framer Motion
2. Ujistěte se, že používáte správné komponenty a vlastnosti pro animace
3. Zkontrolujte konzoli prohlížeče pro případné chyby


### Problém: Obrázky se nezobrazují

**Řešení:**

1. Ujistěte se, že obrázky jsou ve složce `public`
2. Zkontrolujte, zda používáte komponentu `Image` z Next.js správně
3. Ověřte, že cesty k obrázkům jsou správné


## 🚀 Optimalizace

### Optimalizace obrázků

Projekt používá komponentu `Image` z Next.js pro automatickou optimalizaci obrázků. Pro placeholder obrázky používáme:

```typescriptreact
<Image
  src="/placeholder.svg?height=400&width=600&text=Text"
  alt="Alt text"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

### Lazy loading komponent

Pro lazy loading komponent můžete použít `dynamic` import z Next.js:

```typescriptreact
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('@/app/components/heavy-component'), {
  loading: () => <p>Načítání...</p>,
});
```

## 🌐 Nasazení

### Nasazení na Vercel

1. Vytvořte účet na [Vercel](https://vercel.com)
2. Propojte svůj GitHub repozitář s Vercel
3. Nastavte potřebné proměnné prostředí
4. Spusťte nasazení


### Nasazení na jiné platformy

Pro nasazení na jiné platformy (Netlify, AWS, atd.) je potřeba:

1. Vytvořit produkční build: `npm run build`
2. Spustit produkční server: `npm run start`
3. Nastavit správné proměnné prostředí


## 🤝 Přispívání

Pokud chcete přispět k projektu:

1. Forkněte repozitář
2. Vytvořte novou větev: `git checkout -b feature/nova-funkce`
3. Proveďte změny a commitněte je: `git commit -m 'Přidána nová funkce'`
4. Pushněte do své větve: `git push origin feature/nova-funkce`
5. Vytvořte Pull Request


## 📝 Licence

Tento projekt je licencován pod MIT licencí - viz soubor [LICENSE](LICENSE) pro detaily.

## 📞 Kontakt

Pro jakékoli dotazy nebo návrhy kontaktujte autora:

- Email: [matejhrabak@gmail.com](mailto:matejhrabak@gmail.com)
- GitHub: [github.com/username](https://github.com/Crazyka51/username)


---

© 2025 Matěj Hrabák. Všechna práva vyhrazena.
