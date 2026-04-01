# MAAT Website Context

## Project Summary

This repository is a small static website for MAAT.

- There is no app framework, build step, package manager, or component system.
- Pages are plain HTML files with inline CSS and inline JavaScript.
- `docs/` is the deploy target and should be treated as the published site.
- `in_progress/` contains draft/source HTML fragments and earlier working files.
- `assets/` contains shared images and SVGs.

## Repository Layout

- `README.md`: short repo-level notes and publish workflow
- `docs/index.html`: simple published navigation page
- `docs/landfill-gas-opportunity.html`: published landfill gas opportunity page
- `docs/unified-platform.html`: published platform/diagram page
- `in_progress/*.html`: draft sections and earlier source material
- `assets/*`: shared imagery and SVG inputs

## Current Working Style

The site currently favors:

- standalone pages instead of reusable templates
- branded, presentation-style layouts
- inline datasets and browser-only rendering
- minimal dependencies, mostly Google Fonts and Google Charts

When editing, preserve that lightweight approach unless explicitly asked to refactor.

## Landfill Gas Page

Primary file:

- `docs/landfill-gas-opportunity.html`

What it is:

- A static MAAT market page built around a U.S. landfill gas map
- Uses `google.visualization.GeoChart`
- Embeds the landfill dataset directly in a large `const LANDFILLS = [...]`
- Computes summary metrics in client-side JavaScript

Current content direction:

- Speak in terms of `low-CI fuel`, not `silver methanol`, unless the user asks otherwise
- Emphasize scale, concentration, deployment readiness, and feedstock quality
- Avoid meta-copy like “this page frames...” or “this page shows...”
- Prefer customer-facing/partner-facing messaging over internal messaging notes

Current map behavior:

- Marker size is based on `uncommittedLfg`
- Marker color is based on `availableMethane`
- Magnifying glass is disabled
- Tooltip is configured as an HTML tooltip
- Tooltip should show landfill-focused business info, not latitude/longitude

Current tooltip intent:

- Bold landfill name
- City, state
- Methane feed
- CO2 feed

If tooltip customization appears not to work in the browser, the likely constraint is Google GeoChart tooltip behavior rather than the dataset.

## Messaging Constraints

For this repo, recent user direction matters:

- Do not overuse technical-product naming in top-level marketing copy when a broader category works better
- Prefer `low-CI fuel` as the page-level product framing
- Use direct claims instead of explaining the page itself
- Focus on big numbers and impact
- Keep pages less interactive when the goal is company storytelling rather than analysis

## Data / Metrics Notes

The landfill page currently uses:

- `uncommittedLfg`
- `availableMethane`
- `availableCo2`
- state/city/name/coordinates

Units in the dataset are generally `mmscfd`.

The hero stat on the landfill page has been converted to:

- `billion scf/day`
- displayed with one decimal place

If changing displayed units, verify whether the change is:

- display-only
- or a real unit conversion across the page

## Editing Guidance For Agents

- Start by reading the specific file being edited; most logic is page-local.
- Assume styling and copy are intentionally page-specific.
- Avoid introducing frameworks or splitting files unless asked.
- Keep HTML/CSS readable; this repo is maintained directly in-page.
- If changing copy, maintain the MAAT brand direction already present on the page.
- If changing map logic, be careful with Google GeoChart limitations.
- If changing dataset-driven numbers, update both the displayed copy and the JS calculations if needed.

## Publish Workflow

Current expected workflow:

1. Edit draft/source content in `in_progress/` when appropriate.
2. Move finalized content into `docs/`.
3. Keep `docs/index.html` as the simple published entry page.
4. Publish from `docs/`.

## Safe Assumptions

Reasonable assumptions future coding agents can make:

- The repo is intentionally simple.
- The user is comfortable editing raw HTML.
- Marketing clarity matters more than engineering abstraction here.
- `docs/landfill-gas-opportunity.html` is an actively iterated page and likely the highest-change file.
