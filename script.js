
// Mobile nav toggle
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
toggle?.addEventListener('click', () => {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.gap = '14px';
    links.style.padding = '10px 0 16px';
});

// Filter menu
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.menu-card');
chips.forEach(chip => {
    chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const cat = chip.dataset.filter;
        cards.forEach(card => {
            const ok = cat === 'all' || card.dataset.cat === cat;
            card.style.display = ok ? 'flex' : 'none';
        });
    });
});

// Lightbox
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        lbImg.src = img.src;
        lb.classList.add('open');
    });
});
lb.addEventListener('click', () => lb.classList.remove('open'));
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') lb.classList.remove('open'); });

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            io.unobserve(entry.target);
        }
    });
}, { threshold: .2 });
revealEls.forEach(el => io.observe(el));

// Fake submit (no backend)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formNote').classList.remove('hide');
    form.reset();
});
