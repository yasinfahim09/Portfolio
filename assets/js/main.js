// Minimal interactivity for fresh scaffold
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav-list');
  navToggle?.addEventListener('click', () => {
    if (!navList) return;
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
  });

  // Theme fixed to dark by default
  document.body.classList.add('theme-dark');

  // Reveal on scroll
  const items = document.querySelectorAll('.section, .project, .experience-list li');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    });
  }, {threshold: 0.12});
  items.forEach(i => io.observe(i));
});
