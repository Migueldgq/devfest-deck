# Runbook — DevFest Santiago de Compostela

## 1. Antes de salir al escenario (Checklist en 2 minutos)

1. **Arrancar las 3 Live Demos (`localhost:4001`, `4002`, `4003`):**
   ```bash
   npm run demos
   ```
   - Demo 1 (QA + `window.dataLayer`): `http://localhost:4001`
   - Demo 2 (Accesibilidad / a11y): `http://localhost:4002`
   - Demo 3 (Red / Error 500 escondido): `http://localhost:4003`

2. **Arrancar las slides de `beatdeck` (100% offline):**
   ```bash
   npm run dev
   ```
   O en modo producción empaquetado:
   ```bash
   npm run present
   ```
   Abre `http://127.0.0.1:5173/#1.1` en el navegador que va al proyector y pulsa **`F`** para pantalla completa.

3. **Abrir la Vista de Presentador (en la pantalla de tu portátil):**
   Pulsa **`P`** dentro de las slides (o abre `http://127.0.0.1:5173/?view=presenter` en otra ventana).
   - Verás el beat actual, el siguiente beat, tus notas de `guion.md` y el cronómetro sincronizados por `BroadcastChannel`.

## 2. Controles durante la charla

- **`→` / `↓` / `PageDown` / `Espacio` / Clic:** Siguiente beat (`1 clic = 1 beat`).
- **`←` / `↑` / `PageUp`:** Beat anterior (totalmente determinista, reconstruye el estado exacto desde `#escena.beat`).
- **`1` – `5`:** Saltar directamente a cualquiera de las 5 escenas.
- **`O`:** Vista general (Overview) de todos los beats.
- **`P`:** Abrir ventana de presentador.
- **`B`:** Pantalla a negro (Blackout).
- **`F`:** Pantalla completa.
