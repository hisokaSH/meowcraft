// Wiki JavaScript - Search and Category Filtering

// Category filtering
function initCategoryFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('.wiki-article');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            // Filter articles
            articles.forEach(article => {
                const articleCategory = article.getAttribute('data-category');
                
                if (category === 'all' || articleCategory === category) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
}

// Search functionality
function initWikiSearch() {
    const searchInput = document.getElementById('wikiSearch');
    const searchBtn = document.querySelector('.search-btn');
    const articles = document.querySelectorAll('.wiki-article');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Show all articles if search is empty
            articles.forEach(article => {
                article.style.display = 'block';
            });
            return;
        }
        
        let foundAny = false;
        
        articles.forEach(article => {
            const title = article.querySelector('h2').textContent.toLowerCase();
            const content = article.querySelector('.article-content').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                article.style.display = 'block';
                foundAny = true;
                
                // Highlight search term (optional)
                highlightSearchTerm(article, searchTerm);
            } else {
                article.style.display = 'none';
            }
        });
        
        // Show message if nothing found
        if (!foundAny) {
            showNoResultsMessage();
        }
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
}

// Highlight search term in articles
function highlightSearchTerm(article, term) {
    // Remove previous highlights
    const highlighted = article.querySelectorAll('.search-highlight');
    highlighted.forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
    
    // Don't highlight if term is too short
    if (term.length < 3) return;
    
    // Highlight new term
    const content = article.querySelector('.article-content');
    if (content) {
        highlightText(content, term);
    }
}

function highlightText(element, term) {
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const nodesToReplace = [];
    let node;
    
    while (node = walker.nextNode()) {
        if (node.textContent.toLowerCase().includes(term)) {
            nodesToReplace.push(node);
        }
    }
    
    nodesToReplace.forEach(node => {
        const parent = node.parentNode;
        const regex = new RegExp(`(${term})`, 'gi');
        const parts = node.textContent.split(regex);
        
        const fragment = document.createDocumentFragment();
        parts.forEach(part => {
            if (part.toLowerCase() === term) {
                const span = document.createElement('span');
                span.className = 'search-highlight';
                span.textContent = part;
                span.style.cssText = 'background: #ffd700; color: #0a0a0a; padding: 2px 4px; border-radius: 3px;';
                fragment.appendChild(span);
            } else {
                fragment.appendChild(document.createTextNode(part));
            }
        });
        
        parent.replaceChild(fragment, node);
    });
}

function showNoResultsMessage() {
    const wikiMain = document.querySelector('.wiki-main');
    
    // Remove existing message if any
    const existingMsg = document.querySelector('.no-results-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    const message = document.createElement('div');
    message.className = 'no-results-message';
    message.style.cssText = `
        background: var(--card-bg);
        border: 1px solid rgba(255, 107, 53, 0.2);
        border-radius: 15px;
        padding: 3rem;
        text-align: center;
        color: var(--text-secondary);
    `;
    message.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
        <h2 style="color: var(--primary-color); margin-bottom: 1rem;">No Results Found</h2>
        <p>We couldn't find any articles matching your search. Try different keywords or browse by category.</p>
    `;
    
    if (wikiMain) {
        wikiMain.prepend(message);
    }
}

// Sidebar navigation highlighting
function initSidebarHighlight() {
    const sidebarLinks = document.querySelectorAll('.wiki-links a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
        });
    });
    
    // Highlight current section on scroll
    window.addEventListener('scroll', () => {
        const articles = document.querySelectorAll('.wiki-article');
        let current = '';
        
        articles.forEach(article => {
            const articleTop = article.offsetTop - 120;
            if (window.pageYOffset >= articleTop) {
                current = article.getAttribute('id');
            }
        });
        
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Reading progress bar
function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 80px;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
        z-index: 999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.pageYOffset;
        const progress = (scrolled / documentHeight) * 100;
        
        progressBar.style.width = `${progress}%`;
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initCategoryFilter();
    initWikiSearch();
    initSidebarHighlight();
    initReadingProgress();
});
