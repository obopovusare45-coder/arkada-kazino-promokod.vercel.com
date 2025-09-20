// Основной JavaScript файл
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document ready!');
    
    // Обработчики для FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const toggle = question.querySelector('.faq-toggle');
            
            // Закрываем все открытые ответы, кроме текущего
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer && item.classList.contains('open')) {
                    item.classList.remove('open');
                    const otherToggle = item.previousElementSibling.querySelector('.faq-toggle');
                    otherToggle.textContent = '+';
                }
            });
            
            // Переключаем текущий ответ
            answer.classList.toggle('open');
            toggle.textContent = answer.classList.contains('open') ? '-' : '+';
        });
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Анимация при прокрутке
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами, которые должны анимироваться
    document.querySelectorAll('.advantage-item, .content-section, .review-item, .game-item').forEach(el => {
        observer.observe(el);
    });
});