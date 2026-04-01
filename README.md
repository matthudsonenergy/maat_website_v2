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

1. Make edits in `in_progress/` and `assets/`.
2. Copy finalized pages into `docs/`.
3. Keep `docs/index.html` as the only page directory/navigation page.
4. Publish GitHub Pages from the `docs/` folder.

## Notes

- Top-level working content is intentionally limited to `docs/`, `in_progress/`, `assets/`, and this `README.md`.
- `docs/` is the deploy target.
- `in_progress/` is the source-of-truth area for drafts and non-published fragments.
