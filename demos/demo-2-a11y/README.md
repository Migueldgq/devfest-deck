# Demo 2: Auditoría de Accesibilidad (a11y) — Lumina Studio

## Ejecución rápida

```bash
npm start
# Servidor disponible en http://localhost:4002
```

## Prompt en vivo sugerido (según `guion.md`)

> *"Pásame un reporte de contraste de colores y comprueba si falta alguna etiqueta ARIA en la página actual"*

---

## Cheat-Sheet de Bugs de Accesibilidad Plantados

### 1. Fallos Severos de Contraste de Color (WCAG AA < 4.5:1)

| Elemento / Selector | Color de Texto | Color de Fondo | Ratio Aprox. | Estado WCAG AA |
| :--- | :--- | :--- | :--- | :--- |
| `.low-contrast-description`, `.plan-description-low-contrast`, `.plan-features-low-contrast`, `.badge-low-contrast`, `.status-pill` | `#b8bfcc` | `#f8fafc` | **~1.71:1** | ❌ Falla (< 4.5:1) |
| `.btn-amber-low-contrast` (*"Publicar Tokens a Producción"*) | `#e2e8f0` | `#facc15` | **~1.25:1** | ❌ Falla crítica |
| `.footer-muted-text` (`.app-footer`) | `#475569` | `#334155` | **~1.51:1** | ❌ Falla (< 4.5:1) |

### 2. Etiquetas ARIA Faltantes y Violaciones Semánticas

1. **Botones de solo icono sin nombre accesible (`.toolbar-actions > button.icon-btn`):**
   - 4 botones en la barra superior (`#btn-quick-search`, `#btn-notifications`, `#btn-settings`, `#btn-purge-cache`) contienen únicamente un `<svg>` sin `aria-label`, sin `title` y sin texto visible.
2. **Interruptor custom no semántico (`#billing-toggle.toggle-switch`):**
   - Construido con `<div class="toggle-switch" onclick="toggleBilling()">`.
   - Carece de `role="switch"`, `aria-checked`, `tabindex="0"`, `aria-label` y soporte de teclado (`Space`/`Enter`).
3. **Controles de formulario huérfanos (`#token-filter-input` y `#category-select`):**
   - El `<input type="text" placeholder="Filtrar tokens...">` y el `<select>` de categorías no tienen `<label for="...">` asociado ni atributo `aria-label`.
4. **Imagen sin texto alternativo (`img.hero-chart`):**
   - El gráfico SVG del hero (`<img class="hero-chart" src="data:image/svg+xml...">`) carece por completo del atributo `alt`.
