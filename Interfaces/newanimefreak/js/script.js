document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnMenu');
    const navBar = document.getElementById('nav-links');

    btn.addEventListener('click', () => {
        navBar.classList.toggle('nav-links--visible');
    });

});
