// script.js for Northstar Clothing Store

/**
 * DOMContentLoaded listener to initialize all functionalities.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Functionality
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const body = document.body;
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isActive = menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });

        navLinks.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });

        body.addEventListener('click', (event) => {
            const target = event.target;
            if (navLinks.classList.contains('active') && target !== menuToggle && !navLinks.contains(target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Search Panel Functionality
    const searchButton = document.getElementById('searchButton');
    const closeSearch = document.getElementById('closeSearch');
    const searchPanel = document.querySelector('.search-panel');
    const searchInput = document.getElementById('searchInput');
    if (searchButton && closeSearch && searchPanel && searchInput) {
        searchButton.addEventListener('click', () => {
            searchPanel.classList.add('active');
            searchInput.focus();
            body.style.overflow = 'hidden';
        });

        closeSearch.addEventListener('click', () => {
            searchPanel.classList.remove('active');
            body.style.overflow = ''; // reset overflow
        });

        searchInput.addEventListener('keydown', (event) => { 
            if (event.key === 'Escape') {
                searchPanel.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    // Sticky Header Effect
    const siteHeader = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (siteHeader) {
            if (window.scrollY > 80) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        }
    });

    // Cart Functionality
    const cart = [];
    const cartCount = document.getElementById('cartCount');
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast';
    document.body.appendChild(toastContainer);

    const showToast = (message) => {
        toastContainer.textContent = message;
        toastContainer.style.position = 'fixed';
        toastContainer.style.background = '#7A1F3D';
        toastContainer.style.color = 'white';
        toastContainer.style.padding = '14px 24px';
        toastContainer.style.borderRadius = '0';
        toastContainer.style.fontSize = '11px';
        toastContainer.style.letterSpacing = '1.5px';
        toastContainer.style.textTransform = 'uppercase';
        toastContainer.style.bottom = '20px';
        toastContainer.style.right = '20px';
        toastContainer.style.zIndex = '1000';
        setTimeout(() => {
            toastContainer.textContent = '';
        }, 2500);
    };

    const updateCartCount = () => {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) cartCount.textContent = totalCount;
    };

    document.addEventListener('click', (event) => {
        const button = event.target.closest('.add-cart, .quick-add');
        if (button) {
            const productName = button.dataset.product;
            const productPrice = parseFloat(button.dataset.price);
            const existingItem = cart.find(item => item.name === productName);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }
            updateCartCount();
            showToast('Added to bag!');
        }
    });

    // Scroll Fade-in Animations
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const options = {
        threshold: 0.12
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = '0.75s ease';
        observer.observe(section);
    });

    // Smooth Scroll
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const scrollOffset = 80; // Offset for sticky header
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - scrollOffset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Search Filtering
    const searchInputElement = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('#productGrid .product-card');
    if (searchInputElement) {
        searchInputElement.addEventListener('input', () => {
            const query = searchInputElement.value.toLowerCase();
            productCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = title.includes(query) ? '' : 'none';
            });
        });
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailValue = emailInput.value.trim();
            if (emailValue && emailValue.includes('@')) {
                newsletterForm.innerHTML = '<p style="font-family: sans-serif;">Thank you for joining Northstar. We\'ll be in touch.</p>';
            }
        });
    }

    // Year Footer
    const footerYearElements = document.querySelectorAll('.footer-year');
    const currentYear = new Date().getFullYear();
    footerYearElements.forEach(elem => {
        elem.textContent = currentYear;
    });
});
