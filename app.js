/* CARLOS ELIZONDO — CREATIVE UNIVERSE
   Vanilla JavaScript. No build tools, no frameworks, no third-party trackers.
   All content is intentionally easy to edit in index.html or CASES below.
*/
(() => {
  'use strict';
  document.documentElement.classList.add('js-loaded');
  document.getElementById('current-year').textContent = String(new Date().getFullYear());

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const clamp = (value, a=0, b=1) => Math.min(b, Math.max(a,value));
  const ease = t => t*t*(3-2*t);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 01 / SIGNATURE: fully scroll-scrubbed, one path after the next.
  const signatureSection = $('#signature-scroll');
  const signatureShell = $('#signature-shell');
  const signatureGroup = $('#signature-drawing');
  const pen = $('#pen-dot');
  const penPaths = $$('#signature-drawing .ink-path');
  let lengths = [];
  let totalLength = 0;
  for (const path of penPaths) {
    const len = path.getTotalLength();
    lengths.push(len); totalLength += len;
    path.style.strokeDasharray = `${len} ${len+10}`;
    path.style.strokeDashoffset = String(len);
    path.style.opacity = '1';
  }
  const drawAt = {start:0.055, end:0.73, fadeStart:0.78, fadeEnd:0.98};
  const nav = $('#site-nav');
  const progressBar = $('.progress-line');
  let queued = false;
  function updateScroll(){
    queued = false;
    const y = window.scrollY || window.pageYOffset;
    const fullScroll = Math.max(1,document.documentElement.scrollHeight-innerHeight);
    progressBar.style.width = `${clamp(y/fullScroll)*100}%`;
    const available = Math.max(1,signatureSection.offsetHeight-innerHeight);
    const progress = clamp(y/available);
    signatureSection.classList.toggle('begun', y>20);
    const written = reduceMotion ? 1 : clamp((progress-drawAt.start)/(drawAt.end-drawAt.start));
    const amount = written*totalLength;
    let consumed = 0, current = null, currentLength = 0;
    penPaths.forEach((path,i)=>{
      const len=lengths[i];
      const part=clamp((amount-consumed)/len);
      path.style.strokeDashoffset=String((1-part)*len);
      if(part>0 && part<1){current=path;currentLength=part*len;}
      consumed+=len;
    });
    const fade=reduceMotion?0:ease(clamp((progress-drawAt.fadeStart)/(drawAt.fadeEnd-drawAt.fadeStart)));
    signatureGroup.style.opacity=String(1-fade);
    signatureShell.style.transform=`translateY(${fade*-8}px)`;
    if(current && fade<.9 && !reduceMotion){
      const pt=current.getPointAtLength(currentLength);
      pen.setAttribute('cx',pt.x);pen.setAttribute('cy',pt.y);
      pen.style.opacity=String(1-fade);
    }else{pen.style.opacity='0';}
    $('#signature-percent').textContent=`${String(Math.round(written*100)).padStart(2,'0')}%`;
    nav.classList.toggle('is-intro',y < available-60);
  }
  function requestScroll(){if(!queued){queued=true;requestAnimationFrame(updateScroll)}}
  window.addEventListener('scroll',requestScroll,{passive:true});
  window.addEventListener('resize',requestScroll,{passive:true});
  window.addEventListener('pageshow',requestScroll,{passive:true});
  $('#skip-intro').addEventListener('click',()=>{
    const destination=signatureSection.offsetHeight;
    window.scrollTo({top:destination,behavior:reduceMotion?'instant':'smooth'});
  });
  updateScroll();

  // 02 / REVEAL: visual only, all content remains in the DOM.
  if ('IntersectionObserver' in window && !reduceMotion){
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
      });
    },{threshold:.075,rootMargin:'0px 0px -25px 0px'});
    $$('.reveal').forEach(el=>observer.observe(el));
  }else{ $$('.reveal').forEach(el=>el.classList.add('is-visible')); }

  // 03 / RESPONSIVE NAV
  const toggle=$('#nav-toggle');const navLinks=$('#nav-links');
  toggle.addEventListener('click',()=>{
    const opened=navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(opened));
    toggle.innerHTML=opened?'CERRAR <span aria-hidden="true">✕</span>':'MENÚ <span aria-hidden="true">☰</span>';
  });
  $$('.nav-links a').forEach(a=>a.addEventListener('click',()=>{
    navLinks.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.innerHTML='MENÚ <span aria-hidden="true">☰</span>';
  }));

  // 04 / FILTERS. Cards with several categories match any selected category.
  const cards=$$('.work-card');const filters=$$('.filter');
  filters.forEach(btn=>btn.addEventListener('click',()=>{
    const value=btn.dataset.filter;
    filters.forEach(item=>{const active=item===btn;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
    cards.forEach(card=>card.classList.toggle('is-hidden',value!=='all'&&!card.dataset.category.split(' ').includes(value)));
  }));

  // 05 / CASE STUDIES. Edit these texts once you have the original project files.
  const cases={
    ahlba:{no:'01 / BRAND IDENTITY',title:'AHLBA®',lead:'Desarrollar y operar una marca propia significa conectar identidad, producto, fotografía y comunicación, no simplemente diseñar un logo.',about:'Marca propia de lentes. Mi participación incluye creación y desarrollo de la marca, identidad visual, fotografías, material promocional, fichas de producto y venta digital.',approach:'Selección de experimentos visuales y material audiovisual compartido por mí para este portafolio. Las herramientas concretas y el proceso de cada pieza se documentarán conforme recopile los archivos fuente.',tags:['BRANDING','PRODUCT VISUALS','E-COMMERCE','CONTENT'],images:[],links:[['VER VISUALES Y VIDEO','visual-work.html#ahlba']],foot:'EL VIDEO Y LAS IMÁGENES SE COMPARTIERON COMO PARTE DE MI ARCHIVO CREATIVO; NO TODAS LAS PIEZAS SON FOTOGRAFÍAS DE CAMPAÑA PUBLICADA.'},
    social:{no:'02 / CONTENT PRODUCTION',title:'VIRAL CONTENT',lead:'Una pieza que conecta con millones de personas no nace solo del diseño. Tiene que entender el lenguaje, ritmo y curiosidad de la audiencia.',about:'Creación de contenido en TikTok, gestión de comunidades y experimentos de distribución. En mi CV se reporta un video con aproximadamente 9 millones de visualizaciones y 1.5 millones de likes.',approach:'El caso completo deberá incluir el video original, métricas capturadas y un breakdown del hook, duración, edición, copy y aprendizaje. Las métricas no deben interpretarse como resultados de una campaña de cliente.',tags:['TIKTOK','ORGANIC REACH','CONTENT','STORYTELLING'],images:[],links:[],foot:'PENDIENTE: Video original, capturas de analíticas, enlace público y explicación del proceso.'},
    chess:{no:'03 / DIGITAL PRODUCT',title:'THIS IS NOT CHESS, IT\'S WAR!',lead:'Convertir una idea de juego en una identidad reconocible: personajes, tono, reglas, interface, portada y presencia en Steam.',about:'Juego de estrategia multijugador desarrollado como proyecto independiente. Este trabajo reúne arte de portada, diseño de experiencia, desarrollo de sistemas y publicación digital.',approach:'Del concepto al diseño de piezas y lanzamiento. La imagen mostrada corresponde al material del juego compartido por mí, y la liga dirige a su ficha de Steam.',tags:['ART DIRECTION','GAME DESIGN','UNITY','STEAM'],images:['chess'],links:[['VER CASO DETALLADO','case-study.html?project=chess'],['VER EN STEAM','https://store.steampowered.com/app/4364220/']],foot:'CAPTURA DEL JUEGO. AÑADIR TRAILER Y MÁS IMÁGENES DE DESARROLLO.'},
    games:{no:'04 / INTERACTIVE WORLDS',title:'SIX WORLDS',lead:'Seis conceptos diferentes, seis identidades visuales. Personajes, experiencias, tecnología y marketing reunidos en proyectos que se pueden jugar.',about:'Colección de proyectos independientes: This Is Not Chess, Orders Captain, Fartimus, I\'m Tripping, Don\'t Sink My Ships y Frathouse Beerpong.',approach:'Cada juego requiere traducir una idea en una experiencia interactiva, diseñar su arte y comunicarlo para que alguien quiera jugarlo. Abajo se incluyen capturas reales proporcionadas para este portafolio.',tags:['WORLD BUILDING','UNITY','VISUAL IDENTITY','STEAM'],images:['orders','fartimus','ships','beerpong','chess','tripping'],links:[['EXPLORAR JUEGOS','#games'],['VER CASO: FARTIMUS!','case-study.html?project=fartimus']],foot:'ALGUNAS FICHAS DE STEAM PUEDEN NO ESTAR DISPONIBLES PÚBLICAMENTE TODAVÍA.'},
    web3:{no:'05 / DIGITAL CULTURE',title:'WEB3 / SOLANA',lead:'Construir comunidades digitales también requiere lenguaje visual, narrativa, velocidad de ejecución y una identidad que se reconozca entre cientos de proyectos.',about:'Creación y gestión de proyectos y comunidades Web3 en Solana. Mi CV menciona el lanzamiento de aproximadamente 250 tokens y trabajo con herramientas y mercados del ecosistema.',approach:'Me interesa especialmente el lado de identidad, contenido, comunidad y ejecución. La portada actual es un gráfico conceptual de esta web, no una captura de una campaña o token específico.',tags:['BRANDING','WEB3','COMMUNITY','DIGITAL PRODUCT'],images:[],links:[],foot:'PENDIENTE: Agregar ejemplos reales de logos, memes, personajes, posts y campañas; omitir información privada y afirmaciones financieras no verificadas.'},
    lab:{no:'06 / CREATIVE SYSTEMS',title:'IMAGE & MOTION LAB',lead:'La IA amplifica la producción cuando existe criterio, dirección artística y un proceso repetible detrás.',about:'Sección propuesta para documentar mi flujo de creación: entender el brief, idear con LLMs, experimentar con imágenes y video, refinar en herramientas de diseño y exportar para Instagram/TikTok.',approach:'La empresa que me interesa valora procesos reproducibles. Esta sección mostrará comparativas antes/después, prompts, variantes descartadas, formatos de entrega y herramientas realmente utilizadas.',tags:['VISUAL CONCEPT','CREATIVE DIRECTION','FILM','PRODUCT DESIGN'],images:[],links:[['EXPLORAR PROTOCOL 34','visual-work.html#protocol'],['EXPLORAR BETR.','visual-work.html#betr']],foot:'PROYECTOS CONCEPTUALES. NO SE AFIRMA VÍNCULO COMERCIAL CON LAS MARCAS REPRESENTADAS.'}
  };
  const modal=$('#case-dialog');const modalBody=$('#dialog-body');let lastTrigger=null;
  const safe = s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function openCase(key,trigger){
    const data=cases[key];if(!data)return;
    lastTrigger=trigger;
    const imageMarkup=data.images.length?`<div class="dialog-images">${data.images.map(name=>`<img loading="lazy" src="assets/games/${safe(name)}.webp" alt="Arte del videojuego ${safe(name)}">`).join('')}</div>`:'';
    const linkMarkup=data.links.length?`<div class="dialog-links">${data.links.map(([label,url])=>`<a ${url.startsWith('https://')?'target="_blank" rel="noopener noreferrer"':''} href="${safe(url)}">${safe(label)} ↗</a>`).join('')}</div>`:'';
    modalBody.innerHTML=`<div class="dialog-eyebrow mono">${safe(data.no)}</div><h2 class="dialog-title" id="dialog-title">${safe(data.title)}</h2><p class="dialog-lead">${safe(data.lead)}</p><div class="dialog-tags">${data.tags.map(tag=>`<span class="dialog-tag">${safe(tag)}</span>`).join('')}</div><div class="dialog-content"><div><h3>EL PROYECTO</h3><p>${safe(data.about)}</p></div><div><h3>MI ENFOQUE</h3><p>${safe(data.approach)}</p></div></div>${imageMarkup}${linkMarkup}<p class="dialog-caption">${safe(data.foot)}</p>`;
    modal.showModal();document.body.style.overflow='hidden';
  }
  $$('[data-open]').forEach(btn=>btn.addEventListener('click',()=>openCase(btn.dataset.open,btn)));
  function closeCase(){if(!modal.open)return;modal.close();document.body.style.overflow='';lastTrigger?.focus({preventScroll:true});}
  $('#dialog-close').addEventListener('click',closeCase);
  modal.addEventListener('click',ev=>{if(ev.target===modal)closeCase();});
  modal.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus({preventScroll:true});});
  modalBody.addEventListener('click',ev=>{
    const a=ev.target.closest('a[href^="#"]');if(!a)return;
    const href=a.getAttribute('href');closeCase();requestAnimationFrame(()=>document.querySelector(href)?.scrollIntoView({behavior:reduceMotion?'auto':'smooth'}));
  });
})();
