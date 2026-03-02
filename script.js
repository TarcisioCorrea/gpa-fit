// Configurações Gerais
const CONFIG = {
    whatsapp: "554999476742", // Seu número com DDD
    nomeLoja: "GPA FITNESS"
};

// Função para carregar produtos na tela
function carregarProdutos() {
    const grid = document.getElementById('grid-produtos');
    
    // Limpa o grid antes de carregar (bom para atualizações futuras)
    grid.innerHTML = "";

    listaProdutos.forEach(produto => {
        // Cria a mensagem do WhatsApp
        const mensagemWhats = encodeURIComponent(`Olá! Tenho interesse no produto: ${produto.nome} (R$ ${produto.preco})`);
        const linkWhats = `https://wa.me/message/5RSOWGKUXEYGF1${CONFIG.whatsapp}?text=${mensagemWhats}`;

        // Cria o HTML do card
        const card = `
            <div class="product-card" data-aos="zoom-in">
                <div class="product-img">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="product-info">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <span class="price">R$ ${produto.preco}</span>
                    <a href="${linkWhats}" target="_blank" class="btn-buy">
                        Comprar pelo WhatsApp <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        `;
        
        grid.innerHTML += card;
    });
}

// Iniciar a função quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    AOS.init({ duration: 1000, once: true }); // Inicia animações
});

// ... (Mantenha aqui o resto do seu código de menu mobile e scroll)

// Inicializar Animações de Scroll (AOS)
AOS.init({
    duration: 1000,
    once: true
});

// Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    // Trocar ícone do menu
    const icon = mobileMenu.querySelector('i');
    if (navList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Efeito de mudar o header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = '#000';
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '0';
    }
});

// Automação simples para o carrossel de destaques (efeito infinito)
const slider = document.querySelector('.slider-wrapper');
let scrollAmount = 0;

function simpleSlider() {
    scrollAmount++;
    if (scrollAmount > slider.scrollWidth / 2) {
        scrollAmount = 0;
    }
    slider.scrollTo(scrollAmount, 0);
}

// Opcional: Se quiser um scroll automático suave nos destaques
// setInterval(simpleSlider, 50);

// Suavização do Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});