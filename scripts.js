document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('.link-nav');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // impede o pulo automático

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Delay antes de descer a tela
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100); // ⏱ 500ms de delay
        });
    });

});
