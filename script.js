// Hamburger animation toggle
const toggler = document.querySelector('.navbar-toggler');
const offcanvas = document.getElementById('mobileMenu');
const closeButton = offcanvas.querySelector('.btn-close');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('open');
});

offcanvas.addEventListener('hidden.bs.offcanvas', () => {
  toggler.classList.remove('open');
});
