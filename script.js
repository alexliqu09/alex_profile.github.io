let isEnglish = true;

function toggleLanguage() {

    const footerText = document.getElementById("footer-text");

    const languageToggle = document.querySelector(".language-toggle");

    document.querySelectorAll(".en").forEach(e=>{
        e.style.display=isEnglish?"none":"block";
    });

    document.querySelectorAll(".es").forEach(e=>{
        e.style.display=isEnglish?"block":"none";
    });

    footerText.textContent=isEnglish
        ?footerText.dataset.langEs
        :footerText.dataset.langEn;

    languageToggle.textContent=isEnglish
        ?"English"
        :"Español";

    isEnglish=!isEnglish;

}
