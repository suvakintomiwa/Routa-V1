        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Waitlist form submission
        function handleWaitlistSubmit(event) {
            event.preventDefault();
            const email = event.target.email.value;
            const messageEl = document.getElementById('waitlist-message');
            
            // Simulate form submission
            setTimeout(() => {
                messageEl.classList.remove('hidden');
                event.target.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    messageEl.classList.add('hidden');
                }, 5000);
            }, 500);
        }

        // Add initial visibility to hero section
        setTimeout(() => {
            document.querySelector('.fade-in').classList.add('visible');
        }, 300);
