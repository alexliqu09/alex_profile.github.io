let isEnglish = true;

function toggleLanguage() {
    const footerText = document.getElementById('footer-text');
    const introParagraphEn = document.getElementById('intro-paragraph-en');
    const introParagraphEs = document.getElementById('intro-paragraph-es');
    const languageToggle = document.querySelector('.language-toggle');
    
    if (isEnglish) {
        footerText.textContent = footerText.getAttribute('data-lang-es');
        introParagraphEn.style.display = 'none';
        introParagraphEs.style.display = 'block';
        languageToggle.textContent = 'English';
    } else {
        footerText.textContent = footerText.getAttribute('data-lang-en');
        introParagraphEn.style.display = 'block';
        introParagraphEs.style.display = 'none';
        languageToggle.textContent = 'Español';
    }

    isEnglish = !isEnglish;
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-currentSlide * 100}%)`;
    });
}

function moveSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

// Inicializa el carrusel mostrando el primer slide
showSlide(currentSlide);
