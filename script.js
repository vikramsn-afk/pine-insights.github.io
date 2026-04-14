const root = document.documentElement;
const menuToggle = document.querySelector('.menu-toggle');
const navActions = document.querySelector('.nav-actions');
const navLinks = document.querySelectorAll('.nav-actions a');
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
}

applyTheme(mediaQuery.matches ? 'dark' : 'light');

mediaQuery.addEventListener('change', (event) => {
  applyTheme(event.matches ? 'dark' : 'light');
});

menuToggle?.addEventListener('click', () => {
  const isOpen = navActions.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navActions.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});
