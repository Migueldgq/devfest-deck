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
          <div className="t-editorial" style={{ fontSize: 48, color: 'var(--ink-2)', marginTop: 32, maxWidth: 1420 }}>
            Model Context Protocol: un puerto estándar abierto para que el modelo deje de vivir encerrado en una caja de texto.
          </div>
        </div>
      </Reveal>

      {/* Beat 1..5 Header: Persistent while building the live architecture diagram */}
      <Reveal on={inDiagram} x={140} y={110}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">
            {b === 1 ? 'Model Context Protocol · El Problema' : 'La Metáfora · El Estándar de Anthropic'}
          </div>
          <div className="t-statement" style={{ fontSize: 88, marginTop: 20 }}>
            {b === 1 ? 'Un cerebro en un frasco' : 'El USB-C de la Inteligencia Artificial'}
          </div>
          <div className="t-editorial" style={{ fontSize: 36, color: 'var(--ink-2)', marginTop: 16 }}>
            {b === 1
              ? 'Sabe mucho. Razona muy bien. Pero está encerrado en una caja de texto: no tiene manos.'
              : 'Un mismo puerto universal. El cable cambia según la herramienta que le conectes.'}
          </div>
        </div>
      </Reveal>

      {/* Node 1: The LLM (Brain in a jar on Beat 1, connected on Beat >= 2) */}
      <NodeBox
        rect={BRAIN_JAR}
        on={inDiagram}
        tone={b === 1 ? 'ghost' : 'normal'}
        kind={b === 1 ? 'caja de texto aislada' : 'modelo de lenguaje (llm)'}
        value={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 32, fontWeight: 600, color: 'var(--ink)' }}>Cerebro IA</div>
            <div style={{ fontSize: 21, color: 'var(--ink-2)' }}>✓ Sabe mucho · ✓ Razona bien</div>
            <div style={{ fontSize: 21, color: b === 1 ? 'var(--g-red)' : 'var(--g-green)' }}>
              {b === 1 ? '✕ Sin manos (aislado)' : '✓ Conectado vía MCP'}
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
        kind="cable 01 · datos"
        value={<span style={{ fontSize: 26 }}>Bases de datos (SQL / NoSQL)</span>}
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
              Directamente al Navegador
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
            El modelo deja de imaginar qué pasa en tu web y pasa a tocar el navegador real.
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
