// Main JavaScript for MeowCraft Website

// Initialize particles.js
if (document.getElementById('particles-js')) {
    try {
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
                value: '#ff6b35'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff6b35',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });
    } catch (error) {
        console.log('Particles.js failed to load:', error);
    }
}

// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    }
});

// Failsafe - hide loading screen after 2 seconds no matter what
setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        loadingScreen.style.display = 'none';
    }
}, 2000);

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navToggle) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Initialize AOS (Animate On Scroll) if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Copy IP Address
window.copyIP = function() {
    const serverIP = document.getElementById('server-ip');
    if (serverIP) {
        const text = serverIP.textContent;
        
        // Create temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        
        // Select and copy
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        // Visual feedback
        const copyBtn = event.target;
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        copyBtn.style.background = '#4caf50';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }
};

// Animated Counter
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.ceil(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current);
        }
    }, 16);
}

// Initialize counters on page load
window.addEventListener('load', () => {
    const totalPlayers = document.getElementById('total-players');
    if (totalPlayers) {
        const target = parseInt(totalPlayers.textContent.replace(/,/g, ''));
        animateCounter(totalPlayers, target);
    }
});

// Simulate player count (replace with actual API call)
function updatePlayerCount() {
    const playerCount = document.getElementById('players-count');
    const footerPlayers = document.getElementById('footer-players');
    
    // Simulate random player count between 50-150
    const count = Math.floor(Math.random() * 100) + 50;
    
    if (playerCount) {
        animateCounter(playerCount, count, 1000);
    }
    
    if (footerPlayers) {
        footerPlayers.textContent = count;
    }
}

// Update player count on load and every 30 seconds
updatePlayerCount();
setInterval(updatePlayerCount, 30000);

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(255, 107, 53, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(255, 107, 53, 0.1)';
        }
    }
    
    lastScroll = currentScroll;
});

// Active nav link highlighting
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

// Download Launcher Function
window.downloadLauncher = function(platform) {
    // Replace these URLs with your actual download links
    const downloadUrls = {
        windows: '/downloads/meowcraft-launcher-windows.exe',
        mac: '/downloads/meowcraft-launcher-mac.dmg',
        linux: '/downloads/meowcraft-launcher-linux.AppImage'
    };
    
    const url = downloadUrls[platform];
    if (url) {
        // Create temporary link and trigger download
        const link = document.createElement('a');
        link.href = url;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        alert(`Downloading MeowCraft Launcher for ${platform}...`);
    }
};

// Console Easter Egg
console.log('%cMeowCraft', 'color: #ff6b35; font-size: 50px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
console.log('%cWelcome to the best Cobblemon server! 🐱', 'color: #f7931e; font-size: 16px;');
console.log('%cJoin us at: play.meowcraft.net', 'color: #ffd700; font-size: 14px;');
