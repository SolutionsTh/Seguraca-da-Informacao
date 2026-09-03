/* =====================================================
   MENU LATERAL
===================================================== */
document.getElementById("btnMenu").addEventListener("click", function(event) {
    event.preventDefault();
    toggleMenu();
});

function toggleMenu() {
    const menu = document.getElementById("menuLateral");
    const overlay = document.getElementById("overlayMenu");
    const icone = document.getElementById("icone-horas");

    menu.classList.toggle("aberto");

    if (menu.classList.contains("aberto")) {
        overlay.classList.add("ativo");
        icone.classList.add("mdi-close");
        icone.classList.remove("mdi-menu");
    } else {
        overlay.classList.remove("ativo");
        icone.classList.add("mdi-menu");
        icone.classList.remove("mdi-close");
    }
}

const painelPessoas = document.getElementById("painelPessoas");
const botaoAccount = document.getElementById("btnAccount");

// Fecha o menu ao clicar no painel de pessoas
if (painelPessoas) {
    painelPessoas.addEventListener("click", () => {
        fecharMenuSeAberto();
    });
}

// Fecha o menu ao clicar no botÃ£o account
if (botaoAccount) {
    botaoAccount.addEventListener("click", () => {
        fecharMenuSeAberto();
    });
}

// FunÃ§Ã£o auxiliar
function fecharMenuSeAberto() {
    const menu = document.getElementById("menuLateral");
    const overlay = document.getElementById("overlayMenu");
    const icone = document.getElementById("icone-horas");

    if (menu.classList.contains("aberto")) {
        menu.classList.remove("aberto");
        overlay.classList.remove("ativo");
        icone.classList.add("mdi-menu");
        icone.classList.remove("mdi-close");
    }
}




// Seleciona todos os links dentro do menu lateral
// Seleciona os links do menu
const linksMenu = document.querySelectorAll("#menuLateral a.btn-menu");

linksMenu.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Evita o pulo instantâneo da página

        const targetId = this.getAttribute("href");
        const targetElement = $(targetId);

        if (targetElement.length) {
            // Atualiza as classes
            linksMenu.forEach(item => item.classList.remove("on"));
            this.classList.add("on");

            // Fecha a barra lateral
            fecharMenuSeAberto();

            // Anima a rolagem suave (1000 = 1 segundo; aumente para rolar mais devagar)
            $("html, body").animate({
                scrollTop: targetElement.offset().top
            }, 1500);
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todas as seções que contêm a classe .section e possuem um id
    const secoes = document.querySelectorAll(".section[id]");
    const linksMenu = document.querySelectorAll("#menuLateral a.btn-menu");

    // 1. Ação ao clicar no item do menu (marca "on" e fecha a barra lateral)
    linksMenu.forEach(link => {
        link.addEventListener("click", function () {
            linksMenu.forEach(item => item.classList.remove("on"));
            this.classList.add("on");
            fecharMenuSeAberto();
        });
    });

    // 2. Observador de rolagem (ativa o item do menu conforme a tela avança)
    const observerOptions = {
        rootMargin: "-25% 0px -65% 0px" // Dispara quando a seção entra no terço superior da tela
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");

                // Remove a classe "on" de todos os botões do menu
                linksMenu.forEach(link => link.classList.remove("on"));

                // Ativa a classe "on" no link correspondente à seção visível
                const linkAtivo = document.querySelector(`#menuLateral a[href="#${id}"]`);
                if (linkAtivo) {
                    linkAtivo.classList.add("on");
                }
            }
        });
    }, observerOptions);

    secoes.forEach(secao => observer.observe(secao));
});