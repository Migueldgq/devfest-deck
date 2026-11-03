# Demos en Vivo · DevFest Santiago 2026 (`Chrome DevTools MCP`)

Este directorio contiene las **3 demos interactivas** del bloque práctico de la charla **"Dándole 'manos' a tu IA con Chrome DevTools MCP"** (Sección 4 del guion).

Todas las demos están construidas con **Node.js nativo sin dependencias externas (`zero-dependency`)** para que arranquen al instante y no requieran `npm install` ni conexión a internet en el escenario.

---

## 🚀 Arrancar las 3 demos a la vez

Desde la raíz del proyecto, ejecuta:

```bash
npm run demos
# o directamente:
node demos/start-all.mjs
```

Esto levantará simultáneamente:

| Demo | Concepto clave | URL | Puerto |
| :--- | :--- | :--- | :---: |
| **Demo 1 · `demo-1-analytics`** | **Test QA con Analítica GA4** (`window.dataLayer` Funnel) | `http://localhost:4001` | `4001` |
| **Demo 2 · `demo-2-a11y`** | **Auditoría de Accesibilidad** (*Contraste WCAG + ARIA*) | `http://localhost:4002` | `4002` |
| **Demo 3 · `demo-3-network`** | **Debugging de Red · Un 500 escondido** (*Tráfico de Red + Consola*) | `http://localhost:4003` | `4003` |

También puedes arrancar cualquiera de ellas de forma individual:

```bash
node demos/demo-1-analytics/server.mjs   # http://localhost:4001
node demos/demo-2-a11y/server.mjs        # http://localhost:4002
node demos/demo-3-network/server.mjs     # http://localhost:4003
```

---

## 🎯 Guía rápida por Demo y Prompts para el Agente

### 1️⃣ Demo 1: El Test QA con Analítica (`http://localhost:4001`)
- **Contexto del guion:** Landing de **Northius AI Cloud** con un formulario de contacto que envía `POST /api/contact` (`200 OK`) y registra el embudo completo de eventos oficiales de **Google Analytics 4 (GA4)** en `window.dataLayer`:
  1. `page_view` (al cargar la página)
  2. `form_start` (Enhanced Measurement: primera interacción con un campo del formulario)
  3. `select_content` (Recommended Event: al seleccionar el rol profesional en el `<select>`)
  4. `form_submit` (Enhanced Measurement: al enviar el formulario)
  5. `generate_lead` (Recommended Conversion Event: tras recibir `200 OK` de `/api/contact`, con `lead_id`, `value`, `currency: 'EUR'` y `user_data`)
- **Prompt sugerido:**
  > *"Navega a esta landing en localhost:4001, rellena el formulario de contacto con datos realistas y verifica que en el window.dataLayer se han registrado perfectamente los eventos de Google Analytics."*

---

### 2️⃣ Demo 2: Auditoría de Accesibilidad (`http://localhost:4002`)
- **Contexto del guion:** **Lumina Studio Dashboard** con errores reales de accesibilidad plantados a propósito: texto gris claro sobre fondo claro (`~1.71:1`), badge amarillo con texto blanco (`~1.25:1`), botones de icono sin `aria-label`, `<div class="toggle-switch">` sin `role="switch"`, inputs sin `<label>` e imágenes sin `alt`.
- **Prompt sugerido:**
  > *"Navega a localhost:4002, pásame un reporte de contraste de colores y comprueba si falta alguna etiqueta ARIA en la página actual."*

---

### 3️⃣ Demo 3: Debugging de Red · Un 500 escondido (`http://localhost:4003`)
- **Contexto del guion:** En **DevFest Store · Checkout Oficial**, al pulsar **"Confirmar y Pagar 48,00 €"**, el frontend lanza `POST /api/checkout`.
  - El servidor responde con **`500 Internal Server Error`** (`code: "PAYMENT_LEDGER_DEADLOCK"`, `service: "checkout-orchestrator-v2"`, `traceId: "trace_9f82a10c44b"`).
  - Sin embargo, **la interfaz muestra un banner verde engañoso de éxito**.
  - Un agente puramente visual (*Computer Use*) vería la caja verde y daría el test por válido. **Chrome DevTools MCP** intercepta el tráfico de red (`list_network_requests` / `get_network_request`) y la consola (`list_console_messages`), cazando el HTTP 500 y el `traceId` al instante.
- **Prompt sugerido:**
  > *"Navega a localhost:4003, haz el flujo de compra y avísame si ves algún error en las peticiones de red o en la consola."*
