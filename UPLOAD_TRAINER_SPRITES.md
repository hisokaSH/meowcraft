# How to Use Trainer Sprites

## ✅ WORKING SOLUTION: Nuzlocke.app CDN

The nuzlocke.app site has a CDN with trainer sprites that **DO work**!

### URL Pattern:
```
https://img.nuzlocke.app//leaders/[game]-[trainer].webp
```

### Available Games:
- `frlg` - FireRed/LeafGreen
- `hgss` - HeartGold/SoulSilver
- `rse` - Ruby/Sapphire/Emerald
- `dppt` - Diamond/Pearl/Platinum
- `bw` - Black/White
- `b2w2` - Black 2/White 2
- `xy` - X/Y
- `sm` - Sun/Moon
- `usum` - Ultra Sun/Ultra Moon
- `swsh` - Sword/Shield

### Examples (All Working!):
- Brock: `https://img.nuzlocke.app//leaders/frlg-brock.webp`
- Misty: `https://img.nuzlocke.app//leaders/frlg-misty.webp`
- Lt. Surge: `https://img.nuzlocke.app//leaders/frlg-surge.webp`
- Erika: `https://img.nuzlocke.app//leaders/frlg-erika.webp`
- Sabrina: `https://img.nuzlocke.app//leaders/frlg-sabrina.webp`
- Blaine: `https://img.nuzlocke.app//leaders/frlg-blaine.webp`
- Giovanni: `https://img.nuzlocke.app//leaders/frlg-giovanni.webp`

### Common Trainer Names:
**Kanto Leaders**: brock, misty, surge, erika, koga, sabrina, blaine, giovanni
**Johto Leaders**: falkner, bugsy, whitney, morty, chuck, jasmine, pryce, clair
**Hoenn Leaders**: roxanne, brawly, wattson, flannery, norman, winona, tate-liza, wallace
**Sinnoh Leaders**: roark, gardenia, fantina, maylene, crasher-wake, byron, candice, volkner

## 📝 How to Add Your Gym Leaders

Just edit `gym-config.js`:

```javascript
{
    name: "Erika",
    title: "Celadon City Gym",
    type: "Grass",
    sprite: "https://img.nuzlocke.app//leaders/frlg-erika.webp", // Works perfectly!
    levelCap: 42,
    team: [ ... ]
}
```

## 🎨 Pokemon Sprites (Also HGSS Style!)

Pokemon sprites are using PokeAPI's HGSS versions:
```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/[NUMBER].png
```

Examples:
- Pikachu (#25): `.../heartgold-soulsilver/25.png`
- Charizard (#6): `.../heartgold-soulsilver/6.png`
- Mewtwo (#150): `.../heartgold-soulsilver/150.png`

## ✨ Everything Works Now!

No need to upload anything - just use the nuzlocke.app CDN URLs and you're done!
