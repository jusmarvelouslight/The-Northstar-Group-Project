// script.js for Northstar Clothing Store

// Wrap everything in a DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {

    // ========== MOBILE MENU ========== 
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const expanded = menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', expanded);
            navLinks.classList.toggle('active');
        });

        navLinks.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });

        document.addEventListener('click', (event) => {
            if (!header.contains(event.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ========== SEARCH PANEL ========== 
    const searchPanel = document.querySelector('.search-panel');
    const searchButton = document.getElementById('searchButton');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');

    if (searchButton && searchPanel && closeSearch && searchInput) {
        searchButton.addEventListener('click', () => {
            searchPanel.classList.add('active');
            searchInput.focus();
            document.body.style.overflow = 'hidden';
        });

        closeSearch.addEventListener('click', () => {
            searchPanel.classList.remove('active');
            document.body.style.overflow = ''; // Allow scrolling again
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchPanel.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ========== STICKY HEADER SCROLL EFFECT ========== 
    const siteHeader = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // ========== CART / BAG ========== 
    const cart = [];
    const cartCount = document.getElementById('cartCount');
    const toastContainer = document.createElement('div');
    toastContainer.classList.add('toast');
    document.body.appendChild(toastContainer);

    function showToast(message) {
        toastContainer.textContent = message;
        toastContainer.style.cssText = 'background: #7A1F3D; color: white; padding: 14px 24px; border-radius: 0; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; position: fixed; bottom: 20px; right: 20px;';
        setTimeout(() => { toastContainer.textContent = ''; }, 2500);
    }

    document.querySelectorAll('.add-cart, .quick-add').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = parseFloat(button.getAttribute('data-price'));
            const existingItem = cart.find(item => item.name === productName);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
            cartCount.textContent = totalItems;
            showToast('Added to bag!');
        });
    });

    // ========== SCROLL FADE-IN ANIMATIONS ========== 
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const observerOptions = {
        threshold: 0.12
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = '0.75s ease';
        observer.observe(section);
    });

    // ========== SMOOTH SCROLLING ========== 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const target = document.querySelector(targetId);
            const offset = 80;
            const scrollTo = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: scrollTo, behavior: 'smooth' });
        });
    });

    // ========== SEARCH FILTERING ========== 
    const searchFilterInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('#productGrid .product-card');

    if (searchFilterInput) {
        searchFilterInput.addEventListener('input', () => {
            const query = searchFilterInput.value.toLowerCase();
            productCards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = productName.includes(query) ? 'block' : 'none';
            });
        });
    }

    // ========== NEWSLETTER FORM ========== 
    const newsletterForm = document.querySelector('form[aria-labelledby="newsletter" ]');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            newsletterForm.style.display = 'none';
            const successMessage = document.createElement('p');
            successMessage.textContent = "Thank you for joining Northstar. We'll be in touch.";
            successMessage.style.fontFamily = 'YourBrandFont, sans-serif';
            newsletterForm.parentNode.insertBefore(successMessage, newsletterForm);
        });
    }

    // ========== YEAR FOOTER ========== 
    const yearElements = document.querySelectorAll('.footer-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => el.textContent = currentYear);
});
