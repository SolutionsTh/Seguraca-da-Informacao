document.addEventListener("DOMContentLoaded", function () {
    // Oculta seções com data-cc="off" e remove do menu
    const sections = document.querySelectorAll('div[id^="cs"]');

    sections.forEach(section => {
        const cc = section.getAttribute('data-cc');
        const id = section.getAttribute('id');

        if (cc === 'off' && id) {
            const menuItem = document.querySelector(`.nav-fab a[href="#${id}"]`);
            if (menuItem && menuItem.closest('li')) {
                menuItem.closest('li').remove(); // remove apenas o <li>
            }
            section.remove();
        }
    });

    // Remove do menu qualquer item que a ancora (href="#...") não exista na página
    const menuLinks = document.querySelectorAll('.nav-fab a[href^="#"]');

    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (!targetElement && link.closest('li')) {
            link.closest('li').remove(); // remove apenas o <li> ao redor do link
        }
    });
});
