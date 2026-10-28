# Motion Specification

## Approved principles
- Motion reveals stories; it does not decorate them.
- Photography remains the protagonist.
- Stillness is intentional.
- Prefer opacity and transform-based motion.
- All essential behavior must respect `prefers-reduced-motion`.

## Timing
- Fast feedback: 150–250ms.
- Content transitions: 400–700ms.
- Hero/major transitions: 800–1500ms.

## Easing
- Entrances: smooth ease-out.
- Transformations: ease-in-out.
- No bounce, elastic or overshoot.

## Key animation specs

### Homepage load
- Trigger: initial page load.
- Elements: hero media, title, navigation, CTA.
- Initial: opacity 0; hero title translated ~24px down; media scale ~1.025.
- Final: opacity 1; transform none.
- Duration: media 1200ms; title 900ms; nav 600ms.
- Delay: media 100ms; title 350ms; nav 550ms; CTA 700ms.
- Easing: cubic-bezier equivalent to strong ease-out.
- Mobile: reduce transforms and delays by ~25%.
- Reduced motion: immediate layout + short opacity transition only.

### Section reveal
- Trigger: first viewport intersection.
- Initial: opacity 0, translateY 24px.
- Final: opacity 1, translateY 0.
- Duration: 650ms.
- Easing: ease-out.
- Stagger: 70–100ms for sibling cards.
- Reduced motion: opacity only or no transition.

### Story card hover
- Trigger: pointer hover/focus-visible.
- Media: scale 1 → max 1.035.
- Metadata/title: subtle opacity shift.
- Duration: 350–450ms.
- Mobile: no hover animation.
- Reduced motion: no scale.

### Mobile navigation
- Trigger: menu button.
- Element: overlay + links.
- Initial: opacity 0; links translateY 12px.
- Final: opacity 1; links at rest.
- Duration: overlay 250ms; links 350ms.
- Stagger: 40ms.
- Reduced motion: instant/open with opacity only.

## Essential animations
Hero entrance, section reveal, navigation state, story card feedback.

## Optional
Parallax, floating archive compositions, shared-element story transitions.

## Explicitly prohibited
Glitch, bounce, elastic motion, constant ambient movement, extreme zooming, novelty cursor effects, animation that blocks navigation or reading.

## Audiovisual coverage interactions

### Video preview playback
- Trigger: explicit user click/tap on the play control.
- Element: selected coverage preview video.
- Initial state: poster image / paused video.
- Final state: muted looping preview playback.
- Duration: native media playback; control state transition 200ms.
- Delay: none.
- Easing: editorial ease-out for control feedback only.
- Stagger: none.
- Scroll behavior: no autoplay on scroll.
- Mobile behavior: identical explicit tap behavior.
- Reduced-motion behavior: playback remains user-controlled; no decorative transform on controls.

Video previews must never autoplay with sound and must not introduce decorative motion unrelated to the footage itself.
