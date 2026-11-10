// Nav: fundo ao rolar + menu mobile
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const onScroll = () => nav.classList.toggle('scrolled', nav.classList.contains('solid') || window.scrollY > 60);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', false);
}));

// Hero: slideshow
const slides = document.querySelectorAll('.hero-bg .slide');
let cur = 0;
if (slides.length) setInterval(() => {
  slides[cur].classList.remove('active');
  cur = (cur + 1) % slides.length;
  slides[cur].classList.add('active');
}, 6000);

// Reveal ao rolar
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Reserva -> WhatsApp
const WA = '557320140819';
const dateInput = document.getElementById('b-date');
const booking = document.getElementById('booking');
if (dateInput && booking) {
  dateInput.min = new Date().toISOString().split('T')[0];
  booking.addEventListener('submit', (e) => {
    e.preventDefault();
    const adults = document.getElementById('b-adults').value;
    const kids = document.getElementById('b-kids').value;
    const type = document.getElementById('b-type').value;
    let d = '';
    if (dateInput.value) { const [y, m, day] = dateInput.value.split('-'); d = ` para o dia ${day}/${m}/${y}`; }
    const msg = `Olá! Gostaria de reservar: ${type}${d}, ${adults} adulto(s) e ${kids} criança(s). Podem me ajudar?`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });
}
