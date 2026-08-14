// script.js - Northstar storefront interactive JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // MOBILE MENU FUNCTIONALITY
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isActive = menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });

        navLinks.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    }

    document.addEventListener('click', (event) => {
        const isClickInside = menuToggle.contains(event.target) || navLinks.contains(event.target);
        if (!isClickInside) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // SEARCH PANEL FUNCTIONALITY
    const searchButton = document.getElementById('searchButton');
    const closeSearch = document.getElementById('closeSearch');
    const searchPanel = document.querySelector('.search-panel');
    const searchInput = document.getElementById('searchInput');

    if (searchButton && searchPanel && closeSearch) {
        searchButton.addEventListener('click', () => {
            searchPanel.classList.add('active');
            searchInput.focus();
            document.body.style.overflow = 'hidden';
        });

        closeSearch.addEventListener('click', () => {
            searchPanel.classList.remove('active');
            document.body.style.overflow = '';
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && searchPanel.classList.contains('active')) {
                searchPanel.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // STICKY HEADER SCROLL EFFECT
    const siteHeader = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // CART / BAG FUNCTIONALITY
    const cart = []; // In-memory cart
    const cartCount = document.getElementById('cartCount');

    const updateCartCount = () => {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    };

    const showToast = (message) => {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.style.background = '#7A1F3D';
        toast.style.color = 'white';
        toast.style.padding = '14px 24px';
        toast.style.borderRadius = '0';
        toast.style.fontSize = '11px';
        toast.style.letterSpacing = '1.5px';
        toast.style.textTransform = 'uppercase';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => { toast.remove(); }, 2500);
    };

    document.querySelectorAll('.add-cart, .quick-add').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = parseFloat(button.getAttribute('data-price'));
            const cartItem = cart.find(item => item.name === productName);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }
            updateCartCount();
            showToast('Added to bag!');
        });
    });

    // SCROLL FADE-IN ANIMATIONS
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const observerOptions = { threshold: 0.12 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.75s ease, transform 0.75s ease';
        observer.observe(section);
        section.classList.add('fade-in-section'); // For initial visibility setup
    });

    // SMOOTH SCROLL FUNCTIONALITY
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // SEARCH FILTERING
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            const productCards = document.querySelectorAll('#productGrid .product-card');
            productCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = title.includes(query) || query === '' ? 'block' : 'none';
            });
        });
    }

    // NEWSLETTER FORM VALIDATION
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            if (emailInput.value && emailInput.value.includes('@')) {
                newsletterForm.innerHTML = '<p style="font-family: Arial;">Thank you for joining Northstar. We\'ll be in touch.</p>';
            }
        });
    }

    // YEAR FOOTER
    const footerYearElements = document.querySelectorAll('.footer-year');
    const currentYear = new Date().getFullYear();
    footerYearElements.forEach(el => el.textContent = currentYear);
});