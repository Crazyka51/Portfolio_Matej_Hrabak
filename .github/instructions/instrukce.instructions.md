applyTo: "**/*.ts,**/*.tsx"
```
# Základní pokyny před zahájením generování kódu
- Před generováním kódu se ujisti, že jsi se seznámil s existujícím kódem a architekturou projektu složka app/ a všech podsložek - app/blog app/o-mne app/pojistovaci-poradce app/projekty app/schuzka app/sluzby app/webovy-vyvojar. Musíš mít jasný přehled o obsahu každého souboru v těchto složkách
- Každý soubor ve složce analyzuješ, nikdy nebudeš odhadovat co pravděpodobně bude v souboru. Musíš mít jasný přehled o obsahu každého souboru. To znamená projít všechny řádky v každém souboru  - toto je důležité pro pochopení struktury a logiky projektu.
- Důležité dodržet globální volání footer,header, a efekty na backgroundu.
- Po přečtení pokynů vypiš , že jsi si pokyny přečetl a rozumíš jim a konkrétně vypiš co jsi si zapamatoval a na co má být kladen důraz.
# Project coding standards for TypeScript and React

## Základní pokyny
- Při generování kódu vždy dodržuj čistý a přehledný styl.
používej **ESLint** a **Prettier** pro formátování kódu. Používej **ESLint** s pravidly pro TypeScript a React. 
- Analyzuj strukturu kódu a dodržuj konvence pro pojmenovávání proměnných, funkcí a komponent. 
- Vždy se nejprve seznam s existujícím kódem a architekturou projektu, než začneš generovat nový kód.
- Používej **TypeScript** a favorizuj funkcionální programovací principy, kde je to možné.
- Komentuj klíčové části kódu a udržuj dokumentaci aktuální.
- Pokud generuješ kód pro **React**, používej funkční komponenty a dodržuj pravidla pro **hooks**.
- Implementuj odpovídající testy a **error handling**.

---


applyTo: "**/*.tsx,**/*.ts"
## Pokyny pro TypeScript a React
- Používej **PascalCase** pro názvy komponent, interface a typ aliasy.
- Názvy proměnných a funkcí drž v **camelCase**; soukromé členy předcházej podtržítkem (`_`).
- Optimalizuj **error handling** pomocí `try/catch` bloků u asynchronních operací.
- Implementuj testy a validaci vstupů s využitím knihoven jako `react-hook-form` a `yup`.
- Udržuj kód modularizovaný a přehledný a řádně komentuj všechny důležité části. Pokud komentáře chybí, přidej je.
- Každá nová stránka má globálně definovaný layout, který se aplikuje na všechny stránky. Globálně je volán header,footer, není třeba je psát do každé stránky.
---

# Další pokyny pro projekt

## Dokumentace složek a souborů
- `app/` obsahuje hlavní stránky aplikace a jejich podsložky:
  - `blog/` obsahuje články a související obsah, například:
    - `cestovni-pojisteni-celorocni/` obsahuje informace o celoročním cestovním pojištění.
    - `cestovni-pojisteni-jak-se-spravne-pojistit-na-cesty/` obsahuje rady, jak se správně pojistit na cesty.
    - `investicni-strategie-pro-zacatecniky/` obsahuje tipy pro začátečníky v investování.
    - `penzijni-pripojisteni-a-sporeni-na-duchod/` obsahuje informace o penzijním připojištění a spoření na důchod.
    - `pojisteni-majetku-a-domacnosti/` obsahuje informace o pojištění majetku a domácnosti.
  - `o-mne/` obsahuje informace o autorovi nebo projektu, včetně animovaných stránek.
  - `pojistovaci-poradce/` obsahuje informace o pojišťovacím poradci a jeho službách.
  - `projekty/` obsahuje seznam projektů, včetně animovaných stránek a načítacích komponent.
  - `schuzka/` obsahuje stránku pro plánování schůzek s uživatelsky přívětivým rozhraním.
  - `sluzby/` obsahuje různé služby, například:
    - `bankovni-sluzby/` pro informace o bankovních službách.
    - `cestovni-pojisteni/` pro cestovní pojištění.
    - `firemni-pojisteni/` pro firemní pojištění.
    - `zivotni-pojisteni/` pro životní pojištění.
  - `webovy-vyvojar/` obsahuje informace o webovém vývojáři, včetně sekcí jako blog, kontakt, o mně a projekty.
- `components/` obsahuje znovupoužitelné komponenty, například:
  - `animated-background.tsx` pro animované pozadí.
  - `footer.tsx` a `navbar.tsx` pro globální navigaci a patičku.
  - `toast-notification.tsx` pro notifikace.
  - `ui/` obsahuje uživatelské komponenty jako `accordion.tsx`.
- `context/` obsahuje kontexty pro sdílení stavu mezi komponentami, například `toast-context.tsx` pro notifikace.
- `lib/` obsahuje pomocné knihovny a utility, například `utils.ts` pro obecné funkce.
- `utils/` obsahuje specifické utility, například:
  - `format-time.ts` pro formátování času.
  - `image-optimization.ts` pro optimalizaci obrázků.
- `public/` obsahuje statické soubory, například:
  - `images/` pro obrázky.
  - `placeholder-logo.svg` pro výchozí loga.
- `styles/` obsahuje globální styly, například `globals.css`.
- `hooks/` obsahuje vlastní React hooky, například:
  - `use-mobile.tsx` pro detekci mobilních zařízení.
  - `use-toast.ts` pro práci s notifikacemi.
- `assets/` obsahuje vlastní styly a další statické soubory, například `custom.css`.
- `scripts/` obsahuje skripty pro generování dokumentace nebo jiné automatizace, například `generate-docs.js`.

## Zásady pro práci s Tailwind CSS
- Používej utility třídy Tailwind CSS pro styling.
- Pokud je potřeba přidat vlastní třídy, uprav `tailwind.config.ts`.
- Vyhýbej se přetížení globálních stylů.

## Testování
- Používej `Jest` a `React Testing Library` pro testování komponent a stránek.
- Každá nová funkce nebo komponenta by měla mít odpovídající testy.

## Práce s knihovnami
- Dodržuj standardy pro knihovny jako `react-hook-form` a `yup`.
- Validace vstupů by měla být implementována konzistentně.

## Práce s animacemi
- Pro animace používej existující komponenty jako `animated-background.tsx` nebo `animated-counter.tsx`.
- Nové animace by měly být modularizované a znovupoužitelné.

## Optimalizace obrázků
- Používej `image-optimization.ts` pro optimalizaci obrázků.
- Obrázky ukládej do složky `public/images/`.

## Práce s kontextem
- Pro sdílení stavu mezi komponentami používej `toast-context.tsx` nebo vytvoř nový kontext.

## Práce s layoutem
- Nové stránky by měly používat globální layout definovaný v `app/layout.tsx`.
- Zajisti konzistenci mezi stránkami.

## Práce s assets
- Nové statické soubory ukládej do složky `public/`.
- Používej relativní cesty pro odkazování na assets.

## Práce s knihovnou `lib/utils.ts`
- Znovupoužitelné funkce by měly být přidány do `lib/utils.ts`.
- Před přidáním nové funkce zkontroluj, zda již podobná funkce neexistuje.
```

