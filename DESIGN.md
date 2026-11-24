---
name: Ocupacional 3D
description: Tecnologia que se adapta às suas necessidades.
colors:
  filament-navy: "#000065"
  print-lime: "#B0F73D"
  print-lime-pressed: "#9EE82E"
  plate-white: "#FFFFFF"
  ink-black: "#000000"
  muted-navy: "#3B3B78"
  plate-mist: "#F2F3FA"
  layer-stripe: "#E3E5F4"
  on-navy-muted: "#D2D3F2"
  night-navy: "#00003D"
  night-muted: "#C9CAEE"
  error-red: "#B00020"
  night-error: "#FF9AA8"
typography:
  display:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 9.5cqi, 5rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.4rem + 1.6vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
rounded:
  sm: "0.125rem"
  pill: "1.75rem"
spacing:
  "1": "0.5rem"
  "2": "0.75rem"
  "3": "1rem"
  "4": "1.5rem"
  "5": "2rem"
  "6": "3rem"
  "7": "4.5rem"
components:
  button-primary:
    backgroundColor: "{colors.print-lime}"
    textColor: "{colors.filament-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.7em 1.35em"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.print-lime-pressed}"
    textColor: "{colors.filament-navy}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.filament-navy}"
    rounded: "{rounded.sm}"
    padding: "0.7em 1.35em"
    height: "3rem"
  button-secondary-hover:
    backgroundColor: "{colors.filament-navy}"
    textColor: "{colors.plate-white}"
  button-dark:
    backgroundColor: "{colors.filament-navy}"
    textColor: "{colors.plate-white}"
    rounded: "{rounded.sm}"
    padding: "0.7em 1.35em"
  input:
    backgroundColor: "{colors.plate-white}"
    textColor: "{colors.filament-navy}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 0.8rem"
    height: "3rem"
  whatsapp-fab:
    backgroundColor: "{colors.print-lime}"
    textColor: "{colors.filament-navy}"
    rounded: "{rounded.pill}"
    height: "3.5rem"
---

# Design System: Ocupacional 3D

## Overview

**Creative North Star: "Camada por camada"**

The site is built the way the devices are made: in layers, to measure. A white build plate carries full-width navy strata, each striped with fine horizontal layer lines, like a part seen from the side while it prints. Lime is the layer printing right now: it marks the one thing to read or do in each region, and never more than that.

Density is calm and legible before anything else. Text is large (18px body), line lengths are short, and every layout is built in rem with breakpoints in container queries, so the user's text-size control (100/115/130/150%) reflows the page rather than breaking it. Corners are almost square, rules are thick (3px), and depth comes from tone, never from shadows.

**Key Characteristics:**
- White ground, navy strata with layer lines, lime as the single "active" accent.
- Montserrat 800 for headings set in stacked lines; Atkinson Hyperlegible for every sentence.
- 3px rules and 2px corners; no cards with drop shadows.
- The signature: a device that builds itself layer by layer on load, and a step ruler that fills as you scroll.

## Colors

A three-ink brand palette (navy, lime, white, plus black) used at page scale: navy owns whole bands, lime owns one element per region.

### Primary
- **Filament Navy** (#000065): text on light grounds (17.7:1), the full-width strata, the toolbar, dark buttons, borders and focus rings on light grounds.
- **Print Lime** (#B0F73D): primary buttons, the highlight band under key words, step markers, the role tag, the "Cursos" band. Always carries navy (13.7:1) or black (16.2:1) text.

### Neutral
- **Plate White** (#FFFFFF): page ground; text on navy strata.
- **Muted Navy** (#3B3B78): secondary text on white (10.1:1) and on Plate Mist (9.1:1).
- **Plate Mist** (#F2F3FA) and **Layer Stripe** (#E3E5F4): the contact band and photo placeholders, striped like print layers.
- **On-Navy Muted** (#D2D3F2): secondary text on navy (12.1:1).
- **Night Navy** (#00003D) and **Night Muted** (#C9CAEE): page ground and secondary text in dark mode.
- **Ink Black** (#000000): footer ground; the high-contrast mode's text.
- **Error Red** (#B00020 light, #FF9AA8 dark): form errors, always with an icon and text.

### Named Rules
**The Navy-On-Lime Rule.** Text on lime is navy (or black in high contrast). White on lime is 1.29:1 and is never used.
**The One Active Layer Rule.** Lime marks one thing per region: the action or the phrase that matters. A second lime element in the same region means one of them is wrong.
**The Bordered Lime Rule.** Lime against white is 1.29:1, so every lime control on a light ground carries a 3px navy border to stay visible as a component.

## Typography

**Display Font:** Montserrat 800/700 (with Segoe UI, system-ui)
**Body Font:** Atkinson Hyperlegible 400/700 (with Segoe UI, system-ui)

**Character:** a confident, geometric headline voice paired with a body face designed for low vision; the slashed zero and distinct letterforms are a feature, not a quirk.

### Hierarchy
- **Display** (800, clamp(2.125rem, 9.5cqi, 5rem), 1.04): the hero headline only, set in stacked lines.
- **Headline** (800, clamp(1.875rem, 1.4rem + 1.6vw, 2.75rem), 1.15): section titles.
- **Title** (700, 1.375rem–1.625rem, 1.15): product, step, course and FAQ titles.
- **Body** (400, 1.125rem, 1.6): all running text, max 65ch. Section intros at 1.25rem.
- **Label** (700 Montserrat, 0.875–1.0625rem): buttons, nav, field labels, the facts list.

### Named Rules
**The Fits-At-150 Rule.** Large titles use `min(size, Ncqi)` so they fit at 320px with text at 150%; text that can't fit wraps or hyphenates, never pushes the page sideways.
**The No-Kicker Rule.** No small label above a heading. Numbers appear only where sequence matters (the five steps).

## Layout

Single column first, one 76rem max-width wrapper with a 1rem gutter (plus safe-area insets). Each section is an inline-size container; two-column arrangements switch on at container widths of 46–64rem (in rem, so they hold back when text is enlarged). Grid columns are always `minmax(0, 1fr)`. Vertical rhythm is 4.5rem between sections, 2rem from a section head to its content. The sticky accessibility toolbar sits on top; `scroll-padding-top` follows its real height, and `scroll-padding-bottom: 6rem` keeps focused elements clear of the WhatsApp button.

## Elevation & Depth

Flat. Depth is tonal: white plate, mist bands, navy strata, black footer. The only shadow is on the floating WhatsApp button (`0 0.375rem 1.25rem rgb(0 0 0 / 0.25)`), because it really does float over content.

**The Strata Rule.** Separate regions with a change of band, not with shadows or boxes.

## Shapes

Near-square corners (0.125rem) everywhere; the only round shape is the floating WhatsApp pill (1.75rem). Borders are thick, 3px (`--rule`, 4px in high contrast). Layer lines (0.05rem stripes every 0.5rem) are the recurring texture on navy bands and photo placeholders.

## Components

### Buttons
- **Shape:** near-square (0.125rem), 3px border, min height 3rem (3.5rem large).
- **Primary:** lime with navy text and navy border (lime border on navy bands).
- **Secondary:** transparent with a border in the current text color; fills on hover.
- **Dark:** navy with white text, used on the lime band.
- **States:** hover only behind `(hover: hover) and (pointer: fine)`; `:active` scales to 0.97 in 120ms; focus is a 4px outline offset 3px.

### Accessibility toolbar (signature)
Sticky navy bar: A− / A / A+ buttons (min 44px), the current level, and an "Alto contraste" toggle with `aria-pressed`. Sized up to 18px max so it always fits on one line; at the limits the button gets `aria-disabled` (keeps focus) and the live region says why.

### Cards / Containers
- **Product cards:** 3px navy frame, a 4:3 photo on top with a 3px rule below, body padding 1–1.5rem, button aligned to the bottom.
- **Channels panel:** navy with layer lines, lime icons, white underlined values.

### Inputs / Fields
- **Style:** white, 2px navy border, near-square, min height 3rem, text at least 16px.
- **Focus:** 4px outline in the focus color.
- **Error:** 3px Error Red border, icon + message below linked by `aria-describedby`, plus a summary at the top that receives focus.
- **Radios:** custom 1.5rem circles with a navy dot; native rendering in forced-colors mode.

### Navigation
Montserrat 700 links, min 44px tall; the current section gets a lime underline bar (0.3rem). Collapses into a "Menu" disclosure below a 74rem container.

### Print panel (signature)
Navy panel with a Z-ruler and a device made of rounded horizontal layers; layers appear bottom to top (32ms stagger, 520ms, strong ease-out), arriving lime and settling to white, with the top layer staying lime. Shown complete under reduced motion.

## Do's and Don'ts

### Do:
- **Do** put navy text on lime, always (13.7:1).
- **Do** give every lime control on white a 3px navy border.
- **Do** build sizes in rem and breakpoints in container queries, so the text-size control reflows the page.
- **Do** keep every touch target at 44×44px or more.
- **Do** use layer lines on navy bands and placeholders as the brand texture.

### Don't:
- **Don't** use white text on lime (1.29:1).
- **Don't** put a kicker or eyebrow label above a heading.
- **Don't** use drop shadows to separate content; change the band.
- **Don't** use lime for more than one element per region.
- **Don't** show hover effects without the `(hover: hover) and (pointer: fine)` gate.
