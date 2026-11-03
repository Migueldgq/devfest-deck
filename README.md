# Dándole "manos" a tu IA con Chrome DevTools MCP

**Miguel García** (`Full stack AI-native engineer · Grupo Northius` · `Organizador · GDG A Coruña`)  
Charla para **DevFest Santiago de Compostela**, construida con [beatdeck](https://github.com/borjaperfra/beatdeck) + 3 entornos de demostración en vivo para **Google Antigravity**.

---

## Estructura del Repositorio

* **`deck/`**: La presentación interactiva por *escenas* y *beats* (`1920×1080`, 5 escenas, 25 beats, diagramas técnicos animados, vista de presentador y modo 100% offline).
* **`demos/`**: Los 3 proyectos web independientes (sin dependencias externas, sobre `node:http`) para las demostraciones en directo desde **Antigravity** usando **Chrome DevTools MCP**:
  * `demos/demo-1-analytics` → `http://localhost:4001` (Test QA + verificación de `window.dataLayer` con eventos GA4).
  * `demos/demo-2-a11y` → `http://localhost:4002` (Auditoría de accesibilidad: fallos de contraste WCAG AA y etiquetas ARIA).
  * `demos/demo-3-network` → `http://localhost:4003` (Debugging de red: UI con falso positivo verde pero error `500 Internal Server Error` real en `POST /api/checkout` y en consola).
* **`guion.md`**: El guion completo de la charla.
* **`AGENTS.md`**: Guía detallada para agentes de IA sobre la arquitectura del repositorio y cómo inicializar cada parte.
* **`docs/RUNBOOK.md`**: Checklist rápido para el día de la charla en el escenario.

---

## Cómo arrancar todo

### 1. Instalar dependencias de las slides (solo la primera vez)
```bash
npm install
```

### 2. Arrancar las slides (`beatdeck`)
```bash
npm run dev          # Desarrollo: http://127.0.0.1:5173/#1.1
npm run present      # Producción (100% offline): http://127.0.0.1:4173
```
* Pulsa **`P`** dentro de la presentación para abrir la **Vista de Presentador** con tus notas del guion y el cronómetro.
* Pulsa **`O`** para abrir el mapa visual de todas las escenas y beats.

### 3. Arrancar las 3 Live-Demos a la vez (`localhost:4001`, `4002`, `4003`)
```bash
npm run demos
```
*(Consulta [`demos/README.md`](demos/README.md) o [`AGENTS.md`](AGENTS.md) para ver los prompts exactos de cada demo).*
