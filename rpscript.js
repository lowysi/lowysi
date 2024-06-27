// === transformar o menu hamburguer em um x ===
const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    alteraMenu();
});

function alteraMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('troca');

    if(menuHamburguer.classList.contains('troca')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}