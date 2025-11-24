// Authentication JavaScript - Login and Registration

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateUsername(username) {
    const re = /^[a-zA-Z0-9_]{3,16}$/;
    return re.test(username);
}

function validatePassword(password) {
    return password.length >= 8;
}

// Show error message
function showError(message) {
    let errorDiv = document.querySelector('.error-message');
    
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        const form = document.querySelector('.auth-form');
        form.insertBefore(errorDiv, form.firstChild);
    }
    
    errorDiv.textContent = message;
    errorDiv.classList.add('active');
    
    setTimeout(() => {
        errorDiv.classList.remove('active');
    }, 5000);
}

// Show success message
function showSuccess(message) {
    let successDiv = document.querySelector('.success-message');
    
    if (!successDiv) {
        successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        const form = document.querySelector('.auth-form');
        form.insertBefore(successDiv, form.firstChild);
    }
    
    successDiv.textContent = message;
    successDiv.classList.add('active');
}

// Login form handler
function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const remember = document.querySelector('input[name="remember"]').checked;
            
            // Basic validation
            if (!username || !password) {
                showError('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send this to your backend API
            // For now, we'll simulate the login
            try {
                // Simulate API call
                await simulateAPICall();
                
                // Store session (in a real app, use JWT or session tokens)
                const userData = {
                    username: username,
                    loggedIn: true,
                    timestamp: Date.now()
                };
                
                if (remember) {
                    localStorage.setItem('meowcraft-user', JSON.stringify(userData));
                } else {
                    sessionStorage.setItem('meowcraft-user', JSON.stringify(userData));
                }
                
                showSuccess('Login successful! Redirecting...');
                
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
                
            } catch (error) {
                showError('Login failed. Please check your credentials.');
            }
        });
    }
}

// Register form handler
function initRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('reg-username').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const terms = document.querySelector('input[name="terms"]').checked;
            
            // Validation
            if (!username || !email || !password || !confirmPassword) {
                showError('Please fill in all required fields');
                return;
            }
            
            if (!validateUsername(username)) {
                showError('Username must be 3-16 characters and contain only letters, numbers, and underscores');
                return;
            }
            
            if (!validateEmail(email)) {
                showError('Please enter a valid email address');
                return;
            }
            
            if (!validatePassword(password)) {
                showError('Password must be at least 8 characters long');
                return;
            }
            
            if (password !== confirmPassword) {
                showError('Passwords do not match');
                return;
            }
            
            if (!terms) {
                showError('You must agree to the Terms of Service');
                return;
            }
            
            // In a real application, you would send this to your backend API
            try {
                // Simulate API call
                await simulateAPICall();
                
                showSuccess('Account created successfully! Redirecting to login...');
                
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1500);
                
            } catch (error) {
                showError('Registration failed. Username or email may already be in use.');
            }
        });
    }
}

// Password visibility toggle
function initPasswordToggle() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'password-toggle';
        toggleBtn.textContent = '👁️';
        toggleBtn.style.cssText = `
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            opacity: 0.6;
            transition: opacity 0.3s ease;
        `;
        
        // Make parent relative
        const formGroup = input.closest('.form-group');
        if (formGroup) {
            formGroup.style.position = 'relative';
        }
        
        toggleBtn.addEventListener('click', () => {
            if (input.type === 'password') {
                input.type = 'text';
                toggleBtn.textContent = '🙈';
            } else {
                input.type = 'password';
                toggleBtn.textContent = '👁️';
            }
        });
        
        toggleBtn.addEventListener('mouseenter', () => {
            toggleBtn.style.opacity = '1';
        });
        
        toggleBtn.addEventListener('mouseleave', () => {
            toggleBtn.style.opacity = '0.6';
        });
        
        input.style.paddingRight = '3rem';
        input.parentElement.appendChild(toggleBtn);
    });
}

// Social login handlers
function initSocialLogin() {
    const discordBtns = document.querySelectorAll('.discord-btn');
    const microsoftBtns = document.querySelectorAll('.microsoft-btn');
    
    discordBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // In a real application, this would redirect to Discord OAuth
            alert('Discord OAuth integration would go here.\n\nIn production, you would redirect to:\nhttps://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify%20email');
        });
    });
    
    microsoftBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // In a real application, this would redirect to Microsoft OAuth
            alert('Microsoft OAuth integration would go here.\n\nThis would connect with your Minecraft/Xbox account for seamless authentication.');
        });
    });
}

// Simulate API call
function simulateAPICall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 90% success rate for demo
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject(new Error('API Error'));
            }
        }, 1000);
    });
}

// Check if user is logged in
function checkLoginStatus() {
    const userData = localStorage.getItem('meowcraft-user') || sessionStorage.getItem('meowcraft-user');
    
    if (userData) {
        try {
            const user = JSON.parse(userData);
            return user;
        } catch (e) {
            return null;
        }
    }
    
    return null;
}

// Update UI for logged in users
function updateUIForLoggedInUser() {
    const user = checkLoginStatus();
    
    if (user) {
        const loginBtn = document.querySelector('.nav-link.login-btn');
        if (loginBtn) {
            loginBtn.textContent = `👤 ${user.username}`;
            loginBtn.href = '#';
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showUserMenu();
            });
        }
    }
}

// User menu
function showUserMenu() {
    const menu = document.createElement('div');
    menu.className = 'user-menu';
    menu.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: var(--card-bg);
        border: 1px solid rgba(255, 107, 53, 0.2);
        border-radius: 15px;
        padding: 1rem;
        z-index: 2000;
        min-width: 200px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    menu.innerHTML = `
        <div style="padding: 1rem; border-bottom: 1px solid rgba(255, 107, 53, 0.2);">
            <div style="color: var(--primary-color); font-weight: 600; margin-bottom: 0.5rem;">Account</div>
            <div style="color: var(--text-secondary); font-size: 0.9rem;">Manage your profile</div>
        </div>
        <div style="padding: 0.5rem 0;">
            <a href="#" style="display: block; padding: 0.8rem 1rem; color: var(--text-primary); text-decoration: none; border-radius: 5px; transition: background 0.3s ease;" onmouseover="this.style.background='rgba(255,107,53,0.1)'" onmouseout="this.style.background='transparent'">👤 Profile</a>
            <a href="shop.html" style="display: block; padding: 0.8rem 1rem; color: var(--text-primary); text-decoration: none; border-radius: 5px; transition: background 0.3s ease;" onmouseover="this.style.background='rgba(255,107,53,0.1)'" onmouseout="this.style.background='transparent'">🛒 My Purchases</a>
            <a href="#" style="display: block; padding: 0.8rem 1rem; color: var(--text-primary); text-decoration: none; border-radius: 5px; transition: background 0.3s ease;" onmouseover="this.style.background='rgba(255,107,53,0.1)'" onmouseout="this.style.background='transparent'">⚙️ Settings</a>
            <a href="#" id="logoutBtn" style="display: block; padding: 0.8rem 1rem; color: #f44336; text-decoration: none; border-radius: 5px; transition: background 0.3s ease;" onmouseover="this.style.background='rgba(244,67,54,0.1)'" onmouseout="this.style.background='transparent'">🚪 Logout</a>
        </div>
    `;
    
    document.body.appendChild(menu);
    
    // Close menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
    
    // Logout handler
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('meowcraft-user');
        sessionStorage.removeItem('meowcraft-user');
        window.location.reload();
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initLoginForm();
    initRegisterForm();
    initPasswordToggle();
    initSocialLogin();
    updateUIForLoggedInUser();
});
