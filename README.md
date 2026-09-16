# Portafolio · Nari Chun

Sitio estático (HTML + CSS + JavaScript, sin frameworks) listo para **GitHub Pages**.

## Estructura

```
index.html            Estructura de la página
css/styles.css        Estilos propios (paleta synthwave, animaciones)
css/tailwind.css      Utilidades de Tailwind ya compiladas
js/data.js            ← TEXTOS Y CONTENIDO (ES/EN): proyectos, experiencia, liderazgo, stack
js/main.js            Lógica: idioma, filtros, vista de caso, demo Risk Scanner, mapa de habilidades, fondo animado
media/                Videos (.mp4) y pósters (.jpg) de los proyectos
favicon.svg
```

## Editar contenido

Todo el contenido está en `js/data.js`. Cada texto tiene su versión `es` y `en`.

Para agregar o cambiar el video de un proyecto, copia el archivo a `media/` y en `PROJECTS` usa:

```js
media: { type: 'video', src: 'media/mi-proyecto.mp4', poster: 'media/mi-proyecto.jpg', note: 'fictitious' }
```

(`note` puede ser `'fictitious'`, `'mockup'` o omitirse.)

## Ver el sitio en tu computadora

Los módulos de JavaScript necesitan un servidor local (abrir el archivo con doble clic no funciona):

```bash
npx http-server . -p 8080
# o: python -m http.server 8080
```

y abre http://localhost:8080

## Si cambias clases de Tailwind en el HTML

```bash
npm install
npm run build:css
```

## Publicar en GitHub Pages

1. Sube esta carpeta a un repositorio (recomendado: `narichunarze.github.io`).
2. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / root**.
3. El sitio queda en `https://narichunarze.github.io` (o `https://narichunarze.github.io/<repo>` si usas otro nombre).

---
Videos de Invoice Automation AI y HR Analytics Platform: grabaciones de los sistemas reales con datos ficticios.
Review Sentiment mBERT y Demand Forecast: mockups basados en la presentación del proyecto.
