// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Tariff cards interaction
    const tariffCards = document.querySelectorAll('.tariff-card');
    
    // Add hover effect
    tariffCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add hover animation or styling if needed
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove hover styling
            if (!this.classList.contains('tariff-card--highlighted')) {
                this.style.transform = 'translateY(0)';
            } else {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Animation on scroll
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    // Function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Check on load and scroll
    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);

    // Mobile menu toggle (if implemented in the future)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('mobile-menu--open');
            mobileMenuToggle.classList.toggle('mobile-menu-toggle--open');
        });
    }
}); 