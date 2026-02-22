# Portfolio

Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Features

- Work experience, education, skills, and projects sections
- Personal life routes for books, manga, and movies/series
- Live GitHub contribution activity via GitHub GraphQL API
- Spotify "last played / now playing" widget

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Environment Variables

Create a local env file:

```bash
cp .env.example .env.local
```

Required values:

- `GITHUB_TOKEN` (scope: `read:user`)
- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`

Spotify refresh token scopes:

- `user-read-recently-played`
- `user-read-currently-playing`

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - start production server
- `npm run lint` - run lint checks

## Deployment (Vercel Recommended)

1. Push repo to GitHub
2. Import project into Vercel
3. Add environment variables in Vercel Project Settings
4. Add custom domain (`hxsundr.dev`) in Vercel and configure DNS records at your registrar

## Notes

- Never commit secrets (`.env`, `.env.local`)
- Rotate tokens/secrets immediately if they were ever exposed
