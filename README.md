# Kevin Truong Portfolio

Personal portfolio website for Kevin Truong (Truong Tan Dung), built with Next.js App Router.

It showcases:

- Intro, About, Experience, Projects, and Contact sections
- A dedicated printable resume page
- Animated UI with Framer Motion and custom motion components
- Theme switching (light/dark)
- Contact form powered by Next.js Server Actions + Resend
- SEO metadata, sitemap, robots, JSON-LD, and web app manifest

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- next-themes
- Resend + React Email
- ESLint + Husky + lint-staged + Commitlint

## Routes

- `/` - Main one-page portfolio
- `/resume` - Resume page with print support
- `404` - Custom not-found page

Project metadata also includes support files:

- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`

## Project Structure

```text
src/
	app/
		page.tsx                # Home page sections container
		layout.tsx              # Global metadata, JSON-LD, theme provider
		resume/page.tsx         # Resume page UI + print action
		manifest.ts             # PWA manifest
		robots.ts               # Robots rules
		sitemap.ts              # Sitemap generation
	components/
		sections/               # Intro/About/Experience/Projects/Contact/Footer/Header
		motions/                # Reusable animation and card components
		server/
			action.ts             # Contact form server action (Resend)
			contact-template.tsx  # React Email template
		ui/                     # Shared UI primitives
	hooks/
		theme-provider.tsx
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create an environment file:

```bash
# .env.local
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Start development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Run development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contact Form Notes

- The contact form lives in the Contact section on the home page.
- Submission is validated with Zod in a server action.
- On success, an email is sent via Resend to `truongtandung.work253@gmail.com`.

If `RESEND_API_KEY` is missing or invalid, form submission will fail gracefully with an error message.

## Deployment

Deploy on Vercel (recommended) or any platform that supports Next.js.

Set these environment variables in production:

- `RESEND_API_KEY`
- `NEXT_PUBLIC_SITE_URL` (your deployed domain, e.g. `https://your-domain.com`)
