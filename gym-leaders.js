// Gym Leaders Display JavaScript - Accordion Style

document.addEventListener('DOMContentLoaded', function() {
    renderGymLeaders();
});

function renderGymLeaders() {
    const container = document.getElementById('gymLeadersContainer');
    if (!container) return;

    let html = '';
    
    // Gym Leaders Section
    if (gymLeaders && gymLeaders.length > 0) {
        html += '<h2 class="section-title"><i class="fas fa-building"></i> Gym Leaders</h2>';
        html += gymLeaders.map((leader, index) => renderLeaderCard(leader, index)).join('');
    }
    
    // Elite Four Section
    if (eliteFour && eliteFour.length > 0) {
        html += '<h2 class="section-title elite-four-title"><i class="fas fa-crown"></i> Elite Four</h2>';
        html += eliteFour.map((leader, index) => renderLeaderCard(leader, index + 100)).join('');
    }
    
    // Champion Section
    if (champion) {
        html += '<h2 class="section-title champion-title"><i class="fas fa-trophy"></i> Champion</h2>';
        html += renderLeaderCard(champion, 200);
    }
    
    container.innerHTML = html;
}

function renderLeaderCard(leader, index) {
    return `
        <div class="leader-card" id="leader-${index}" data-aos="fade-up">
            <div class="leader-header" onclick="toggleLeader(${index})">
                <div class="leader-arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="leader-sprite">
                    <img src="${leader.sprite}" alt="${leader.name}">
                </div>
                <div class="leader-info">
                    <div class="leader-header-inner">
                        <h2 class="leader-name">${leader.name}</h2>
                        <span class="type-badge type-${leader.type.toLowerCase()}">${leader.type}</span>
                    </div>
                    <p class="leader-gym">${leader.title}</p>
                </div>
                <div class="leader-team-preview">
                    ${leader.team.map(pokemon => `
                        <div class="team-sprite">
                            <img src="${pokemon.sprite}" alt="${pokemon.name}">
                        </div>
                    `).join('')}
                </div>
                <div class="leader-level-cap">
                    <div class="level-cap-label">Lvl cap</div>
                    <div class="level-cap-number">${leader.levelCap}</div>
                </div>
            </div>
            
            <div class="leader-team-expansion">
                <div class="team-content">
                    <div class="pokemon-grid">
                        ${leader.team.map(pokemon => renderPokemonCard(pokemon)).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function toggleLeader(index) {
    const card = document.getElementById(`leader-${index}`);
    const wasExpanded = card.classList.contains('expanded');
    
    // Close all other cards
    document.querySelectorAll('.leader-card').forEach(c => {
        c.classList.remove('expanded');
    });
    
    // Toggle this card (or open if it wasn't the one that was open)
    if (!wasExpanded) {
        card.classList.add('expanded');
    }
}

function renderPokemonCard(pokemon) {
    return `
        <div class="pokemon-card">
            <div class="pokemon-card-header">
                <div class="pokemon-type-badges">
                    ${pokemon.types.map(type => `
                        <span class="type-badge-small type-${type.toLowerCase()}">${type}</span>
                    `).join('')}
                </div>
                <div class="pokemon-sprite-container">
                    <img src="${pokemon.sprite}" alt="${pokemon.name}" class="${pokemon.shiny ? 'shiny-pokemon' : ''}">
                    ${pokemon.shiny ? '<div class="shiny-indicator">✨</div>' : ''}
                </div>
                <div class="pokemon-hp-display">${pokemon.hp}</div>
            </div>
            
            <div class="pokemon-title-section">
                <div class="pokemon-level-badge">Level ${pokemon.level}</div>
                <div class="pokemon-name-display">${pokemon.name}</div>
                <div class="pokemon-ability-badge">
                    <i class="fas fa-star"></i> ${pokemon.ability}
                </div>
            </div>

            <div class="pokemon-moves-section">
                ${pokemon.moves.map(move => renderMoveCard(move)).join('')}
            </div>

            <div class="pokemon-stats-section">
                ${renderStatBar('hp', pokemon.stats.hp)}
                ${renderStatBar('atk', pokemon.stats.atk)}
                ${renderStatBar('def', pokemon.stats.def)}
                ${renderStatBar('spa', pokemon.stats.spa)}
                ${renderStatBar('spd', pokemon.stats.spd)}
                ${renderStatBar('spe', pokemon.stats.spe)}
            </div>
        </div>
    `;
}

function renderMoveCard(move) {
    const powerDisplay = move.power > 0 ? `×${move.power}` : '—';
    return `
        <div class="move-item">
            <div class="move-name-power">
                <span class="move-name">${move.name}</span>
                <span class="move-power">${powerDisplay}</span>
            </div>
            <span class="type-badge-small type-${move.type.toLowerCase()}">${move.type}</span>
        </div>
    `;
}

function renderStatBar(statName, value) {
    const maxStat = 255;
    const percentage = Math.min((value / maxStat) * 100, 100);
    const statColor = getStatColor(statName);
    
    return `
        <div class="stat-row">
            <span class="stat-label">${statName}</span>
            <span class="stat-value">${value}</span>
            <div class="stat-bar-bg">
                <div class="stat-bar" style="width: ${percentage}%; background-color: ${statColor};"></div>
            </div>
        </div>
    `;
}

function getStatColor(stat) {
    const colors = {
        'hp': '#FF5959',
        'atk': '#F5AC78',
        'def': '#FAE078',
        'spa': '#9DB7F5',
        'spd': '#A7DB8D',
        'spe': '#FA92B2'
    };
    return colors[stat] || '#999';
}

