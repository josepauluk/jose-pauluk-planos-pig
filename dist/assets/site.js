const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mainNav?.classList.toggle('is-open', !open);
  document.body.classList.toggle('menu-open', !open);
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = [
    'Hola Jose, vi tu página de servicios de PIG.',
    '',
    `Soy: ${data.get('name')}`,
    `Localidad: ${data.get('location')}`,
    `Necesito: ${data.get('service')}`,
    `Estado del trabajo: ${data.get('stage')}`,
    `Detalles: ${data.get('details') || 'A conversar'}`,
    '',
    '¿Podemos revisar el caso y coordinar un presupuesto?'
  ];
  const url = `https://wa.me/543644389376?text=${encodeURIComponent(lines.join('\n'))}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});
