// Shop JavaScript - Cart and Tab Functionality

// Cart state
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('meowcraft-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('meowcraft-cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(product, price) {
    // Check if item already exists
    const existingItem = cart.find(item => item.product === product);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            product: product,
            price: parseFloat(price),
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showAddedToCartNotification(product);
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
    
    // Update cart items display
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div class="item-info">
                        <h3>${item.product}</h3>
                        <div class="item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `).join('');
        }
    }
    
    // Update total price
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (totalPrice) {
        totalPrice.textContent = `$${total.toFixed(2)}`;
    }
}

// Show notification when item is added
function showAddedToCartNotification(product) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = `✓ ${product} added to cart!`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-weight: 600;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Tab navigation
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.products-section');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.add('hidden'));
            
            // Show selected tab content
            const targetTab = btn.getAttribute('data-tab');
            const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`);
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
}

// Cart modal
function initCartModal() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartModal.classList.add('active');
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }
    
    // Close cart when clicking outside
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });
    }
}

// Checkout
function initCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            // In a real application, this would redirect to a payment processor
            alert('Redirecting to checkout...\n\nThis is a demo. In production, you would integrate with a payment processor like Stripe, PayPal, or Tebex.');
            
            // For demo purposes, clear the cart
            // cart = [];
            // saveCart();
            // updateCartUI();
            // document.getElementById('cartModal').classList.remove('active');
        });
    }
}

// Add to cart buttons
function initAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.getAttribute('data-product');
            const price = btn.getAttribute('data-price');
            addToCart(product, price);
        });
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    initTabs();
    initCartModal();
    initCheckout();
    initAddToCartButtons();
});
