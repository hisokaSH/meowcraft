// MeowCraft Shop - Tebex Integration
// Store URL: https://meowcraft-store.tebex.io

const TEBEX_STORE = 'https://meowcraft-store.tebex.io';

// Package IDs mapped to product names
const PACKAGE_IDS = {
    // Ranks
    'VIP Rank': '7135669',
    'MVP Rank': '7135674',
    'Elite Rank': '7135683',
    'Legend Rank': '7135688',
    
    // Cosmetics
    'Particle Effects Pack': '7135691',
    'Custom Hat Pack': '7135696',
    'Pet Collection': '7135697',
    'Chat Animations': '7135702',
    
    // Gacha Tokens
    'Gacha Token x5': '7135706',
    'Premium Gacha Token x5': '7135728',
    
    // Bundles
    'Starter Bundle': '7135818',
    'Ultimate Bundle': '7135829',
    'Legend Bundle': '7135831',
};

// Tab navigation
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.products-section');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            tabContents.forEach(content => content.classList.add('hidden'));
            
            const targetTab = btn.getAttribute('data-tab');
            const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`);
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
}

// Buy buttons - redirect to Tebex
function initBuyButtons() {
    const buyBtns = document.querySelectorAll('.add-to-cart');
    
    buyBtns.forEach(btn => {
        // Change button text
        btn.textContent = 'Buy Now';
        
        // Remove old listeners and add new one
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productName = this.getAttribute('data-product');
            const packageId = PACKAGE_IDS[productName];
            
            if (packageId) {
                // Redirect to Tebex checkout
                window.location.href = `${TEBEX_STORE}/checkout/packages/add/${packageId}/single`;
            } else {
                // Fallback - go to main store
                console.warn('Package ID not found for:', productName);
                window.location.href = TEBEX_STORE;
            }
        });
    });
}

// Hide old cart elements
function hideCartElements() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const cartIndicator = document.querySelector('.cart-indicator');
    
    if (cartBtn) cartBtn.style.display = 'none';
    if (cartModal) cartModal.style.display = 'none';
    if (cartIndicator) cartIndicator.style.display = 'none';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initBuyButtons();
    hideCartElements();
});
