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

## Payment integration

Set `VITE_CHECKOUT_URL` in Vercel when the payment provider is ready. The primary call to action will route to that URL automatically.

## Vercel

The repository includes `vercel.json` with:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite to `index.html`
