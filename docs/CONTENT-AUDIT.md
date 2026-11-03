# Content Audit — Dándole "manos" a tu IA con Chrome DevTools MCP

Source of truth: [`guion.md`](../guion.md) (synchronized with the official Google Doc) and archived Slidev reference in [`reference/legacy-slidev/slides.md`](../reference/legacy-slidev/slides.md).

## Source → Scene & Beat Mapping

| Source Section (`guion.md`) | Scene | Beat | Stage Content & Live Diagram | Fidelity Status |
| --- | --- | --- | --- | --- |
| **§1. La Intro y el Rompehielos** | `01` (`INTRO · BERLÍN`) | `#1.1` (`standby`) | Pantalla de espera DevFest Santiago de Compostela con los 4 puntos de Google. | Kept |
| **§1. Portada** | `01` (`INTRO · BERLÍN`) | `#1.2` (`portada`) | Portada: `Dándole "manos" a tu IA con DevTools MCP` · Miguel García (`Full stack AI-native engineer · Grupo Northius`) · `GDG A Coruña · Organizador`. | Updated job title per speaker |
| **§1. Junio · Berlín (Google I/O Connect)** | `01` (`INTRO · BERLÍN`) | `#1.3` (`berlín · google i/o connect`) | Diagrama vivo (`NodeBox` + `Arrow`) del stand del ecosistema de Google Chrome y la demo en directo de `Chrome DevTools for Agents MCP`. | Kept & enhanced |
| **§1. "Me explotó la cabeza"** | `01` (`INTRO · BERLÍN`) | `#1.4` (`me explotó la cabeza`) | Statement de impacto: testeo profundo en lenguaje natural y mil ideas para cambiar nuestra forma de desarrollar. | Kept |
| **§1. Presentación Miguel García** | `01` (`INTRO · BERLÍN`) | `#1.5` (`quién habla · miguel garcía`) | Tarjetas: `Grupo Northius`, `Full stack AI-native engineer` y `GDG A Coruña` (Organizador). | Kept |
| **§2. ¿Qué es un MCP?** | `02` (`QUÉ ES UN MCP`) | `#2.1` (`sección 01 · qué es un mcp`) | Apertura de sección `01 // ¿Qué es un MCP?` (Model Context Protocol). | Kept |
| **§2. Un cerebro en un frasco** | `02` (`QUÉ ES UN MCP`) | `#2.2` (`un cerebro en un frasco`) | Nodo aislado (`tone="ghost"`): Sabe mucho, razona bien, pero está encerrado en una caja de texto sin manos. | Kept |
| **§2. El USB-C de la IA** | `02` (`QUÉ ES UN MCP`) | `#2.3` (`el usb-c de la ia`) | Se conecta el bus/puerto universal `MCP` (estándar abierto de Anthropic) al LLM. | Kept |
| **§2. Puerto 01 · Bases de datos** | `02` (`QUÉ ES UN MCP`) | `#2.4` (`puerto 01 · bases de datos`) | Primer cable animado (`Arrow` + `NodeBox`): Bases de datos. | Kept |
| **§2. Puerto 02 · Archivos locales** | `02` (`QUÉ ES UN MCP`) | `#2.5` (`puerto 02 · archivos locales`) | Segundo cable animado (`Arrow` + `NodeBox`): Archivos locales. | Kept |
| **§2. Puerto 03 · El navegador** | `02` (`QUÉ ES UN MCP`) | `#2.6` (`puerto 03 · el navegador`) | Tercer cable en acento (`tone="hot"`): Directamente al navegador (`Chrome DevTools MCP`). | Kept |
| **§3. Chrome DevTools MCP vs. Agentes Visuales** | `03` (`OJOS VS. SISTEMA NERVIOSO`) | `#3.1` (`sección 02 · la comparativa`) | Apertura de sección `02 // Ojos vs. Sistema Nervioso`. (Se eliminó Playwright según el guion oficial). | Updated per speaker |
| **§3. Computer Use ("Mira la pantalla")** | `03` (`OJOS VS. SISTEMA NERVIOSO`) | `#3.2` (`computer use · mira la pantalla`) | Columna izquierda: VM + Ratón mirando píxeles. Si el botón carga, dice `"Todo guay, test superado"`. | Kept |
| **§3. Ciego a lo que pasa por debajo** | `03` (`OJOS VS. SISTEMA NERVIOSO`) | `#3.3` (`ciego por debajo · rayos x`) | Rayos X bajo Computer Use: `POST /api/checkout → 500` y errores de consola invisibles a los píxeles. | Kept |
| **§3. Sistema Nervioso · CDP** | `03` (`OJOS VS. SISTEMA NERVIOSO`) | `#3.4` (`chrome devtools mcp · protocolo cdp`) | Columna derecha: Conexión directa al `Chrome DevTools Protocol (CDP)` leyendo Consola JS, Red (`500` silencioso) y DOM (`window.dataLayer`). | Kept |
| **§3. Statement Auditor** | `03` (`OJOS VS. SISTEMA NERVIOSO`) | `#3.5` (`un desarrollador auditando`) | Statement: `"Es un desarrollador auditando. No un usuario mirando."` | Kept |
| **§4. Las Live-Demos en Antigravity** | `04` (`LIVE DEMOS · ANTIGRAVITY`) | `#4.1` (`sección 03 · manos a la obra`) | Diagrama en vivo: `Antigravity` ⇄ `Chrome DevTools MCP` ⇄ `localhost:4001 · 4002 · 4003`. | Updated Cursor → Antigravity |
| **§4. Demo 1 · QA con Analítica** | `04` (`LIVE DEMOS · ANTIGRAVITY`) | `#4.2` (`demo 01 · test qa con analítica`) | Prompt exacto + diagrama de flujo hacia `window.dataLayer` (`http://localhost:4001`). | Kept |
| **§4. Demo 2 · Auditoría a11y** | `04` (`LIVE DEMOS · ANTIGRAVITY`) | `#4.3` (`demo 02 · auditoría a11y`) | Prompt exacto + diagrama de inspección DOM de contraste WCAG y etiquetas ARIA (`http://localhost:4002`). | Kept |
| **§4. Demo 3 · Debugging de Red 500** | `04` (`LIVE DEMOS · ANTIGRAVITY`) | `#4.4` (`demo 03 · debugging de red 500`) | Prompt exacto + diagrama de intercepción de `POST /api/checkout → 500` (`http://localhost:4003`). | Kept |
| **§5. El Cierre · Volvemos a Berlín** | `05` (`CIERRE · COMUNIDAD`) | `#5.1` (`volvemos a berlín`) | Cadena causal: Ir a Berlín → Pasar por el stand → Probar MCP → Contarlo hoy en Santiago. | Kept |
| **§5. El Cierre (Networking)** | `05` (`CIERRE · COMUNIDAD`) | `#5.2` (`estudiar es la base · networking`) | Estudiar es la base · El impulso es moverse · Salir del `tutorial hell` · Networking. | Kept |
| **§5. Para llevarse · Dos cosas** | `05` (`CIERRE · COMUNIDAD`) | `#5.3` (`para llevarse · dos cosas`) | `01` Cómo darle manos a su IA con MCP + `02` Más ganas de volver a un DevFest. | Kept |
| **§5. Cierre · Muchas gracias** | `05` (`CIERRE · COMUNIDAD`) | `#5.4` (`muchas gracias`) | Pantalla final `Muchas gracias.` con datos de Miguel García, Grupo Northius y GDG A Coruña. | Kept |
| **Anexo · Fuentes Oficiales** | `05` (`CIERRE · COMUNIDAD`) | `#5.5` (`fuentes y documentación oficial`) | Cuadrícula de 6 fuentes oficiales: `modelcontextprotocol.io`, `ChromeDevTools/chrome-devtools-mcp`, `CDP`, `GA4 Events (window.dataLayer)`, `WCAG 2.2 / WAI-ARIA` y `Antigravity MCP`. | Added per speaker |
