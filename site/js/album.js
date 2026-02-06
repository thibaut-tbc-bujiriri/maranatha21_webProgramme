/**
 * Album Images Configuration
 * Liste des photos sélectionnées pour l'album de l'église
 * Les images sont dans le dossier assets/images/Album/
 */

// Gestion de la galerie d'images
(function() {
    // Attendre que le DOM soit complètement chargé et que ALBUM_IMAGES soit défini
    function initGallery() {
        const images = (window.ASSETS && window.ASSETS.ALBUM_IMAGES) ? window.ASSETS.ALBUM_IMAGES : [];
        const galleryGrid = document.getElementById('gallery-grid');
        const emptyGallery = document.getElementById('empty-gallery');
        const modal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        const modalClose = document.querySelector('.modal-close');
        const modalPrev = document.querySelector('.modal-prev');
        const modalNext = document.querySelector('.modal-next');
        
        let currentImageIndex = 0;

        // Afficher les images ou le message vide
        if (images.length === 0) {
            galleryGrid.style.display = 'none';
            emptyGallery.style.display = 'block';
        } else {
            emptyGallery.style.display = 'none';
            images.forEach((imageSrc, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.setAttribute('role', 'button');
                galleryItem.setAttribute('tabindex', '0');
                galleryItem.setAttribute('aria-label', `Voir l'image ${index + 1}`);
                
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = `Photo de l'album ${index + 1}`;
                img.loading = 'lazy';
                
                galleryItem.appendChild(img);
                galleryItem.addEventListener('click', () => openModal(index));
                galleryItem.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(index);
                    }
                });
                
                galleryGrid.appendChild(galleryItem);
            });
        }

        // Ouvrir le modal
        function openModal(index) {
            currentImageIndex = index;
            modalImage.src = images[index];
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            updateModalButtons();
        }

        // Fermer le modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Navigation dans le modal
        function showNext() {
            if (currentImageIndex < images.length - 1) {
                currentImageIndex++;
            } else {
                currentImageIndex = 0;
            }
            modalImage.src = images[currentImageIndex];
            updateModalButtons();
        }

        function showPrev() {
            if (currentImageIndex > 0) {
                currentImageIndex--;
            } else {
                currentImageIndex = images.length - 1;
            }
            modalImage.src = images[currentImageIndex];
            updateModalButtons();
        }

        function updateModalButtons() {
            // Masquer/afficher les boutons selon la position
            if (images.length <= 1) {
                modalPrev.style.display = 'none';
                modalNext.style.display = 'none';
            } else {
                modalPrev.style.display = 'flex';
                modalNext.style.display = 'flex';
            }
        }

        // Event listeners
        modalClose.addEventListener('click', closeModal);
        modalPrev.addEventListener('click', showPrev);
        modalNext.addEventListener('click', showNext);

        // Fermer avec la touche Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            } else if (e.key === 'ArrowLeft' && modal.classList.contains('active')) {
                showPrev();
            } else if (e.key === 'ArrowRight' && modal.classList.contains('active')) {
                showNext();
            }
        });

        // Fermer en cliquant en dehors de l'image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // S'exécuter une fois que le DOM est complètement chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGallery);
    } else {
        initGallery();
    }
})();

