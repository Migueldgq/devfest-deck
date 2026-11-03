# Agent Guide — DevFest Santiago de Compostela (`devfest-deck`)

This repository contains the complete presentation and live-demo environment for the talk **"Dándole 'manos' a tu IA con Chrome DevTools MCP"** by **Miguel García** (`Full stack AI-native engineer · Grupo Northius` & `Organizador · GDG A Coruña`) at **DevFest Santiago de Compostela**.

It is composed of two self-contained parts:
1. **The Presentation Deck (`deck/` + `src/beatdeck/`)**: Built with [beatdeck](https://github.com/borjaperfra/beatdeck) — a fixed 1920×1080 React stage where one click is one beat (`#scene.beat`), featuring live growing diagrams, presenter view (`?view=presenter` or key `P`), overview (`O`), and 100% offline bundling.
2. **The 3 Live-Demo Web Projects (`demos/`)**: Three isolated zero-dependency Node.js web apps (`localhost:4001`, `localhost:4002`, `localhost:4003`) designed to be audited and tested live from **Google Antigravity** using **Chrome DevTools MCP**.

---

## 1. Repository Layout

| Path | What | Edit? |
| --- | --- | --- |
| `deck/` | **The talk**: `deck.config.ts`, `scenes.ts` (beat map + speaker notes), `index.tsx`, `deck.css`, `scenes/01-Intro.tsx` .. `05-Close.tsx` | yes |
| `demos/` | **The 3 live demos**: `demo-1-analytics` (`:4001`), `demo-2-a11y` (`:4002`), `demo-3-network` (`:4003`), and unified launcher `start-all.mjs` | yes |
| `guion.md` | **The official talk script** (synced with `reference/guion.md` and Google Docs) | yes |
| `docs/` | `CONTENT-AUDIT.md` (source → beats mapping), `RUNBOOK.md` (stage checklist) | yes |
| `reference/` | Source material (`guion.md` and archived `legacy-slidev/`) — read-only reference | add only |
| `themes/` | `neutral.css` (default), `light.css` | copy |
| `src/beatdeck/` | The beatdeck engine — replaced by `npm run upgrade` | no |
| `skills/building-a-beatdeck/` | The beatdeck authoring skill and references | no |
| `scripts/` | `verify.mjs`, `shot.mjs`, `upgrade.mjs`, `check-offline.mjs` | no |

---

## 2. How to Initialize & Run Everything

### Prerequisites
- Node.js `>= 20`
- Install root dependencies once (for the `beatdeck` slides; the 3 demos in `demos/` use native `node:http` and require zero `npm install`):
  ```bash
  npm install
  ```

### Starting the Presentation Slides (`beatdeck`)
```bash
npm run dev            # Starts dev server at http://127.0.0.1:5173/#1.1
npm run present        # Builds and opens the offline production bundle locally (http://127.0.0.1:4173)
npm run build          # Typecheck + Vite bundle + offline check → dist/
npm run verify         # Walks all 25 beats forward, backward & from URL, checks layout → artifacts/verify/contact.png
npm run shot -- 3 4.2  # Quick screenshot + layout audit of specific scenes/beats → artifacts/shot/
```

**Stage Keyboard Shortcuts:**
- `→` / `↓` / `PageDown` / `Space` / Click: Next beat
- `←` / `↑` / `PageUp`: Previous beat
- `1` – `5`: Jump to Scene 01–05
- `P`: Open synchronized Presenter Window (current beat, next beat, speaker notes from `guion.md`, timer)
- `O`: Overview grid of all scenes and beats
- `B`: Blackout screen
- `F`: Fullscreen

---

### Starting the 3 Live Demos (`demos/`)

You can start **all 3 demos simultaneously** from the repository root with a single command:

```bash
npm run demos
# or directly:
node demos/start-all.mjs
```

Or run each demo individually in its own folder:

| Demo | Port & URL | Command | What It Does & How Antigravity + Chrome DevTools MCP Tests It |
| --- | --- | --- | --- |
| **Demo 01 · QA + Analytics** | `http://localhost:4001` | `cd demos/demo-1-analytics && npm run dev` | **Northius AI Cloud Landing**. Has a contact form that sends `POST /api/contact` (`200 OK`) and pushes the full GA4 event funnel (`page_view`, `form_start`, `select_content`, `form_submit`, and `generate_lead`) into `window.dataLayer`. Also includes a live bottom telemetry drawer. |
| **Demo 02 · Accessibility (a11y)** | `http://localhost:4002` | `cd demos/demo-2-a11y && npm run dev` | **Lumina Studio Dashboard**. Intentionally contains WCAG AA contrast failures (`#b8bfcc` on `#f8fafc` ~1.71:1, `#e2e8f0` on `#facc15` ~1.25:1) and missing ARIA/semantic attributes (icon-only buttons without `aria-label`, `<div class="toggle-switch">` without `role="switch"`, unlabeled inputs, `<img>` without `alt`). See `demos/demo-2-a11y/README.md` for the full list of planted bugs. |
| **Demo 03 · Network 500 Debugging** | `http://localhost:4003` | `cd demos/demo-3-network && npm run dev` | **DevFest Store Checkout**. By default (`simulate500Error = true`), clicking *"Confirmar y Pagar 48,00 €"* displays a green optimistic confirmation banner in the UI (fooling visual "Computer Use" agents), while `POST /api/checkout` actually returns HTTP `500 Internal Server Error` (`PAYMENT_LEDGER_DEADLOCK`) and logs a critical error to `console.error` for Chrome DevTools MCP to catch. |

#### Exact Prompts for Live Execution in Antigravity

1. **Demo 01 (`http://localhost:4001`):**
   > *"Navega a esta landing en localhost:4001, rellena el formulario de contacto con datos realistas y verifica que en el window.dataLayer se ha registrado perfectamente el evento de Google Analytics."*

2. **Demo 02 (`http://localhost:4002`):**
   > *"Navega a localhost:4002, pásame un reporte de contraste de colores y comprueba si falta alguna etiqueta ARIA en la página actual."*

3. **Demo 03 (`http://localhost:4003`):**
   > *"Navega a localhost:4003, haz el flujo de compra y avísame si ves algún error en las peticiones de red o en la consola."*

---

## 3. Rules for Agents Editing the Deck (`beatdeck`)

To edit or add scenes in `deck/`, follow `skills/building-a-beatdeck/SKILL.md`:
1. `{ scene, beat }` is the whole state. One click = one beat. Every beat renders deterministically from `#s.b` alone.
2. Motion that runs by itself only inside beats marked `auto`: self-contained in a component, or driven by `initialLive` + `timeline` in `deck/timeline.ts`.
3. Fixed `1920×1080` stage. Absolute positions. Nothing responsive inside the stage; no text under `18px` or overlapping other visible text.
4. Offline: no CDN, remote fonts, APIs or analytics. `npm run build` fails otherwise.
5. Content fidelity: never invent quotes, numbers, logos or URLs. Keep `guion.md`, `deck/scenes.ts` and `docs/CONTENT-AUDIT.md` aligned.
6. Don't call it done before `npm run build` and `npm run verify` pass and you've inspected `artifacts/verify/contact.png`.
