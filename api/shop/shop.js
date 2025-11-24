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
    
    // Crate Keys / Gacha
    'Gacha Token x5': '7135706',
    'Premium Gacha Token x5': '7135728',
    
    // Bundles
    'Starter Bundle': '7135818',
    'Ultimate Bundle': '7135829',
    'Legend Bundle': '7135831',
};

// Initialize shop functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productSections = document.querySelectorAll('.products-section');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            productSections.forEach(section => {
                if (section.dataset.tabContent === tab) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });

    // Handle Buy buttons - redirect to Tebex
    const buyBtns = document.querySelectorAll('.add-to-cart');
    
    buyBtns.forEach(btn => {
        btn.textContent = 'Buy Now';
        
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.dataset.product;
            const packageId = PACKAGE_IDS[productName];
            
            if (packageId) {
                window.location.href = `${TEBEX_STORE}/checkout/packages/add/${packageId}/single`;
            } else {
                window.location.href = TEBEX_STORE;
            }
        });
    });

    // Hide cart elements
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    if (cartBtn) cartBtn.style.display = 'none';
    if (cartModal) cartModal.style.display = 'none';
});
