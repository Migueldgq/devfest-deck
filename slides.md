---
theme: default
title: Dándole "manos" a tu IA con Chrome DevTools MCP
info: |
  DevFest Santiago de Compostela
  Miguel García
author: Miguel García
lang: es
colorSchema: dark
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: fade
selectable: true
wakeLock: true
aspectRatio: 16/9
canvasWidth: 980
fonts:
  sans: Outfit
  mono: JetBrains Mono
  provider: google
layout: cover
---

<div class="cover">
  <header class="cover-top">
    <span class="gdots" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <span>DevFest Santiago de Compostela</span>
  </header>
  <h1>Dándole <em>“manos”</em><br>a tu IA</h1>
  <footer class="cover-meta">
    <div>
      <strong>Miguel García</strong>
      <span>AI Native Engineer · Grupo Northius</span>
    </div>
    <div>
      <strong>GDG A Coruña</strong>
      <span>Organizador</span>
    </div>
  </footer>
</div>

<!--
Muy buenas a todos.
Hoy vamos a hablar de cómo darle manos a un modelo: Chrome DevTools MCP.
Antes de la teoría, Berlín.
-->

---

<div class="kicker">Junio · Berlín</div>

# Google I/O Connect

Stand del equipo de Chrome. Una demo montada en directo.

Chrome DevTools for Agents MCP.

<!--
Viajé a Berlín al Google I/O Connect. Paseando, me acerqué al stand del ecosistema de Google Chrome.
Tenían una demo en directo que me llamó muchísimo la atención: Chrome DevTools for Agents MCP.
-->

---
layout: statement
---

<div class="kicker">La demo</div>

# Me explotó la cabeza.

<!--
No recuerdo el comando exacto. Sí recuerdo lo que vi: le pidieron a la IA, en lenguaje natural, que hiciera un testeo profundo en el navegador.
Cuando vi cómo el agente interactuaba con la web, se me vinieron de golpe mil ideas sobre cómo podíamos cambiar nuestra forma de desarrollar.
-->

---

<div class="kicker">Quién habla</div>

# Miguel García

El puesto pone AI Native Engineer. En la práctica, usamos la IA para todo.

<div class="facts">
  <div>
    <span>Trabajo</span>
    <strong>Grupo Northius</strong>
  </div>
  <div>
    <span>Oficio</span>
    <strong>Full stack</strong>
  </div>
  <div>
    <span>Comunidad</span>
    <strong>GDG A Coruña</strong>
  </div>
</div>

<!--
Me presento: Miguel García. Desarrollador full stack en Grupo Northius.
El puesto oficial pone AI Native Engineer, pero eso significa que usamos la IA para todo.
Y organizo el Google Developer Groups de A Coruña.
-->

---

<div class="kicker">Hoy</div>

# Cuatro paradas

<ol class="agenda">
  <li><span>01</span>Qué es un MCP</li>
  <li><span>02</span>Dos comparativas</li>
  <li><span>03</span>Tres demos en Cursor</li>
  <li><span>04</span>Por qué estamos en esta sala</li>
</ol>

<!--
Vamos al lío. Primero, qué es un MCP. Después, contra qué se compara. Luego lo vemos en el navegador. Y al final, por qué les he contado lo de Berlín.
-->

---
layout: section
---

<p class="index">01</p>

# Qué es un MCP

<p>Un puerto estándar para que el modelo deje de vivir en una caja de texto.</p>

<!--
He mencionado MCP. Model Context Protocol. Anthropic sacó este estándar abierto para darle herramientas a un modelo.
-->

---

<div class="kicker">Model Context Protocol</div>

# Un cerebro en un frasco

Sabe mucho. Razona bien. No tiene manos.

<!--
Imaginen un modelo, por muy potente que sea, como un cerebro en un frasco.
Sabe mucho, razona muy bien, pero está encerrado en una caja de texto. No tiene manos.
El MCP existe para darle herramientas.
-->

---

<div class="kicker">La metáfora</div>

# El USB-C de la IA

Un mismo puerto. El cable cambia.

<div class="ports">
  <article>
    <span>01</span>
    <strong>Bases de datos</strong>
  </article>
  <article>
    <span>02</span>
    <strong>Archivos locales</strong>
  </article>
  <article class="on">
    <span>03</span>
    <strong>El navegador</strong>
    <em>Hoy, este</em>
  </article>
</div>

<!--
El MCP es, literalmente, el USB-C de la inteligencia artificial.
Igual que un cable USB-C conecta un monitor, un disco o un móvil al mismo puerto, el MCP conecta un modelo a bases de datos, archivos locales o, en este caso, directamente al navegador.
-->

---
layout: section
---

<p class="index blue">02</p>

# Dos comparativas

<p>Computer Use mira. Playwright afirma. Este protocolo depura.</p>

<!--
Ahora el valor técnico. Hay dos formas habituales de automatizar un navegador con IA, y las dos se quedan cortas para lo que vamos a ver.
-->

---

<div class="kicker">Comparativa</div>

# Ojos, o sistema nervioso

<div class="vs">
  <article>
    <p class="who">Computer Use</p>
    <h2>Mira la pantalla</h2>
    <ul>
      <li>Levanta una máquina y mueve el ratón</li>
      <li>Si el botón se ve, el test pasa</li>
      <li>Ciego a lo que pasa por debajo</li>
    </ul>
  </article>
  <article class="focus">
    <p class="who">Chrome DevTools MCP</p>
    <h2>Lee el navegador</h2>
    <ul>
      <li>Se conecta al protocolo CDP</li>
      <li>Consola, red y DOM</li>
      <li>Ve un 500 aunque la UI esté bien</li>
    </ul>
  </article>
</div>

<!--
Computer Use levanta una máquina virtual y mueve el ratón. El agente solo mira la pantalla. Si la página carga y el botón se ve, dice: todo guay, test superado. Pero es ciego a lo que pasa por debajo.
Chrome DevTools MCP no usa los ojos. Se conecta al sistema nervioso del navegador: el Chrome DevTools Protocol. Lee la consola en tiempo real, ve un 500 silencioso y las variables ocultas del DOM.
-->

---
layout: statement
---

# Un desarrollador auditando. No un usuario mirando.

<!--
Esa es la diferencia. No es un usuario mirando una pantalla. Es un desarrollador con el F12 abierto.
-->

---

<div class="kicker">Comparativa</div>

# «Para eso ya tengo Playwright»

<div class="vs">
  <article>
    <p class="who">Playwright MCP</p>
    <h2>Pasa o falla</h2>
    <ul>
      <li>Aserciones rígidas</li>
      <li>Selectores CSS</li>
      <li>Se rompe si cambia el botón</li>
    </ul>
  </article>
  <article class="focus">
    <p class="who">Chrome DevTools MCP</p>
    <h2>Se adapta</h2>
    <ul>
      <li>Sin esa capa de abstracción</li>
      <li>Herramientas nativas de Chrome</li>
      <li>Navega y depura con el F12</li>
    </ul>
  </article>
</div>

<!--
Los que hacen QA dirán: Miguel, para eso ya tengo Playwright o Cypress.
Existe un MCP de Playwright, pero es un framework de testing rígido: pasa o falla, con selectores CSS que se rompen cuando el diseñador cambia un botón.
Chrome DevTools MCP no tiene esa capa. Va a las herramientas nativas de Chrome. Testing agéntico: la IA se adapta a la UI y depura como lo haríamos nosotros con el F12 abierto.
-->

---
layout: section
---

<p class="index green">03</p>

# Manos a la obra

<p>Cursor conectado por MCP al Chrome. Tres cosas, en directo.</p>

<!--
Esto se entiende mejor viéndolo. Voy a usar Cursor, conectado por MCP al navegador, para hacer tres cosas en directo. A partir de aquí, interactuar con la sala.
-->

---

<div class="kicker"><span class="live">En directo</span> Demo 01 · QA</div>

# Test con analítica

<Prompt text="Navega a esta landing en localhost, rellena el formulario de contacto con datos realistas y verifica que en window.dataLayer se ha registrado el evento de Google Analytics." />

<p class="hint">Nada de selectores. Lenguaje natural. Qué tiene que verse: el evento en window.dataLayer.</p>

<!--
Demo 1. El test QA con analítica.
Pedir exactamente esto. Señalar que no hay selectores frágiles: es lenguaje natural, y el agente comprueba el dataLayer.
-->

---

<div class="kicker"><span class="live">En directo</span> Demo 02 · a11y</div>

# Contraste y ARIA

<Prompt text="Pásame un reporte de contraste de colores y comprueba si falta alguna etiqueta ARIA en la página actual." />

<p class="hint">Qué tiene que verse: la IA auditando el DOM y devolviendo los errores.</p>

<!--
Demo 2. Auditoría de accesibilidad.
Van a ver cómo entra en el DOM profundo y nos devuelve contraste y ARIA que faltan.
-->

---

<div class="kicker"><span class="live">En directo</span> Demo 03 · Red</div>

# Un 500 escondido

<Prompt text="Haz el flujo de compra y avísame si ves algún error en las peticiones de red o en la consola." />

<p class="hint">Antes de pedirlo, simular un fallo en la API. Qué tiene que verse: el error de red o de consola.</p>

<!--
Demo 3. Debugging de red.
Primero simulo un fallo en la API. Luego el prompt. La IA intercepta el tráfico nativo de DevTools, no una captura de pantalla.
-->

---
layout: statement
---

<div class="kicker">Volvemos a Berlín</div>

# Si no hubiera ido, hoy no estaría aquí.

<!--
Para terminar, vuelvo a esa historia.
Si no hubiera ido a ese evento, no habría pasado por aquel stand. No habría visto el protocolo funcionar, no habría investigado, y hoy no estaría aquí contándoles esto.
-->

---

<div class="kicker">El caballo de Troya</div>

# Estudiar es la base.

<div class="lines">
  <p>El impulso es moverse.</p>
  <p>Salir del tutorial hell.</p>
  <p>Eso se llama networking.</p>
</div>

<!--
Quiero que se vayan con más ganas de seguir viniendo a eventos como este DevFest.
Estudiar es la base. Lo que de verdad nos da el impulso, lo que nos saca del tutorial hell y nos hace descubrir cosas, es movernos y hacer networking.
El simple hecho de que estén aquí hoy ya dice muchísimo de ustedes.
-->

---

<div class="kicker">Para llevarse</div>

# Dos cosas

<div class="carry">
  <article>
    <span>01</span>
    <strong>Cómo darle manos a su IA</strong>
  </article>
  <article>
    <span>02</span>
    <strong>Más ganas de volver a un DevFest</strong>
  </article>
</div>

<!--
Espero que se lleven claro cómo funciona el MCP y cómo darle manos a su IA. Y, sobre todo, más ganas de seguir asistiendo a eventos de este tipo.
-->

---
layout: end
---

<div class="thanks">
  <p class="eyebrow">
    <span class="gdots" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <span>DevFest Santiago de Compostela</span>
  </p>
  <h1>Gracias.</h1>
  <footer class="cover-meta">
    <div class="who">
      <strong>Miguel García</strong>
      <span>GDG A Coruña · Grupo Northius</span>
    </div>
  </footer>
</div>

<!--
Muchas gracias.
Abrir el turno de preguntas si queda tiempo.
-->
