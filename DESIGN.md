---
name: Academic Governance System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3f493f'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6f7a6e'
  outline-variant: '#becabc'
  surface-tint: '#006d30'
  primary: '#00652c'
  on-primary: '#ffffff'
  primary-container: '#15803d'
  on-primary-container: '#d3ffd5'
  inverse-primary: '#79db8d'
  secondary: '#4059aa'
  on-secondary: '#ffffff'
  secondary-container: '#8fa7fe'
  on-secondary-container: '#1d3989'
  tertiary: '#4f576d'
  on-tertiary: '#ffffff'
  tertiary-container: '#676f86'
  on-tertiary-container: '#f2f3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#95f8a7'
  primary-fixed-dim: '#79db8d'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#005323'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#264191'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
  code-table:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 3rem
---

## Brand & Style

This design system is engineered for the rigors of university accreditation, curriculum design, and compliance audits (ABET, NBA, UGC). The target audience spans university professors, department chairs, deans, and external accreditation auditors who manage high-density, multi-page course specifications, syllabus mapping matrices, and institutional learning outcomes.

The aesthetic fuses modern enterprise software utility with traditional institutional authority. It conveys impeccable precision, unwavering compliance, and intellectual rigor. The interface avoids frivolous decorations in favor of high-legibility typographic hierarchies, crisp grid structures, and clear state communication. 

Key attributes:
- **Authoritative & Scholarly:** Grounded in deep slate and academic navy, providing a dignified, institutional anchor.
- **Auditable & Clear:** Form fields, mapping tables, and validation diagnostics emphasize traceability, audit histories, and compliance statuses.
- **High-Density Efficiency:** Designed for intense desktop workflows featuring complex data tables, rubric builders, and split-pane document review modes without feeling cluttered.

## Colors

The palette establishes an unambiguous hierarchy balancing administrative authority, definitive actions, and precision feedback:

- **Primary Action (Academic Forest Green - `#15803D` / Hover `#16A34A` / Light Accent `#DCFCE7`):** Reserved for forward momentum: finalizing specifications, approving outcomes, running validation checks, and resolving compliance issues. Signifies institutional compliance, verified status, and success.
- **Secondary Institutional (Academic Navy - `#1E3A8A` / Surface `#EFF6FF`):** Represents governance, department-level classification, accreditation guidelines, and primary structural headers.
- **Structural Neutral & Text (Deep Slate / Dark Slate - `#0F172A`, `#1E293B`, `#334155`):** Provides sharp, ink-like contrast for dense academic text, table content, and structural sidebar chrome.
- **Canvases & Surface Containers (Pure White `#FFFFFF`, App Background `#F8FAFC`, Subdued Card `#F1F5F9`):** Pristine background planes that separate complex form groups and document previews.
- **Borders & Dividers (Soft Slate - `#E2E8F0` / Subtle `#CBD5E1`):** Precise 1px architectural lines defining tabular matrices and document margins.
- **Validation Signals (Semantic Feedback):**
  - **Error/Non-Compliant Crimson (`#DC2626`, Light `#FEF2F2`):** Flagging unaligned course outcomes, missing Bloom's taxonomy tags, or prerequisite loops.
  - **Warning/Pending Amber (`#D97706`, Light `#FEF3C7`):** Highlighting pending approvals, partial criterion matches, or incomplete syllabus components.
  - **Info Slate Blue (`#2563EB`, Light `#EFF6FF`):** Editorial revisions, historical versions, and auditor notes.

## Typography

The typographical foundation relies on **Inter** with native OpenType font features explicitly turned on: tabular figures (`tnum`), slashed zero (`zero`), and contextual alternates (`calt`). This guarantees that course credit weights, accreditation outcome codes (e.g., `ABET.SO.1`, `NBA.PO.4`), and audit scores align vertically without visual jitter across dense matrices.

**JetBrains Mono** is introduced as a targeted micro-font for technical outcome identifiers, course codes (`CS-4010`), and audit log timestamps.

Rules of execution:
- Headings use negative tracking to maintain crisp authority across academic document structures.
- Body copy is set at optimal measure (60–75 characters per line) in prose viewports, defaulting to 14px for general application density and 13px for dense data matrices.
- Micro-labels and uppercase category chips rely on deliberate positive tracking (`0.02em` to `0.04em`) to ensure instant recognizability at small scales.

## Layout & Spacing

The layout utilizes a structured 12-column fixed/fluid hybrid system optimized for standard administrative displays (1440px and 1920px viewports):
- **Fixed Persistent Sidebar:** 260px wide, housing institutional hierarchy (Institution -> Faculty -> Department -> Catalog -> Course Specification).
- **Core Workspace Area:** Spans the remaining canvas, fluidly accommodating two primary modes:
  1. *Full Matrix View:* 100% width data grid with frozen row headers for outcome correlation matrices (CLO-to-PLO mapping).
  2. *Split Verification Canvas:* 60% specification editor on the left and 40% live accreditation validation/rules inspector panel on the right.

### Rhythm and Spatial Rules
- Vertical and horizontal rhythm adheres to a strict 4px base increment.
- Structural layout margins sit at `2rem` (32px) on desktop to provide visual composure around dense academic texts.
- Component internal paddings default to compact metrics (`0.5rem` to `0.75rem`) to minimize page length in multi-section curricula while maintaining comfortable tap/click targets.

## Elevation & Depth

Visual hierarchy is constructed through **low-contrast architectural outlines and subtle ambient tonal layering**, avoiding dramatic or playful drop shadows. The software feels like a precise drafting desk for curriculum architecture.

- **Level 0 (Base Canvas):** `#F8FAFC`. The canvas layer where the document workspace resides.
- **Level 1 (Cards, Form Containers, Tables):** Solid `#FFFFFF` enclosed by a crisp `1px solid #E2E8F0` border. Zero shadow in rest state; gains a micro-ambient shadow (`0 1px 3px 0 rgba(15, 23, 42, 0.05)`) when active or editable.
- **Level 2 (Dropdowns, Rule Popovers, Flyout Drawers):** Background `#FFFFFF`, border `1px solid #CBD5E1`, with elevation `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Modal Dialogs & Accreditation Sign-Off Sheets):** Raised above an authoritative scrim (`#0F172A` at 40% opacity), bounded with `1px solid #94A3B8`, with elevation `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`.
- **Structural Insets:** Form inputs, mapping cell dropdowns, and search fields use subtle inverted depth via an inset border or micro-fill (`#F8FAFC` to `#FFFFFF` on focus) accompanied by a 2px `#15803D` focus ring.

## Shapes

This design system employs a **Soft (`1`)** shape language:
- Base elements (buttons, inputs, select triggers, table cells) feature a disciplined `0.25rem` (4px) corner radius.
- Cards, document preview frames, and panel drawers utilize an anchor radius of `0.375rem` (6px) to `0.5rem` (8px).
- Status badges and metadata tags retain squared-soft micro-radii (3px or 4px) rather than rounded pill designs, reinforcing the formal, institutional tone.
- Tabs and document navigation items utilize sharp 90° lower boundaries with 4px top corner radiuses, directly referencing physical academic binder tabs.

## Components

### Buttons
- **Primary Action (Validate, Submit for Accreditation, Sign-Off):** `#15803D` background, `#FFFFFF` text, `4px` radius, `0.5rem 1rem` padding, weight 600. Focus: `2px` offset with `#15803D` outer ring. Hover: `#16A34A`.
- **Secondary (Save Draft, Export Syllabus, Compare Revisions):** Transparent background, `1px solid #CBD5E1`, text `#1E293B`. Hover: `#F1F5F9`.
- **Danger (Reject Spec, Strip Alignment):** `#FEF2F2` background, `1px solid #FCA5A5`, text `#DC2626`. Hover: `#DC2626` background, `#FFFFFF` text.

### Badges & Status Indicators
- Structured metadata tags featuring micro-typography (`11px`, weight 600, uppercase letter-spacing).
- **Accreditation Compliant (ABET/NBA):** Light emerald background (`#DCFCE7`), deep emerald text (`#166534`), `1px solid #BBF7D0`.
- **Requires Revision:** Light crimson background (`#FEF2F2`), crimson text (`#991B1B`), `1px solid #FECACA`.
- **Pending Review:** Light amber background (`#FEF3C7`), amber text (`#92400E`), `1px solid #FDE68A`.
- **Draft Status:** Slate neutral background (`#F1F5F9`), slate text (`#475569`), `1px solid #E2E8F0`.

### Data Tables & Curriculum Mapping Matrices
- Alternating row zebra fills: odd rows `#FFFFFF`, even rows `#F8FAFC`.
- Sticky column headers with `#0F172A` text, `#F1F5F9` background, and `1px solid #CBD5E1` lower border.
- Cell padding: Compact `8px 12px` to accommodate high-volume data points without horizontal scrolling when feasible.
- Matrix intersection cells (e.g., CLO-1 mapped to PLO-3) use structured toggle indicators: empty cell (blank), direct alignment (Emerald filled dot with weight value "3"), moderate alignment (Emerald border ring with "2"), slight alignment (Slate ring with "1").

### Form Fields & Inputs
- Height: 36px default for high-density academic data entry.
- Surface: `#FFFFFF` fill with `1px solid #CBD5E1` border.
- Focus state: Border transforms to `#15803D` with a subtle `2px rgba(21, 128, 61, 0.15)` outline glow.
- Inline validation: Error notifications appear directly underneath the input in 12px `#DC2626` typography, pairing with a 1px crimson border.

### Status Stepper (Accreditation Workflow)
- Linear multi-step tracking: `Course Draft` → `Department Chair Review` → `Curriculum Committee` → `Dean Approval` → `Accreditation Ready`.
- Step indicators use sequential numbered squares (`24px x 24px`, radius 4px) interconnected by a 2px horizontal rule. Active: `#15803D` background with white text; completed: `#DCFCE7` background with `#15803D` checkmark; future: `#E2E8F0` background with `#64748B` text.

### Document Preview & Diff Inspection Elements
- Replicates an 8.5" x 11" paper aspect ratio centered on the `#F8FAFC` viewport with an explicit `1px solid #CBD5E1` boundary.
- Dynamic diff highlighting: Inserted accreditation competencies underlined in emerald (`#DCFCE7` background), deprecated course outcomes struck through in light crimson (`#FEE2E2` background).