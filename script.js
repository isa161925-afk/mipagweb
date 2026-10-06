
const nombreUsuario = "María";
const emailUsuario = "maria.contacto@ejemplo.com";
const tarjetas = document.querySelectorAll('.card');
const navLinks = document.querySelectorAll('nav a');
const spanEmail = document.getElementById('email-text');


spanEmail.textContent = emailUsuario;


const observerOptions = {
    threshold: 0.15
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            entry.target.classList.add('visible');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);


tarjetas.forEach(tarjeta => {
    observer.observe(tarjeta);
});


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'  
            });
        }
    });
});

console.log(`¡Bienvenido al sitio web personal de ${nombreUsuario}!`);