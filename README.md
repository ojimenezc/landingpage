# Modern Software Engineering Landing Page

React landing page for the `Modern Software Engineering` ebook, built with Vite and ready for Vercel deployment.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Purchase link

The landing page defaults to the Amazon ebook URL:

```text
https://www.amazon.com/dp/B0H6T77MPR
```

Set `VITE_CHECKOUT_URL` in Vercel only if you want to override the purchase destination later.

## Vercel

The repository includes `vercel.json` with:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite to `index.html`
