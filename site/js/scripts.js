/**
 * MARANATHA 21 - Scripts JavaScript
 * Communauté des églises chrétiennes pour le Nouveau Départ (CECND)
 */

// ============================================
// Configuration
// ============================================
const FORMSPREEE_ENDPOINT = 'https://formspree.io/f/xblvvpdy';

// ============================================
// Gestion du Thème (Dark/Light Mode)
// ============================================
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Appliquer le thème sauvegardé
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Changer le thème
            document.documentElement.setAttribute('data-theme', newTheme);
            
            // Sauvegarder la préférence
            localStorage.setItem('theme', newTheme);
            
            // Animation du bouton
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

// ============================================
// Navigation & Menu Hamburger
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initFormValidation();
    initTestimonials();
    highlightActiveNav();
});

function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Gestion des dropdowns
        const dropdownItems = document.querySelectorAll('nav ul li.has-dropdown');
        dropdownItems.forEach(item => {
            const dropdownLink = item.querySelector(':scope > a');
            if (dropdownLink) {
                dropdownLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        const menu = item.querySelector('.dropdown-menu');
                        if (!menu || getComputedStyle(menu).display === 'none') {
                            return;
                        }
                        e.preventDefault();
                        item.classList.toggle('active');
                    }
                });
            }
        });

        // Fermer le menu quand on clique sur un lien (sauf dropdown parent)
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Ne pas fermer si c'est un lien dropdown parent sur mobile
                const parent = link.closest('li.has-dropdown');
                if (parent && window.innerWidth <= 768 && link === parent.querySelector(':scope > a')) {
                    return;
                }
                
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                
                // Fermer tous les dropdowns
                dropdownItems.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            });
        });

        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                dropdownItems.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }
}

// Mettre en évidence le lien actif dans la navigation
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
            // Si c'est un élément du dropdown, marquer aussi le parent
            const dropdownItem = link.closest('.dropdown-menu');
            if (dropdownItem) {
                const parentLink = dropdownItem.previousElementSibling;
                if (parentLink) {
                    parentLink.classList.add('active');
                }
            }
        }
    });
}

// Déplacer \"Résumé journalier\" entre le sous-menu et le menu principal selon la largeur
function handleMenuMove(){
    const mainMenu = document.querySelector('nav ul.main-menu');
    const programmeItem = mainMenu ? mainMenu.querySelector('li.has-dropdown') : null;
    const programmeSubmenu = programmeItem ? programmeItem.querySelector(':scope > ul.programme-submenu') : null;
    const resumeItem = document.querySelector('li.resume-item');
    if (!mainMenu || !programmeItem || !programmeSubmenu || !resumeItem) return;
    if (window.innerWidth <= 768) {
        if (!mainMenu.contains(resumeItem) || resumeItem.parentElement !== mainMenu) {
            mainMenu.insertBefore(resumeItem, programmeItem.nextSibling);
        }
    } else {
        if (!programmeSubmenu.contains(resumeItem)) {
            programmeSubmenu.appendChild(resumeItem);
        }
    }
}

// ============================================
// Validation et Envoi du Formulaire
// ============================================
function initFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', handleFormSubmit);
    
    // Validation en temps réel
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(input);
        });
    });
}

function validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    let isValid = true;
    let error = '';

    // Réinitialiser l'état
    formGroup.classList.remove('error', 'success');

    // Validation selon le type de champ
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        error = 'Ce champ est obligatoire';
    } else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            error = 'Veuillez entrer une adresse email valide';
        }
    } else if (field.type === 'tel' && field.value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(field.value) || field.value.replace(/\D/g, '').length < 8) {
            isValid = false;
            error = 'Veuillez entrer un numéro de téléphone valide';
        }
    }

    // Afficher l'erreur ou le succès
    if (isValid && field.value.trim()) {
        formGroup.classList.add('success');
        if (errorMessage) errorMessage.textContent = '';
    } else if (!isValid) {
        formGroup.classList.add('error');
        if (errorMessage) errorMessage.textContent = error;
    }

    return isValid;
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isFormValid = true;

    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
        }
    });

    return isFormValid;
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Valider le formulaire
    if (!validateForm(form)) {
        showMessage('Veuillez corriger les erreurs dans le formulaire.', 'error');
        return;
    }

    // Désactiver le bouton pendant l'envoi
    submitButton.disabled = true;
    submitButton.textContent = 'Envoi en cours...';

    // Préparer les données
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
        // Envoyer via Formspree
        const response = await fetch(FORMSPREEE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showMessage('Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.', 'success');
            form.reset();
            // Réinitialiser les états visuels
            form.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error', 'success');
            });
        } else {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Une erreur est survenue');
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        showMessage('Désolé, une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard ou nous contacter directement.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
}

function showMessage(message, type) {
    // Supprimer les messages existants
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Créer le nouveau message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    messageDiv.setAttribute('role', 'alert');
    messageDiv.setAttribute('aria-live', 'polite');

    // Insérer avant le formulaire
    const form = document.getElementById('contact-form');
    if (form) {
        form.parentNode.insertBefore(messageDiv, form);
        
        // Scroll vers le message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Supprimer après 5 secondes pour les messages de succès
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.style.transition = 'opacity 0.3s';
                messageDiv.style.opacity = '0';
                setTimeout(() => messageDiv.remove(), 300);
            }, 5000);
        }
    }
}

// ============================================
// Gestion des Témoignages
// ============================================
function initTestimonials() {
    // Charger les témoignages depuis localStorage
    loadTestimonials();
    
    // Gérer le formulaire d'ajout de témoignage
    const testimonialForm = document.getElementById('testimonial-form');
    if (testimonialForm) {
        testimonialForm.addEventListener('submit', handleTestimonialSubmit);
    }
}

function loadTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-list');
    if (!testimonialsContainer) return;

    // Témoignages par défaut (statiques)
    const defaultTestimonials = [
        {
            id: 1,
            text: "Maranatha 21 a été une expérience transformatrice pour ma vie spirituelle. Les enseignements reçus m'ont aidé à renforcer ma foi et à trouver une nouvelle direction dans ma marche avec Dieu.",
            author: "Thibaut Tbc Bujiriri",
            date: "2024-03-15"
        },
        {
            id: 2,
            text: "Je suis reconnaissant pour cette opportunité de grandir dans la connaissance de la Parole. L'atmosphère était remplie de la présence de Dieu, et j'ai été béni au-delà de mes attentes.",
            author: "Mishka dangote pataule",
            date: "2024-03-20"
        },
        {
            id: 3,
            text: "Un programme bien organisé avec des intervenants de qualité. J'ai été particulièrement touché par les moments de prière et de louange. Merci à toute l'équipe pour ce travail remarquable.",
            author: "Abraham kabi",
            date: "2024-03-25"
        }
    ];

    // Charger les témoignages depuis localStorage
    const savedTestimonials = JSON.parse(localStorage.getItem('maranatha21_testimonials')) || [];
    const allTestimonials = [...defaultTestimonials, ...savedTestimonials];

    // Afficher les témoignages
    testimonialsContainer.innerHTML = '';
    allTestimonials.forEach(testimonial => {
        const testimonialCard = createTestimonialCard(testimonial);
        testimonialsContainer.appendChild(testimonialCard);
    });
}

function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">— ${testimonial.author}</div>
        <div class="testimonial-date">${formatDate(testimonial.date)}</div>
    `;
    return card;
}

async function handleTestimonialSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const nameInput = form.querySelector('#testimonial-name');
    const textInput = form.querySelector('#testimonial-text');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    if (!nameInput.value.trim() || !textInput.value.trim()) {
        showTestimonialMessage('Veuillez remplir tous les champs.', 'error');
        return;
    }

    // Désactiver le bouton pendant l'envoi
    submitButton.disabled = true;
    submitButton.textContent = 'Envoi en cours...';

    // Préparer les données
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    // Ajouter un identifiant pour indiquer que c'est un témoignage
    data._subject = 'Nouveau témoignage - Maranatha 21';

    try {
        // Envoyer via Formspree
        const response = await fetch(FORMSPREEE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showTestimonialMessage('Merci ! Votre témoignage a été envoyé avec succès. Il sera publié après validation.', 'success');
            form.reset();
        } else {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Une erreur est survenue');
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        showTestimonialMessage('Désolé, une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
}

function showTestimonialMessage(message, type) {
    // Supprimer les messages existants
    const existingMessage = document.querySelector('.testimonial-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Créer le nouveau message
    const messageDiv = document.createElement('div');
    messageDiv.className = `testimonial-message message-${type}`;
    messageDiv.textContent = message;
    messageDiv.setAttribute('role', 'alert');
    messageDiv.setAttribute('aria-live', 'polite');
    messageDiv.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 4px;
        text-align: center;
        ${type === 'success' ? 'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'}
    `;

    // Insérer avant le formulaire
    const form = document.getElementById('testimonial-form');
    if (form) {
        form.parentNode.insertBefore(messageDiv, form);
        
        // Scroll vers le message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Supprimer après 5 secondes pour les messages de succès
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.style.transition = 'opacity 0.3s';
                messageDiv.style.opacity = '0';
                setTimeout(() => messageDiv.remove(), 300);
            }, 5000);
        }
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
}

// ============================================
// Animations au scroll
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card, .speaker-card, .testimonial-card');
    animatedElements.forEach(el => observer.observe(el));
    initVideoModal();
    handleMenuMove();
    window.addEventListener('resize', handleMenuMove);
});

// ============================================
// Gestion de la Modal Vidéo
// ============================================
function initVideoModal() {
    const videoBtn = document.getElementById('video-invitation-btn');
    const videoModal = document.getElementById('video-modal');
    const videoClose = document.querySelector('.video-modal-close');
    const videoOverlay = document.querySelector('.video-modal-overlay');
    const video = document.getElementById('invitation-video');

    if (!videoBtn || !videoModal) return;

    // Ouvrir la modal
    videoBtn.addEventListener('click', function() {
        videoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Empêcher le scroll
        // Lancer la lecture automatique (optionnel)
        if (video) {
            video.play().catch(err => {
                console.log('Lecture automatique bloquée:', err);
            });
        }
    });

    // Fermer la modal
    function closeModal() {
        videoModal.style.display = 'none';
        document.body.style.overflow = ''; // Réactiver le scroll
        if (video) {
            video.pause();
            video.currentTime = 0; // Remettre la vidéo au début
        }
    }

    if (videoClose) {
        videoClose.addEventListener('click', closeModal);
    }

    if (videoOverlay) {
        videoOverlay.addEventListener('click', closeModal);
    }

    // Fermer avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.style.display === 'flex') {
            closeModal();
        }
    });
}

