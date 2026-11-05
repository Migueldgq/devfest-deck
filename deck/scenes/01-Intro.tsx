import { Arrow, NodeBox, Reveal, Scene, useScene, type Rect } from 'beatdeck';
import ioStage from '../assets/event/io-connect-1.jpg';
import ioMiguel from '../assets/event/io-connect-2.jpg';
import ioEntrance from '../assets/event/io-connect-3.jpg';
import { config } from '../deck.config';

const BOOTH_NODE: Rect = { x: 140, y: 745, w: 460, h: 140 };
const AGENT_NODE: Rect = { x: 730, y: 745, w: 460, h: 140 };
const CHROME_NODE: Rect = { x: 1320, y: 745, w: 460, h: 140 };

function Intro_() {
  const { here, b } = useScene();

  return (
    <>
      {/* Beat 0: Calm Standby Screen */}
      <Reveal on={here && b === 0} out={here && b > 0} x={140} y={420}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div className="gdots"><span /><span /><span /><span /></div>
            <span className="t-meta" style={{ fontSize: 24, color: 'var(--ink-2)' }}>
              {config.event} · 2026
            </span>
          </div>
          <div className="t-editorial" style={{ fontSize: 64, color: 'var(--ink)' }}>
            Dándole <span style={{ color: 'var(--g-yellow)' }}>“manos”</span> a tu IA con Chrome DevTools MCP
          </div>
          <div className="t-meta" style={{ fontSize: 22, color: 'var(--ink-3)' }}>
            {config.author} · Pulsa → o espacio para comenzar
          </div>
        </div>
      </Reveal>

      {/* Beat 1: Keynote Cover */}
      <Reveal on={here && b === 1} out={here && b > 1} x={140} y={120}>
        <div style={{ width: 1640, height: 820, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div className="gdots"><span /><span /><span /><span /></div>
              <span className="t-meta" style={{ fontSize: 24 }}>{config.event}</span>
            </div>
            <span className="code-chip">CDP · Model Context Protocol</span>
          </div>

          <div>
            <div className="t-statement" style={{ fontSize: 132, lineHeight: 0.94 }}>
              Dándole <span style={{ color: 'var(--g-yellow)' }}>“manos”</span>
            </div>
            <div className="t-statement" style={{ fontSize: 132, lineHeight: 0.98, marginTop: 12 }}>
              a tu IA con <span style={{ color: 'var(--g-blue)' }}>DevTools MCP</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              paddingTop: 36,
              borderTop: '1px solid var(--hair-strong)',
            }}
          >
            <div>
              <div style={{ fontSize: 38, fontWeight: 600, color: 'var(--ink)' }}>{config.author}</div>
              <div style={{ fontSize: 26, color: 'var(--ink-2)', marginTop: 8 }}>
                {config.role} · <span style={{ color: 'var(--g-yellow)' }}>{config.company}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 34, fontWeight: 600, color: 'var(--ink)' }}>GDG A Coruña</div>
              <div style={{ fontSize: 24, color: 'var(--ink-2)', marginTop: 8 }}>Organizador</div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Beat 2: Junio · Berlín — Google I/O Connect Photos + Live Demo Diagram */}
      <Reveal on={here && b === 2} out={here && b > 2} x={140} y={80}>
        <div style={{ width: 1640 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="kicker-pill">Junio · Berlín</div>
            <div className="t-meta" style={{ fontSize: 20, color: 'var(--ink-2)' }}>
              STANDS: ECOSISTEMA IA · CLOUD · ANDROID · CHROME
            </div>
          </div>
          <div className="t-statement" style={{ fontSize: 72, marginTop: 14 }}>
            Google I/O Connect
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.35fr 1fr',
              gap: 28,
              marginTop: 24,
            }}
          >
            <div className="stage-card" style={{ padding: 12 }}>
              <img
                src={ioEntrance}
                alt="Google I/O Connect Berlín"
                style={{
                  width: '100%',
                  height: 390,
                  objectFit: 'cover',
                  objectPosition: 'center 36%',
                  borderRadius: 10,
                  display: 'block',
                }}
              />
            </div>

            <div className="stage-card hot" style={{ padding: 12 }}>
              <img
                src={ioStage}
                alt="Google I/O Connect Berlín"
                style={{
                  width: '100%',
                  height: 390,
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  borderRadius: 10,
                  display: 'block',
                }}
              />
            </div>

            <div className="stage-card" style={{ padding: 12 }}>
              <img
                src={ioMiguel}
                alt="Google I/O Connect Berlín"
                style={{
                  width: '100%',
                  height: 390,
                  objectFit: 'cover',
                  objectPosition: 'center 38%',
                  borderRadius: 10,
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Arrow from={BOOTH_NODE} to={AGENT_NODE} on={here && b === 2} flow />
      <Arrow from={AGENT_NODE} to={CHROME_NODE} on={here && b === 2} tone="hot" flow />

      <NodeBox
        rect={BOOTH_NODE}
        on={here && b === 2}
        kind="stand de chrome · berlín"
        value={<span style={{ fontSize: 25 }}>Demo en lenguaje natural</span>}
      />
      <NodeBox
        rect={AGENT_NODE}
        on={here && b === 2}
        tone="hot"
        kind="el descubrimiento"
        value={<span style={{ fontSize: 25, color: 'var(--g-yellow)' }}>Chrome DevTools MCP</span>}
      />
      <NodeBox
        rect={CHROME_NODE}
        on={here && b === 2}
        kind="navegador real"
        value={<span style={{ fontSize: 25 }}>Testeo sin armarlo a código</span>}
      />

      {/* Beat 3: Statement — La demo en directo / Memoria de pez */}
      <Reveal on={here && b === 3} out={here && b > 3} x={140} y={220}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">Stand de Google Chrome</div>
          <div
            className="t-statement"
            style={{
              fontSize: 82,
              marginTop: 32,
              color: 'var(--ink)',
              whiteSpace: 'normal',
              lineHeight: 1.08,
            }}
          >
            “Hacer un testeo sin armarlo a código”
          </div>
          <div
            className="stage-card hot"
            style={{ marginTop: 48, width: 1520, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '36px 44px' }}
          >
            <div>
              <div className="t-meta" style={{ fontSize: 20, color: 'var(--g-yellow)' }}>
                LA DEMO QUE ME LLEVÓ A ESTE PROTOCOLO
              </div>
              <div style={{ fontSize: 34, color: 'var(--ink)', marginTop: 14, lineHeight: 1.35 }}>
                A través de <span style={{ color: 'var(--g-yellow)' }}>lenguaje natural</span> le pedías que hiciera un QA en el navegador.
              </div>
              <div style={{ fontSize: 28, color: 'var(--ink-2)', marginTop: 10 }}>
                Me pareció increíble: me llevó a investigar a fondo este MCP y empezar a utilizarlo.
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Beat 4: Quién habla — Miguel García */}
      <Reveal on={here && b === 4} out={here && b > 4} x={140} y={130}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">Quién habla</div>
          <div className="t-statement" style={{ fontSize: 112, marginTop: 24 }}>
            Miguel García
          </div>
          <div className="t-editorial" style={{ fontSize: 40, color: 'var(--ink-2)', marginTop: 24 }}>
            <span style={{ color: 'var(--g-yellow)' }}>Desarrollador full stack</span> en Northius y organizador en GDG A Coruña.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginTop: 64 }}>
            <div className="stage-card">
              <div className="t-meta" style={{ fontSize: 20, color: 'var(--ink-3)' }}>01 // TRABAJO</div>
              <div style={{ fontSize: 44, fontWeight: 600, marginTop: 18, color: 'var(--ink)' }}>
                Northius
              </div>
              <div style={{ fontSize: 24, color: 'var(--ink-2)', marginTop: 12 }}>
                Desarrollo full stack de producto y plataformas.
              </div>
            </div>

            <div className="stage-card hot">
              <div className="t-meta" style={{ fontSize: 20, color: 'var(--g-blue)' }}>02 // OFICIO</div>
              <div style={{ fontSize: 38, fontWeight: 600, marginTop: 18, color: 'var(--g-yellow)' }}>
                Desarrollador full stack
              </div>
              <div style={{ fontSize: 24, color: 'var(--ink-2)', marginTop: 12 }}>
                Frontend, backend y agentes conectados al navegador.
              </div>
            </div>

            <div className="stage-card">
              <div className="t-meta" style={{ fontSize: 20, color: 'var(--g-green)' }}>03 // COMUNIDAD</div>
              <div style={{ fontSize: 44, fontWeight: 600, marginTop: 18, color: 'var(--ink)' }}>
                GDG A Coruña
              </div>
              <div style={{ fontSize: 24, color: 'var(--ink-2)', marginTop: 12 }}>
                Organizador · Compartiendo comunidad en Galicia.
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Beat 5: Hoja de ruta — En esta charla vamos a */}
      <Reveal on={here && b === 5} x={140} y={130}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">Hoja de ruta</div>
          <div className="t-statement" style={{ fontSize: 104, marginTop: 24 }}>
            En esta charla vamos a:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginTop: 64 }}>
            <div className="stage-card" style={{ padding: '40px 36px' }}>
              <div className="t-numeral" style={{ fontSize: 80, color: 'var(--g-yellow)' }}>01</div>
              <div style={{ fontSize: 36, fontWeight: 700, marginTop: 16, color: 'var(--ink)', lineHeight: 1.25 }}>
                Repasar qué es un MCP
              </div>
              <div style={{ fontSize: 24, color: 'var(--ink-2)', marginTop: 16 }}>
                El estándar abierto de Anthropic para darle “manos” a nuestro agente.
              </div>
            </div>

            <div className="stage-card" style={{ padding: '40px 36px' }}>
              <div className="t-numeral" style={{ fontSize: 80, color: 'var(--g-blue)' }}>02</div>
              <div style={{ fontSize: 36, fontWeight: 700, marginTop: 16, color: 'var(--ink)', lineHeight: 1.25 }}>
                Computer use vs. Agente con MCP
              </div>
              <div style={{ fontSize: 24, color: 'var(--ink-2)', marginTop: 16 }}>
                Mirar capturas de pantalla frente a entrar a la capa de desarrollo.
              </div>
            </div>

            <div className="stage-card hot" style={{ padding: '40px 36px' }}>
              <div className="t-numeral" style={{ fontSize: 80, color: 'var(--g-green)' }}>03</div>
              <div style={{ fontSize: 36, fontWeight: 700, marginTop: 16, color: 'var(--g-yellow)', lineHeight: 1.25 }}>
                3 demos de cómo usar el MCP
              </div>
              <div style={{ fontSize: 24, color: 'var(--ink-2)', marginTop: 16 }}>
                QA con analítica GA4, accesibilidad WCAG y debugging de red.
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}

/** 01 INTRO · BERLÍN — Portada, historia en Google I/O Connect Berlín y presentación. */
export const Intro = () => (
  <Scene index={0}>
    <Intro_ />
  </Scene>
);
