/* EDIT ONLY THIS FILE TO FILL A GAME CASE STUDY.
   Do not claim any placeholder / workflow as delivered production evidence.
   To add images: put WebP/JPG files under assets/cases/<slug>/ and list them in gallery.
   To add video: put an MP4 in the same folder and set video to its path.
   To add a 3D model: export a GLB from Blender and set model to the path.
 */
window.CASE_PROJECTS = {
  fartimus: {
    number: '03', title: 'FARTIMUS!', eyebrow: 'CREATIVE CASE STUDY / INTERACTIVE WORLDS',
    headline: 'SAY IT.\nCAST IT.\nWATCH IT HAPPEN.',
    pitch: 'Una idea absurda convertida en un universo jugable: hechizos activados por voz, personajes expresivos, un castillo low-poly y multijugador.',
    image: 'assets/games/fartimus.webp', disc: 'assets/cases/fartimus/disc.webp',
    steam: 'https://store.steampowered.com/app/4324940/',
    year: '2026', kind: 'PARTY GAME / MAGIC', tools: 'UNITY · C# · BLENDER', role: 'DESARROLLO INDEPENDIENTE',
    quote: 'Diseñar un mundo no es solo modelar cosas. Es conseguir que una idea improbable se convierta en una experiencia.',
    overview: 'Fartimus! es un proyecto de juego multijugador ambientado en un mundo de magia caricaturesca. La dirección visual junta personajes low-poly, un castillo monumental y humor, mientras los sistemas convierten acciones del jugador —incluidos comandos de voz— en hechizos y reacciones.',
    features: [
      {n:'01', title:'HECHIZOS ACTIVADOS POR VOZ', tag:'GAMEPLAY SYSTEM', description:'Diseño de una experiencia donde hablar puede convertirse en una acción dentro del juego. La interfaz y los efectos visuales deben dar feedback inmediato al jugador.', detail:'Documentar aquí capturas de las pruebas de reconocimiento, las palabras de activación y un clip corto donde se vea la reacción dentro del juego.'},
      {n:'02', title:'MULTIJUGADOR Y AUDIO', tag:'NETWORKING', description:'Implementación y pruebas de interacciones online con otros jugadores. El proyecto ha utilizado Mirror y Dissonance en su desarrollo.', detail:'Añadir el diagrama real de qué eventos se sincronizan, cómo se gestiona la autoridad de red y un clip con dos clientes conectados.'},
      {n:'03', title:'PERSONAJES Y EFECTOS', tag:'VISUAL SYSTEMS', description:'Modelos estilizados, expresiones y efectos para convertir las mecánicas en momentos visualmente reconocibles.', detail:'Añadir turntables de modelos, capturas desde Blender, materiales, rig, partículas y comparación entre versión inicial y final.'},
      {n:'04', title:'ENTORNO DEL CASTILLO', tag:'WORLD BUILDING', description:'Un escenario low-poly de escala exagerada, diseñado para aportar carácter al juego y funcionar como fondo reconocible en videos.', detail:'Añadir breakdown del castillo, bosque, props, iluminación y ajustes de rendimiento.'},
      {n:'05', title:'ENEMIGOS Y PRUEBAS', tag:'PROTOTYPING', description:'Se han trabajado sistemas de práctica para probar hechizos y reacciones sin depender de una sesión multijugador completa.', detail:'Añadir un clip del enemigo de práctica, las respuestas a efectos y el flujo de prueba dentro de Unity.'},
      {n:'06', title:'MARKETING Y PRESENCIA', tag:'CREATIVE DIRECTION', description:'Arte del juego, identidad tipográfica, cápsulas y composición de materiales visuales para comunicar una idea en pocos segundos.', detail:'Añadir aquí los banners, alternativas descartadas, tráiler final y exportaciones para redes sociales.'}
    ],
    pipeline: ['IDEA / COMEDIA', 'PERSONAJES / 3D', 'SISTEMAS / C#', 'PRUEBAS / MULTIPLAYER', 'IDENTIDAD / STEAM', 'VIDEO / SOCIAL'],
    codeTitle: 'DEL COMANDO DE VOZ AL EFECTO VISIBLE',
    flow: ['JUGADOR HABLA', 'RECONOCER COMANDO', 'VALIDAR HECHIZO', 'EJECUTAR ACCIÓN', 'MOSTRAR RESULTADO'],
    note: 'El flujo es una explicación conceptual del sistema; no representa una captura literal ni código fuente verificado.',
    gallery: [
      {src:'assets/cases/fartimus/original-header.jpg',title:'ORIGINAL GAME ART',type:'CAPTURA DEL JUEGO'},
      {src:'assets/cases/fartimus/disc.webp',title:'VISUAL IDENTITY',type:'ARTE DEL DISCO'},
      {src:'assets/games/fartimus.webp',title:'FANTASY WORLD',type:'KEY VISUAL'}
    ],
    video: '', model: ''
  },
  chess: {
    number:'01',title:'THIS IS NOT CHESS, IT\'S WAR!',eyebrow:'GAME DESIGN / VISUAL IDENTITY',
    headline:'THE BOARD.\nTHE RULES.\nTHE CHAOS.',
    pitch:'Un universo de estrategia con personajes propios, un tablero reconocible y decisiones de diseño que transforman un juego conocido.',
    image:'assets/games/chess.webp',disc:'assets/archive/chess-disc.webp', steam:'https://store.steampowered.com/app/4364220/',
    year:'2026',kind:'STRATEGY / MULTIPLAYER',tools:'UNITY · C# · BLENDER',role:'DESARROLLO INDEPENDIENTE',
    quote:'Una mecánica clásica puede sentirse nueva cuando su identidad, personajes y reglas tienen una voz propia.',
    overview:'Caso de un videojuego independiente que reúne estrategia, diseño de personajes, interfaz y producción de arte para Steam. Este estudio puede crecer con capturas de sistemas, modelos, scripts y pruebas.',
    features:[
      {n:'01',title:'TABLERO Y REGLAS',tag:'SYSTEM DESIGN',description:'Diseño e implementación de la lógica del tablero y las interacciones entre piezas.',detail:'Añadir aquí un video del sistema real y fragmentos representativos del código.'},
      {n:'02',title:'MODELOS Y PIEZAS',tag:'3D / CHARACTER',description:'Piezas y personajes que dan identidad a la experiencia.',detail:'Añadir turntables desde Blender y wireframes reales.'},
      {n:'03',title:'IDENTIDAD Y PORTADA',tag:'BRANDING',description:'Dirección visual pensada para que el juego sea reconocible en las cápsulas de Steam.',detail:'Añadir bocetos, variantes de la portada, personajes y material de lanzamiento.'}
    ],pipeline:['CONCEPTO','TABLERO','PERSONAJES','PROTOTIPO','VISUALES','STEAM'],
    codeTitle:'DE UNA ACCIÓN A UNA RESPUESTA EN EL TABLERO',flow:['INPUT','SELECCIÓN','VALIDAR MOVIMIENTO','ACTUALIZAR ESTADO','FEEDBACK VISUAL'],
    note:'Representación conceptual del flujo, no copia del código del proyecto.',
    gallery:[{src:'assets/games/chess.webp',title:'GAME KEY VISUAL',type:'ARTWORK'},{src:'assets/archive/chess-disc.webp',title:'DISC IDENTITY',type:'DISC ART'}],video:'',model:''
  },
  orders: {number:'02',title:'ORDERS, CAPTAIN!',eyebrow:'GAME WORLD / CO-OP',headline:'TAKE THE WHEEL.\nLOSE CONTROL.',pitch:'Comedia, decisiones de jugadores y una identidad visual de marineros exagerados.',image:'assets/games/orders.webp',disc:'',steam:'https://store.steampowered.com/app/4190440/',year:'2026',kind:'CO-OP / ADVENTURE',tools:'UNITY · 3D · C#',role:'DESARROLLO INDEPENDIENTE',quote:'Los momentos más memorables nacen cuando los sistemas dejan espacio para que los jugadores sorprendan.',overview:'Experiencia independiente con estética low-poly, personajes expresivos y humor multijugador. La ficha detallada está preparada para integrar gameplay, sistemas, modelos y materiales de campaña.',features:[],pipeline:['CONCEPTO','3D','SISTEMAS','PRUEBAS','CAPSULE','TRAILER'],codeTitle:'EL SISTEMA QUE HACE POSIBLE LA EXPERIENCIA',flow:['INPUT','GAMEPLAY','ESTADO','RESPUESTA'],note:'Completar con el código y flujo real del juego.',gallery:[{src:'assets/games/orders.webp',title:'ORIGINAL GAME ART',type:'KEY VISUAL'}],video:'',model:''},
  tripping: {number:'04',title:'I\'M TRIPPING',eyebrow:'GAME WORLD / SINGLEPLAYER',headline:'STRANGE IDEAS.\nPLAYABLE WORLDS.',pitch:'Una experiencia experimental con su propia identidad y narrativa visual.',image:'assets/games/tripping.webp',disc:'',steam:'https://store.steampowered.com/app/3918860/',year:'2025',kind:'SINGLEPLAYER / EXPERIMENTAL',tools:'UNITY · C#',role:'DESARROLLO INDEPENDIENTE',quote:'Incluso una idea extraña puede convertirse en un producto completo.',overview:'Juego independiente publicado en Steam. Esta página está lista para incorporar el recorrido de desarrollo, screenshots, materiales promocionales, resultados y videos.',features:[],pipeline:['IDEA','PROTOTIPO','ARTE','JUEGO','LANZAMIENTO'],codeTitle:'CÓMO SE CONSTRUYÓ LA EXPERIENCIA',flow:['IDEA','INTERACCIÓN','SISTEMAS','BUILD'],note:'Completar con documentación real del proyecto.',gallery:[{src:'assets/games/tripping.webp',title:'ORIGINAL GAME ART',type:'KEY VISUAL'}],video:'',model:''},
  ships: {number:'05',title:'DON\'T SINK MY SHIPS!',eyebrow:'MULTIPLAYER / GAME DESIGN',headline:'KEEP TALKING.\nKEEP FLOATING.',pitch:'Un concepto de barcos con humor, interfaces y dinámica de grupo.',image:'assets/games/ships.webp',disc:'',steam:'https://store.steampowered.com/app/4336990/',year:'COMING SOON',kind:'MULTIPLAYER / VOICE',tools:'UNITY · C#',role:'DESARROLLO INDEPENDIENTE',quote:'La claridad visual también es diseño: conseguir que un jugador entienda el caos.',overview:'Proyecto de juego independiente con identidad visual de barcos y multijugador. Documentación técnica y videos pendientes de incorporar.',features:[],pipeline:['CONCEPTO','UI','MULTIJUGADOR','ARTE','PRUEBAS'],codeTitle:'SISTEMAS DE JUEGO',flow:['JUGADORES','INPUT','ESTADO','FEEDBACK'],note:'Completar con el código real.',gallery:[{src:'assets/games/ships.webp',title:'ORIGINAL GAME ART',type:'KEY VISUAL'}],video:'',model:''},
  beerpong: {number:'06',title:'FRATHOUSE BEERPONG',eyebrow:'PARTY / BRAND DESIGN',headline:'NOTHING\nTOO SERIOUS.',pitch:'Una fiesta colorida, personajes estilizados y humor visual.',image:'assets/games/beerpong.webp',disc:'',steam:'https://store.steampowered.com/app/5113920/',year:'COMING SOON',kind:'PARTY / MULTIPLAYER',tools:'UNITY · 3D',role:'DESARROLLO INDEPENDIENTE',quote:'El carácter de un juego también se construye con luz, color y personalidad.',overview:'Proyecto independiente de videojuego con identidad visual verde y atmósfera de fiesta. El estudio de caso está preparado para sus materiales originales.',features:[],pipeline:['CONCEPTO','PERSONAJES','ESCENA','EFECTOS','MARKETING'],codeTitle:'GAMEPLAY BREAKDOWN',flow:['JUGADOR','INTERACCIÓN','REGLAS','EFECTOS'],note:'Completar con código y pruebas reales.',gallery:[{src:'assets/games/beerpong.webp',title:'ORIGINAL GAME ART',type:'KEY VISUAL'}],video:'',model:''}
};
