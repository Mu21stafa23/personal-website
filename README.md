# Mustafa Hamad ElAmin — Personal Website

My portfolio site: who I am, what I work with, a few projects, and how to reach me.

![Homepage preview](./docs/preview.jpg)

## Sections

- **Hero** — my name in English and Arabic, a one-line introduction, and my photo
- **About** — what I do and how I work
- **Skills** — languages, frameworks, tools and practices
- **Work** — selected projects with links to the code and live demos
- **Contact** — email, LinkedIn, GitHub and WhatsApp

## Design

A dark theme with one accent color. The palette and fonts are defined once in `app/globals.css`:

| Token | Value | Used for |
| :-- | :-- | :-- |
| `night` | `#0d1021` | Page background |
| `dusk` | `#151a30` | Contact section background |
| `line` | `#2a3050` | Dividers and borders |
| `sand` | `#f1eadb` | Main text |
| `haze` | `#a0a8c2` | Secondary text |
| `hibiscus` | `#f0527a` | Accent |

Headings use [Changa](https://fonts.google.com/specimen/Changa) and body text uses [Readex Pro](https://fonts.google.com/specimen/Readex+Pro). Both cover Latin and Arabic.

## Built with

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)

## Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
├── components/
│   ├── Navbar.tsx     # Top navigation and mobile menu
│   ├── Hero.tsx
│   ├── Section.tsx    # Shared layout for the sections below the hero
│   ├── About.tsx
│   ├── Skills.tsx     # Edit the `skillGroups` array
│   ├── Projects.tsx   # Edit the `projects` array to add or remove work
│   ├── Contact.tsx    # Contact links and footer
│   └── icons.tsx      # Menu icons used by the navigation
├── layout.tsx         # Page title, description and fonts
├── page.tsx           # Puts the sections together
└── globals.css        # Colors, fonts and the hero animation
public/                # Images
```
