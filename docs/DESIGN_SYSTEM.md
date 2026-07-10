# ArtistOS — Design System

> Status: Foundational principles only. No components exist yet in this
> foundation-only init (shadcn/ui has not been installed). Fill in TODOs as
> visual identity is defined.
> Last updated: 2026-07-10.

## 1. Principles

- **Dark mode by default.** The product ships dark-first; light mode is an
  available override, not the primary experience. Implemented via
  `next-themes` (`defaultTheme="dark"`, `enableSystem`).
- **Mobile-first.** Every component and layout is designed for the smallest
  supported viewport first, then progressively enhanced with `sm:`/`md:`/`lg:`
  Tailwind breakpoints. No desktop-only layouts.
- **Token-driven, not hardcoded.** All color, spacing, and typography values
  come from Tailwind v4 `@theme` CSS variables in `globals.css`. No component
  hardcodes a hex value or magic pixel number that isn't a token.
- **Own the components.** UI primitives come from shadcn/ui, copied into
  `src/components/ui/` and owned by the codebase — not a black-box npm
  dependency. Customize freely; keep accessibility (Radix primitives) intact.

## 2. Color

> TODO: Define the actual brand palette. Until then, use shadcn/ui's default
> neutral theme as a placeholder — do not hand-roll colors ahead of a real
> brand decision.

| Token           | Purpose                     | Value |
| --------------- | --------------------------- | ----- |
| `--background`  | App background              | TODO  |
| `--foreground`  | Primary text                | TODO  |
| `--primary`     | Brand/action color          | TODO  |
| `--destructive` | Errors, destructive actions | TODO  |
| `--muted`       | Secondary surfaces/text     | TODO  |
| `--border`      | Dividers, input borders     | TODO  |

Both a dark and light value are required per token before either mode ships.

## 3. Typography

> TODO: Choose a type family and confirm licensing for commercial use.
> Placeholder scale below — validate against real content once defined.

| Token                  | Use                    |
| ---------------------- | ---------------------- |
| `text-xs` – `text-sm`  | Metadata, captions     |
| `text-base`            | Body copy              |
| `text-lg` – `text-2xl` | Section headings       |
| `text-3xl`+            | Page titles, marketing |

## 4. Spacing & Layout

- Use Tailwind's default spacing scale; do not introduce a custom scale
  without a documented reason.
- Standard content max-width and page padding: TODO — define once the app
  shell is built.

## 5. Components

> TODO: as shadcn/ui components are added (`npx shadcn add <component>`),
> document any project-specific conventions or variants here (e.g. custom
> `Button` variants, standard `Card` usage for dashboard widgets).

## 6. Accessibility

- Maintain WCAG AA contrast in both themes for all text/background pairs.
- All interactive elements must be keyboard-navigable and carry appropriate
  ARIA attributes — shadcn/ui (Radix-based) provides this by default; do not
  regress it with custom overrides.
- Respect `prefers-reduced-motion` for any animation.

## 7. Related Documents

- [architecture/overview.md](./architecture/overview.md) — theming implementation details
- [CODING_STANDARDS.md](./CODING_STANDARDS.md)
