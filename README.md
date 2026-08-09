# ontstoppinglimburg.be

Rank & rent site #3 uit het portfolio. Gebouwd volgens de playbooks
`rank-zonder-gbp` (local organic + AI-zichtbaarheid, geen Google Business Profile)
en `lokale-klantensite-bouwer`.

## Stack

Next.js 16 (app router) met `output: "export"` — volledig statische HTML.
Tailwind CSS v4. Geen client-side JavaScript nodig om de content te zien:
AI-crawlers (GPTBot, PerplexityBot, ClaudeBot) voeren geen JS uit, dus dit is
geen detail maar de basis van de hele strategie.

## Commando's

```bash
npm install
npm run dev      # lokaal op http://localhost:3000
npm run build    # statische export naar ./out
```

Deploy: `deploy-site.bat` (of `npx vercel --prod`).

## Structuur

- `lib/site.ts` — merknaam, telefoon, e-mail. **Telefoonnummer is nog een placeholder.**
- `lib/cities-a..d.ts` — 41 gemeenten/kernen met hyperlocale, gecontroleerde feiten
- `lib/services.ts` — 8 diensten met richtprijzen
- `lib/articles.ts` — 7 gidsen (kennisbank)
- `app/[gemeente]/page.tsx` — gemeentetemplate; de blokvolgorde komt uit
  `city.volgorde` zodat geen twee gemeentepagina's dezelfde opbouw hebben
- `public/robots.txt` — AI-crawlers expliciet toegelaten

## Openstaande punten voor livegang

1. Echt call-tracking nummer in `lib/site.ts` (nu `0800 00 000`)
2. E-mailadres `info@ontstoppinglimburg.be` effectief laten bestaan
   (FormSubmit in `components/LeadForm.tsx` moet één keer bevestigd worden)
3. DNS van ontstoppinglimburg.be naar Vercel
4. Google Search Console + Bing Webmaster Tools + sitemap indienen
5. IndexNow instellen (ChatGPT-zoek draait op de Bing-index)
6. Echte foto's zodra er een huurder is; nu bewust geen stockfoto's

## Contentregels

- Geen adres, geen verzonnen reviews, geen `aggregateRating` zonder echte reviews.
- Alle prijzen zijn richtprijzen uit gepubliceerde Belgische marktbronnen (2026).
- Elke gemeentepagina moet de verwisseltest doorstaan: vervang de gemeentenaam
  en de tekst moet fóut worden.
