# Hearth & Bean: Specialty Coffee Landing Page

A one-page landing site for a specialty coffee shop, built with Next.js (App Router), TypeScript and Ant Design.

## Getting started

Requires Node.js 18.18+ (20 LTS recommended).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # TypeScript only
```

## Structure

```
src/
├── app/               layout (fonts, AntD registry), page, global styles
├── components/
│   ├── common/        Logo, SectionHeading, Icon (client), Reveal (client)
│   ├── Providers/     AntdProvider: ConfigProvider theme + <App> for messages
│   ├── Navbar/        sticky header, scroll-spy, mobile Drawer + Menu (client)
│   ├── Hero/  About/  Features/  Experience/  Testimonials/  Footer/
│   ├── MenuSection/   server section + MenuGrid/MenuCard (client)
│   └── Contact/       server section + ContactForm (client, AntD Form validation)
├── data/              menu.ts, site.ts: all copy, images and contact details
├── theme/             AntD ThemeConfig with brand tokens
├── types/             shared TypeScript types
└── lib/               helpers (price formatting)
```

Sections are Server Components. Only parts that need state or browser APIs are marked `"use client"`.

## Customizing

- **Content:** edit `src/data/menu.ts` and `src/data/site.ts`. The address, phone and email are placeholders.
- **Colors:** `src/theme/themeConfig.ts` (AntD tokens) and the CSS variables in `src/app/globals.css`.
- **Contact form:** `ContactForm.tsx` currently simulates a submit. Replace the timeout with a call to a Route Handler or form service.
- **Images:** served from Unsplash via `next/image`. The allowed host is set in `next.config.ts`.
