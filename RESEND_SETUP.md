# Nastavení Resend pro kontaktní formulář

## 1. Registrace na Resend

1. Navštivte [resend.com](https://resend.com)
2. Zaregistrujte se pomocí GitHub účtu nebo emailu
3. Ověřte svůj email

## 2. Získání API klíče

1. Po přihlášení přejděte na [API Keys](https://resend.com/api-keys)
2. Klikněte na "Create API Key"
3. Pojmenujte klíč (např. "Production Key")
4. Vyberte oprávnění: **Sending access**
5. Zkopírujte vygenerovaný klíč (začíná `re_`)

## 3. Přidání API klíče do projektu

1. Otevřete soubor `.env.local`
2. Nahraďte `your_resend_api_key_here` vaším skutečným API klíčem:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

## 4. Nastavení domény (důležité pro produkci!)

### Testovací režim (výchozí)
- V testovacím režimu můžete posílat pouze na ověřené emailové adresy
- Odesílatel je `onboarding@resend.dev`
- **Omezení**: 100 emailů denně

### Produkční režim (doporučeno)
1. Přejděte na [Domains](https://resend.com/domains)
2. Klikněte "Add Domain"
3. Zadejte vaši doménu (např. `matejhrabak.cz`)
4. Nastavte DNS záznamy podle instrukcí Resend:
   - **SPF záznam** (TXT)
   - **DKIM záznam** (TXT)
   - **DMARC záznam** (TXT) - volitelné

### Příklad DNS záznamů:
```
Typ: TXT
Host: @
Hodnota: v=spf1 include:_spf.resend.com ~all

Typ: TXT
Host: resend._domainkey
Hodnota: [hodnota z Resend dashboard]
```

5. Počkejte na ověření domény (může trvat až 48 hodin)

## 5. Úprava API route pro produkci

Po ověření domény upravte soubor `app/api/send-email/route.ts`:

```typescript
from: "Kontakt <kontakt@matejhrabak.cz>", // Změňte na vaši ověřenou doménu
to: ["matejhrabak@gmail.com"],
```

## 6. Testování

### Lokální testování:
```bash
pnpm dev
```

Navštivte `/webovy-vyvojar/kontakt` a otestujte formulář.

### Kontrola odeslaných emailů:
1. Přejděte na [Resend Dashboard](https://resend.com/emails)
2. Zkontrolujte záložku "Emails"
3. Zde uvidíte všechny odeslané emaily včetně statusu

## 7. Limity a ceny

### Free tier:
- 100 emailů denně
- 3,000 emailů měsíčně
- Testovací doména `onboarding@resend.dev`

### Pro tier ($20/měsíc):
- 50,000 emailů měsíčně
- Vlastní doména
- Žádná denní limita
- Webhook notifikace

## 8. Troubleshooting

### Email se neodeslal
1. Zkontrolujte API klíč v `.env.local`
2. Zkontrolujte konzoli pro chybové hlášky
3. Ověřte, že máte aktivní Resend účet

### Email dorazil do SPAMu
1. Ověřte SPF/DKIM záznamy
2. Přidejte DMARC záznam
3. Používejte vlastní ověřenou doménu

### Rate limit error
- V testovacím režimu je limit 100 emailů/den
- Přejděte na placený plán nebo počkejte do druhého dne

## 9. Bezpečnost

⚠️ **Důležité:**
- **NIKDY** necommitujte `.env.local` do Gitu
- `.env.local` je v `.gitignore`
- Používejte environment variables na produkčním serveru
- Pro Vercel: přidejte `RESEND_API_KEY` v Project Settings → Environment Variables

## 10. Další možnosti

### Přidání příloh:
```typescript
await resend.emails.send({
  // ... ostatní parametry
  attachments: [
    {
      filename: 'document.pdf',
      content: Buffer.from('...'),
    },
  ],
})
```

### Webhooky pro tracking:
1. Nastavte webhook URL v Resend dashboard
2. Sledujte události: delivered, opened, clicked, bounced

### React Email šablony:
```bash
pnpm add @react-email/components
```

Více informací: [resend.com/docs](https://resend.com/docs)
