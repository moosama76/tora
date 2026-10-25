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
