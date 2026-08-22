---
name: Architectural Noir
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#080808'
  on-primary-container: '#7a7878'
  inverse-primary: '#5f5e5e'
  secondary: '#bac3ff'
  on-secondary: '#001e91'
  secondary-container: '#0136e8'
  on-secondary-container: '#bac2ff'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#060809'
  on-tertiary-container: '#777979'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#dee0ff'
  secondary-fixed-dim: '#bac3ff'
  on-secondary-fixed: '#00105c'
  on-secondary-fixed-variant: '#002eca'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '600'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies an architectural and editorial approach to high-end technology. It moves away from common SaaS tropes, favoring a "near-black" aesthetic that evokes maturity, precision, and quiet confidence. The visual language is rooted in minimalism, utilizing structural integrity and generous negative space to signal premium quality.

The style is **Sophisticated Minimalism** with a focus on:
- **High-Contrast Depth:** Utilizing a deep charcoal foundation to make typography and sparse accents feel deliberate.
- **Structural Grid:** Every element is locked to a rigorous alignment, mirroring the precision of modern architecture.
- **Editorial Intent:** Using scale and whitespace to create a hierarchy that feels like a luxury technical journal rather than a traditional application.

## Colors
The palette is restricted to maintain a high-end, focused atmosphere.

- **Base (#080808):** The foundational "Near-Black." Used for the primary canvas to reduce eye strain and provide a void-like depth.
- **Accent (#3355FF):** "Electric Cobalt." Used exclusively for critical interactive elements and status indicators. It should never exceed 5% of the total screen real estate.
- **Typography Primary (#F5F5F5):** An off-white used for maximum legibility and high-contrast headings.
- **Typography Secondary (#888888):** A muted gray for metadata, borders, and supportive text to create a clear information hierarchy.

## Typography
The typography strategy pairings create a balance between editorial impact and technical precision.

- **Headlines (Sora):** Set with tight tracking and bold weights. The wide geometric structure of Sora provides the "Architectural" feel required for display text.
- **Body (Inter):** Chosen for its systematic neutrality and high legibility in dark environments.
- **Labels (JetBrains Mono):** Used for micro-copy, status labels, and technical data to reinforce the "Solutions" and "Technology" aspect of the brand.

## Layout & Spacing
The design system employs a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile.

- **The 12-Column Grid:** All content must align to a 12-column structure with 24px gutters. Large sections of "Dead Space" (empty columns) are encouraged to focus the user's attention.
- **Rhythm:** Use a base-4 unit for all internal padding and margins. 
- **Borders:** Separators should be 1px or 0.5px (where supported) using the secondary neutral color (#888888) at 20% opacity. This creates a "blueprint" feel.

## Elevation & Depth
In a dark, high-end UI, traditional shadows are replaced by **Tonal Layering** and **Subtle Outlines**.

- **Surface Tiers:** 
  - Level 0: Primary background (#080808).
  - Level 1: Elevated cards (#121212) with a 1px border at low opacity.
- **Glassmorphism:** Reserved exclusively for top-level navigation. Use a backdrop-blur of 12px with a 10% opacity fill of #F5F5F5.
- **Shadows:** Avoid soft, large-radius shadows. If depth is required, use a sharp 1px "stroke-shadow" or a very tight, 4px blur with 40% black opacity to slightly lift an element.

## Shapes
Shapes are intentionally sharp or only slightly softened to maintain a professional, engineered aesthetic.

- **Standard Elements:** Use a 4px (0.25rem) radius for buttons and input fields.
- **Large Containers:** Use an 8px (0.5rem) radius for main content cards.
- **Circular Elements:** Reserved only for avatars or specific status pips; never for primary buttons or cards.

## Components
Consistent component styling reinforces the "Vista" identity.

- **Buttons:** 
  - *Primary:* Electric Cobalt background, white text, 4px radius. No gradients.
  - *Secondary:* Transparent background, 1px #888888 border, white text.
- **Input Fields:** Bottom-border only or a very subtle 4-sided border (#888888 at 20%). Active state transitions the border to Electric Cobalt.
- **Cards:** No background fill (outline only) or a #121212 fill. Content should have generous internal padding (min 32px).
- **Chips/Labels:** Use JetBrains Mono text. Background should be a 10% opacity version of the text color.
- **Dividers:** Horizontal or vertical lines at 1px thickness, #888888 at 15% opacity. Never extend to the edge of the container; leave "breathing room."