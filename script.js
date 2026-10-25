const films = {
  traffic: {title: 'Traffic Tycoon', file: 'assets/traffic-film.mp4', htmlBytes: 332228},
  golf: {title: 'Mini Golf Challenge', file: 'assets/golf-film-v3.mp4', htmlBytes: 707170},
};
const dialog = document.querySelector('#film-dialog');
const video = document.querySelector('#film');
let opener;
document.querySelectorAll('[data-film]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || !dialog.showModal) return;
    event.preventDefault();
    opener = link;
    const film = films[link.dataset.film];
    document.querySelector('#film-title').textContent = film.title;
    document.querySelector('#film-size-value').textContent = `${(film.htmlBytes / 1000).toFixed(1)} KB`;
    document.querySelector('#film-size-exact').textContent = `${film.htmlBytes.toLocaleString('en-US')} bytes`;
    document.querySelector('.film-size').title = 'Complete Unity playable HTML, including all embedded resources. KB = 1,000 bytes.';
    video.src = film.file;
    dialog.showModal();
    video.play().catch(() => { /* Native play controls remain available. */ });
  });
});
document.querySelector('.close-film').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog && (event.clientX < dialog.getBoundingClientRect().left || event.clientX > dialog.getBoundingClientRect().right || event.clientY < dialog.getBoundingClientRect().top || event.clientY > dialog.getBoundingClientRect().bottom)) dialog.close(); });
dialog.addEventListener('close', () => { video.pause(); video.removeAttribute('src'); video.load(); opener?.focus(); });
document.querySelector('#year').textContent = String(new Date().getFullYear());
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduced.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.remove('before-reveal'); observer.unobserve(entry.target); }
  }), {threshold: 0.08});
  document.querySelectorAll('.reveal').forEach(el => { el.classList.add('before-reveal'); observer.observe(el); });
}
let pending = false;
addEventListener('scroll', () => {
  if (pending || reduced.matches) return;
  pending = true;
  requestAnimationFrame(() => {
    const art = document.querySelector('.hero-art');
    if (scrollY < 900) art.style.setProperty('--parallax', `${Math.min(scrollY * 0.035, 22)}px`);
    pending = false;
  });
}, {passive: true});
