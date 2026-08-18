# TNCCMG Site Redevelopment

React-based site reconstruction for the Master Gardeners of Cheatham County, Tennessee.

## Site Structure

- `/` Home
- `/events`
- `/executive-board`
- `/community`
- `/contact`

The app uses React Router with a shared navigation/footer layout, route-level metadata updates,
and SEO assets in [public/robots.txt](public/robots.txt) and [public/sitemap.xml](public/sitemap.xml).

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Deployment

This project uses Vite and is ready to deploy on Vercel as a static React site.
