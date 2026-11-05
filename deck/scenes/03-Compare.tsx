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
          <div className="t-statement" style={{ fontSize: 104, marginTop: 24 }}>
            Computer Use vs. Agente con MCP
          </div>
          <div className="t-editorial" style={{ fontSize: 44, color: 'var(--ink-2)', marginTop: 32, maxWidth: 1460 }}>
            El agente normal que solo lee capturas de pantalla frente al agente con acceso a la{' '}
            <span style={{ color: 'var(--g-yellow)' }}>capa de desarrollo</span>.
          </div>
        </div>
      </Reveal>

      {/* Beats 1..3: Live Architectural Comparison Header */}
      <Reveal on={inDiagram} out={here && b > 3} x={140} y={100}>
        <div style={{ width: 1640 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="kicker-pill">El Valor Técnico</div>
            <div className="t-meta" style={{ fontSize: 20, color: 'var(--ink-2)' }}>
              {b === 1 && 'PASO 1 · COMPUTER USE (SOLO CAPTURAS DE PANTALLA)'}
              {b === 2 && 'PASO 2 · PREGUNTA: LA PASARELA DE PAGOS QUE FALLA POR DETRÁS'}
              {b === 3 && 'PASO 3 · ACCESO A LA CAPA DE DESARROLLO (CDP)'}
            </div>
          </div>
          <div className="t-statement" style={{ fontSize: 76, marginTop: 18 }}>
            Mirar capturas vs. Acceder a la capa de desarrollo
          </div>
        </div>
      </Reveal>

      {/* Beat 1..3 Left Column: Computer Use */}
      <Arrow from={CU_AGENT} to={CU_SCREEN} on={inDiagram} flow />
      <NodeBox
        rect={CU_AGENT}
        on={inDiagram}
        tone={b === 3 ? 'dim' : 'normal'}
        kind="agente normal · computer use"
        value={
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ fontSize: 25, fontWeight: 600 }}>Solo capturas de pantalla</span>
            <span className="code-chip" style={{ fontSize: 19 }}>Lee imágenes</span>
          </div>
        }
      />

      <NodeBox
        rect={CU_SCREEN}
        on={inDiagram}
        tone={b === 3 ? 'dim' : 'normal'}
        kind="lo que ve en la pantalla"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 25, color: 'var(--g-green)', fontWeight: 600 }}>
              ✓ En el frontend todo pone que está okey
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
        kind="el punto ciego · falla la api por detrás"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 23, color: 'var(--g-red)', fontWeight: 700 }}>
              ✕ POST /api/checkout → Fallo en la API
            </div>
            <div style={{ fontSize: 22, color: 'var(--g-yellow)' }}>
              ✕ Petición fallando por detrás de forma silenciosa
            </div>
            <div style={{ fontSize: 20, color: 'var(--ink-2)' }}>
              ¿Qué agente lo detecta primero?
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
        kind="nuestro agente con mcp"
        value={
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ fontSize: 25, fontWeight: 700, color: 'var(--g-yellow)' }}>
              Capa de Desarrollo del Navegador
            </span>
            <span className="code-chip" style={{ fontSize: 19 }}>Chrome DevTools</span>
          </div>
        }
      />

      <NodeBox
        rect={CDP_BUS}
        on={here && b === 3}
        tone="hot"
        kind="conexión directa"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--ink)' }}>
              Chrome DevTools Protocol (CDP)
            </div>
            <div style={{ fontSize: 21, color: 'var(--ink-2)' }}>
              Acceso a la consola, red y árbol del DOM
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
              2. Red nativa: detecta el fallo en la API al instante
            </div>
            <div style={{ fontSize: 22, color: 'var(--ink)', fontWeight: 600 }}>
              3. DOM profundo, accesibilidad y window.dataLayer
            </div>
          </div>
        }
      />

      {/* Beat 4: 3 Puntos Fuertes */}
      <Reveal on={here && b === 4} x={140} y={130}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">Ventajas Clave</div>
          <div className="t-statement" style={{ fontSize: 96, marginTop: 20 }}>
            Los 3 puntos fuertes de este MCP
          </div>
          <div className="t-editorial" style={{ fontSize: 36, color: 'var(--ink-2)', marginTop: 14 }}>
            Es un desarrollador auditando, no un usuario mirando la pantalla.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginTop: 52 }}>
            <div className="stage-card" style={{ padding: '40px 36px' }}>
              <div className="t-numeral" style={{ fontSize: 76, color: 'var(--g-blue)' }}>01</div>
              <div style={{ fontSize: 34, fontWeight: 700, marginTop: 16, color: 'var(--ink)', lineHeight: 1.25 }}>
                Emular experiencia de usuario
              </div>
              <div style={{ fontSize: 23, color: 'var(--ink-2)', marginTop: 16 }}>
                Navegación real, clics, rellenado de formularios e interacción fluida.
              </div>
            </div>

            <div className="stage-card hot" style={{ padding: '40px 36px' }}>
              <div className="t-numeral" style={{ fontSize: 76, color: 'var(--g-yellow)' }}>02</div>
              <div style={{ fontSize: 34, fontWeight: 700, marginTop: 16, color: 'var(--g-yellow)', lineHeight: 1.25 }}>
                Auditar accesibilidad
              </div>
              <div style={{ fontSize: 23, color: 'var(--ink-2)', marginTop: 16 }}>
                Inspección del árbol A11y, contraste WCAG y etiquetas ARIA.
              </div>
            </div>

            <div className="stage-card" style={{ padding: '40px 36px' }}>
              <div className="t-numeral" style={{ fontSize: 76, color: 'var(--g-green)' }}>03</div>
              <div style={{ fontSize: 34, fontWeight: 700, marginTop: 16, color: 'var(--ink)', lineHeight: 1.25 }}>
                Análisis de performance
              </div>
              <div style={{ fontSize: 23, color: 'var(--ink-2)', marginTop: 16 }}>
                Métricas como Core Web Vitals, tiempos de carga y trazas de red.
              </div>
            </div>
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
