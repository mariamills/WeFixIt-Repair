let menu = document.querySelector('#menu');
let navbar = document.querySelector('.nav-links');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}