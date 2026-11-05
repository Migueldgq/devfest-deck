import { Arrow, NodeBox, Reveal, Scene, useScene, type Rect } from 'beatdeck';

const IDE_NODE: Rect = { x: 140, y: 540, w: 460, h: 170 };
const MCP_BRIDGE: Rect = { x: 730, y: 540, w: 460, h: 170 };
const CHROME_LIVE: Rect = { x: 1320, y: 540, w: 460, h: 170 };

// Per-demo bottom flow nodes (Beats 1, 2, 3)
const STEP_A: Rect = { x: 140, y: 690, w: 480, h: 160 };
const STEP_B: Rect = { x: 720, y: 690, w: 480, h: 160 };
const STEP_C: Rect = { x: 1300, y: 690, w: 480, h: 160 };

function Demos_() {
  const { here, b } = useScene();

  return (
    <>
      {/* Beat 0: Section 03 Opener + Live Setup Diagram */}
      <Reveal on={here && b === 0} out={here && b > 0} x={140} y={130}>
        <div style={{ width: 1640 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div className="t-numeral" style={{ fontSize: 150, color: 'var(--g-green)' }}>03</div>
            <div>
              <div className="live-badge">EN DIRECTO · 3 DEMOS</div>
              <div className="t-statement" style={{ fontSize: 96, marginTop: 18 }}>
                Manos a la obra en Antigravity
              </div>
            </div>
          </div>
          <div className="t-editorial" style={{ fontSize: 40, color: 'var(--ink-2)', marginTop: 36, maxWidth: 1480 }}>
            Mi editor <span style={{ color: 'var(--g-yellow)' }}>Antigravity</span> conectado por MCP al navegador Chrome para hacer 3 pruebas reales en vivo:
          </div>
        </div>
      </Reveal>

      <Arrow from={IDE_NODE} to={MCP_BRIDGE} on={here && b === 0} tone="hot" flow />
      <Arrow from={MCP_BRIDGE} to={CHROME_LIVE} on={here && b === 0} tone="hot" flow />

      <NodeBox
        rect={IDE_NODE}
        on={here && b === 0}
        tone="hot"
        kind="editor + agente"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: 'var(--ink)' }}>Antigravity</span>
            <span style={{ fontSize: 21, color: 'var(--ink-2)' }}>Sin selectores CSS frágiles</span>
          </div>
        }
      />

      <NodeBox
        rect={MCP_BRIDGE}
        on={here && b === 0}
        tone="hot"
        kind="puerto usb-c"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: 'var(--g-yellow)' }}>Chrome DevTools MCP</span>
            <span style={{ fontSize: 21, color: 'var(--ink-2)' }}>DOM · Console · Network</span>
          </div>
        }
      />

      <NodeBox
        rect={CHROME_LIVE}
        on={here && b === 0}
        kind="entorno local · 3 puertos"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 25, fontWeight: 600, color: 'var(--g-green)' }}>localhost:4001 · 4002 · 4003</span>
            <span style={{ fontSize: 21, color: 'var(--ink-2)' }}>QA · Accesibilidad · Red 500</span>
          </div>
        }
      />

      {/* Beat 1: Demo 01 — El Test QA con Analítica */}
      <Reveal on={here && b === 1} out={here && b > 1} x={140} y={115}>
        <div style={{ width: 1640 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <span className="live-badge">LIVE DEMO 01</span>
              <span className="kicker-pill">QA + Google Analytics</span>
            </div>
            <span className="code-chip">http://localhost:4001</span>
          </div>

          <div className="t-statement" style={{ fontSize: 88, marginTop: 22 }}>
            El Test QA con Analítica
          </div>

          <div className="stage-card hot" style={{ marginTop: 32, padding: '32px 40px' }}>
            <div className="t-meta" style={{ fontSize: 20, color: 'var(--g-yellow)' }}>
              PROMPT EN ANTIGRAVITY → CHROME DEVTOOLS MCP
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 31,
                lineHeight: 1.42,
                color: 'var(--ink)',
                marginTop: 18,
              }}
            >
              “Navega a esta landing en localhost, rellena el formulario de contacto con datos realistas y verifica que en el{' '}
              <span style={{ color: 'var(--g-yellow)' }}>window.dataLayer</span> se ha registrado perfectamente el evento de Google Analytics.”
            </div>
          </div>
        </div>
      </Reveal>

      <Arrow from={STEP_A} to={STEP_B} on={here && b === 1} flow />
      <Arrow from={STEP_B} to={STEP_C} on={here && b === 1} tone="hot" flow />

      <NodeBox
        rect={STEP_A}
        on={here && b === 1}
        kind="paso 1 · navegación"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 600 }}>Descubre el formulario solo</span>
            <span style={{ fontSize: 20, color: 'var(--ink-2)' }}>Cero selectores rígidos</span>
          </div>
        }
      />
      <NodeBox
        rect={STEP_B}
        on={here && b === 1}
        kind="paso 2 · interacción"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 600 }}>Rellena y envía el lead</span>
            <span style={{ fontSize: 20, color: 'var(--ink-2)' }}>POST /api/contact → 200 OK</span>
          </div>
        }
      />
      <NodeBox
        rect={STEP_C}
        on={here && b === 1}
        tone="hot"
        kind="paso 3 · auditoría dom/js"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--g-green)' }}>
              Inspecciona window.dataLayer
            </span>
            <span style={{ fontSize: 18, color: 'var(--g-yellow)' }}>form_start → form_submit → generate_lead</span>
          </div>
        }
      />

      {/* Beat 2: Demo 02 — Auditoría de Accesibilidad (a11y) */}
      <Reveal on={here && b === 2} out={here && b > 2} x={140} y={115}>
        <div style={{ width: 1640 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <span className="live-badge">LIVE DEMO 02</span>
              <span className="kicker-pill">Accesibilidad · WCAG Guidelines</span>
            </div>
            <span className="code-chip">http://localhost:4002</span>
          </div>

          <div className="t-statement" style={{ fontSize: 88, marginTop: 22 }}>
            Auditoría de Accesibilidad (WCAG)
          </div>

          <div className="stage-card warn" style={{ marginTop: 32, padding: '32px 40px' }}>
            <div className="t-meta" style={{ fontSize: 20, color: 'var(--g-yellow)' }}>
              PROMPT EN ANTIGRAVITY → CHROME DEVTOOLS MCP
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 32,
                lineHeight: 1.42,
                color: 'var(--ink)',
                marginTop: 18,
              }}
            >
              “Pásame un reporte de <span style={{ color: 'var(--g-yellow)' }}>contraste de colores</span> y comprueba si falta alguna{' '}
              <span style={{ color: 'var(--g-blue)' }}>etiqueta ARIA</span> en la página actual.”
            </div>
            <div style={{ fontSize: 22, color: 'var(--ink-2)', marginTop: 14 }}>
              Bonus en vivo: pedirle que ejecute un script para corregir los problemas y ver el cambio en el navegador.
            </div>
          </div>
        </div>
      </Reveal>

      <Arrow from={STEP_A} to={STEP_B} on={here && b === 2} flow />
      <Arrow from={STEP_B} to={STEP_C} on={here && b === 2} tone="hot" flow />

      <NodeBox
        rect={STEP_A}
        on={here && b === 2}
        kind="árbol de accesibilidad"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 600 }}>Lee el DOM profundo</span>
            <span style={{ fontSize: 20, color: 'var(--ink-2)' }}>Snapshot + estilos computados</span>
          </div>
        }
      />
      <NodeBox
        rect={STEP_B}
        on={here && b === 2}
        tone="hot"
        kind="contraste wcag aa"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--g-yellow)' }}>Ratios &lt; 4.5:1 detectados</span>
            <span style={{ fontSize: 20, color: 'var(--ink-2)' }}>Falta de contraste y ARIA</span>
          </div>
        }
      />
      <NodeBox
        rect={STEP_C}
        on={here && b === 2}
        tone="hot"
        kind="corrección interactiva"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--g-green)' }}>Script de corrección en vivo</span>
            <span style={{ fontSize: 20, color: 'var(--ink-2)' }}>La web se arregla ante tus ojos</span>
          </div>
        }
      />

      {/* Beat 3: Demo 03 — Debugging de Red (Un 500 escondido) */}
      <Reveal on={here && b === 3} x={140} y={115}>
        <div style={{ width: 1640 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <span className="live-badge">LIVE DEMO 03</span>
              <span className="kicker-pill">Debugging de Red + Consola</span>
            </div>
            <span className="code-chip">http://localhost:4003</span>
          </div>

          <div className="t-statement" style={{ fontSize: 88, marginTop: 22 }}>
            Cazando un HTTP 500 Escondido
          </div>

          <div className="stage-card fault" style={{ marginTop: 32, padding: '32px 40px' }}>
            <div className="t-meta" style={{ fontSize: 20, color: 'var(--g-red)' }}>
              PROMPT EN ANTIGRAVITY → CHROME DEVTOOLS MCP
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 34,
                lineHeight: 1.42,
                color: 'var(--ink)',
                marginTop: 18,
              }}
            >
              “Haz el flujo de compra y avísame si ves algún{' '}
              <span style={{ color: 'var(--g-red)' }}>error en las peticiones de red</span> o en la{' '}
              <span style={{ color: 'var(--g-yellow)' }}>consola</span>.”
            </div>
          </div>
        </div>
      </Reveal>

      <Arrow from={STEP_A} to={STEP_B} on={here && b === 3} flow />
      <Arrow from={STEP_B} to={STEP_C} on={here && b === 3} tone="hot" flow />

      <NodeBox
        rect={STEP_A}
        on={here && b === 3}
        kind="trampa visual en la ui"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 600, color: 'var(--g-green)' }}>UI: “¡Solicitud recibida!”</span>
            <span style={{ fontSize: 20, color: 'var(--ink-2)' }}>Un agente visual daría OK</span>
          </div>
        }
      />
      <NodeBox
        rect={STEP_B}
        on={here && b === 3}
        tone="hot"
        kind="tráfico nativo devtools"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--g-red)' }}>POST /api/checkout → 500</span>
            <span style={{ fontSize: 20, color: 'var(--ink-2)' }}>PAYMENT_LEDGER_DEADLOCK</span>
          </div>
        }
      />
      <NodeBox
        rect={STEP_C}
        on={here && b === 3}
        tone="hot"
        kind="diagnóstico completo"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--g-yellow)' }}>Payload + Trace ID cazados</span>
            <span style={{ fontSize: 20, color: 'var(--ink-2)' }}>Red + Console JS al instante</span>
          </div>
        }
      />
    </>
  );
}

/** 04 LIVE DEMOS · ANTIGRAVITY — Las 3 demostraciones en directo contra Chrome. */
export const Demos = () => (
  <Scene index={3}>
    <Demos_ />
  </Scene>
);
