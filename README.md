# Nicholas Finefter | Portfolio

My portfolio, styled like Spotify. Projects, website work and jobs show up as playlists, some with small demos on the detail page. You pick Recruiter, Client or Explorer on the first screen and the home page reorders to match.

## Run locally

```bash
npm install
npm run dev
```

Open the URL the terminal prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Editing portfolio content

Nearly all the copy, project info, skills and home layout live in one file:

**`src/data/portfolio.ts`**

Key exports:

- **`playlists`**: every project, website, job and the education entry. Fields: `slug`, `title`, `description`, `type`, `tags`, `tracks`, optional `links`, and `employer` / `period` for jobs.
- **`skills`**: name, level and category for the artist page.
- **`browseRows`**: the home page rows and which playlists go in each.
- **`featuredByProfile`**: the featured playlist for each audience.
- **`profiles`**: labels, greetings and colors on the first screen.
- **`contact`**: email, LinkedIn and GitHub links.

The dev server reloads when you save. To add a demo to a playlist page, put a component in `src/components/playlist/demos/` and register its slug in `src/components/playlist/demos/index.tsx`.

Logos and screenshots go in **`public/`**.
