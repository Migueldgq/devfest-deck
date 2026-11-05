import { Arrow, NodeBox, Reveal, Scene, useScene, type Rect } from 'beatdeck';

const BRAIN_JAR: Rect = { x: 140, y: 470, w: 450, h: 240 };
const MCP_PORT: Rect = { x: 710, y: 500, w: 400, h: 180 };
const PORT_DB: Rect = { x: 1230, y: 340, w: 550, h: 130 };
const PORT_FILES: Rect = { x: 1230, y: 525, w: 550, h: 130 };
const PORT_BROWSER: Rect = { x: 1230, y: 710, w: 550, h: 145 };

function Mcp_() {
  const { here, b } = useScene();
  const inDiagram = here && b >= 1;

  return (
    <>
      {/* Beat 0: Section 01 Opener */}
      <Reveal on={here && b === 0} out={here && b > 0} x={140} y={240}>
        <div style={{ width: 1640 }}>
          <div className="t-numeral" style={{ fontSize: 180, color: 'var(--g-yellow)' }}>01</div>
          <div className="t-statement" style={{ fontSize: 124, marginTop: 24 }}>
            ¿Qué es un MCP?
          </div>
        </div>
      </Reveal>

      {/* Beat 1 Header: the problem (brain in a jar) */}
      <Reveal on={here && b === 1} out={here && b > 1} x={140} y={110}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">Model Context Protocol · El Problema</div>
          <div className="t-statement" style={{ fontSize: 88, marginTop: 20 }}>
            Un cerebro en un frasco
          </div>
          <div className="t-editorial" style={{ fontSize: 36, color: 'var(--ink-2)', marginTop: 16 }}>
            Un cerebro muy sabio dentro de un frasco: no tiene manos y no puede acceder a conocimiento de fuera.
          </div>
        </div>
      </Reveal>

      {/* Node 1: The LLM (Brain in a jar on Beat 1, connected on Beat >= 2) */}
      <NodeBox
        rect={BRAIN_JAR}
        on={inDiagram}
        tone={b === 1 ? 'ghost' : 'normal'}
        kind={b === 1 ? 'cerebro en un frasco' : 'modelo de lenguaje (llm)'}
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 32, fontWeight: 600, color: 'var(--ink)' }}>Cerebro IA</div>
            <div style={{ fontSize: 21, color: 'var(--ink-2)' }}>✓ Muy sabio · ✓ Razona bien</div>
            <div style={{ fontSize: 21, color: b === 1 ? 'var(--g-red)' : 'var(--g-green)' }}>
              {b === 1 ? '✕ Sin manos · Aislado' : '✓ Conectado vía MCP'}
            </div>
          </div>
        }
      />

      {/* Beat 2+: The USB-C MCP Hub appears and links to the LLM */}
      <Arrow from={BRAIN_JAR} to={MCP_PORT} on={here && b >= 2} tone="hot" flow />

      <NodeBox
        rect={MCP_PORT}
        on={here && b >= 2}
        tone="hot"
        kind="estándar abierto · anthropic"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 34, fontWeight: 700, color: 'var(--g-yellow)' }}>Puerto MCP</div>
            <div style={{ fontSize: 21, color: 'var(--ink-2)' }}>El USB-C universal</div>
          </div>
        }
      />

      {/* Beat 3+: Cable 01 -> Databases */}
      <Arrow from={MCP_PORT} to={PORT_DB} on={here && b >= 3} flow />
      <NodeBox
        rect={PORT_DB}
        on={here && b >= 3}
        tone={b > 3 ? 'dim' : 'normal'}
        kind="cable 01 · conocimiento"
        value={<span style={{ fontSize: 26 }}>Beber de Bases de Datos (SQL / NoSQL)</span>}
      />

      {/* Beat 4+: Cable 02 -> Local Files */}
      <Arrow from={MCP_PORT} to={PORT_FILES} on={here && b >= 4} flow />
      <NodeBox
        rect={PORT_FILES}
        on={here && b >= 4}
        tone={b > 4 ? 'dim' : 'normal'}
        kind="cable 02 · sistema"
        value={<span style={{ fontSize: 26 }}>Archivos locales y código</span>}
      />

      {/* Beat 5: Cable 03 -> The Browser (Protagonist) */}
      <Arrow from={MCP_PORT} to={PORT_BROWSER} on={here && b >= 5} tone="hot" flow />
      <NodeBox
        rect={PORT_BROWSER}
        on={here && b >= 5}
        tone="hot"
        kind="cable 03 · protagonista de hoy"
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: 'var(--g-yellow)' }}>
              Capa de Desarrollo del Navegador
            </span>
            <span style={{ fontSize: 20, color: 'var(--ink-2)' }}>Chrome DevTools MCP</span>
          </div>
        }
      />

      {/* Bottom status bar on Beat 5 */}
      <Reveal on={here && b === 5} x={140} y={900}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span className="code-chip">Estándar abierto</span>
          <span style={{ fontSize: 26, color: 'var(--ink-2)' }}>
            El MCP le permite al agente beber conocimiento de fuera y acceder a la capa de desarrollo del navegador.
          </span>
        </div>
      </Reveal>
    </>
  );
}

/** 02 QUÉ ES UN MCP — Del cerebro en un frasco al USB-C de la IA conectando el navegador. */
export const Mcp = () => (
  <Scene index={1}>
    <Mcp_ />
  </Scene>
);
