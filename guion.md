# Guion de la Charla — DevFest Santiago de Compostela 2026

**Ponente:** Miguel García  
**Título:** Dándole "manos" a tu IA con Chrome DevTools MCP  
**Rol:** Desarrollador full stack en Northius · Organizador en GDG A Coruña  
**Fecha:** Noviembre 2026 · DevFest Santiago de Compostela  

---

## 1. Introducción y la Historia de Berlín

Esta charla no la quiero comenzar haciendo la clásica presentación de *"hola buenas, soy Miguel del grupo 1 y hoy voy a hablar de inteligencia artificial"*, así que quiero iniciarla contando la historia de cómo conocí el MCP del que voy a hablar hoy.

Todo se remonta a junio de este año, mes en el que viajo a Berlín al **Google I/O Connect**. Si alguien no sabe qué es el Google I/O Connect, es la versión Europa del Google I/O y es un evento en el que Google cuenta las novedades que traen para el año: modelos nuevos open source, etc.

El caso es que en este evento habían distintos stands y se dividían entre **ecosistema IA, Cloud, Android y Chrome**.

A mí me llamó la atención el de **Chrome**, y en ese stand te mostraban una demo que ahora mismo no recuerdo bien lo que hacía —lo siento, tengo memoria de pez a temprana edad—, pero sé que era que a través de **lenguaje natural** podías hacer un QA: podías pedirle que te hiciera un testeo sin necesidad de armarlo a código. Y eso fue algo que a mí en lo personal me pareció increíble y me llevó a investigar más sobre este MCP y utilizarlo.

Ahora sí, después de esta breve historia, me presento:

> Soy **Miguel García** —tengo dos nombres pero solo mi madre me llama por los dos cuando me quiere echar la bronca—, actualmente estoy trabajando como **desarrollador full stack en Northius** y soy **organizador de GDG A Coruña**.

En esta charla vamos a:
1. **Repasar qué es un MCP**
2. **Agente Computer use vs. Usar agente con MCP**
3. **3 demos de cómo usar el MCP**

---

## 2. Repasar qué es un MCP

Vamos con el primer punto: ¿quién de aquí ha utilizado algún MCP y podría decirme qué es un MCP?

*(Pausa interactiva con el público... Si nadie responde:)*  
*—"Venga va, no me hacen falta definiciones técnicas, me vale que sea con las propias palabras de ustedes."*

Vale, pues un MCP (**Model Context Protocol**) es un protocolo de estándar abierto creado por **Anthropic** por el cual podemos darle **"manos"** a nuestro agente.

Imaginemos un agente como un **cerebro muy sabio pero dentro de un frasco**: no tiene manos y no puede acceder a conocimiento de fuera.

Un MCP le permite al agente beber conocimiento de **bases de datos, archivos locales y código**, y en este caso le damos acceso al **navegador**, específicamente a la **capa de desarrollo**.

---

## 3. Agente Computer use vs. Usar agente con MCP

¿Cuál es la diferencia entre un agente *computer use* —que es, digamos, el agente normal sin este MCP— frente a nuestro agente con este MCP?

La diferencia es que el agente *computer use* se basa en **leer el navegador con capturas de pantalla únicamente**, solo eso. Y el agente con el **Chrome DevTools MCP for agents** tiene acceso directo a la **capa de desarrollo**.

¿Esto qué quiere decir? Y aquí quiero lanzar pregunta al público:

> *Si tenemos una pasarela de pagos que queremos testear, y en el frontend todo pone que está okey, pero resulta que por detrás la petición a nuestra API está fallando... ¿qué agente lo detecta primero? ¿El computer use o nuestro agente con el MCP?*

*(Alguien del público contesta que con el MCP)*  
—*¡Perfecto, respuesta correcta!*

Entonces ya lo tenemos claro: cómo funciona y qué ventaja nos da este MCP. Los **3 puntos fuertes** de este MCP son:
1. **Emular experiencia de usuario**
2. **Auditar accesibilidad**
3. **Análisis de performance** (como Core Web Vitals)

---

## 4. Las 3 Demos en Directo

Así que dicho esto, ¡vamos con las demos!

### Demo 1: Test de Formulario y Analítica GA4
Le pedimos con lenguaje natural —nada de tecnicismo profundo— realizar el testeo de envío de formulario y verificar que saltan los eventos de **GA4**. Para quien no lo sabe, estos son los eventos estándar de Google de analítica con los que, por ejemplo, cuando haces campañas de marketing puedes generar trazabilidad.

*(Realizo la demo en directo en localhost:4001...)*

### Demo 2: Auditoría de Accesibilidad (WCAG) + Corrección en Vivo
Vamos ahora con la segunda demo, en la que vamos a hacer una auditoría de accesibilidad basándonos en **WCAG** (*Web Content Accessibility Guidelines*).

Algo muy interesante de esto, que es algo que surgió ayer cuando di esta charla en mi empresa —porque sí, di esta charla el martes en mi empresa porque me dieron la oportunidad y me pareció bien para romper el hielo—, entonces lo que me propuso un compañero que asistió a la charla fue:

> *¿Con el análisis que te hace la IA de lo que descubrió, es posible que tú le pidas que ejecute un script en el navegador para que aplique las correcciones respectivas y tú veas la web como se debe?*

La respuesta es **sí**: ¡así que muy atentos porque sí que se nota el cambio!

*(Realizo la demo en directo en localhost:4002...)*

### Demo 3: Pasarela de Pagos (Error 500 Silencioso en DevTools)
Vamos ahora con la tercera y última demo: esta es una pasarela de pagos que visualmente nos dice que todo está correcto, pero por detrás está fallando.

Vamos a ello.

Como podemos ver, efectivamente lo que nos genera el reporte es que hay un error en la API del checkout, y si nos vamos a las DevTools de red lo tenemos aquí.

*(Realizo la demo en directo en localhost:4003...)*

---

## 5. Cierre: Networking, Exposición y Agradecimientos

Ahora quiero volver al inicio de la charla, cuando conté la historia del evento de Berlín.

¿Por qué? Porque si yo no hubiera estado en ese evento, no hubiera descubierto este MCP —o quizás sí, quién sabe—, y quizás no hubiera estado aquí ahora mismo tampoco. Porque en ese viaje a Berlín conocí a **Sara**, una organizadora de **GDG Santiago**, que fue la que me escribió para ver si me interesaba dar una charla aquí. *(Le mando un abrazo grande a Sara desde aquí por eso)*.

Entonces, ¿a dónde quiero ir con esto?

Supongo que la mayoría de personas aquí son estudiantes, o igual no, pero seguramente tienen como propósito seguir hacia adelante y crecer profesionalmente. Y desde mi experiencia personal lo que yo puedo decir es que sí: **estudiar es la base**, pero al final las cosas se consiguen **moviéndose y haciendo cosas**, como dijo ayer nuestro compañero **Martín**.

Al final, lo que te ayudará de verdad mucho más que estar en un bucle de *tutorial hell* haciendo miles y miles de tutoriales es salir a **exponerte al mundo**, y hacer eso tan famoso llamado **networking**.

Entonces, yo hoy quiero que todos se vayan de aquí con **dos cosas**:
1. **Cómo darle manos a su agente** con Chrome DevTools MCP.
2. **Muchísimas ganas de seguir asistiendo a eventos como este y exponerse al público**: ya sea dando charlas, haciendo proyectos o presentándolos... pero en resumen: **¡Exposición!**

Muchas gracias y espero que les haya gustado.
