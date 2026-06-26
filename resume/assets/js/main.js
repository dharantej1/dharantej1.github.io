document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navMenuLinks = document.querySelectorAll('.nav-menu a');
    const navbar = document.querySelector('.navbar');

    const closeMenu = () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        if (navbar) {
            navbar.classList.remove('nav-active');
        }
    };

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            if (navbar) {
                navbar.classList.toggle('nav-active');
            }
        });

        // Close menu when tapping outside of it
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                closeMenu();
            }
        });
    }

    // 2. Smooth Scrolling & Close mobile menu on click
    navMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile nav menu
                    if (navMenu && navMenu.classList.contains('active')) {
                        closeMenu();
                    }

                    // Calculate header height offset if necessary
                    const offset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. Shrink Navbar on Scroll
    const handleScrollNavbar = () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('shrunk');
            } else {
                navbar.classList.remove('shrunk');
            }
        }
    };
    window.addEventListener('scroll', handleScrollNavbar);
    // Initial call to ensure correct state on load
    handleScrollNavbar();

    // 4. Scroll Active Navigation Highlighting
    const sections = document.querySelectorAll('section[id], header[id]');
    const scrollSpy = () => {
        const scrollPosition = window.scrollY + 120; // offset

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
                if (activeLink) {
                    navMenuLinks.forEach(link => link.classList.remove('active'));
                    activeLink.classList.add('active');
                }
            }
        });
    };
    window.addEventListener('scroll', scrollSpy);
    scrollSpy(); // Initial call

    // 5. Copy Email to Clipboard Action
    const copyBtn = document.getElementById('copy-email-btn');
    const emailTextElement = document.getElementById('email-text');

    if (copyBtn && emailTextElement) {
        copyBtn.addEventListener('click', () => {
            const emailText = emailTextElement.innerText || emailTextElement.textContent;
            
            navigator.clipboard.writeText(emailText).then(() => {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyBtn.style.background = 'var(--accent-cyan)';
                copyBtn.style.color = 'var(--bg-primary)';

                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.style.background = '';
                    copyBtn.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        });
    }

    // 6. Viewport Scroll Entrance Animations (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null, // Viewport
            rootMargin: '0px',
            threshold: 0.15 // trigger when 15% visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        revealElements.forEach(el => {
            el.classList.add('revealed');
        });
    }
});