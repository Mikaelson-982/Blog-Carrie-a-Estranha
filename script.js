// ===== MENU MOBILE =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.textContent = '☰';
    });
});

// ===== HEADER AO ROLAR =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(139, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// ===== ANIMAÇÃO AO ROLAR =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.querySelectorAll('.character-card, .episode-card, .news-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== EFEITO DE SANGUE NO HERO =====
const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelector('.hero-content').style.transform = 
        `translate(${x}px, ${y}px)`;
});

// ===== CONTADOR DE VISITAS (simulado) =====
let visitas = localStorage.getItem('visitasCarrie') || 0;
visitas++;
localStorage.setItem('visitasCarrie', visitas);

// ===== EASTER EGG: Digitar "CARRIE" ativa efeito =====
let typed = '';
document.addEventListener('keydown', (e) => {
    typed += e.key.toLowerCase();
    if (typed.length > 6) typed = typed.slice(-6);
    
    if (typed === 'carrie') {
        document.body.style.animation = 'bloodFlash 1s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 1000);
    }
});

// Adicionar keyframe dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes bloodFlash {
        0%, 100% { filter: none; }
        50% { filter: hue-rotate(-30deg) saturate(2) brightness(0.8); }
    }
`;
document.head.appendChild(style);

console.log('%c🩸 CARRIE, A ESTRANHA - 2026', 
    'color: #8b0000; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px #000;');
console.log('%cBem-vindo ao blog oficial da série!', 
    'color: #c41e3a; font-size: 14px;');