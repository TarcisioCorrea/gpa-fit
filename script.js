// Altere o número abaixo para o seu número real
const TELEFONE_LOJA = "554999476742"; 

function carregarProdutos() {
    const grid = document.getElementById('grid-produtos');
    if (!grid) return;

    grid.innerHTML = ""; // Limpa o grid antes de carregar

    listaProdutos.forEach(prod => {
        // A MÁGICA ESTÁ AQUI: O encodeURIComponent prepara o texto para o link
        const mensagem = encodeURIComponent(`Olá! Vi no site e tenho interesse no produto: ${prod.nome}`);
        
        // O link DEVE ser wa.me/NUMERO?text=MENSAGEM
        const linkWhats = `https://wa.me/${TELEFONE_LOJA}?text=${mensagem}`;

        grid.innerHTML += `
            <div class="product-card" data-aos="zoom-in">
                <div class="product-img"><img src="${prod.imagem}" alt="${prod.nome}"></div>
                <div class="product-info">
                    <h3>${prod.nome}</h3>
                    <p>${prod.descricao}</p>
                    <span class="price">R$ ${prod.preco}</span>
                    <a href="${linkWhats}" target="_blank" class="btn-buy">
                        Comprar via WhatsApp <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        `;
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