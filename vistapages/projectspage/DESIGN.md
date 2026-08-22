---
name: VistaSolution
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#b0c6ff'
  on-secondary: '#002d6e'
  secondary-container: '#0068ec'
  on-secondary-container: '#f2f3ff'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e3e2e2'
  on-tertiary-container: '#646464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b0c6ff'
  on-secondary-fixed: '#001944'
  on-secondary-fixed-variant: '#00429b'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 96px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 120%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 120%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 140%
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: 0.1em
  mono-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 150%
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

This design system is built for a high-end digital solutions agency. The brand personality is authoritative, precise, and forward-looking. The aesthetic leans heavily into **High-Contrast Minimalism** with a **Futuristic Editorial** edge. 

The emotional goal is to evoke a sense of "quiet luxury" in tech—where the quality of the work is reflected in the restraint of the UI. This is achieved through:
- **Aggressive Whitespace:** Using space as a luxury commodity to frame content.
- **Architectural Layouts:** Strict adherence to grid structures and thin divider lines rather than shadows.
- **Monochromatic Dominance:** A deep, dark canvas that allows high-value typography and imagery to command attention.
- **Precision Detailing:** Micro-interactions and thin strokes (1px) that suggest a high level of craftsmanship.

## Colors

The palette is strictly curated to maintain a premium, nocturnal atmosphere. 

- **Primary Background (#050505):** A deep, near-black that provides the infinite canvas.
- **Surface & Secondary (#0B0B0B / #111111):** Used to create subtle structural differentiation without breaking the dark aesthetic.
- **Primary Text (#F5F5F5):** High-contrast off-white for maximum legibility and impact.
- **Accent (Electric Blue):** Used sparingly (less than 5% of the UI) for functional triggers or focus states, maintaining a professional restraint.
- **Borders (#252525):** The primary tool for layout definition. All borders are 1px and non-rounded.

## Typography

The typography system uses a tiered approach to reinforce the editorial feel. 

- **Headlines:** Set in **Hanken Grotesk**. Large sizes use tight letter spacing and heavy weights to create a "wall of text" impact that feels modern and confident.
- **Body:** Set in **Inter** for neutral, utilitarian readability across long-form content.
- **Labels & Data:** Set in **Geist** to lean into the futuristic/technical persona of the agency.

All headings should be treated as graphic elements. For display text, avoid widows and orphans strictly to maintain the block-like structural integrity of the design.

## Layout & Spacing

The layout is governed by a **Strict Editorial Grid**. 
- **Desktop:** 12-column grid with generous 64px side margins. 
- **Gaps:** Large vertical gaps (160px+) between major sections to allow the design to "breathe."
- **Alignment:** Use hard vertical lines. Elements should align strictly to the grid edges. 
- **Dividers:** Use 1px borders (#252525) to separate content blocks horizontally and vertically. Avoid using background color changes alone to define sections; the thin line is the primary separator.

## Elevation & Depth

This design system rejects traditional shadows and depth. It is **Flat but Layered**.

- **Tonal Layering:** Depth is communicated through color value shifts (e.g., #050505 to #0B0B0B).
- **Z-Index:** Content is conceptually flat on the screen. Overlays (modals/menus) should not use blur or heavy shadows, but rather a solid #111111 background with a crisp 1px border.
- **Glassmorphism (Restricted):** High-precision background blurs are permitted only for navigation bars to maintain context while scrolling, using a 20px blur and 80% opacity on the primary background color.

## Shapes

The shape language is **Strictly Geometric and Sharp**.
- **Corner Radius:** 0px for all primary components (buttons, cards, inputs).
- **Icons:** Use thin-stroke (1.5px) linear icons with sharp corners.
- **Images:** All imagery must be cropped to rectangular shapes. Avoid circles or organic masks.

## Components

### Buttons
- **Primary:** Solid #F5F5F5 background with #050505 text. Sharp corners. No shadow.
- **Secondary:** Transparent background, 1px border (#252525), #F5F5F5 text.
- **States:** On hover, the primary button shifts to the accent blue; the secondary button border brightens to #F5F5F5.

### Input Fields
- **Style:** Underline only (1px #252525) or full-outline sharp box.
- **Label:** Small-caps Geist font positioned above the field.
- **Focus:** Border color transitions to #F5F5F5 or accent blue.

### Cards
- **Structure:** No rounded corners. 1px border (#252525).
- **Content:** Large headline, small meta-label at the top. 
- **Interaction:** On hover, the border color should subtly brighten, or a thin 2px accent line should appear at the top edge.

### Lists
- Separated by 1px horizontal lines that span the full container width.
- Large spacing between list items (24px-32px).

### Navigation
- Minimalist top bar. Links are uppercase labels with tight tracking.
- Active state indicated by a 1px underline or a small "01", "02" index prefix in a mono font.