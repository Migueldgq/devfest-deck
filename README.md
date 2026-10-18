# Dándole "manos" a tu IA

Diapositivas de la charla de Miguel García para el DevFest Santiago de Compostela, hechas con [Slidev](https://sli.dev).

El relato está en `guion.md`. Las diapositivas se quedan en la idea. Lo que se dice en alto está en las notas del presentador.

## Arrancar

```bash
npm install
npm run dev
```

Abre [http://127.0.0.1:43123](http://127.0.0.1:43123).

Modo presentador, con las notas del guión: [http://127.0.0.1:43123/presenter/](http://127.0.0.1:43123/presenter/).

## Editar

- `slides.md` es el deck. Cada bloque separado por `---` es una diapositiva.
- Las notas van en comentarios HTML, `<!-- ... -->`.
- Las imágenes se guardan en `public/` y se referencian con una ruta absoluta, por ejemplo `![Stand](/stand.png)` o `background: /stand.png`.

## Exportar

Hace falta Playwright en la máquina:

```bash
npm run export
```

Genera un PDF del deck.
