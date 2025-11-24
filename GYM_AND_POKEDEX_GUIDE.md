# 🎮 Gym Leaders & Pokédex Configuration Guide

## Overview

Your website now includes two game-style pages that look just like the images you shared:
1. **Gym Leaders** - Battle interface showing each leader's full team
2. **Pokédex** - Grid view of all available Pokémon organized by type

Both pages are **fully configurable** through JavaScript config files!

## 📁 Files Created

### Gym Leaders System
- `gym-leaders.html` - Main gym leaders page
- `gym-leaders.css` - Styling (game interface design)
- `gym-leaders.js` - Display logic
- `gym-config.js` - **YOUR CONFIGURATION FILE** ⭐

### Pokédex System
- `pokedex.html` - Main Pokédex page
- `pokedex.css` - Styling (grid layout)
- `pokedex.js` - Display logic
- `pokedex-config.js` - **YOUR CONFIGURATION FILE** ⭐

## 🎯 How to Add Your Gym Leaders

### Step 1: Open `gym-config.js`

This file contains all your gym leader data. Here's the structure:

```javascript
const gymLeaders = [
    {
        name: "Brock",                    // Gym leader name
        title: "Pewter City Gym",         // Gym location
        type: "Rock",                     // Main type
        badge: "Boulder Badge",           // Badge name
        sprite: "URL",                    // Leader sprite image
        levelCap: 14,                     // Level cap for this gym
        badges: ["rock", "electric"],     // Badge icons to show
        team: [
            // Pokemon array (see below)
        ]
    }
];
```

### Step 2: Add Pokémon to a Team

Each gym leader has a `team` array. Here's the Pokémon structure:

```javascript
{
    name: "Geodude",
    level: 13,
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    ability: "Sturdy",
    types: ["ROCK", "ELECTRIC"],  // Can have 1 or 2 types
    hp: 300,
    stats: {
        hp: 40,
        atk: 80,
        def: 100,
        spa: 30,
        spd: 30,
        spe: 20
    },
    moves: [
        {
            name: "Spark",
            power: 98,     // Use 0 for status moves
            type: "ELECTRIC"
        },
        {
            name: "Rock Tomb",
            power: 90,
            type: "ROCK"
        },
        // Add up to 4 moves
    ]
}
```

### Step 3: Example - Adding Your Own Gym Leader

```javascript
{
    name: "Near",
    title: "MeowCraft Gym",
    type: "Dragon",
    badge: "Master Badge",
    sprite: "https://i.ibb.co/YOUR-SPRITE.png",
    levelCap: 50,
    badges: ["dragon", "fire", "water", "electric"],
    team: [
        {
            name: "Dragonite",
            level: 50,
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
            ability: "Multiscale",
            types: ["DRAGON", "FLYING"],
            hp: 450,
            stats: {
                hp: 91,
                atk: 134,
                def: 95,
                spa: 100,
                spd: 100,
                spe: 80
            },
            moves: [
                { name: "Dragon Dance", power: 0, type: "DRAGON" },
                { name: "Outrage", power: 120, type: "DRAGON" },
                { name: "Earthquake", power: 100, type: "GROUND" },
                { name: "Fire Punch", power: 75, type: "FIRE" }
            ]
        },
        // Add more Pokémon...
    ]
}
```

## 🗂️ How to Configure Your Pokédex

### Step 1: Open `pokedex-config.js`

This file organizes Pokémon by type:

```javascript
const pokedexData = [
    {
        typeNumber: 29,                    // Type category number
        typeName: "Dragon Pokémon",        // Type name
        typeColor: "#7038F8",              // Hex color for type badge
        pokemon: [
            {
                name: "Dratini",
                sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
            },
            // Add more Pokémon...
        ]
    }
];
```

### Step 2: Add Your Type Categories

```javascript
{
    typeNumber: 50,
    typeName: "Legendary Pokémon",
    typeColor: "#FFD700",  // Gold color
    pokemon: [
        {
            name: "Mewtwo",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
        },
        {
            name: "Lugia",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
        },
        {
            name: "Ho-Oh",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png"
        }
    ]
}
```

## 🎨 Type Colors Reference

Use these hex colors for type badges:

```javascript
NORMAL: '#A8A878'
FIRE: '#F08030'
WATER: '#6890F0'
ELECTRIC: '#F8D030'
GRASS: '#78C850'
ICE: '#98D8D8'
FIGHTING: '#C03028'
POISON: '#A040A0'
GROUND: '#E0C068'
FLYING: '#A890F0'
PSYCHIC: '#F85888'
BUG: '#A8B820'
ROCK: '#B8A038'
GHOST: '#705898'
DRAGON: '#7038F8'
DARK: '#705848'
STEEL: '#B8B8D0'
FAIRY: '#EE99AC'
```

## 🖼️ Getting Pokémon Sprites

### Option 1: PokeAPI (Recommended)
```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/[NUMBER].png
```
Replace `[NUMBER]` with Pokédex number (1-898+)

Examples:
- Pikachu (25): `.../pokemon/25.png`
- Charizard (6): `.../pokemon/6.png`
- Mewtwo (150): `.../pokemon/150.png`

### Option 2: Shiny Sprites
```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/[NUMBER].png
```

### Option 3: Upload Your Own
1. Upload to ImgBB.com
2. Copy direct link
3. Use in config

## 🎮 Getting Badge Icons

Badge sprites from PokéSprite:
```
https://raw.githubusercontent.com/msikma/pokesprite/master/misc/badge-[TYPE].png
```

Available badges:
- rock, water, fire, electric, grass, ice
- fighting, poison, ground, flying, psychic, bug
- ghost, dragon, dark, steel, fairy

## 📊 From Radical Red Guide to Config

Looking at https://nuzlocke.app/guides/radical-red format:

### Their Format:
```
Gym Leader: Brock
Location: Pewter City
Badge: Boulder Badge
Level Cap: 14

Team:
- Geodude Lv.13 (Sturdy) @ Sitrus Berry
  Moves: Spark, Rock Tomb, Self-Destruct, Bulldoze
```

### Your Config Format:
```javascript
{
    name: "Brock",
    title: "Pewter City Gym",
    type: "Rock",
    badge: "Boulder Badge",
    levelCap: 14,
    team: [
        {
            name: "Geodude",
            level: 13,
            ability: "Sturdy",
            types: ["ROCK", "ELECTRIC"],
            moves: [
                { name: "Spark", power: 98, type: "ELECTRIC" },
                { name: "Rock Tomb", power: 90, type: "ROCK" },
                { name: "Self Destruct", power: 100, type: "NORMAL" },
                { name: "Bulldoze", power: 60, type: "GROUND" }
            ]
        }
    ]
}
```

## 🔧 Quick Configuration Checklist

### For Each Gym Leader:
- [ ] Add leader name and title
- [ ] Set type and level cap
- [ ] Upload/find leader sprite
- [ ] Choose badge icons
- [ ] Add each Pokémon:
  - [ ] Name and level
  - [ ] Find sprite URL
  - [ ] Set ability
  - [ ] Choose types (1-2)
  - [ ] Set HP value
  - [ ] Fill in stats (hp, atk, def, spa, spd, spe)
  - [ ] Add 4 moves with types and power

### For Pokédex:
- [ ] Decide type categories
- [ ] Choose type colors
- [ ] Add Pokémon sprites for each type
- [ ] Test search functionality

## 💡 Pro Tips

### 1. Bulk Adding Pokémon
Use this template and duplicate:
```javascript
{ name: "NAME", sprite: "URL" },
{ name: "NAME", sprite: "URL" },
{ name: "NAME", sprite: "URL" },
```

### 2. Finding Stats
- Use Pokémon Database: https://pokemondb.net
- Use Bulbapedia: https://bulbapedia.bulbagarden.net

### 3. Move Powers
Common move powers:
- Weak: 40-60
- Medium: 70-90
- Strong: 100-120
- Very Strong: 130-150
- Status moves: 0

### 4. Testing
1. Save your config file
2. Refresh the page
3. Check browser console for errors
4. Click gym leaders to see full teams

## 🎯 Real Example - Full Gym Leader

Here's a complete, working example:

```javascript
{
    name: "Cynthia",
    title: "Champion",
    type: "Mixed",
    badge: "Champion Badge",
    sprite: "https://img.pokemondb.net/sprites/black-white/normal/cynthia.png",
    levelCap: 75,
    badges: ["dragon", "ghost", "water", "electric"],
    team: [
        {
            name: "Garchomp",
            level: 75,
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
            ability: "Sand Veil",
            types: ["DRAGON", "GROUND"],
            hp: 600,
            stats: { hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102 },
            moves: [
                { name: "Dragon Claw", power: 80, type: "DRAGON" },
                { name: "Earthquake", power: 100, type: "GROUND" },
                { name: "Stone Edge", power: 100, type: "ROCK" },
                { name: "Swords Dance", power: 0, type: "NORMAL" }
            ]
        },
        {
            name: "Milotic",
            level: 73,
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
            ability: "Marvel Scale",
            types: ["WATER"],
            hp: 580,
            stats: { hp: 95, atk: 60, def: 79, spa: 100, spd: 125, spe: 81 },
            moves: [
                { name: "Surf", power: 90, type: "WATER" },
                { name: "Ice Beam", power: 90, type: "ICE" },
                { name: "Mirror Coat", power: 0, type: "PSYCHIC" },
                { name: "Recover", power: 0, type: "NORMAL" }
            ]
        },
        {
            name: "Spiritomb",
            level: 73,
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
            ability: "Pressure",
            types: ["GHOST", "DARK"],
            hp: 570,
            stats: { hp: 50, atk: 92, def: 108, spa: 92, spd: 108, spe: 35 },
            moves: [
                { name: "Shadow Ball", power: 80, type: "GHOST" },
                { name: "Dark Pulse", power: 80, type: "DARK" },
                { name: "Psychic", power: 90, type: "PSYCHIC" },
                { name: "Silver Wind", power: 60, type: "BUG" }
            ]
        },
        {
            name: "Roserade",
            level: 73,
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
            ability: "Natural Cure",
            types: ["GRASS", "POISON"],
            hp: 560,
            stats: { hp: 60, atk: 70, def: 65, spa: 125, spd: 105, spe: 90 },
            moves: [
                { name: "Energy Ball", power: 90, type: "GRASS" },
                { name: "Sludge Bomb", power: 90, type: "POISON" },
                { name: "Extrasensory", power: 80, type: "PSYCHIC" },
                { name: "Shadow Ball", power: 80, type: "GHOST" }
            ]
        },
        {
            name: "Lucario",
            level: 73,
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
            ability: "Inner Focus",
            types: ["FIGHTING", "STEEL"],
            hp: 550,
            stats: { hp: 70, atk: 110, def: 70, spa: 115, spd: 70, spe: 90 },
            moves: [
                { name: "Aura Sphere", power: 80, type: "FIGHTING" },
                { name: "Flash Cannon", power: 80, type: "STEEL" },
                { name: "Dragon Pulse", power: 85, type: "DRAGON" },
                { name: "Extreme Speed", power: 80, type: "NORMAL" }
            ]
        },
        {
            name: "Togekiss",
            level: 75,
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
            ability: "Serene Grace",
            types: ["FAIRY", "FLYING"],
            hp: 590,
            stats: { hp: 85, atk: 50, def: 95, spa: 120, spd: 115, spe: 80 },
            moves: [
                { name: "Air Slash", power: 75, type: "FLYING" },
                { name: "Aura Sphere", power: 80, type: "FIGHTING" },
                { name: "Water Pulse", power: 60, type: "WATER" },
                { name: "Shock Wave", power: 60, type: "ELECTRIC" }
            ]
        }
    ]
}
```

## 🚀 Next Steps

1. **Edit `gym-config.js`** with your gym leaders
2. **Edit `pokedex-config.js`** with your Pokémon
3. **Test the pages** - refresh and check
4. **Add to navigation** - Already done! Links in navbar

## ❓ Common Issues

### Sprites Not Loading
- Check URL is correct
- Make sure it's a direct image link
- Try using PokeAPI sprites as fallback

### Leader Not Showing
- Check for JavaScript errors in console (F12)
- Make sure all required fields are filled
- Check for typos in config

### Stats Bars Wrong
- Stats should be 0-255
- Percentage is calculated automatically
- Higher stats = fuller bars

## 📝 Template Files

Both `gym-config.js` and `pokedex-config.js` come with example data from the images you shared. You can:

1. **Replace entirely** with your own data
2. **Modify existing** entries
3. **Add new** gym leaders/types

## ✅ Summary

You now have:
- ✅ Gym Leaders page (like Image 1)
- ✅ Pokédex page (like Image 2)
- ✅ Fully configurable via JS files
- ✅ Professional game-style interface
- ✅ Search functionality on Pokédex
- ✅ Click to view full team details
- ✅ Responsive design
- ✅ Auto-updating when you edit config

Just edit the config files and refresh! 🎮
