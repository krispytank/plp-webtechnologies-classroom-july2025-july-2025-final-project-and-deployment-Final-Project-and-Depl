// scripts/scripts.js
document.addEventListener('DOMContentLoaded', function() {
            // Filter functionality
            const filterButtons = document.querySelectorAll('.filter-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const filter = button.getAttribute('data-filter');
                    
                    galleryItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Lightbox functionality
            const lightbox = document.querySelector('.lightbox');
            const lightboxImg = lightbox.querySelector('img');
            const lightboxCaption = lightbox.querySelector('.caption');
            const closeBtn = lightbox.querySelector('.close-btn');
            
            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    const imgSrc = item.querySelector('img').getAttribute('src');
                    const caption = item.querySelector('h3').textContent;
                    
                    lightboxImg.setAttribute('src', imgSrc);
                    lightboxCaption.textContent = caption;
                    
                    lightbox.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                });
            });
            
            // Close lightbox
            closeBtn.addEventListener('click', () => {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            });
            
            // Close lightbox when clicking outside the image
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Close lightbox with Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });