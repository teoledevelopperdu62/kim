// ===== ANIMATION AU SCROLL =====
const fadeElements = document.querySelectorAll('.content, .card');

const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// ===== SMOOTH SCROLL POUR NAV =====
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetID = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetID);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
