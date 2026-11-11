(() => {
  const dialog = document.getElementById('lightbox');
  const viewer = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  let lastFocus;
  document.querySelectorAll('[data-image]').forEach(button => {
    button.addEventListener('click', () => {
      lastFocus = button;
      viewer.src = button.dataset.image;
      viewer.alt = button.querySelector('img')?.alt ?? 'Imagen ampliada';
      caption.textContent = button.dataset.caption ?? '';
      if (dialog.showModal) dialog.showModal();
      else window.open(viewer.src, '_blank', 'noopener');
    });
  });
  document.getElementById('lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {viewer.removeAttribute('src');lastFocus?.focus({preventScroll:true});});
})();
