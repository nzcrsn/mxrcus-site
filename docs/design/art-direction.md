# Art Direction

## Approved visual identity
**Cinematic Documentary Archive** — sophisticated, human, timeless and editorial.

## Typography
- Primary direction: modern grotesk / editorial sans-serif.
- Initial implementation uses a system sans-serif stack until the licensed final family is approved.
- Hero: fluid 64–160px.
- Page title: 56–96px.
- Section title: 36–64px.
- Body: 16–20px.
- Metadata: 12–14px, uppercase with generous tracking.

## Color
- Background: `#0A0A0A`
- Surface: `#171717`
- Primary text: `#F5F5F5`
- Secondary text: `#A0A0A0`
- Proposed accent: `#C8A97E` — **requires final approval**.

## Layout
- 12-column desktop grid; 4-column mobile logic.
- Strong asymmetry allowed, but navigation and reading order remain predictable.
- Full-bleed media may break the main content container.
- Large whitespace is part of the hierarchy.

## Radius and borders
- Small radii only: 4–8px.
- Media may be square or minimally rounded.
- Borders are thin and low-contrast.
- Avoid SaaS-style rounded card systems.

## Imagery
- Large-scale, authentic, cinematic photography.
- Strong crops are allowed when intentional.
- No heavy filters or decorative color effects.
- Placeholder imagery in the first implementation is temporary and must be replaced before production.

## Graphic language
Editorial labels, archive numbering, thin rules and restrained metadata.

## Do / Don't
**Do:** one strong image + clear title + quiet metadata.
**Don't:** dense thumbnail walls, decorative gradients, generic cards, multiple competing accent colors.

## Audiovisual coverage visual treatment

Coberturas & Transmisiones uses wide cinematic media on desktop, restrained play controls, editorial metadata and asymmetric project rhythm. It must not resemble a YouTube feed or a generic streaming dashboard. On mobile, media becomes a vertical 4:5 presentation to preserve visual impact and touch accessibility.

## Media library structure
Media files live under `public/media/`, grouped by purpose rather than a flat generic images/videos folder:
- `photography/hero.jpg` — homepage hero.
- `photography/retrato-marcos.jpg` — portrait on the About page.
- `photography/memoria-san-miguel.jpg` — Memorias y Trayectorias feature.
- `photography/frames/frame-01…04` — ordered visual archive frames.
- `video/coberturas/` — coverage clips, named for their event/project.
Keep original masters outside the deployable public folder when possible. Add web-ready derivatives for large photos and short, compressed muted preview videos for the static site. Never commit macOS `.DS_Store` files.
