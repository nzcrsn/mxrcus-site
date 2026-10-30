# UX/UI Specification

## Approved decisions
- Story-first, image-first information architecture.
- Minimal global navigation.
- Homepage hierarchy: Hero → Selected Stories → Brands → Memorias y Trayectorias → About → Contact CTA.
- Story detail hierarchy: Cover → Metadata → Introduction → Gallery → Credits → Related stories.
- Responsive behavior must preserve editorial hierarchy, not simply shrink desktop layouts.

## Information architecture
- Home
- Stories
  - Story detail
- Memorias y Trayectorias
- About
- Contact

## Main journeys
1. Brand/organization: Home → Selected work → Story → Contact.
2. Documentary audience: Home → Memorias y Trayectorias → Story → Follow/contact.
3. Event/private client: Home → Stories → Relevant project → Contact.

## Navigation model
Desktop: wordmark + Stories + Memorias + About + Contact.
Mobile: compact menu trigger, full-height overlay, keyboard-accessible and closable with Escape.

## Component requirements
Header, footer, hero, section heading, story card, story grid, metadata block, media/gallery block, brand list, CTA, accessible mobile menu.

## Accessibility
- Semantic heading order.
- Visible focus states.
- Keyboard operability.
- Meaningful alt text.
- `prefers-reduced-motion` support.
- Minimum touch target ~44px.

## Edge cases
- Missing metadata: omit the field rather than rendering empty labels.
- Failed images: maintain layout with neutral fallback background.
- No stories: display a concise editorial empty state.
- Long project titles: allow wrapping; never truncate critical titles.

## Open questions
- Final categories and launch stories.
- Contact form vs direct email/WhatsApp.
- Final site language.

## Approved UX extension — Coberturas & Transmisiones

- Add a dedicated `/coverage/` destination and a homepage audiovisual showcase.
- Homepage section hierarchy: one featured coverage video followed by secondary projects.
- Each coverage item exposes title, client/institution, year, location, type of coverage, role and a short description.
- Video previews must never autoplay with sound.
- Desktop may use a wide cinematic featured treatment; mobile becomes a vertical sequence with full-width media.
- The global navigation includes `Coverage`.

## Updated navigation and visual archive
- The global header uses a centered editorial capsule with stable ink-on-paper contrast; it does not rely on blend modes over photography.
- The mobile menu is a full-screen sibling overlay (not nested in the fixed header), with a visible close control, Escape-to-close, focus movement into the open menu, scroll locking, and working navigation links.
- The homepage includes a numbered photographic archive with scroll-linked frame reveals and a restrained brutalist graphic language: hard rules, oversized type, compact indexing and a stamped accent block.
