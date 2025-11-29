// Download Page JavaScript

// Tab switching for installation guides
function initGuideTabs() {
    const guideTabs = document.querySelectorAll('.guide-tab');
    const guideContents = document.querySelectorAll('.guide-content');
    
    guideTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            guideTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all guide contents
            guideContents.forEach(content => content.classList.remove('active'));
            
            // Show selected guide content
            const targetGuide = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetGuide);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Download launcher function (improved version)
window.downloadLauncher = function(platform) {
    // Download URL from GitHub Releases
    const downloadUrls = {
        windows: 'https://github.com/hisokaSH/meowcraft_launcher/releases/download/v1.0.1/MeowCraft-Launcher-Setup-1.0.1.exe',
        mac: 'https://github.com/hisokaSH/meowcraft/releases/download/v1/meowcraft.zip',
        linux: 'https://github.com/hisokaSH/meowcraft/releases/download/v1/meowcraft.zip'
    };
    
    const url = downloadUrls[platform];
    
    // Show download notification
    showDownloadNotification(platform);
    
    // Start download with the real URL
    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track download (if you have analytics)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'download', {
            'event_category': 'launcher',
            'event_label': platform
        });
    }
};

// Show download notification
function showDownloadNotification(platform) {
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">⬇️</div>
            <div class="notification-text">
                <strong>Downloading MeowCraft Launcher</strong>
                <p>Starting download for ${platform}...</p>
            </div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">✕</button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--card-bg);
        border: 2px solid var(--primary-color);
        border-radius: 15px;
        padding: 1.5rem;
        z-index: 3000;
        max-width: 400px;
        box-shadow: 0 10px 40px rgba(255, 107, 53, 0.4);
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Show instructions for setting up downloads
function showDownloadInstructions(platform) {
    const modal = document.createElement('div');
    modal.className = 'download-modal';
    modal.innerHTML = `
        <div class="download-modal-content">
            <div class="modal-header">
                <h2>📥 Setup Download Links</h2>
                <button class="modal-close" onclick="this.closest('.download-modal').remove()">✕</button>
            </div>
            <div class="modal-body">
                <p>You're in demo mode! To enable real downloads, you need to:</p>
                <ol>
                    <li><strong>Build your launcher</strong> using Electron or similar</li>
                    <li><strong>Host your files</strong> on:
                        <ul>
                            <li>GitHub Releases (recommended, free)</li>
                            <li>Your own server</li>
                            <li>CDN like Cloudflare</li>
                        </ul>
                    </li>
                    <li><strong>Update download.js</strong> with your real URLs:
                        <pre><code>const downloadUrls = {
    windows: 'YOUR-DOWNLOAD-URL.exe',
    mac: 'YOUR-DOWNLOAD-URL.dmg',
    linux: 'YOUR-DOWNLOAD-URL.AppImage'
};</code></pre>
                    </li>
                </ol>
                <div class="info-box">
                    <strong>💡 Tip:</strong> For GitHub Releases, your URL format will be:<br>
                    <code>https://github.com/USERNAME/REPO/releases/latest/download/FILENAME</code>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="window.open('https://github.com', '_blank')">
                    View GitHub Releases Guide
                </button>
                <button class="btn btn-secondary" onclick="this.closest('.download-modal').remove()">
                    Close
                </button>
            </div>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 4000;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(modal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Detect user's operating system
function detectOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform.toLowerCase();
    
    if (platform.indexOf('win') > -1) {
        return 'windows';
    } else if (platform.indexOf('mac') > -1) {
        return 'mac';
    } else if (platform.indexOf('linux') > -1) {
        return 'linux';
    }
    
    return null;
}

// Highlight the user's OS
function highlightUserOS() {
    const os = detectOS();
    if (os) {
        const cards = document.querySelectorAll('.platform-card');
        cards.forEach(card => {
            const h2 = card.querySelector('h2');
            if (h2 && h2.textContent.toLowerCase().includes(os)) {
                card.classList.add('popular');
                
                // Scroll to this card on mobile
                if (window.innerWidth < 768) {
                    setTimeout(() => {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 1000);
                }
            }
        });
    }
}

// Add animations
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
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .download-modal-content {
        background: var(--dark-bg);
        border: 2px solid var(--primary-color);
        border-radius: 20px;
        max-width: 700px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        animation: slideInRight 0.3s ease;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        border-bottom: 1px solid rgba(255, 107, 53, 0.2);
    }
    
    .modal-header h2 {
        color: var(--primary-color);
        margin: 0;
    }
    
    .modal-close {
        background: none;
        border: none;
        color: var(--text-primary);
        font-size: 2rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .modal-close:hover {
        color: var(--primary-color);
        transform: rotate(90deg);
    }
    
    .modal-body {
        padding: 2rem;
        color: var(--text-secondary);
        line-height: 1.6;
    }
    
    .modal-body ol {
        margin-left: 1.5rem;
    }
    
    .modal-body li {
        margin-bottom: 1rem;
    }
    
    .modal-body ul {
        margin-left: 2rem;
        margin-top: 0.5rem;
    }
    
    .modal-body code {
        background: rgba(255, 107, 53, 0.1);
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        color: var(--accent-color);
        font-family: 'Courier New', monospace;
        border: 1px solid rgba(255, 107, 53, 0.2);
    }
    
    .modal-body pre {
        background: rgba(255, 107, 53, 0.05);
        padding: 1rem;
        border-radius: 10px;
        overflow-x: auto;
        margin: 1rem 0;
    }
    
    .modal-body pre code {
        background: none;
        border: none;
        padding: 0;
    }
    
    .modal-body .info-box {
        background: rgba(255, 193, 7, 0.1);
        border-left: 4px solid #ffc107;
        padding: 1rem;
        margin: 1.5rem 0;
        border-radius: 5px;
    }
    
    .modal-footer {
        padding: 2rem;
        border-top: 1px solid rgba(255, 107, 53, 0.2);
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    .notification-content {
        display: flex;
        gap: 1rem;
        align-items: start;
    }
    
    .notification-icon {
        font-size: 2rem;
    }
    
    .notification-text strong {
        color: var(--primary-color);
        display: block;
        margin-bottom: 0.5rem;
    }
    
    .notification-text p {
        color: var(--text-secondary);
        margin: 0;
    }
    
    .notification-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 1.5rem;
        cursor: pointer;
        transition: color 0.3s ease;
    }
    
    .notification-close:hover {
        color: var(--primary-color);
    }
`;
document.head.appendChild(style);

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initGuideTabs();
    highlightUserOS();
});
