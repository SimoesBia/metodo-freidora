document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SISTEMA SANFONA (ACCORDION) PARA O FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = question.querySelector('span');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
                i.querySelector('.faq-question span').textContent = '+';
            });

            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = '-';
            }
        });
    });

    // 2. MOTOR DE ANIMAÇÕES DURANTE A ROLAGEM (Intersection Observer)
    const animatedElements = document.querySelectorAll('.animate-scroll');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Deixa de observar para manter performático e ativo na tela
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Dispara a animação quando 10% do item aparece
        rootMargin: "0px 0px -50px 0px" // Margem inferior para antecipar levemente o surgimento
    });

    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });
});