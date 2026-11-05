Esta charla no la quiero comenzar haciendo la clásica presentación de hola buenas soy Miguel del grupo 1 y hoy voy a hablar de inteligencia artificial, así que quiero iniciarla contando la historia de cómo conocí el MCP del que voy a hablar hoy. Todo se remonta a junio de este año mes en el que viajo a Berlín al Google I/O Connect, si alguien no sabe que es el Google I/O Connect es la versión Europa del Google I/O y es un evento en el que Google cuenta las novedades que traen para el año: modelos nuevos open source etc 

El caso es que en este evento habían distintos stands y se dividían entre ecosistema IA, Cloud, Android y Chrome

A mi me llamó la atención el de chrome y en ese stand te mostraban una demo que ahora mismo no recuerdo bien lo que hacía \- lo siento tengo memoria de pez a temprana edad \- pero sé que era que a través de lenguaje natural podías hacer un QA podías pedirle que te hiciera un testeo sin necesidad de armarlo a código, y eso fue algo que a mi en lo personal me pareció increíble y me llevó a investigar más sobre este MCP y utilizarlo 

Ahora sí después de esta breve historia, me presento: Soy Miguel García \- tengo dos nombres pero solo mi madre me llama por los dos cuando me quiere echar la bronca \- actualmente estoy trabajando como desarrollador full stack en Northius y soy organizador de GDG A Coruña 

En esta charla vamos a:

Repasar que es un MCP

Agente Computer use vs Usar agente con MCP

3 demos de cómo usar el MCP

Vamos con el primer punto, quien de aquí ha utilizado algún MCP y podría decirme que es un MCP?

… Si nadie responde: Venga va no me hacen faltas definiciones técnicas me vale que sea con las propias palabras de ustedes

Vale pues un MCP es un protocolo de estándar abierto creado por anthropic por el cual podemos darle "manos" a nuestro agente

Imaginemos un agente como un cerebro muy sabio pero dentro de un frasco y no tiene manos y no puede acceder a conocimiento de fuera

Un MCP le permite al agente beber conocimiento de bases de datos, archivos locales y código, y en este caso le damos acceso al navegador específicamente a la capa de desarrollo 

Cuál es la diferencia entre un agente computer use que es digamos el agente normal sin este MCP vs Nuestro agente con este MCP 

la diferencia es que el agente computer use se basa en leer el navegador con capturas de pantalla únicamente eso, y el agente con el chrome devtools MCP for agents tiene acceso a la capa de desarrollo, esto que quiere decir? Y aquí quiero lanzar pregunta al público:  si tenemos una pasarela de pagos que queremos testear y en el front todo pone que está okey pero resulta que por detrás la petición a nuestra api está fallando, que agente lo detecta primero? El computer use o nuestro agente con el MCP? 

\*alguien contesta que es con el MCP 

Perfecto, respuesta correcta 

Entonces ya lo tenemos claro cómo funciona y qué ventaja nos da este MCP, los 3 puntos fuertes de este MCP son: 

emular experiencia de usuario, auditar accesibilidad, y análisis de performance como por ejemplo core web vitals 

Así que dicho esto vamos con las demos 

La primera es pedirle con lenguaje natural nada de tecnicismo profundo: realizar el testeo de envío de formulario y que saltan los eventos de GA4, para quien no lo sabe estos son los eventos estándar de Google de analítica con los que por ejemplo cuando haces campañas de marketing puedes generar trazabilidad 

(realizo la demo en directo…) 

Vamos ahora con la segunda demo en la que vamos a hacer una auditoria de accesibilidad basándonos en WCAG (Web Content Accesibility Guidelines) 

Algo muy interesante de esto, que es algo que surgió ayer cuando di esta charla en mi empresa, porque sí, di esta charla el martes en mi empresa porque me dieron la oportunidad y me pareció bien para romper el hielo, entonces lo que me propuso un compañero que asistió a la charla fue: con el análisis que te hace la IA de lo que descubrió, es posible que tú le pidas que ejecute un script en el navegador para que aplique las correcciones respectivas y tú veas la web como se debe? La respuesta sí: así que muy atentos porque sí que se nota el cambio 

Vamos ahora con la tercera y última demo: esta es una pasarela de pagos que visualmente nos dice que todo está correcto pero por detrás está fallando

Vamos a ello 

Cómo podemos ver efectivamente lo que nos genera el reporte es que hay un 400 en la api del checkout y si nos vamos a las devtools lo tenemos aquí.

Ahora quiero volver al inicio de la charla cuando conté la historia del evento de Berlín 

Por qué? Porque yo si no fuera por haber estado en ese evento no hubiera descubierto ese MCP o quizás si, quién sabe; y quizás no hubiera estado aquí ahora mismo tampoco porque en ese viaje a Berlín conocí a Sara una organizadora de GDG Santiago que fue la que me escribió para ver si me interesaba dar una charla aquí \*le mando un abrazo grande a Sara desde aquí por eso

Entonces a donde quiero ir con esto: 

Supongo que la mayoría de personas aquí son estudiantes o igual no, pero seguramente tienen como propósito seguir hacia adelante y crecer profesionalmente y desde mi experiencia personal y lo que yo puedo decir es que sí: estudiar es la base pero al final las cosas se consiguen moviéndose y haciendo cosas como dijo ayer nuestro compañero Martín 

Al final lo que te ayudará de verdad mucho más que estar en un bucle de tutorial he’ll haciendo miles y miles de tutoriales es salir a exponerte al mundo, y hacer de eso tan famoso llamado networking

Entonces yo hoy quiero que todos se vayan de aquí con dos cosas: cómo darle manos a su gente y la segunda muchísimas ganas de seguir asistiendo a eventos como este y exponerse al público ya sea dando charlas o haciendo proyectos y presentándolos pero en resumen: Exposición 

Muchas gracias y espero que les haya gustado.

