# Frontend Architecture

## Status
First greenfield implementation. No pre-existing repository was available, so the architecture below is the initial engineering baseline derived from the approved design documents.

## 1. Technology stack
- **Framework:** Next.js 15.5.4 App Router (baseline selected for this scaffold; not asserted as latest available release).
- **Language:** TypeScript, strict mode.
- **Rendering:** Static export (`output: "export"`).
- **Styling:** Global CSS + CSS custom-property design tokens. No utility framework.
- **Motion:** Native CSS transitions/animations plus a small IntersectionObserver client component. No animation dependency in the first pass.

## 2. Build system
Next.js build pipeline with static output in `/out`.

## 3. Styling architecture
- `src/styles/tokens.css`: colors, type scale, spacing, containers, motion curves.
- `src/styles/globals.css`: reset, global layout primitives and page styling.
- Components expose semantic class names and rely on the shared visual system.

## 4. Component architecture
- `layout/`: Header, Footer.
- `ui/`: Reveal, SectionHeading.
- `stories/`: StoryCard.
- Pages compose reusable primitives rather than duplicating markup.

## 5. Asset strategy
- First pass uses local abstract SVG placeholders so the build is self-contained.
- Final photography should be exported in AVIF/WebP/JPEG as appropriate with known intrinsic dimensions.
- Because Cloudflare Pages static export is the target, Next image optimization is disabled in this baseline; production images should be pre-optimized or served by an image CDN.

## 6. Font strategy
System sans-serif stack for the scaffold to avoid unlicensed font assumptions and external font requests. Replace with the approved licensed editorial family later, preferably self-hosted with WOFF2 subsets and `font-display: swap`.

## 7. Animation strategy
Essential motion only: CSS-based entrance, reveal and hover transitions. IntersectionObserver triggers once-per-section reveal. Reduced motion disables transforms and removes sequencing.

## 8. Responsive strategy
- Mobile-first CSS.
- Editorial breakpoints at ~720px and ~1024px.
- Desktop allows asymmetry and multi-column composition.
- Mobile collapses to a readable vertical narrative while retaining large type and full-width imagery.

## 9. Accessibility strategy
Semantic landmarks, single H1 per page, visible focus ring, keyboard-operable mobile menu, Escape-to-close, descriptive links, alt text in content records, reduced-motion support, and sufficient base contrast.

## 10. Performance strategy
No animation framework, no icon library, no remote fonts, static generation, minimal client JavaScript, explicit image dimensions through aspect-ratio containers, lazy-loaded non-critical media, and no continuous scroll listeners.

## 11. SEO strategy
Metadata API, canonical URLs, Open Graph/Twitter metadata, static sitemap and robots directives, semantic headings and JSON-LD Person structured data on the homepage.

## 12. Cloudflare Pages
- Build command: `npm run build`
- Output directory: `out`
- Node 22 recommended.
- No server runtime is required for this first pass.

## Decisions made for this implementation
1. Next.js + TypeScript.
2. Static export rather than SSR.
3. Native motion instead of GSAP/Framer Motion.
4. Local content data in TypeScript for the first pass.
5. No CMS until publishing workflow requirements are approved.

## Decisions still requiring approval
- Final typeface and licenses.
- Warm beige accent color.
- Final site language.
- Final photography, logos and project copy.
- Whether Memorias y Trayectorias remains a section/pillar or becomes a deeper archive product.
- Contact workflow and public contact details.


## Audiovisual coverage implementation

- `src/data/coverage.ts` stores audiovisual project metadata.
- `CoverageCard` is the reusable playback/presentation unit.
- `CoverageShowcase` renders the homepage featured + secondary layout.
- `/coverage/` provides the dedicated archive page.
- Video previews are local static assets, muted, looped only after explicit user playback, and use posters to avoid unnecessary network/render cost before interaction.
