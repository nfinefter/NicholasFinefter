# Nicholas Finefter — Portfolio

A Spotify-inspired portfolio site for Nicholas Finefter. Projects, website case studies, and work experience are presented as playlists and albums, with interactive demos on detail pages and audience-specific home views (Recruiter, Client, Explorer).

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`). Choose a perspective on the landing screen, then browse home rows, search, library, and artist profile pages.

## Build for production

```bash
npm run build
npm run preview
```

## Editing portfolio content

Almost all copy, project metadata, skills, and browse layout live in a single data file:

**`src/data/portfolio.ts`**

Key exports:

- **`playlists`** — each entry is a project, website case study, experience role, or compilation (education). Fields include `slug`, `title`, `description`, `type`, `tags`, `tracks`, optional `links` (GitHub/live), and for experience items `employer` / `period`.
- **`skills`** — skill name, level (0–100), and category for the artist profile.
- **`browseRows`** — home page content rows and which playlist slugs appear in each.
- **`featuredByProfile`** — which playlist is featured on home for Recruiter, Client, and Explorer perspectives.
- **`profiles`** — perspective labels, greetings, and accents on the profile gate.
- **`contact`** — email, LinkedIn, and GitHub links on the artist page.

After editing `portfolio.ts`, save and the dev server will hot-reload. Add demo components under `src/components/playlist/demos/` and register the slug in `src/components/playlist/demos/index.tsx` if you want an interactive section on a playlist page.

Static assets referenced from playlists (e.g. homepage screenshots) go in **`public/`**.
