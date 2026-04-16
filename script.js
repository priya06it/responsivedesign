function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('active');
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
