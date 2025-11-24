# Gym Leaders System - Clean nuzlocke.app Style

## ✨ What's New

I've completely rebuilt the gym leaders page to match the clean, professional design from nuzlocke.app/guides/radical-red. 

### Key Features:
- **Clean list layout** - Leaders displayed in horizontal cards, easy to scan
- **Professional styling** - Dark theme with proper spacing, no overlapping
- **Type badges** - Color-coded badges matching official Pokemon colors
- **Trainer sprites** - Using Bulbagarden Archives (HGSS style sprites)
- **Pokemon preview** - Small sprite thumbnails showing each leader's team
- **Level cap display** - Clear level cap shown on the right
- **Modal details** - Click any leader to see full Pokemon stats

### Modal Features:
- **Large Pokemon sprites** - 120x120px, pixelated rendering
- **Clean stat bars** - Color-coded, animated progress bars with NO overlap
- **Organized info** - Name, level, ability, types, HP all cleanly laid out
- **Move cards** - 2x2 grid showing all moves with type badges
- **Responsive design** - Works perfectly on mobile and desktop

## 📝 How to Add Your Gym Leaders

Edit `gym-config.js` - it's super simple:

```javascript
{
    name: "Brock",
    title: "Pewter City Gym",
    type: "Rock",  // Used for type badge color
    sprite: "https://archives.bulbagarden.net/media/upload/f/f9/Spr_HGSS_Brock.png",
    levelCap: 14,
    team: [
        {
            name: "Geodude",
            level: 13,
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
            ability: "Sturdy",
            types: ["ROCK", "ELECTRIC"],  // Can be 1 or 2 types
            hp: 300,  // Total HP value
            stats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
            moves: [
                { name: "Spark", power: 98, type: "ELECTRIC" },
                { name: "Rock Tomb", power: 90, type: "ROCK" },
                { name: "Self Destruct", power: 100, type: "NORMAL" },
                { name: "Bulldoze", power: 60, type: "GROUND" }
            ]
        }
        // Add more Pokemon here...
    ]
}
```

## 🎨 Where to Get Sprites

### Trainer Sprites (HGSS Style):
**Bulbagarden Archives**: https://archives.bulbagarden.net/
- Search for your trainer (e.g., "Brock")
- Look for "Spr_HGSS_[Name].png" files
- Copy the image URL

Examples:
- Brock: `https://archives.bulbagarden.net/media/upload/f/f9/Spr_HGSS_Brock.png`
- Misty: `https://archives.bulbagarden.net/media/upload/2/2e/Spr_HGSS_Misty.png`
- Lt. Surge: `https://archives.bulbagarden.net/media/upload/9/9e/Spr_HGSS_Lt_Surge.png`

### Pokemon Sprites:
**PokeAPI** (best for consistency): 
- Format: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/[DEX_NUMBER].png`
- Example: Pikachu (#25) = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`

## 🎯 Type Colors

All 18 types are supported with official colors:
- NORMAL, FIRE, WATER, ELECTRIC, GRASS, ICE
- FIGHTING, POISON, GROUND, FLYING, PSYCHIC, BUG
- ROCK, GHOST, DRAGON, DARK, STEEL, FAIRY

## 📊 Stats Display

Stats are displayed with colored progress bars:
- **HP** - Red gradient
- **atk** - Orange gradient  
- **def** - Green gradient
- **spa** - Blue gradient
- **spd** - Pink gradient
- **spe** - Cyan gradient

Bars are calculated as percentage of max stat (255), so a stat of 100 = 39% filled bar.

## 🔄 Converting from Radical Red Format

If you have Radical Red showdown format, just extract:
1. Pokemon name
2. Level (after "Lv.")
3. Ability (after "Ability:")
4. Types (check Bulbapedia if not obvious)
5. HP (total HP value)
6. Stats (EVs/IVs converted to final stats)
7. Moves (name, power, type)

## 📱 Responsive Design

- **Desktop**: Cards show all info in one row
- **Tablet**: Slightly compressed but still horizontal
- **Mobile**: Team preview moves below, stats stack vertically

## 🐛 Troubleshooting

**Sprites not loading?**
- Check the URL is correct (try opening in browser)
- Make sure URL starts with https://
- Use PokeAPI for consistency

**Stats overlapping?**
- They shouldn't! The new design has proper spacing
- Each stat bar is on its own row with fixed widths

**Modal not opening?**
- Check browser console for errors
- Make sure gym-config.js is loaded before gym-leaders.js

## 📦 Files Included

- `gym-leaders.html` - Main page
- `gym-leaders.css` - Clean styling  
- `gym-leaders.js` - Display logic
- `gym-config.js` - Your gym data (EDIT THIS!)

## 🚀 Current Data

The config includes 3 example gym leaders:
- **Brock** (Level 14) - 4 Pokemon with full stats
- **Misty** (Level 27) - 2 Pokemon 
- **Lt. Surge** (Level 34) - 3 Pokemon

## ✅ Ready to Use!

Just edit `gym-config.js` with your mod's gym leaders and you're done!
