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