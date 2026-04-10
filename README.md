# MAAT Website Repo

This repo is organized into three working directories:

- `docs/`: published GitHub Pages files
- `in_progress/`: draft and source HTML files
- `assets/`: shared media assets and source imagery

## Current Structure

### `docs/`

Published pages:

- `index.html`: simple landing page for the published site
- `landfill-gas-opportunity.html`: landfill map page
- `unified-platform.html`: unified platform page

### `in_progress/`

Working files that are not directly published:

- `01_hero_platform_overview.html`
- `02_five_pillars.html`
- `03_unified_platform_diagram.html`
- `03_unified_platform_diagram.html.bak`
- `04_applications.html`
- `05_why_it_matters.html`
- `06_footer_cta.html`

### `assets/`

Shared source assets:

- `hero.png`
- `CO.svg`
- `co2.svg`
- `diatomic_hydrogen.svg`
- `graphene.svg`
- `graphene1.svg`
- `hydrocarbon.svg`
- `plasma.svg`
- `syngas.svg`

## Publish Workflow

1. Update the landing page content in `maat_energy_investor_onepager.jsx`.
2. Install dependencies with `npm install`.
3. Build the site with `npm run build`.
4. Commit the generated `docs/index.html` and `docs/assets/` files.
5. Publish GitHub Pages from the `docs/` folder.

## Notes

- Top-level working content is intentionally limited to `docs/`, `in_progress/`, `assets/`, and this `README.md`.
- `docs/` is the deploy target and receives the built landing page output.
- `in_progress/` is the source-of-truth area for drafts and non-published fragments.
