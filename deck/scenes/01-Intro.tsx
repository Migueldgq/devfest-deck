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
      <Reveal on={here && b === 2} out={here && b > 2} x={140} y={85}>
        <div style={{ width: 1640 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
              <div className="kicker-pill">Junio · Berlín</div>
              <div className="t-statement" style={{ fontSize: 76 }}>
                Google I/O Connect
              </div>
            </div>
            <div className="t-editorial" style={{ fontSize: 30, color: 'var(--ink-2)' }}>
              Stand del ecosistema de Google Chrome · Demo en directo
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.35fr 1fr',
              gap: 28,
              marginTop: 26,
            }}
          >
            <div className="stage-card" style={{ padding: 16 }}>
              <img
                src={ioEntrance}
                alt="Entrada de Google I/O Connect en Berlín"
                style={{
                  width: '100%',
                  height: 360,
                  objectFit: 'cover',
                  objectPosition: 'center 36%',
                  borderRadius: 10,
                  display: 'block',
                }}
              />
              <div className="t-meta" style={{ fontSize: 18, marginTop: 12, color: 'var(--ink-2)' }}>
                01 // BERLÍN · RECINTO #GOOGLEIOCONNECT
              </div>
            </div>

            <div className="stage-card hot" style={{ padding: 16 }}>
              <img
                src={ioStage}
                alt="Escenario principal de Google I/O Connect Berlín"
                style={{
                  width: '100%',
                  height: 360,
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  borderRadius: 10,
                  display: 'block',
                }}
              />
              <div className="t-meta" style={{ fontSize: 18, marginTop: 12, color: 'var(--g-yellow)' }}>
                02 // ESCENARIO Y STAND DE GOOGLE CHROME
              </div>
            </div>

            <div className="stage-card" style={{ padding: 16 }}>
              <img
                src={ioMiguel}
                alt="Miguel García en Google I/O Connect Berlín"
                style={{
                  width: '100%',
                  height: 360,
                  objectFit: 'cover',
                  objectPosition: 'center 38%',
                  borderRadius: 10,
                  display: 'block',
                }}
              />
              <div className="t-meta" style={{ fontSize: 18, marginTop: 12, color: 'var(--ink-2)' }}>
                03 // DONDE SURGIÓ LA IDEA DE ESTA CHARLA
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Arrow from={BOOTH_NODE} to={AGENT_NODE} on={here && b === 2} flow />
      <Arrow from={AGENT_NODE} to={CHROME_NODE} on={here && b === 2} tone="hot" flow />

      <NodeBox
        rect={BOOTH_NODE}
        on={here && b === 2}
        kind="stand en directo · berlín"
        value={<span style={{ fontSize: 25 }}>Prompt en lenguaje natural</span>}
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
        value={<span style={{ fontSize: 25 }}>Testeo profundo en vivo</span>}
      />

      {/* Beat 3: Statement — Me explotó la cabeza */}
      <Reveal on={here && b === 3} out={here && b > 3} x={140} y={240}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">La demo en directo</div>
          <div className="t-statement" style={{ fontSize: 138, marginTop: 36, color: 'var(--ink)' }}>
            Me explotó la cabeza.
          </div>
          <div
            className="stage-card hot"
            style={{ marginTop: 56, width: 1480, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <div className="t-meta" style={{ fontSize: 20, color: 'var(--g-blue)' }}>
                LO QUE VI EN AQUEL STAND
              </div>
              <div style={{ fontSize: 36, color: 'var(--ink)', marginTop: 14, lineHeight: 1.3 }}>
                Le pidieron a la IA, en lenguaje natural, un testeo profundo en el navegador.
              </div>
              <div style={{ fontSize: 30, color: 'var(--ink-2)', marginTop: 10 }}>
                De golpe se me vinieron mil ideas sobre cómo cambiar nuestra forma de desarrollar.
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
          <div className="t-editorial" style={{ fontSize: 42, color: 'var(--ink-2)', marginTop: 24 }}>
            <span style={{ color: 'var(--g-yellow)' }}>Full stack AI-native engineer</span> en Grupo Northius y organizador en GDG A Coruña.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginTop: 64 }}>
            <div className="stage-card">
              <div className="t-meta" style={{ fontSize: 20, color: 'var(--ink-3)' }}>01 // TRABAJO</div>
              <div style={{ fontSize: 44, fontWeight: 600, marginTop: 18, color: 'var(--ink)' }}>
                Grupo Northius
              </div>
              <div style={{ fontSize: 24, color: 'var(--ink-2)', marginTop: 12 }}>
                Desarrollo de producto y plataformas con IA en el centro.
              </div>
            </div>

            <div className="stage-card hot">
              <div className="t-meta" style={{ fontSize: 20, color: 'var(--g-blue)' }}>02 // OFICIO</div>
              <div style={{ fontSize: 36, fontWeight: 600, marginTop: 18, color: 'var(--g-yellow)' }}>
                Full stack AI-native engineer
              </div>
              <div style={{ fontSize: 24, color: 'var(--ink-2)', marginTop: 12 }}>
                Arquitectura web de extremo a extremo + agentes conectados.
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
    </>
  );
}

/** 01 INTRO · BERLÍN — Portada, historia en Google I/O Connect Berlín y presentación. */
export const Intro = () => (
  <Scene index={0}>
    <Intro_ />
  </Scene>
);
