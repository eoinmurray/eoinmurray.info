# eoinmurray.info

Personal site built with [Astro](https://astro.build), deployed to GitHub Pages at [eoinmurray.info](https://eoinmurray.info).

## Development

```sh
bun install
bun run dev    # http://localhost:3002
bun run build
```

Content lives in `src/content/pages/` as markdown files.

Page URLs use no trailing slash (for example, `/about`). Astro uses
`trailingSlash: 'never'` locally and builds pages as HTML files so GitHub Pages
can serve the same extensionless URLs without redirecting to a directory URL.
