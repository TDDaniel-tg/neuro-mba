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

    // Tariff cards highlighting
    const tariffCards = document.querySelectorAll('.tariff-card');
    
    // Set the middle card as highlighted by default
    if (tariffCards.length >= 3) {
        const middleIndex = Math.floor(tariffCards.length / 2);
        tariffCards[middleIndex].classList.add('tariff-card--highlighted');
    } else if (tariffCards.length > 0) {
        // If fewer than 3 cards, highlight the first one
        tariffCards[0].classList.add('tariff-card--highlighted');
    }
    
    // Add hover effect
    tariffCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Remove active class from all cards first
            tariffCards.forEach(c => {
                c.classList.remove('tariff-card--active');
            });
            
            // Add active class to current card
            this.classList.add('tariff-card--active');
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove active class when mouse leaves
            this.classList.remove('tariff-card--active');
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