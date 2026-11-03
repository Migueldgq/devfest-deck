# Demos en Vivo · DevFest Santiago 2026 (`Chrome DevTools MCP`)

Este directorio contiene las **3 demos interactivas** del bloque práctico de la charla **"Dándole ojos a tu IA en el navegador con Chrome DevTools MCP"** (Sección 5 del guion).

Todas las demos están construidas con **Node.js nativo sin dependencias externas (`zero-dependency`)** para que arranquen al instante y no requieran `npm install` ni conexión a internet en el escenario.

---

## 🚀 Arrancar las 3 demos a la vez

Desde la raíz del proyecto o desde esta carpeta `demos/`, ejecuta:

```bash
node demos/start-all.mjs
```

Esto levantará simultáneamente:

| Demo | Concepto clave | URL | Puerto |
| :--- | :--- | :--- | :---: |
| **Demo 1 · `demo-1-analytics`** | **De Imagen a Código** (*Visual Feedback Loop*) | `http://localhost:4001` | `4001` |
| **Demo 2 · `demo-2-a11y`** | **Auditoría de Accesibilidad** (*Árbol A11y + CSS Computado*) | `http://localhost:4002` | `4002` |
| **Demo 3 · `demo-3-network`** | **Debugging de Red · Un 500 escondido** (*Tráfico de Red + Consola*) | `http://localhost:4003` | `4003` |

También puedes arrancar cualquiera de ellas de forma individual:

```bash
node demos/demo-1-analytics/server.mjs   # http://localhost:4001
node demos/demo-2-a11y/server.mjs        # http://localhost:4002
node demos/demo-3-network/server.mjs     # http://localhost:4003
```

---

## 🎯 Guía rápida por Demo y Prompts para el Agente

### 1️⃣ Demo 1: De Imagen a Código (`http://localhost:4001`)
- **Contexto del guion:** Partimos de un esqueleto básico y un diseño objetivo (`design-reference.svg`). La IA genera el código, abre el navegador con Chrome DevTools MCP, toma capturas (`take_screenshot`), se autocorrige al ver desalineaciones y entrega el resultado final.
- **Prompt sugerido:**
  > *"Abre `http://localhost:4001`, compara la interfaz actual con el diseño de referencia en `demos/demo-1-analytics/design-reference.svg`, implementa el dashboard completo y verifica visualmente en el navegador hasta que quede clavado."*

---

### 2️⃣ Demo 2: Auditoría de Accesibilidad (`http://localhost:4002`)
- **Contexto del guion:** Una landing con errores clásicos de accesibilidad: texto gris claro sobre fondo blanco, botones de icono sin `aria-label`, `<div>` falsos actuando como botones y campos de formulario sin `<label>`.
- **Prompt sugerido:**
  > *"Abre `http://localhost:4002`, realiza una auditoría de accesibilidad inspeccionando el DOM, el árbol A11y y los estilos computados con Chrome DevTools MCP, corrige los problemas en el código y verifica los cambios en vivo."*

---

### 3️⃣ Demo 3: Debugging de Red · Un 500 escondido (`http://localhost:4003`)
- **Contexto del guion:** Conectamos directamente con la tesis de la **Sección 3 (Píxeles vs. Protocolo CDP)**.
  - En **DevFest Store · Checkout Oficial**, al pulsar **"Confirmar y Pagar 48,00 €"**, el frontend lanza `POST /api/checkout`.
  - El servidor responde con **`500 Internal Server Error`** (`code: "PAYMENT_LEDGER_DEADLOCK"`, `service: "checkout-orchestrator-v2"`, `traceId: "trace_9f82a10c44b"`).
  - Sin embargo, **la interfaz captura mal el error y muestra un banner verde de éxito**: *"¡Solicitud recibida! Estamos procesando tu pedido en segundo plano, recibirás un correo en breve."*
  - Un agente puramente visual (*Computer Use*) vería la caja verde y daría el test por válido. **Chrome DevTools MCP** intercepta el tráfico de red (`list_network_requests` / `get_network_request`) y la consola (`list_console_messages`), cazando el HTTP 500 y el `traceId` al instante.
- **Prompt sugerido (literal del guion):**
  > *"Abre `http://localhost:4003`, haz el flujo de compra y avísame si ves algún error en las peticiones de red o en la consola."*
- **Controles extra para el ponente en Demo 3:**
  - En la barra superior derecha hay un botón **`Simular fallo 500: ACTIVO`** (activo por defecto nada más arrancar). Si se pulsa, conmuta `POST /api/toggle-bug` para que `POST /api/checkout` devuelva `200 OK` (útil si quieres enseñar cómo pasa el test tras arreglar el backend).
