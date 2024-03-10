const btn = document.getElementById('btnMenu');
const navBar = document.getElementById('nav-links'); // Cambiado a 'nav-links'

btn.addEventListener('click', () => {
    navBar.classList.toggle('nav-links--visible');
});


