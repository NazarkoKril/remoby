document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const item   = trigger.closest('.faq-item');
        const body   = item.querySelector('.faq-body');
        const inner  = item.querySelector('.faq-body-inner');
        const isOpen = item.classList.contains('is-open');
 
        // Закрити всі інші
        document.querySelectorAll('.faq-item.is-open').forEach(open => {
            if (open !== item) {
                open.classList.remove('is-open');
                open.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
                open.querySelector('.faq-body').style.maxHeight = '0';
            }
        });
 
        if (isOpen) {
            item.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
            body.style.maxHeight = '0';
        } else {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
            body.style.maxHeight = inner.scrollHeight + 'px';
        }
    });
});