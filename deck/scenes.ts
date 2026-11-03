import type { SceneDef } from 'beatdeck';

/**
 * The talk's beat map: scenes → beats. One click = one beat.
 * Mapped 1:1 from `guion.md` (and `reference/guion.md`).
 */
export const SCENES: SceneDef[] = [
  {
    id: '01',
    title: 'INTRO · BERLÍN',
    beats: [
      {
        name: 'standby',
        ref: 'guion.md §1',
        note: 'Pantalla en espera en el proyector. Un clic lanza la portada de la charla.',
      },
      {
        name: 'portada',
        ref: 'guion.md §1',
        source: 'Dándole "manos" a tu IA con Chrome DevTools MCP — Miguel García',
        note: 'Muy buenas a todos. Hoy vamos a hablar de cómo darle manos a nuestra IA con Chrome DevTools MCP.',
      },
      {
        name: 'berlín · google i/o connect',
        ref: 'guion.md §1',
        source: 'Viajé a Berlín para asistir al Google I/O Connect. Me acerqué al stand del equipo de Google Chrome: tenían una demo en directo del Chrome DevTools for Agents MCP.',
        note: 'Contar la anécdota de junio en Berlín, paseando por el stand del ecosistema de Google Chrome.',
      },
      {
        name: 'me explotó la cabeza',
        ref: 'guion.md §1',
        source: 'Le pidieron a la IA en lenguaje natural que hiciera un testeo profundo en el navegador usando ese protocolo. Cuando vi cómo el agente interactuaba con la web, me explotó la cabeza.',
        note: 'No recuerdo el comando exacto, pero sí lo que vi: testeo profundo en lenguaje natural y mil ideas de golpe.',
      },
      {
        name: 'quién habla · miguel garcía',
        ref: 'guion.md §1',
        source: 'Mi nombre es Miguel García. Trabajo como Full stack AI-native engineer en Grupo Northius y formo parte del GDG A Coruña como organizador.',
        note: 'Presentación rápida: Full stack AI-native engineer en Grupo Northius y organizador del GDG A Coruña.',
      },
    ],
  },
  {
    id: '02',
    title: 'QUÉ ES UN MCP',
    beats: [
      {
        name: 'sección 01 · qué es un mcp',
        ref: 'guion.md §2',
        source: 'He mencionado la palabra MCP, pero... ¿qué es exactamente un MCP (Model Context Protocol)?',
        note: 'Transición al bloque teórico: explicar MCP de forma muy visual.',
      },
      {
        name: 'un cerebro en un frasco',
        ref: 'guion.md §2',
        source: 'Imaginen un modelo de lenguaje, por muy potente que sea, como un cerebro en un frasco. Sabe mucho, razona muy bien, pero está encerrado en una caja de texto. No tiene manos.',
        note: 'Aparece el LLM aislado en su caja de texto: razona genial, pero no tiene manos.',
      },
      {
        name: 'el usb-c de la ia',
        ref: 'guion.md §2',
        source: 'Para darle herramientas, Anthropic sacó un estándar abierto llamado MCP. El MCP es, literalmente, el USB-C de la Inteligencia Artificial.',
        note: 'Se despliega el puerto estándar MCP conectado al modelo.',
      },
      {
        name: 'puerto 01 · bases de datos',
        ref: 'guion.md §2',
        source: 'El MCP es un puerto estándar que permite conectar un modelo de IA a sus bases de datos...',
        note: 'Primer cable del diagrama: conexión a Bases de datos.',
      },
      {
        name: 'puerto 02 · archivos locales',
        ref: 'guion.md §2',
        source: '...a sus archivos locales...',
        note: 'Segundo cable del diagrama: conexión a Archivos locales.',
      },
      {
        name: 'puerto 03 · el navegador',
        ref: 'guion.md §2',
        source: '...o en este caso, directamente a su navegador.',
        note: 'Tercer cable (protagonista de hoy): conexión directa al navegador Chrome.',
      },
    ],
  },
  {
    id: '03',
    title: 'OJOS VS. SISTEMA NERVIOSO',
    beats: [
      {
        name: 'sección 02 · la comparativa',
        ref: 'guion.md §3',
        source: 'Chrome DevTools MCP vs. Agentes Visuales (Computer Use).',
        note: 'Entramos en el valor técnico: por qué no basta con un agente que mire la pantalla.',
      },
      {
        name: 'computer use · mira la pantalla',
        ref: 'guion.md §3',
        source: 'Pueden usar agentes de Computer Use, esos que levantan una máquina virtual y mueven el ratón. El agente solo mira la pantalla. Si la página carga y el botón se ve, dirá: "Todo guay, test superado".',
        note: 'Lado izquierdo del diagrama: VM + Ratón mirando píxeles. Ve el botón verde y da el test por superado.',
      },
      {
        name: 'ciego por debajo · rayos x',
        ref: 'guion.md §3',
        source: 'Pero es ciego a lo que pasa por debajo.',
        note: 'Se abre la capa subterránea bajo Computer Use: hay un HTTP 500 y errores en consola que los ojos no ven.',
      },
      {
        name: 'chrome devtools mcp · protocolo cdp',
        ref: 'guion.md §3',
        source: 'El Chrome DevTools MCP no usa los ojos, se conecta directamente al sistema nervioso del navegador: el Chrome DevTools Protocol (CDP). Lee la consola JS en tiempo real, ve un error 500 silencioso o las variables ocultas del DOM.',
        note: 'Lado derecho del diagrama: conexión directa al CDP leyendo Consola, Red (500) y DOM en vivo.',
      },
      {
        name: 'un desarrollador auditando',
        ref: 'guion.md §3',
        source: 'Es un desarrollador auditando, no un usuario mirando.',
        note: 'Frase lapidaria del bloque técnico. Dejar un segundo de silencio tras leerla.',
      },
    ],
  },
  {
    id: '04',
    title: 'LIVE DEMOS · ANTIGRAVITY',
    beats: [
      {
        name: 'sección 03 · manos a la obra',
        ref: 'guion.md §4',
        source: 'Vamos a ensuciarnos las manos. Voy a usar Antigravity, mi editor, conectado por MCP al navegador de Chrome para hacer 3 cosas en directo.',
        note: 'Presentar el entorno de pruebas: Antigravity + Chrome DevTools MCP contra los 3 servidores locales.',
      },
      {
        name: 'demo 01 · test qa con analítica',
        ref: 'guion.md §4',
        source: 'Demo 1: El Test QA con Analítica. "Navega a esta landing en localhost, rellena el formulario de contacto con datos realistas y verifica que en el window.dataLayer se ha registrado perfectamente el evento de Google Analytics".',
        note: 'Saltar a Antigravity con localhost:4001. Destacar: cero selectores frágiles, lenguaje natural comprobando window.dataLayer.',
      },
      {
        name: 'demo 02 · auditoría a11y',
        ref: 'guion.md §4',
        source: 'Demo 2: Auditoría de Accesibilidad (a11y). "Pásame un reporte de contraste de colores y comprueba si falta alguna etiqueta ARIA en la página actual".',
        note: 'Saltar a Antigravity con localhost:4002. Ver cómo audita el DOM profundo y saca los fallos de contraste y ARIA.',
      },
      {
        name: 'demo 03 · debugging de red 500',
        ref: 'guion.md §4',
        source: 'Demo 3: Debugging de Red. "Haz el flujo de compra y avísame si ves algún error en las peticiones de red o en la consola". La IA interceptará el tráfico de red nativo de DevTools.',
        note: 'Saltar a Antigravity con localhost:4003. La UI dice que el pedido se procesa, pero el agente caza el HTTP 500 en /api/checkout.',
      },
    ],
  },
  {
    id: '05',
    title: 'CIERRE · COMUNIDAD',
    beats: [
      {
        name: 'volvemos a berlín',
        ref: 'guion.md §5',
        source: 'Para terminar, quiero volver a ese viaje a Berlín. Si no hubiera ido a ese evento, no habría pasado por aquel stand, no habría visto ese protocolo funcionar y hoy no estaría aquí subido contándoles esto.',
        note: 'Conectar la historia inicial de Berlín con el motivo real de la charla.',
      },
      {
        name: 'estudiar es la base · networking',
        ref: 'guion.md §5',
        source: 'Estudiar es la base, pero lo que de verdad nos da el impulso, lo que nos saca del tutorial hell y nos hace descubrir cosas increíbles, es estar moviéndonos y haciendo networking.',
        note: 'El mensaje inspiracional: salir del tutorial hell asistiendo a eventos como este DevFest.',
      },
      {
        name: 'para llevarse · dos cosas',
        ref: 'guion.md §5',
        source: 'Espero que se lleven claro cómo funciona y cómo darle "manos" a su IA con el MCP, pero, sobre todo, que se vayan con más ganas de seguir asistiendo a eventos de este tipo.',
        note: 'Resumen final de los dos takeaways antes de dar las gracias.',
      },
      {
        name: 'muchas gracias',
        ref: 'guion.md §5',
        source: 'Muchas gracias.',
        note: 'Cierre y despedida. Pasar al último beat para dejar las fuentes oficiales en pantalla durante las preguntas.',
      },
      {
        name: 'fuentes y documentación oficial',
        ref: 'guion.md §2–§4',
        source: 'Fuentes exclusivas: Model Context Protocol, Chrome DevTools MCP, Chrome DevTools Protocol (CDP), Eventos GA4 (window.dataLayer), WCAG 2.2 / WAI-ARIA y Google Antigravity MCP.',
        note: 'Dejar esta pantalla fija durante el turno de preguntas para que la sala pueda hacer foto a los enlaces oficiales.',
      },
    ],
  },
];

export const TOTAL_BEATS = SCENES.reduce((n, s) => n + s.beats.length, 0);
