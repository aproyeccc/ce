# Carlos Elizondo — Creative Universe · MEDIA 01

**Nueva entrega:** primera tanda de imágenes y videos del usuario integrada en el portafolio **rosa y negro**, conservando su Home, firma con scroll, proyectos y los deep dives de videojuegos.

## Abrir

1. Descomprime la carpeta.
2. Abre `index.html` desde Chrome (el contenido estático también funciona sin servidor; recomendamos servidor HTTP local para mayor compatibilidad).
3. Haz scroll: tras la portada encontrarás la nueva sección **MADE TO BE SEEN**, con AHLBA, BETR, videos y fashion.
4. Visita `visual-work.html` para ver **los 12 archivos de imagen y ambos videos** organizados en galerías; pulsa cada foto para ampliarla.
5. Los enlaces de casos de videojuegos siguen dirigiendo a `case-study.html?project=...`.

## Material incorporado

- 12 imágenes (convertidas a WebP optimizado, sin alterar los originales externos)
- 2 videos (MP4 H.264 optimizados a 720p, con audio y controles de reproducción)
- Pósters de ambos videos
- Nueva Home y página `visual-work.html` con cinco capítulos:
  - AHLBA: visuales de la marca y fashion film
  - Protocol 34: film conceptual de producto
  - Betr.: branding y packaging conceptual
  - Fashion experiments: exploraciones editoriales con referencias a marcas de terceros
  - SMP: empaque blanco con tipografía vertical, separado correctamente de AHLBA y betr.
- Galería ARCHIVE ampliada y tarjetas AHLBA / Image Lab actualizadas.

**Importante:** no se afirma que Nike, Zara o Protocol 34 hayan sido clientes o patrocinadores. Se presentan como ejercicios conceptuales independientes hasta documentar un encargo real. No inventamos herramientas de edición ni campañas pagadas.

Los archivos originales se conservan en la conversación. Dentro del sitio están optimizados para que cargue bien en Vercel.

## Para nuevas tandas

El nuevo contenido vive en `assets/creative/`; `MEDIA_MANIFEST.json` vincula cada imagen de esta tanda con el archivo que enviaste. Podemos seguir agregando nuevas galerías sin sustituir ni perder las anteriores.

## Publicación en Vercel

Sube **el contenido de esta carpeta** (con `index.html` en raíz). No hace falta npm ni un build. Los archivos de video son pequeños; se alojan como MP4 normales y solo descargan datos al reproducirse o cargar metadata.

## Por completar antes de enviar a reclutadores

- Añadir tool credits por pieza: Midjourney, Firefly, Runway, Kling, Photoshop, Illustrator, etc. **solo las usadas realmente**.
- Indicar tu papel concreto en cada visual y si hubo cliente, uso comercial o es spec.
- Añadir briefs / objetivos y pantallazos de variantes de proceso para cada campaña.
- Verificar estadísticas CV y enlaces de Steam.
- Probar enlaces en producción y revisar el comportamiento móvil.
