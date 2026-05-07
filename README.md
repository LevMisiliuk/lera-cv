# Lera CV

Single-page CV/portfolio site built with React and Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub push

This folder already has a Git repository. For the first push:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

If the remote already exists, check it with:

```bash
git remote -v
```

## Vercel deploy

This repo is configured for Vercel as a Vite static site:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

Recommended flow:

1. Push this repo to GitHub.
2. In Vercel, choose `Add New -> Project`.
3. Import the GitHub repository.
4. Confirm the detected settings above and deploy.

Vercel should pick these settings up automatically from `vercel.json`. You can also deploy from the CLI with:

```bash
npx vercel
```
