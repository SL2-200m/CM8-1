
        document.addEventListener('DOMContentLoaded', function() {
            // --- Quantity Selector Logic ---
            const decreaseBtn = document.getElementById('decrease-qty');
            const increaseBtn = document.getElementById('increase-qty');
            const quantityInput = document.getElementById('quantity-input');

            decreaseBtn.addEventListener('click', () => {
                let currentValue = parseInt(quantityInput.value, 10);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                }
            });

            increaseBtn.addEventListener('click', () => {
                let currentValue = parseInt(quantityInput.value, 10);
                if (currentValue < 99) { // Set a max quantity
                    quantityInput.value = currentValue + 1;
                }
            });

            // --- Fade-in on Scroll Animation ---
            const faders = document.querySelectorAll('.fade-in');
            
            const appearOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add('visible');
                        appearOnScroll.unobserve(entry.target);
                    }
                });
            }, appearOptions);

            faders.forEach(fader => {
                appearOnScroll.observe(fader);
            });
        });
    