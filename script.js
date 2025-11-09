// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initAOS();
    initNavigation();
    initBackToTop();
    initCounters();
    initPlayerCount();
    initCountdown();
    hideLoadingScreen();
});

// ==================== LOADING SCREEN ====================
function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
    }, 1500);
}

// ==================== PARTICLES.JS ====================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#ff6b35', '#f7931e', '#ffd700']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#f7931e',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ==================== AOS INITIALIZATION ====================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            offset: 100,
            once: true,
            easing: 'ease-out-cubic'
        });
    }
}

// ==================== NAVIGATION ====================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ==================== BACK TO TOP BUTTON ====================
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== ANIMATED COUNTERS ====================
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const speed = 200; // The lower the slower

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-count');
        const increment = target / speed;
        let count = 0;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count) + '+';
                setTimeout(updateCount, 10);
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCount();
    };

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// ==================== PLAYER COUNT (Simulated) ====================
function initPlayerCount() {
    const playerCount = document.getElementById('players-count');
    if (!playerCount) return;

    // Simulate player count animation
    let count = 0;
    const targetCount = Math.floor(Math.random() * 100) + 50; // Random between 50-150

    const interval = setInterval(() => {
        count += Math.ceil(targetCount / 50);
        if (count >= targetCount) {
            count = targetCount;
            clearInterval(interval);
        }
        playerCount.textContent = count;
    }, 30);

    // Update every 10 seconds with slight variation
    setInterval(() => {
        const variation = Math.floor(Math.random() * 10) - 5;
        const newCount = Math.max(30, targetCount + variation);
        animatePlayerCountChange(playerCount, parseInt(playerCount.textContent), newCount);
    }, 10000);
}

function animatePlayerCountChange(element, from, to) {
    const duration = 1000;
    const start = Date.now();
    const diff = to - from;

    const timer = setInterval(() => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(from + (diff * progress));
        element.textContent = current;

        if (progress === 1) {
            clearInterval(timer);
        }
    }, 16);
}

// ==================== COUNTDOWN TIMER ====================
function initCountdown() {
    // Set countdown to 30 days from now (you can change this)
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 30);
    
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdown);
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
        }
    }, 1000);
}

// ==================== MODAL FUNCTIONS ====================
function openAuthModal(type) {
    const modal = document.getElementById('auth-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (type === 'register') {
        switchToRegister();
    } else {
        switchToLogin();
    }
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function switchToLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function switchToRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('auth-modal');
    if (e.target === modal) {
        closeAuthModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAuthModal();
    }
});

// ==================== FORM HANDLERS ====================
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simulate login (replace with actual API call)
    showNotification('Login Successful!', 'success');
    closeAuthModal();
    
    // You would typically make an API call here:
    // fetch('/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         closeAuthModal();
    //         showNotification('Login successful!', 'success');
    //     } else {
    //         showNotification(data.message, 'error');
    //     }
    // });
}

function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;

    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }

    // Simulate registration (replace with actual API call)
    showNotification('Account Created Successfully!', 'success');
    setTimeout(() => {
        switchToLogin();
    }, 1500);
    
    // You would typically make an API call here:
    // fetch('/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, email, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         showNotification('Account created! Please login.', 'success');
    //         setTimeout(() => switchToLogin(), 1500);
    //     } else {
    //         showNotification(data.message, 'error');
    //     }
    // });
}

// ==================== COPY SERVER IP ====================
function copyServerIP() {
    const serverIP = document.getElementById('server-ip').textContent;
    const copyBtn = document.querySelector('.copy-btn');
    
    navigator.clipboard.writeText(serverIP).then(() => {
        copyBtn.classList.add('copied');
        showNotification('Server IP copied to clipboard!', 'success');
        
        setTimeout(() => {
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        showNotification('Failed to copy IP', 'error');
    });
}

// ==================== DOWNLOAD LAUNCHER ====================
function downloadLauncher(platform) {
    // Your GitHub Releases download URL
    const downloadURL = 'https://github.com/hisokaSH/meowcraft_modpack/releases/download/v1.1.0/MeowCraft-Launcher-v1.4.0.zip';
    
    // Start download
    window.location.href = downloadURL;
    
    // Show notification
    showNotification('Downloading MeowCraft Launcher (888 MB)...', 'success');
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00ff00, #00cc00)' : 
                     type === 'error' ? 'linear-gradient(135deg, #ff4444, #cc0000)' : 
                     'linear-gradient(135deg, #ff6b35, #f7931e)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-weight: 600;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== DYNAMIC FEATURES ====================

// Add hover effects to feature cards
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Random sparkle effect on logo
setInterval(() => {
    const logo = document.querySelector('.hero-logo');
    if (logo) {
        logo.style.filter = 'brightness(1.2) drop-shadow(0 0 20px #f7931e)';
        setTimeout(() => {
            logo.style.filter = 'brightness(1)';
        }, 200);
    }
}, 5000);

// Console Easter Egg
console.log('%c🐱 MeowCraft Server 🐱', 'font-size: 20px; font-weight: bold; color: #f7931e;');
console.log('%cLooking to join our team?', 'font-size: 14px; color: #ff6b35;');
console.log('%cContact us on Discord!', 'font-size: 14px; color: #ffd700;');

// Performance monitoring
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.loadTime > 3000) {
                console.warn('Slow load detected:', entry.name);
            }
        }
    });
    observer.observe({ entryTypes: ['navigation'] });
}

// ==================== UTILITY FUNCTIONS ====================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add resize handler with debounce
window.addEventListener('resize', debounce(() => {
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}, 250));

// Preload images
const imageUrls = [
    'https://i.ibb.co/5XDLJ7F0/Adobe-Express-file.png'
];

imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Service Worker registration (for PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}
