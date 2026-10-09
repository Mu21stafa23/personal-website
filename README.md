# Mustafa Hamad ElAmin — Personal Website

My portfolio site: who I am, what I work with, a few projects, and how to reach me.

![Homepage preview](./docs/preview.jpg)

## Sections

- **Hero** — name, role, and quick links (LinkedIn, GitHub, email, WhatsApp)
- **About** — a short introduction and how I approach my work
- **Skills** — languages, frameworks and tools I use
- **Projects** — selected work with links to the code and live demos
- **Contact** — ways to get in touch

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
│   ├── Hero.tsx       # Top section with navigation
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx   # Edit the `projects` array to add or remove work
│   ├── Contact.tsx    # Contact links and footer
│   └── icons.tsx      # Menu icons used by the navigation
├── layout.tsx         # Page title, description and fonts
├── page.tsx           # Puts the sections together
└── globals.css
public/                # Images
```
