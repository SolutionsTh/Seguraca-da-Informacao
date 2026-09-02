document.addEventListener("DOMContentLoaded", function () {
    const flipCards = document.querySelectorAll('.flip-card-content');

    flipCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Evita disparar se clicar em um link ou elemento interativo interno
            this.classList.toggle('is-flipped');
        });
    });
});