import type { SceneDef } from 'beatdeck';

/**
 * The talk's beat map: scenes → beats. One click = one beat.
 * Mapped 1:1 from `guion.md` (and Google Docs script).
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
        note: 'Esta charla no la quiero comenzar haciendo la clásica presentación de "hola buenas soy Miguel del grupo 1 y hoy voy a hablar de inteligencia artificial", así que quiero iniciarla contando la historia de cómo conocí el MCP del que voy a hablar hoy.',
      },
      {
        name: 'berlín · google i/o connect',
        ref: 'guion.md §1',
        source: 'Todo se remonta a junio de este año, mes en el que viajo a Berlín al Google I/O Connect (la versión Europa del Google I/O con modelos open source y novedades). Habían distintos stands: IA, Cloud, Android y Chrome.',
        note: 'Contar el viaje a Berlín en junio. Explicar qué es Google I/O Connect y los stands divididos entre ecosistema IA, Cloud, Android y Chrome.',
      },
      {
        name: 'el stand de chrome · demo en lenguaje natural',
        ref: 'guion.md §1',
        source: 'A mí me llamó la atención el de Chrome: mostraban una demo que ahora mismo no recuerdo bien lo que hacía —lo siento, tengo memoria de pez a temprana edad—, pero a través de lenguaje natural podías pedirle que hiciera un testeo sin necesidad de armarlo a código.',
        note: 'La anécdota del stand de Chrome y la memoria de pez: pedirle un testeo en lenguaje natural sin tirar código. Me pareció increíble y me llevó a investigar este MCP y utilizarlo.',
      },
      {
        name: 'quién habla · miguel garcía',
        ref: 'guion.md §1',
        source: 'Ahora sí, me presento: Soy Miguel García —tengo dos nombres pero solo mi madre me llama por los dos cuando me quiere echar la bronca—. Trabajo como desarrollador full stack en Northius y soy organizador de GDG A Coruña.',
        note: 'Presentación: Desarrollador full stack en Northius y organizador en GDG A Coruña. Broma de los dos nombres.',
      },
      {
        name: 'hoja de ruta · en esta charla vamos a',
        ref: 'guion.md §1',
        source: 'En esta charla vamos a: 1. Repasar qué es un MCP. 2. Agente Computer use vs. Usar agente con MCP. 3. 3 demos de cómo usar el MCP.',
        note: 'Hoja de ruta clara para la sala: 1. Qué es un MCP, 2. Computer use vs. MCP, 3. Tres demos en vivo.',
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
        source: 'Vamos con el primer punto: ¿quién de aquí ha utilizado algún MCP y podría decirme qué es un MCP? ... Venga va, no me hacen falta definiciones técnicas, me vale que sea con las propias palabras de ustedes.',
        note: 'Lanzar pregunta interactiva a la sala. Pausa. Si nadie responde, animarles: "me vale con vuestras propias palabras".',
      },
      {
        name: 'un cerebro en un frasco',
        ref: 'guion.md §2',
        source: 'Un MCP es un protocolo de estándar abierto creado por Anthropic por el cual podemos darle "manos" a nuestro agente. Imaginemos un agente como un cerebro muy sabio pero dentro de un frasco: no tiene manos y no puede acceder a conocimiento de fuera.',
        note: 'La metáfora del cerebro en el frasco: muy sabio y razona genial, pero no tiene manos ni acceso a lo que pasa fuera.',
      },
      {
        name: 'el usb-c de la ia',
        ref: 'guion.md §2',
        source: 'El MCP es el USB-C universal de la Inteligencia Artificial. Un estándar abierto para que el modelo conecte herramientas externas.',
        note: 'Se despliega el puerto estándar MCP conectado al agente.',
      },
      {
        name: 'puerto 01 · beber de bases de datos',
        ref: 'guion.md §2',
        source: 'Un MCP le permite al agente beber conocimiento de bases de datos...',
        note: 'Primer cable del diagrama: conexión a Bases de datos.',
      },
      {
        name: 'puerto 02 · archivos locales y código',
        ref: 'guion.md §2',
        source: '...de archivos locales y código...',
        note: 'Segundo cable del diagrama: archivos locales y código de la app.',
      },
      {
        name: 'puerto 03 · capa de desarrollo del navegador',
        ref: 'guion.md §2',
        source: '...y en este caso, le damos acceso al navegador, específicamente a la capa de desarrollo.',
        note: 'Tercer cable (el protagonista de hoy): acceso a la capa de desarrollo de Chrome.',
      },
    ],
  },
  {
    id: '03',
    title: 'COMPUTER USE VS. MCP',
    beats: [
      {
        name: 'sección 02 · la comparativa',
        ref: 'guion.md §3',
        source: '¿Cuál es la diferencia entre un agente computer use —el agente normal sin este MCP— frente a nuestro agente con este MCP?',
        note: 'Entramos en la diferencia conceptual clave: mirar capturas de pantalla frente a acceder a la capa de desarrollo.',
      },
      {
        name: 'computer use · solo capturas de pantalla',
        ref: 'guion.md §3',
        source: 'La diferencia es que el agente computer use se basa en leer el navegador con capturas de pantalla únicamente, solo eso. Si en el front todo se ve bien, dirá: "Todo guay, test superado".',
        note: 'Computer use lee imágenes/píxeles con capturas. Solo ve la superficie visual.',
      },
      {
        name: 'la pregunta al público · pasarela de pagos',
        ref: 'guion.md §3',
        source: '¿Esto qué quiere decir? Pregunta al público: Si tenemos una pasarela de pagos que queremos testear, y en el front todo pone que está okey, pero por detrás la petición a nuestra API está fallando... ¿qué agente lo detecta primero? ¿El computer use o nuestro agente con el MCP?',
        note: 'Lanzar la pregunta de la pasarela de pagos. Alguien dirá "el MCP". Respuesta: ¡Perfecto, respuesta correcta!',
      },
      {
        name: 'chrome devtools mcp · protocolo cdp',
        ref: 'guion.md §3',
        source: 'El Chrome DevTools MCP for agents tiene acceso directo a la capa de desarrollo mediante el Chrome DevTools Protocol (CDP). Lee la consola en tiempo real, caza errores en la red y analiza el DOM profundo.',
        note: 'Lado derecho del diagrama: conexión directa al CDP leyendo consola, red y estado interno en tiempo real.',
      },
      {
        name: 'los 3 puntos fuertes del mcp',
        ref: 'guion.md §3',
        source: 'Los 3 puntos fuertes de este MCP son: 1. Emular experiencia de usuario. 2. Auditar accesibilidad. 3. Análisis de performance (como Core Web Vitals). Es un desarrollador auditando, no un usuario mirando.',
        note: 'Resumir con fuerza los 3 puntos fuertes: Emular experiencia, Auditar accesibilidad y Análisis de performance.',
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
        source: 'Así que dicho esto, ¡vamos con las demos! Voy a usar Antigravity conectado por MCP al navegador Chrome para hacer 3 pruebas reales en vivo.',
        note: 'Transición al bloque práctico: Antigravity + Chrome DevTools MCP en localhost.',
      },
      {
        name: 'demo 01 · test de formulario y analítica ga4',
        ref: 'guion.md §4',
        source: 'Demo 1: Pedirle con lenguaje natural —nada de tecnicismo profundo— realizar el testeo de envío de formulario y verificar que saltan los eventos de GA4 (estándar de Google para trazabilidad en marketing).',
        note: 'Saltar a Antigravity en localhost:4001. Rellenar formulario y validar el embudo de GA4 en window.dataLayer.',
      },
      {
        name: 'demo 02 · auditoría wcag y corrección interactiva',
        ref: 'guion.md §4',
        source: 'Demo 2: Auditoría de accesibilidad según WCAG. Anécdota: al dar la charla el martes en mi empresa, un compañero me propuso: "¿es posible pedirle que ejecute un script para corregir lo que descubrió y ver la web como se debe?". La respuesta es sí: ¡atentos porque sí que se nota el cambio!',
        note: 'Saltar a Antigravity en localhost:4002. Auditar contraste y ARIA según WCAG, y ejecutar el script en vivo para arreglarlo.',
      },
      {
        name: 'demo 03 · pasarela de pagos y debugging de red',
        ref: 'guion.md §4',
        source: 'Demo 3: Pasarela de pagos que visualmente nos dice que todo está correcto, pero por detrás está fallando. Efectivamente, el reporte nos muestra el error en la API del checkout al inspeccionar DevTools.',
        note: 'Saltar a Antigravity en localhost:4003. La UI engaña con un banner verde, pero DevTools MCP caza el fallo en la red al instante.',
      },
    ],
  },
  {
    id: '05',
    title: 'CIERRE · COMUNIDAD',
    beats: [
      {
        name: 'volvemos al inicio · el viaje a berlín',
        ref: 'guion.md §5',
        source: 'Ahora quiero volver al inicio de la charla, cuando conté la historia de Berlín. Si no fuera por haber estado en ese evento, no hubiera descubierto este MCP, y quizás hoy no estaría aquí tampoco porque allí conocí a Sara, organizadora de GDG Santiago que me invitó a dar esta charla. ¡Un abrazo grande a Sara!',
        note: 'Cerrar el círculo con Berlín: conocer a Sara de GDG Santiago y descubrir el MCP gracias a viajar.',
      },
      {
        name: 'estudiar es la base · moverse y networking',
        ref: 'guion.md §5',
        source: 'Sé que muchos aquí son estudiantes o buscan crecer profesionalmente. Estudiar es la base, pero las cosas se consiguen moviéndose y haciendo cosas, como dijo ayer Martín. Lo que de verdad te saca del bucle del tutorial hell es salir a exponerte al mundo y hacer networking.',
        note: 'Mensaje inspirador: estudiar es la base, pero el salto real viene de moverse, salir del tutorial hell y hacer networking.',
      },
      {
        name: 'dos cosas para llevarse · exposición',
        ref: 'guion.md §5',
        source: 'Hoy quiero que todos se vayan con dos cosas: 1. Cómo darle manos a su agente con este MCP. 2. Muchísimas ganas de seguir asistiendo a eventos como este y exponerse al público (charlas, proyectos... en resumen: ¡Exposición!).',
        note: 'Los dos takeaways finales de la charla. Poner énfasis en la palabra Exposición.',
      },
      {
        name: 'muchas gracias',
        ref: 'guion.md §5',
        source: 'Muchas gracias y espero que les haya gustado.',
        note: 'Despedida. Un clic más para dejar las fuentes oficiales fijas en pantalla durante las preguntas.',
      },
      {
        name: 'fuentes y documentación oficial',
        ref: 'guion.md §2–§4',
        source: 'Fuentes oficiales: Model Context Protocol (Anthropic), Chrome DevTools MCP, Chrome DevTools Protocol (CDP), Estándar de Eventos GA4, Guías WCAG 2.2 / WAI-ARIA y Google Antigravity MCP.',
        note: 'Dejar este beat fijo durante el turno de preguntas para que la sala pueda fotografiar o copiar los enlaces.',
      },
    ],
  },
];

export const TOTAL_BEATS = SCENES.reduce((n, s) => n + s.beats.length, 0);
