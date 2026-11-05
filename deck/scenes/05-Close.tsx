import { Arrow, NodeBox, Reveal, Scene, useScene, type Rect } from 'beatdeck';
import { config } from '../deck.config';

const CHAIN_1: Rect = { x: 140, y: 600, w: 360, h: 150 };
const CHAIN_2: Rect = { x: 565, y: 600, w: 360, h: 150 };
const CHAIN_3: Rect = { x: 990, y: 600, w: 360, h: 150 };
const CHAIN_4: Rect = { x: 1415, y: 600, w: 365, h: 150 };

function Close_() {
  const { here, b } = useScene();

  return (
    <>
      {/* Beat 0: Volvemos a Berlín — Causal Chain */}
      <Reveal on={here && b === 0} out={here && b > 0} x={140} y={140}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">Volvemos al inicio</div>
          <div className="t-statement" style={{ fontSize: 98, marginTop: 28 }}>
            Si no hubiera ido a ese evento,
          </div>
          <div className="t-statement" style={{ fontSize: 98, marginTop: 18, color: 'var(--g-yellow)' }}>
            hoy no estaría aquí.
          </div>
          <div className="t-editorial" style={{ fontSize: 38, color: 'var(--ink-2)', marginTop: 32 }}>
            Por qué les conté la anécdota de Berlín del principio:
          </div>
        </div>
      </Reveal>

      <Arrow from={CHAIN_1} to={CHAIN_2} on={here && b === 0} flow />
      <Arrow from={CHAIN_2} to={CHAIN_3} on={here && b === 0} flow />
      <Arrow from={CHAIN_3} to={CHAIN_4} on={here && b === 0} tone="hot" flow />

      <NodeBox
        rect={CHAIN_1}
        on={here && b === 0}
        kind="01 · viajar a berlín"
        value={<span style={{ fontSize: 22 }}>Google I/O Connect</span>}
      />
      <NodeBox
        rect={CHAIN_2}
        on={here && b === 0}
        kind="02 · stand de chrome"
        value={<span style={{ fontSize: 22 }}>Descubrir este MCP</span>}
      />
      <NodeBox
        rect={CHAIN_3}
        on={here && b === 0}
        kind="03 · conocer a sara"
        value={<span style={{ fontSize: 22 }}>GDG Santiago</span>}
      />
      <NodeBox
        rect={CHAIN_4}
        on={here && b === 0}
        tone="hot"
        kind="04 · compartir hoy"
        value={<span style={{ fontSize: 22, color: 'var(--g-yellow)' }}>Dar esta charla hoy aquí</span>}
      />

      {/* Beat 1: Comunidad y Carrera — Estudiar es la base + Networking */}
      <Reveal on={here && b === 1} out={here && b > 1} x={140} y={130}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">Moverse y hacer cosas</div>
          <div className="t-statement" style={{ fontSize: 112, marginTop: 26 }}>
            Estudiar es la base.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 26, marginTop: 56 }}>
            <div className="stage-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 42, fontWeight: 600, color: 'var(--ink)' }}>
                Pero las cosas se consiguen <span style={{ color: 'var(--g-blue)' }}>moviéndose y haciendo cosas</span>.
              </span>
              <span className="t-meta" style={{ fontSize: 22 }}>ACCIÓN</span>
            </div>

            <div className="stage-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 42, fontWeight: 600, color: 'var(--ink)' }}>
                Salir del bucle del <span style={{ color: 'var(--g-red)' }}>tutorial hell</span> exponiéndose al mundo.
              </span>
              <span className="t-meta" style={{ fontSize: 22 }}>EXPOSICIÓN</span>
            </div>

            <div className="stage-card hot" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 44, fontWeight: 700, color: 'var(--g-yellow)' }}>
                Hacer eso tan famoso llamado networking.
              </span>
              <span className="t-meta" style={{ fontSize: 22, color: 'var(--g-yellow)' }}>COMUNIDAD</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Beat 2: Para llevarse — Dos cosas */}
      <Reveal on={here && b === 2} out={here && b > 2} x={140} y={140}>
        <div style={{ width: 1640 }}>
          <div className="kicker-pill">Para llevarse hoy</div>
          <div className="t-statement" style={{ fontSize: 108, marginTop: 24 }}>
            Dos cosas
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 64 }}>
            <div className="stage-card hot" style={{ padding: '48px 44px' }}>
              <div className="t-numeral" style={{ fontSize: 96, color: 'var(--g-blue)' }}>01</div>
              <div style={{ fontSize: 44, fontWeight: 700, color: 'var(--ink)', marginTop: 28, lineHeight: 1.15 }}>
                Cómo darle <span style={{ color: 'var(--g-yellow)' }}>“manos”</span> a tu agente con este MCP
              </div>
              <div style={{ fontSize: 26, color: 'var(--ink-2)', marginTop: 20 }}>
                Acceso directo a la capa de desarrollo del navegador para emular, auditar y diagnosticar.
              </div>
            </div>

            <div className="stage-card ok" style={{ padding: '48px 44px' }}>
              <div className="t-numeral" style={{ fontSize: 96, color: 'var(--g-green)' }}>02</div>
              <div style={{ fontSize: 44, fontWeight: 700, color: 'var(--ink)', marginTop: 28, lineHeight: 1.15 }}>
                Muchísimas ganas de seguir viniendo y <span style={{ color: 'var(--g-green)' }}>exponerse</span>
              </div>
              <div style={{ fontSize: 26, color: 'var(--ink-2)', marginTop: 20 }}>
                Asistir a eventos, dar charlas o mostrar proyectos: en resumen, exposición.
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Beat 3: Muchas gracias */}
      <Reveal on={here && b === 3} out={here && b > 3} x={140} y={130}>
        <div style={{ width: 1640, height: 810, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div className="gdots"><span /><span /><span /><span /></div>
            <span className="t-meta" style={{ fontSize: 24 }}>{config.event}</span>
          </div>

          <div>
            <div className="t-statement" style={{ fontSize: 168, color: 'var(--ink)' }}>
              Muchas gracias.
            </div>
            <div className="t-editorial" style={{ fontSize: 44, color: 'var(--g-yellow)', marginTop: 28 }}>
              ¿Preguntas? Nos vemos haciendo networking.
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
              <div style={{ fontSize: 40, fontWeight: 600, color: 'var(--ink)' }}>{config.author}</div>
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

      {/* Beat 4: Fuentes y Documentación Oficial */}
      <Reveal on={here && b === 4} x={140} y={100}>
        <div style={{ width: 1640 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="kicker-pill">Documentación y Estándares</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div className="gdots"><span /><span /><span /><span /></div>
              <span className="t-meta" style={{ fontSize: 20 }}>{config.author} · {config.event}</span>
            </div>
          </div>

          <div className="t-statement" style={{ fontSize: 80, marginTop: 18 }}>
            Fuentes Oficiales
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24,
              marginTop: 28,
            }}
          >
            {config.sources.map((src) => (
              <div
                key={src.num}
                className="stage-card"
                style={{
                  padding: '22px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 10,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="t-meta" style={{ fontSize: 18, color: src.accent }}>
                    {src.num} // {src.tag}
                  </span>
                </div>
                <div style={{ fontSize: 30, fontWeight: 700, color: 'var(--ink)' }}>
                  {src.title}
                </div>
                <div style={{ fontSize: 21, color: 'var(--ink-2)', lineHeight: 1.25 }}>
                  {src.desc}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 19,
                    color: 'var(--g-yellow)',
                    marginTop: 4,
                  }}
                >
                  {src.url}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}

/** 05 CIERRE · COMUNIDAD — Cierre inspiracional, Berlín, networking, despedida y fuentes oficiales. */
export const Close = () => (
  <Scene index={4}>
    <Close_ />
  </Scene>
);
