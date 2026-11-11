/* Data-driven case study template for ALL six games.
   All links and content come from case-data.js. No routing or framework required.
*/
(() => {
  'use strict';
  const PROJECTS = window.CASE_PROJECTS || {};
  const order = ['chess','orders','fartimus','tripping','ships','beerpong'];
  const request = new URLSearchParams(location.search).get('project') || 'fartimus';
  const key = Object.prototype.hasOwnProperty.call(PROJECTS,request) ? request : 'fartimus';
  const p = PROJECTS[key];
  const $ = sel => document.querySelector(sel);
  const escapeText = s => String(s ?? '').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const escAttr = escapeText;
  document.title = `${p.title} — The Making Of | Carlos Elizondo`;
  document.querySelector('meta[name="description"]').setAttribute('content',p.pitch);
  $('#hero-eyebrow').textContent = p.eyebrow;
  $('#hero-number').textContent = `CASE ${p.number} / 06`;
  $('#hero-title').textContent = p.title;
  $('#hero-pitch').textContent = p.pitch;
  $('#hero-image').src = p.image;
  $('#hero-image').alt = `Arte original de ${p.title}`;
  $('#hero-year').textContent = p.year;
  $('#overview-quote').textContent = p.quote;
  $('#overview-text').textContent = p.overview;
  $('#overview-tags').innerHTML = ['CREATIVE DIRECTION','GAME DEVELOPMENT','VISUAL IDENTITY','INDEPENDENT WORK'].map(x=>`<span>${escapeText(x)}</span>`).join('');
  $('#fact-project').textContent=p.title;
  $('#fact-type').textContent=p.kind;
  $('#fact-role').textContent=p.role;
  $('#fact-tools').textContent=p.tools;
  $('#art-still').src = p.image;
  $('#art-still').alt = `Captura del videojuego ${p.title}`;
  $('#code-title').textContent = p.codeTitle;
  $('#code-note').textContent = p.note;
  $('#final-pitch').textContent = p.pitch;
  $('#steam-button').href = p.steam;
  // Trailer: real video only when path is configured in case-data.js.
  const film = $('#film-output');
  if (p.video) {
    const video = document.createElement('video');
    video.src = p.video;
    video.poster = p.image;
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;
    film.append(video);
  } else {
    film.innerHTML = `<img class="film-poster" src="${escAttr(p.image)}" alt="" /><div class="film-placeholder-content"><span class="mono film-label">SCENE 01 / ${escapeText(p.title)}</span><h3>THE BEST<br>MOMENTS<br>GO HERE.</h3><p>EN CUANTO AÑADAMOS EL TRÁILER REAL, ESTE ESPACIO SE CONVIERTE EN UN REPRODUCTOR DE VIDEO. NADA DE REELS INVENTADOS.</p></div>`;
  }
  // Multiple native video clips for Reels/TikTok. Configure real clips in case-data.js.
  const clipSlots = [ ['01','THE HOOK','FIRST 3 SECONDS'], ['02','THE MOMENT','GAMEPLAY HIGHLIGHT'], ['03','THE PAYOFF','VIRAL CUT'] ];
  const strip = $('#clips-strip');
  const configuredClips = Array.isArray(p.clips) ? p.clips : [];
  clipSlots.forEach(([n,title,subtitle],i)=>{
    const clip=configuredClips[i],card=document.createElement('div');card.className='clip-card';
    if(clip?.src){const vid=document.createElement('video');vid.controls=true;vid.preload='metadata';vid.playsInline=true;vid.src=clip.src;if(clip.poster)vid.poster=clip.poster;card.append(vid);}
    else{card.innerHTML=`<div class="clip-demo"><span class="clip-top mono">VERTICAL / 9:16 — ${n}</span><span class="clip-type">${title}</span><span class="mono clip-bottom">${subtitle}<br>PLACEHOLDER — INSERT REAL VIDEO</span></div>`;}
    strip.append(card);
  });
  // Actual systems documented for Fartimus, other projects ready to expand.
  const systems = $('#systems-grid');
  const featureList = p.features.length ? p.features : [
    {n:'01',title:'GAMEPLAY',tag:'INTERACTION DESIGN',description:'Una demostración del sistema que hace único al juego.',detail:'Agregar un clip real y una explicación de cómo funciona.'},
    {n:'02',title:'3D & WORLD',tag:'ART DIRECTION',description:'El entorno visual y los personajes.',detail:'Agregar modelos, wireframes y renders de Blender.'},
    {n:'03',title:'BRANDING',tag:'VISUAL IDENTITY',description:'La identidad del juego para Steam y redes.',detail:'Agregar cápsulas, posters, ilustraciones y variantes.'}
  ];
  for (const f of featureList){
    const el = document.createElement('details');
    el.className = 'system-card';
    el.innerHTML = `<summary><div class="sys-number mono"><span>${escapeText(f.n)} / ${escapeText(f.tag)}</span><span aria-hidden="true">+</span></div><h3>${escapeText(f.title)}</h3><p class="sys-short">${escapeText(f.description)}</p></summary><div class="sys-expand"><p>${escapeText(f.detail)}</p></div>`;
    el.addEventListener('toggle',()=>{ const marker=el.querySelector('.sys-number span:last-child');marker.textContent=el.open?'−':'+';});
    systems.append(el);
  }
  const sysNote = document.createElement('div');
  sysNote.className='systems-honesty';
  sysNote.textContent='CASE STUDY EN CONSTRUCCIÓN: TODOS LOS CLIPS, MODELOS Y FRAGMENTOS C# QUE AÑADAMOS SE PRESENTARÁN COMO MATERIALES DEL PROYECTO, NO COMO SIMULACIONES.';
  systems.after(sysNote);
  // Simple architecture stages, clearly conceptual rather than source-code claims.
  $('#flow-chain').innerHTML = p.flow.map((label,index)=>`<div class="flow-item"><span>${escapeText(label)}</span><strong>${String(index+1).padStart(2,'0')} / ${String(p.flow.length).padStart(2,'0')}</strong></div>${index===p.flow.length-1?'':'<div class="flow-arrow">↓</div>'}`).join('');
  // A tabbed source viewer, without inventing C# code. Add real snippets in case-data.js.
  const sourceTabs = $('#source-tabs');
  const snippets = Array.isArray(p.sourceSnippets) ? p.sourceSnippets : [];
  if(snippets.length){
    $('#source-status').textContent = `${snippets.length} VERIFIED SOURCE EXCERPTS`;
    const selectSnippet = (i) => {
      $('#source-code').textContent = snippets[i].code;
      $('#source-honesty').textContent = snippets[i].credit || 'Código presentado como fragmento seleccionado del proyecto.';
      sourceTabs.querySelectorAll('button').forEach((b,j)=>{b.classList.toggle('active',i===j);b.setAttribute('aria-pressed',String(i===j));});
    };
    snippets.forEach((clip,i)=>{
      const b=document.createElement('button');b.type='button';b.textContent=clip.name||`SCRIPT ${i+1}`;
      b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>selectSnippet(i));sourceTabs.append(b);
    });
    selectSnippet(0);
  } else {
    const b=document.createElement('button');b.type='button';b.disabled=true;b.textContent='C# / PENDIENTE';sourceTabs.append(b);
  }
  // Disc visual is an image tilted with CSS, not a fabricated 3D model.
  if(p.disc){
    const img=document.createElement('img');img.src=p.disc;img.alt=`Arte de disco de ${p.title}`;
    $('#disc-container').append(img);
  }else{
    const x=document.createElement('span');x.className='disc-fallback';x.textContent='ART / 3D';$('#disc-container').append(x);
  }
  // Model viewer optional. No external dependency is loaded if model doesn't exist.
  if(p.model){
    const script=document.createElement('script');script.type='module';script.src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.append(script);
    const viewer=document.createElement('model-viewer');viewer.setAttribute('src',p.model);viewer.setAttribute('camera-controls','');viewer.setAttribute('auto-rotate','');viewer.setAttribute('shadow-intensity','1');viewer.setAttribute('alt',`Modelo 3D del proyecto ${p.title}`);
    $('#model-stage').replaceChildren(viewer);
    $('#model-message').textContent='Modelo exportado de Blender. Arrastra para girarlo y explorar su geometría.';
  }
  // Gallery: available original images + explicitly identified add-media slots.
  const gallery=$('#gallery');
  for(const [i,item] of p.gallery.entries()){
    const figure=document.createElement('figure');figure.className='gallery-item';
    figure.innerHTML=`<button type="button" class="gallery-image-button" aria-label="Ampliar ${escAttr(item.title)}" style="border:0;padding:0;width:100%;cursor:zoom-in;background:transparent"><img src="${escAttr(item.src)}" alt="${escAttr(item.title)}" loading="lazy" /></button><figcaption>${escapeText(item.title)} <span>${escapeText(item.type)} / 0${i+1}</span></figcaption>`;
    figure.querySelector('button').addEventListener('click',()=>{
      const lightbox=$('#lightbox');$('#lightbox-image').src=item.src;$('#lightbox-image').alt=item.title;$('#lightbox-caption').textContent=`${item.title} — ${item.type}`;
      lightbox.showModal();document.body.style.overflow='hidden';
    });
    gallery.append(figure);
  }
  // Slots are design placeholders, not fake examples of work.
  const slots=[['SYSTEM','UI & LOGIC'],['MODEL','3D BREAKDOWN'],['BRAND','ART / POSTS'],['VIDEO','SHORT CLIPS'],['CODE','C# EXCERPTS'],['PROCESS','BEFORE → AFTER']];
  for(const [a,b] of slots){
    const div=document.createElement('div');div.className='gallery-placeholder';
    div.innerHTML=`<span class="mono">UPCOMING ASSET / ${escapeText(a)}</span><div class="slot-name">${escapeText(b.split(' ')[0])}<span>${escapeText(b.split(' ').slice(1).join(' ')||'→')}</span></div><p class="mono">ESPACIO PARA MATERIAL REAL DE ESTE PROYECTO</p>`;
    gallery.append(div);
  }
  const close=()=>{if($('#lightbox').open)$('#lightbox').close();document.body.style.overflow='';};
  $('#lightbox-close').addEventListener('click',close);
  $('#lightbox').addEventListener('click',e=>{if(e.target===$('#lightbox'))close();});
  $('#lightbox').addEventListener('close',()=>{document.body.style.overflow='';});
  const currentIndex=order.indexOf(key);
  const nextKey=order[(currentIndex+1)%order.length];
  $('#next-link').href=`case-study.html?project=${nextKey}`;
  $('#next-title').textContent=PROJECTS[nextKey].title;
  // Reading progress and chapter navigation.
  let queued=false;
  const chapterLinks=Array.from(document.querySelectorAll('.chapter-nav a'));
  const sections=chapterLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const update=()=>{
    queued=false;
    const denom=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    $('#read-progress').style.width=`${Math.max(0,Math.min(100,100*scrollY/denom))}%`;
    let active=sections[0];
    for(const s of sections){if(s.getBoundingClientRect().top<=innerHeight*.28)active=s;}
    chapterLinks.forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')==='#'+active.id));
  };
  window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update);}}, {passive:true});
  window.addEventListener('resize',update,{passive:true});
  update();
})();
