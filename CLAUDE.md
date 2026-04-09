# Portafolio Julián Arcos

Portafolio profesional de Julián Esteban Arcos (AI Engineer & Backend Developer) — Next.js 16 App Router con Tailwind v4, shadcn/ui y Notion como CMS/backend de contactos.

## Commands

- `npm run dev` — Servidor de desarrollo en localhost:3000
- `npm run build` — Build de producción
- `npm run start` — Servidor de producción
- `npx vercel` — Deploy preview
- `npx vercel --prod` — Deploy producción

## Tech Stack

Next.js 16 App Router + TypeScript strict + Tailwind CSS v4 + shadcn/ui + Notion API + Vercel

## Architecture

### Directory Structure
- `app/` — App Router: layout, page, API routes
- `app/api/contact/` — POST → escribe en Notion DB "Contactos Portafolio"
- `app/api/cv/` — GET → retorna URL del PDF desde Notion
- `components/sections/` — Una sección por archivo (Hero, About, Stack, Projects, AILab, Experience, Arcode, Certifications, Contact)
- `components/ui/` — shadcn/ui components
- `lib/notion.ts` — Cliente Notion + writeContact() + getCVUrl()

### Data Flow
- Formulario → POST /api/contact → lib/notion.ts writeContact() → Notion DB
- Botón CV → GET /api/cv → lib/notion.ts getCVUrl() → window.open(url)
- El resto es estático (Server Components, sin fetch en runtime)

### Key Patterns
- Server Components por defecto. Solo "use client" en: Navbar, Hero, Contact, ScrollReveal
- Todo acceso a Notion pasa por lib/notion.ts
- Tailwind v4: config en globals.css con @theme inline (no tailwind.config.ts)
- Brand colors: `bg-brand-primary`, `text-brand-accent`, etc.
- Custom utilities en globals.css: `.container-main`, `.slabel`, `.reveal`, `.pill-dark`

## Design System

### Colors (en globals.css @theme inline)
- `brand-primary: #2563EB` — botones, acentos
- `brand-primary-dark: #1D4ED8` — hover
- `brand-accent: #38BDF8` — cyan secundario
- `brand-dark: #060608` — fondo Hero/Experience/Footer
- `brand-dark-2: #0F172A` — fondo Projects/Contact
- `brand-success: #10B981` — badge disponible
- `brand-muted: #64748B` — texto secundario

### Typography
- Headings: Sora (var --font-sora), pesos 700–800, clase `.font-heading`
- Body: DM Sans (var --font-dm-sans), default del body
- Code/Labels: DM Mono (var --font-dm-mono), clase `.font-mono-brand`

## Environment Variables

| Variable | Descripción |
|----------|-------------|
| `NOTION_TOKEN` | Integration token (secret_...) |
| `NOTION_CONTACTS_DB_ID` | ID database "Contactos Portafolio" |
| `NOTION_RESUME_PAGE_ID` | ID página Resume con PDF |

## Reglas No Negociables

1. Todo contenido viene del borrador_portafolio.html — no inventar datos.
2. Formulario SIEMPRE escribe en Notion via /api/contact.
3. TypeScript strict — cero `any`.
4. Mobile-first responsive (breakpoint crítico: 900px / lg).
5. IDs Notion siempre desde process.env.
6. Un componente por sección, máximo 300 líneas.
