document.addEventListener('DOMContentLoaded', function() {
    const sidenavElems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(sidenavElems);

    const links = document.querySelectorAll('.sidenav a');
    const trigger = document.querySelector('.sidenav-trigger');
    const sidenav = document.querySelector('.sidenav');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove "active" de todos os links
            links.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
				
				
                    var sidenavInstance = M.Sidenav.getInstance(sidenav);
                    sidenavInstance.close();

                // Fecha o menu
                if (window.innerWidth > 900) {
                    var sidenavInstance = M.Sidenav.getInstance(sidenav);
                    sidenavInstance.close();
                } else {
                    sidenav.classList.remove('open');
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var sidenavElems = document.querySelectorAll('.sidenav');
    var sidenavInstances = M.Sidenav.init(sidenavElems, {
        onOpenStart: function () {
            /* document.getElementById('nav-fab').style.background = 'none'; */
            document.getElementById('menu-icon').style.display = 'none';
        },
        onCloseEnd: function () {
            /* document.getElementById('nav-fab').style.background = ''; */
            document.getElementById('menu-icon').style.display = 'inline-block';
        }
    });
});
