# Piyush Giri — Developer, Builder & Explorer

Hinglish all-in-one personal portfolio. Next.js App Router + TypeScript + Tailwind CSS 4 + custom CSS.
Inspired by a **light modern-brutalist visual direction** supplied by the project owner. All design elements are independently coded; no external theme or photo assets are copied.

## Local setup (Windows PowerShell)

```powershell
cd D:\desktop
# Extract the ZIP file into D:\desktop\piyush-portfolio
cd .\piyush-portfolio
npm install
npm run dev
```

Open http://localhost:3000 . For a production check run `npm run build`.

## What is implemented

- Responsive home page with strong typography, grid background and colored accents
- Light and dark theme toggle (local preference)
- About page, Work index, individual project case studies, and a separate live-site link for Laadli Shringaar
- Interactive *schematic* journey map: Rajasthan → Jaipur → Nashik
- Achievements, skills, astronomy, F1, music, Marvel and interests sections
- PM SHRI GSS school years, science-fair leadership and a short school-friendships section (first names only)
- Notes index and 2 original **editorial drafts** (review before publishing)
- Semantic navigation, focus states, basic SEO metadata
- Site runs without a database or backend (static content)

## Update content

- `src/data/portfolio.ts` — project details, profile, public links, skills, achievements, interests
- `src/data/notes.ts` — blog posts
- `src/app/page.tsx` — section layout and home hero
- `src/app/globals.css` — styling, colors, dark mode, responsive layouts
- `src/components/journey-map.tsx` — the three route stops and descriptions

### Before making public

1. Laadli Shringaar live link is included. Add your **other real** links in `src/data/portfolio.ts` (GitHub, Netlify friends website, and optional Reddit).
2. Verify the Indian Space Olympiad ranks and exhibition results, then upload certificate images if you choose.
3. Review and approve the two Notes drafts so they reflect your actual views; they are not assumed to be written by you.
4. Add a professional contact email if you want public enquiries; avoid private phone/address/school timetable.
5. Confirm hometown spelling; current map is illustrative, not actual GPS coordinates.
6. If you want the Blog/Notes hidden until approved, remove its header/home links and route links temporarily.

## GitHub (new personal repository)

```powershell
git init
git add .
git commit -m "Initial personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-NEW-REPO.git
git push -u origin main
```

Create an empty GitHub repository first and replace placeholders with your own names. No accounts, repositories or deployments were created by this ZIP.

## Vercel

- Go to https://vercel.com/new
- Import your personal GitHub repository
- Framework should be auto-detected as Next.js
- Root directory `./`; no environment variables are needed
- Deploy; Vercel supplies a `.vercel.app` domain
- Git push → auto-deploy on connected branch

## Safety and publishing notes

No school address, private phone number, login credentials, home address or private friends' full names are published. Project status distinguishes completed work from concepts and goals. No rocket/reactor instructions or offensive security details are included.

## Pending project URLs

Laadli Shringaar: https://laadli-shringaar-eight.vercel.app/ (present in Work cards and its case-study page). The Friends Webpage URL is still pending; set `identity.firstProjectUrl` in `src/data/portfolio.ts` once confirmed. A missing URL never renders a broken external button. Confirm exact official school naming before a public release.

## Detailed portfolio content (v1.3)
`/explore` now includes the long-form interview content: timeline, toolsets, electronics experiments, astronomy, achievements, case studies, workflow, personal interests and future directions. Update the arrays in `src/data/extended.ts`. The homepage and About page link to this section. Rankings and awards are self-reported pending certificates.
