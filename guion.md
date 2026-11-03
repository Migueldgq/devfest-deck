# Guion de Charla: Dándole "manos" a tu IA con Chrome DevTools MCP

## 1. La Intro y el Rompehielos (El gancho)

"Muy buenas a todos. Para arrancar esta charla, quiero llevarlos un momento a junio de este año. Viajé a Berlín para asistir al Google I/O Connect. Mientras paseaba por allí, me acerqué al stand del equipo del ecosistema de Google Chrome y tenían una demo montada en directo que me llamó muchísimo la atención: era el **Chrome DevTools for Agents MCP**.

Sinceramente, no recuerdo el comando exacto que lanzaron en la demo, pero sí recuerdo lo que vi: le pidieron a la IA en lenguaje natural que hiciera un testeo profundo en el navegador usando ese protocolo. Cuando vi cómo el agente interactuaba con la web, me explotó la cabeza. Se me vinieron de golpe mil ideas sobre cómo podíamos cambiar nuestra forma de desarrollar.

Así que, después de esta pequeña anécdota, me presento: mi nombre es Miguel García. Trabajo como **Full stack AI-native engineer** en Grupo Northius y, además de eso, formo parte del Google Developer Groups (GDG) A Coruña como organizador."

## 2. ¿Qué es un MCP? (La teoría fácil)

"Vale, vamos al lío. He mencionado la palabra 'MCP', pero... ¿qué es exactamente un MCP (Model Context Protocol)?

Imaginen un modelo de lenguaje, por muy potente que sea, como un cerebro en un frasco. Sabe mucho, razona muy bien, pero está encerrado en una caja de texto. No tiene manos. Para que nosotros le demos herramientas, Anthropic sacó un estándar de código abierto llamado MCP.

**El MCP es, literalmente, el USB-C de la Inteligencia Artificial.**

Igual que ustedes usan un cable USB-C para conectar un monitor, un disco duro o un móvil a su portátil con el mismo puerto, el MCP es un puerto estándar que permite conectar un modelo de IA a sus bases de datos, a sus archivos locales, o en este caso, **directamente a su navegador**."

## 3. Chrome DevTools MCP vs. Agentes Visuales (Computer Use)

"Ahora mismo, si quieren automatizar un navegador con IA, pueden usar agentes de 'Computer Use', esos que levantan una máquina virtual y mueven el ratón. ¿Cuál es el problema de eso? Que el agente solo 'mira la pantalla'. Si la página carga y el botón se ve, el agente les dirá: *'Todo guay, test superado'*. Pero es ciego a lo que pasa por debajo.

El **Chrome DevTools MCP** no usa los ojos, se conecta directamente al sistema nervioso del navegador: el *Chrome DevTools Protocol (CDP)*. Esto significa que la IA puede leer la consola de JavaScript en tiempo real, ver si una petición de red ha dado un error 500 silencioso o leer las variables ocultas del DOM. Es un desarrollador auditando, no un usuario mirando."

## 4. Las Live-Demos (La acción)

"Pero como esto se entiende mejor viéndolo, vamos a ensuciarnos las manos. Voy a usar Antigravity, mi editor, conectado por MCP al navegador de Chrome para hacer 3 cosas en directo:

- **Demo 1: El Test QA con Analítica.** Le voy a pedir a Antigravity: *'Navega a esta landing en localhost, rellena el formulario de contacto con datos realistas y verifica que en el window.dataLayer se ha registrado perfectamente el evento de Google Analytics'*. Nada de selectores frágiles, puro lenguaje natural.
- **Demo 2: Auditoría de Accesibilidad (a11y).** Le diré al agente: *'Pásame un reporte de contraste de colores y comprueba si falta alguna etiqueta ARIA en la página actual'*. Van a ver cómo la IA audita el DOM profundo y nos devuelve los errores.
- **Demo 3: Debugging de Red.** Voy a simular un fallo en la API y le pediré al agente: *'Haz el flujo de compra y avísame si ves algún error en las peticiones de red o en la consola'*. La IA interceptará el tráfico de red nativo de DevTools."

## 5. El Cierre (La inspiración)

"Y bueno, para terminar, quiero volver un momento a esa historia del principio, a ese viaje a Berlín.

¿Por qué les he contado esto? Porque si no hubiera ido a ese evento, no habría pasado por aquel stand. No habría visto ese protocolo funcionar, no habría investigado sobre ello y, desde luego, hoy no estaría aquí subido contándoles esto a ustedes.

Quiero que todos y todas los que están aquí presentes se vayan con más ganas de seguir asistiendo a eventos como este DevFest. En este mundo de la tecnología, está claro que estudiar es la base, pero lo que de verdad nos da el impulso en nuestra carrera profesional, lo que nos saca del 'tutorial hell' y nos hace descubrir cosas increíbles, es estar moviéndonos y haciendo eso que se llama networking.

El simple hecho de que estén aquí hoy ya dice muchísimo de ustedes. Así que espero que se lleven claro cómo funciona y cómo darle 'manos' a su IA con el MCP, pero, sobre todo, espero que se vayan con más ganas de seguir asistiendo a eventos de este tipo.

Muchas gracias."
