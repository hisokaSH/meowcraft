// Pokédex Display Logic

document.addEventListener('DOMContentLoaded', () => {
    renderPokedex();
    setupSearch();
});

function renderPokedex() {
    const container = document.getElementById('pokedexContainer');
    if (!container) return;
    
    // Check if pokedexData exists
    if (!pokedexData || pokedexData.length === 0) {
        container.innerHTML = '<div class="no-results"><p>No Pokémon data found. Make sure pokedex-config.js is loaded.</p></div>';
        return;
    }
    
    // Create single section for all Pokemon
    const section = document.createElement('div');
    section.className = 'type-section';
    section.setAttribute('data-aos', 'fade-up');
    
    section.innerHTML = `
        <div class="type-header">
            <div class="type-title">
                <h2 class="type-name">Complete Pokédex</h2>
            </div>
            <span class="pokemon-count">${pokedexData.length} Pokémon</span>
        </div>
        <div class="pokemon-grid">
            ${pokedexData.map(pokemon => createPokemonCard(pokemon)).join('')}
        </div>
    `;
    
    container.appendChild(section);
}

function createTypeSection(typeData, index) {
    const section = document.createElement('div');
    section.className = 'type-section';
    section.setAttribute('data-aos', 'fade-up');
    section.setAttribute('data-aos-delay', (index * 50).toString());
    section.setAttribute('data-type', typeData.typeName.toLowerCase());
    
    section.innerHTML = `
        <div class="type-header">
            <div class="type-title">
                <span class="type-number">${typeData.typeNumber}</span>
                <h2 class="type-name">${typeData.typeName}</h2>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <span class="pokemon-count">${typeData.pokemon.length} Pokémon</span>
                <span class="type-badge-large" style="background: ${typeData.typeColor};">
                    ${typeData.typeName.split(' ')[0].toUpperCase()}
                </span>
            </div>
        </div>
        <div class="pokemon-grid">
            ${typeData.pokemon.map(pokemon => createPokemonCard(pokemon)).join('')}
        </div>
    `;
    
    return section;
}

function createPokemonCard(pokemon) {
    return `
        <div class="pokemon-sprite-card" data-name="${pokemon.name}">
            <img src="${pokemon.sprite}" 
                 alt="${pokemon.name}" 
                 class="pokemon-sprite"
                 onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
            <div class="pokemon-name-label">${pokemon.name}</div>
        </div>
    `;
}

function setupSearch() {
    const searchInput = document.getElementById('pokedexSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterPokemon(searchTerm);
    });
}

function filterPokemon(searchTerm) {
    const typeSections = document.querySelectorAll('.type-section');
    let visibleCount = 0;
    
    typeSections.forEach(section => {
        const pokemonCards = section.querySelectorAll('.pokemon-sprite-card');
        let sectionHasVisible = false;
        
        pokemonCards.forEach(card => {
            const pokemonName = card.getAttribute('data-name').toLowerCase();
            
            if (pokemonName.includes(searchTerm)) {
                card.style.display = 'block';
                sectionHasVisible = true;
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Hide entire section if no pokemon match
        if (sectionHasVisible || searchTerm === '') {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
    
    // Show "no results" message
    showNoResults(visibleCount === 0 && searchTerm !== '');
}

function showNoResults(show) {
    let noResultsDiv = document.getElementById('noResults');
    
    if (show && !noResultsDiv) {
        noResultsDiv = document.createElement('div');
        noResultsDiv.id = 'noResults';
        noResultsDiv.className = 'no-results';
        noResultsDiv.innerHTML = `
            <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
            <p>No Pokémon found matching your search.</p>
        `;
        document.getElementById('pokedexContainer').appendChild(noResultsDiv);
    } else if (!show && noResultsDiv) {
        noResultsDiv.remove();
    }
}

// Optional: Add click handlers to pokemon cards for future expansion
document.addEventListener('click', (e) => {
    const pokemonCard = e.target.closest('.pokemon-sprite-card');
    if (pokemonCard) {
        const pokemonName = pokemonCard.getAttribute('data-name');
        console.log(`Clicked on ${pokemonName}`);
        // You can add a modal or detail view here in the future
    }
});
