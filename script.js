
        setTimeout(() => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 5;
                document.getElementById('progressBar').style.width = `${progress}%`;

                if (progress >= 100) {
                    clearInterval(interval);
                    document.getElementById('splash').style.opacity = '0';
                    setTimeout(() => {
                        document.getElementById('splash').style.display = 'none';
                        document.getElementById('app').classList.remove('hidden');
                    }, 500);
                }
            }, 100);
        }, 500);

        // Tab switching functionality
        const tabs = document.querySelectorAll('.fixed.bottom-0 button');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => {
                    t.classList.remove('text-pink-600');
                    t.classList.add('text-gray-500');
                    t.classList.remove('tab-active');
                });
                tab.classList.remove('text-gray-500');
                tab.classList.add('text-pink-600');
                tab.classList.add('tab-active');

                // Here you would normally switch screens
                console.log(`Switched to ${tab.querySelector('span').textContent} tab`);
            });
        });

        // Member card hover effects
        const memberCards = document.querySelectorAll('.member-card');
        memberCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Enhanced hover effect
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = '0 15px 30px rgba(255, 20, 147, 0.25)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 4px 20px rgba(255, 20, 147, 0.15)';
            });

            // Click event for member cards
            card.addEventListener('click', () => {
                console.log(`Member ${card.querySelector('p').textContent} clicked`);
                // Normally would navigate to member profile
            });
        });