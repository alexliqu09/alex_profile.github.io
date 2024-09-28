let isEnglish = true;

function toggleLanguage() {
    const footerText = document.getElementById('footer-text');
    const languageToggle = document.querySelector('.language-toggle');
    const enTexts = document.querySelectorAll('.en');
    const esTexts = document.querySelectorAll('.es');

    if (isEnglish) {
        footerText.textContent = footerText.getAttribute('data-lang-es');
        languageToggle.textContent = 'English';
        enTexts.forEach(el => el.style.display = 'none');
        esTexts.forEach(el => el.style.display = 'block');
    } else {
        footerText.textContent = footerText.getAttribute('data-lang-en');
        languageToggle.textContent = 'Español';
        enTexts.forEach(el => el.style.display = 'block');
        esTexts.forEach(el => el.style.display = 'none');
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

// Initialize the carousel showing the first slide
showSlide(currentSlide);
