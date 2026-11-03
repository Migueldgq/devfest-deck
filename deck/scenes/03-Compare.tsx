import { Arrow, NodeBox, Reveal, Scene, useScene, type Rect } from 'beatdeck';

// Left column: Computer Use (Visual Agent)
const CU_AGENT: Rect = { x: 140, y: 285, w: 760, h: 135 };
const CU_SCREEN: Rect = { x: 140, y: 470, w: 760, h: 155 };
const CU_XRAY: Rect = { x: 140, y: 680, w: 760, h: 215 };

// Right column: Chrome DevTools MCP (Nervous System / CDP)
const CDP_AGENT: Rect = { x: 1020, y: 285, w: 760, h: 135 };
const CDP_BUS: Rect = { x: 1020, y: 470, w: 760, h: 155 };
const CDP_CHANNELS: Rect = { x: 1020, y: 680, w: 760, h: 215 };

function Compare_() {
  const { here, b } = useScene();
  const inDiagram = here && b >= 1 && b <= 3;

  return (
    <>
      {/* Beat 0: Section 02 Opener */}
      <Reveal on={here && b === 0} out={here && b > 0} x={140} y={240}>
        <div style={{ width: 1640 }}>
          <div className="t-numeral" style={{ fontSize: 180, color: 'var(--g-blue)' }}>02</div>
          <div className="t-statement" style={{ fontSize: 112, marginTop: 24 }}>
            Ojos vs. Sistema Nervioso
          </div>
          <div className="t-editorial" style={{ fontSize: 46, color: 'var(--ink-2)', marginTop: 32, maxWidth: 1460 }}>
            Agentes Visuales (<span style={{ color: 'var(--ink)' }}>Computer Use</span>) frente a{' '}
            <span style={{ color: 'var(--g-yellow)' }}>Chrome DevTools MCP</span>.
          </div>
        </div>
      </Reveal>

      {/* Beats 1..3: Live Architectural Comparison Header */}
      <Reveal on={inDiagram} out={here && b > 3} x={140} y={100}>
        <div style={{ width: 1640 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="kicker-pill">El Valor Técnico</div>
            <div className="t-meta" style={{ fontSize: 20, color: 'var(--ink-2)' }}>
              {b === 1 && 'PASO 1 · CÓMO ACTÚA COMPUTER USE'}
              {b === 2 && 'PASO 2 · EL PUNTO CIEGO DE MIRAR LA PANTALLA'}
              {b === 3 && 'PASO 3 · CONEXIÓN AL SISTEMA NERVIOSO (CDP)'}
            </div>
          </div>
          <div className="t-statement" style={{ fontSize: 76, marginTop: 18 }}>
            Mirar píxeles vs. Auditar el protocolo
          </div>
        </div>
      </Reveal>

      {/* Beat 1..3 Left Column: Computer Use */}
      <Arrow from={CU_AGENT} to={CU_SCREEN} on={inDiagram} flow />
      <NodeBox
        rect={CU_AGENT}
        on={inDiagram}
        tone={b === 3 ? 'dim' : 'normal'}
        kind="agente visual · computer use"
        value={
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ fontSize: 25, fontWeight: 600 }}>Usa los “ojos” (Capturas + Ratón)</span>
            <span className="code-chip" style={{ fontSize: 19 }}>VM + Píxeles</span>
          </div>
        }
      />

      <NodeBox
        rect={CU_SCREEN}
        on={inDiagram}
        tone={b === 3 ? 'dim' : 'normal'}
        kind="lo que ve en la superficie"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 25, color: 'var(--g-green)', fontWeight: 600 }}>
              ✓ La página carga y el botón se ve
            </div>
            <div style={{ fontSize: 22, color: 'var(--ink-2)' }}>
              Veredicto: “Todo guay, test superado”
            </div>
          </div>
        }
      />

      {/* Beat 2..3 Left Column Bottom: X-Ray Blind Spot */}
      <Arrow from={CU_SCREEN} to={CU_XRAY} on={here && b >= 2 && b <= 3} head={false} />
      <NodeBox
        rect={CU_XRAY}
        on={here && b >= 2 && b <= 3}
        tone="ghost"
        kind="rayos x · ciego a lo que pasa por debajo"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 23, color: 'var(--g-red)', fontWeight: 700 }}>
              ✕ POST /api/checkout → 500 Internal Error
            </div>
            <div style={{ fontSize: 22, color: 'var(--g-yellow)' }}>
              ✕ Console: Unhandled Promise Rejection
            </div>
            <div style={{ fontSize: 20, color: 'var(--ink-2)' }}>
              Ciego al fallo porque la UI no cambió.
            </div>
          </div>
        }
      />

      {/* Beat 3 Right Column: Chrome DevTools MCP (CDP Nervous System) */}
      <Arrow from={CDP_AGENT} to={CDP_BUS} on={here && b === 3} tone="hot" flow />
      <Arrow from={CDP_BUS} to={CDP_CHANNELS} on={here && b === 3} tone="hot" flow />

      <NodeBox
        rect={CDP_AGENT}
        on={here && b === 3}
        tone="hot"
        kind="chrome devtools mcp · sin usar los ojos"
        value={
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ fontSize: 25, fontWeight: 700, color: 'var(--g-yellow)' }}>
              Conectado al Sistema Nervioso
            </span>
            <span className="code-chip" style={{ fontSize: 19 }}>F12 Nativo</span>
          </div>
        }
      />

      <NodeBox
        rect={CDP_BUS}
        on={here && b === 3}
        tone="hot"
        kind="canal directo de bajo nivel"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--ink)' }}>
              Chrome DevTools Protocol (CDP)
            </div>
            <div style={{ fontSize: 21, color: 'var(--ink-2)' }}>
              Inspección en vivo del motor interno de Chrome
            </div>
          </div>
        }
      />

      <NodeBox
        rect={CDP_CHANNELS}
        on={here && b === 3}
        tone="hot"
        kind="telemetría completa en vivo"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 22, color: 'var(--g-green)', fontWeight: 600 }}>
              1. Consola JS en tiempo real (errores y trazas)
            </div>
            <div style={{ fontSize: 22, color: 'var(--g-yellow)', fontWeight: 600 }}>
              2. Red nativa: caza un 500 silencioso al vuelo
            </div>
            <div style={{ fontSize: 22, color: 'var(--ink)', fontWeight: 600 }}>
              3. DOM profundo y variables (window.dataLayer)
            </div>
          </div>
        }
      />

      {/* Beat 4: Full-Stage Statement */}
      <Reveal on={here && b === 4} x={140} y={250}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">La Diferencia Real</div>
          <div className="t-statement" style={{ fontSize: 106, marginTop: 40, color: 'var(--ink)' }}>
            Es un desarrollador auditando.
          </div>
          <div className="t-statement" style={{ fontSize: 106, marginTop: 24, color: 'var(--g-yellow)' }}>
            No un usuario mirando.
          </div>
          <div className="t-editorial" style={{ fontSize: 40, color: 'var(--ink-2)', marginTop: 56 }}>
            Tu agente de IA trabaja con el <span style={{ color: 'var(--g-blue)' }}>F12 abierto</span>.
          </div>
        </div>
      </Reveal>
    </>
  );
}

/** 03 OJOS VS. SISTEMA NERVIOSO — Computer Use vs. Chrome DevTools MCP (CDP). */
export const Compare = () => (
  <Scene index={2}>
    <Compare_ />
  </Scene>
);
