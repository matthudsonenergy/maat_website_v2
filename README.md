# MAAT Website Repo

This repo publishes the MAAT Energy site to GitHub Pages from the `docs/` directory.

## Repo Structure

- `maat_energy_investor_onepager.jsx`: source for the React landing page
- `src/`: minimal React app shell and local UI helpers
- `docs/`: GitHub Pages output and published static pages
- `in_progress/`: draft/source HTML working files
- `assets/`: shared source imagery and media

## Published Output

Files in `docs/` are what GitHub Pages serves at:

- `docs/index.html`: built landing page entry point
- `docs/assets/`: bundled JS and CSS for the landing page
- `docs/landfill-gas-opportunity.html`: static published page
- `docs/unified-platform.html`: static published page

## Source Files

The landing page is authored in:

- `maat_energy_investor_onepager.jsx`

The minimal app/runtime files are:

- `index.html`
- `src/App.jsx`
- `src/main.jsx`
- `src/styles.css`
- `src/components/ui/card.jsx`
- `src/components/ui/button.jsx`
- `vite.config.js`

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Build the production site into `docs/`:

   ```bash
   npm run build
   ```

## Publish Workflow

1. Update the landing page content in `maat_energy_investor_onepager.jsx`.
2. Run `npm run build`.
3. Commit the updated files in `docs/index.html` and `docs/assets/`.
4. Push to the branch GitHub Pages is using.

## GitHub Pages

The Vite build is configured with:

- `base: "/maat_website_v2/"`
- `outDir: "docs"`
- `emptyOutDir: false`

That means builds update the landing page output in `docs/` without removing the other published static HTML pages.

## Notes

- `docs/` is the deploy target.
- `in_progress/` remains the working area for non-published draft HTML.
- If bundled asset filenames in `docs/assets/` change after a build, commit both the new files and the updated `docs/index.html`.
