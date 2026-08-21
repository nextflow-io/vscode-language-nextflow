---
version: alpha
name: Seqera
description: Visual identity for Seqera and Nextflow developer tooling
colors:
  primary: "#160F26"
  secondary: "#545555"
  tertiary: "#0DC09D"
  neutral: "#DDDEDE"
  surface: "#1E1829"
  surface-elevated: "#2A2236"
  mint: "#B6ECE2"
  mint-hover: "#86E0CE"
  border-teal: "#065647"
  on-primary: "#F5F5F5"
  on-tertiary: "#160F26"
typography:
  display:
    fontFamily: Degular
    fontSize: 2rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
  code:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  editor-selection:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
  dag-node:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px
  dag-node-hover:
    backgroundColor: "{colors.mint-hover}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px
  card:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 16px
  divider:
    backgroundColor: "{colors.neutral}"
    height: 1px
  node-border:
    backgroundColor: "{colors.border-teal}"
    height: 3px
---

## Overview

Seqera's visual identity pairs deep ink surfaces with Nextflow teal accents. The palette is tuned for scientific workflow tooling: readable code editors, calm sidebars, and clear hierarchy in DAG previews and webviews.

Use **tertiary** (`#0DC09D`) for interactive emphasis—buttons, focus rings, active list items, and Nextflow keywords. Use **primary** (`#160F26`) for body text on light surfaces and as the anchor for dark UI backgrounds. **Mint** tones (`#B6ECE2`, `#86E0CE`) support code blocks, DAG nodes, and secondary highlights without competing with the accent.

## Colors

The palette is rooted in Seqera's brand manual and the colors already used in this extension.

- **Primary (#160F26):** Ink — headlines, DAG labels, text on mint surfaces.
- **Secondary (#545555):** Muted chrome — connector lines, inactive UI, log metadata.
- **Tertiary (#0DC09D):** Nextflow teal — primary accent, CTAs, focus, keywords.
- **Neutral (#DDDEDE):** Light borders and dividers on dark surfaces.
- **Surface (#1E1829):** Editor and panel backgrounds in dark mode.
- **Surface elevated (#2A2236):** Inputs, hover states, elevated cards.
- **Mint (#B6ECE2):** Code blocks, DAG node fills, constant blocks.
- **Mint hover (#86E0CE):** Hover states on nodes and function names.
- **Border teal (#065647):** Strong borders on nodes and selection outlines.
- **On primary (#F5F5F5):** Primary text on dark surfaces.
- **On tertiary (#160F26):** Text on teal buttons and selections.

## Typography

Three typefaces from the [Seqera Brand Manual](https://brand.seqera.io/typography):

- **Degular** — display and marketing headings only; not used in the VS Code editor.
- **Inter** — UI labels, sidebar copy, and webview body text.
- **JetBrains Mono** — monospaced code in the editor, logs, and terminal output.

Prefer Regular weight. Use Bold sparingly for short emphasis.

## Layout

Spacing follows an 8px base grid:

- **sm (8px):** Tight padding inside buttons and compact list rows.
- **md (16px):** Section gaps in webviews and form fields.

Corner radii: **sm (4px)** for buttons and inputs; **md (8px)** for cards and panels.

## Components

- **button-primary:** Teal background with ink text. Used in Seqera Cloud webview actions.
- **editor-selection:** Teal-tinted selection in the VS Code theme; keeps selected code readable on dark surfaces.
- **DAG nodes:** Mint fill, teal-dark border, ink label — matches `buildMermaid.ts` fallbacks when theme tokens are unavailable.

## Do's and Don'ts

**Do**

- Use `#0DC09D` for accents, focus, and Nextflow language keywords.
- Inherit VS Code CSS variables (`--vscode-*`) in webviews so UI matches the active theme.
- Follow the [Nextflow trademark policy](https://github.com/nextflow-io/trademark) when using the Nextflow logo or wordmark.

**Don't**

- Flood large backgrounds with full-strength teal; reserve it for emphasis.
- Hard-code hex colors in webview components when a `--vscode-*` token exists.
- Use outdated brand assets; prefer [brand.seqera.io](https://brand.seqera.io/) or tokens defined here.
