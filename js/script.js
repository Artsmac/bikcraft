// Ativar links menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

// Ativar itens orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}
parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    const Expanded = pergunta.getAttribute("aria-expanded") === "true";
    pergunta.setAttribute("aria-expanded", !Expanded);
    resposta.classList.toggle("ativo");
    console.log(resposta);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicleta

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 940px)").matches;
    if (media) {
    galeriaContainer.prepend(img);
    };
};

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
};

galeria.forEach(eventosGaleria);

// Plugin

if (window.SimpleAnime) {
    new SimpleAnime();
};