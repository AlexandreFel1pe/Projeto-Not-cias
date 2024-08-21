const buttonAbrir = document.querySelector("header > button");
const buttonFechar = document.querySelector("header nav button");

const body = document.querySelector("body");
const nav = document.querySelector("header .nav-mobile");

buttonAbrir.addEventListener('click', abrirMenu);
buttonFechar.addEventListener("click", fecharMenu);

function abrirMenu() {
    body.classList.add("escurecer");
    nav.classList.add("abrir");
}

function fecharMenu() {
    body.classList.remove("escurecer");
    nav.classList.remove("abrir");
}