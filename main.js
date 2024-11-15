
// Simplemente vamos a usar un poco de interactividad básica
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(e.target.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Mostrar secciones cuando el usuario las vea (scroll animations)
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav ul li a');

    // Animaciones de scroll para mostrar secciones
    const showSectionsOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isVisible = sectionTop < window.innerHeight - 50;
            if (isVisible) {
                section.classList.add('visible');
            }
        });
    };

    // Smooth scroll para navegación
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(e.target.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Dark mode toggle
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };

    // Evento para el botón de dark mode
    const darkModeButton = document.querySelector('#dark-mode-btn');
    darkModeButton.addEventListener('click', toggleDarkMode);

    // Llamar a la función de mostrar secciones cuando se hace scroll
    window.addEventListener('scroll', showSectionsOnScroll);

    // Llamar una vez al cargar la página
    showSectionsOnScroll();
});
