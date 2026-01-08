document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const body = document.body;
    
    // Kolla om språk finns sparad i localStorage
    const savedLang = localStorage.getItem('portfolioLanguage');
    if (savedLang === 'english') {
        body.classList.remove('swedish');
        body.classList.add('english');
        langToggle.textContent = 'Svenska';
    } else {
        body.classList.remove('english');
        body.classList.add('swedish');
        langToggle.textContent = 'English';
    }
    
    // Språkväxling
    langToggle.addEventListener('click', () => {
        if (body.classList.contains('swedish')) {
            body.classList.remove('swedish');
            body.classList.add('english');
            langToggle.textContent = 'Svenska';
            localStorage.setItem('portfolioLanguage', 'english');
        } else {
            body.classList.remove('english');
            body.classList.add('swedish');
            langToggle.textContent = 'English';
            localStorage.setItem('portfolioLanguage', 'swedish');
        }
    });
});