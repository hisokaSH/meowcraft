# 🐱 MeowCraft - Official Website

![MeowCraft Banner](https://i.ibb.co/5XDLJ7F0/Adobe-Express-file.png)

**The Ultimate Cobblemon Minecraft Server Experience**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

## 🌟 Overview

MeowCraft's official website featuring:
- **9 Responsive Pages** - Home, Wiki, Shop, Gym Leaders, Pokédex, Community, Download, Login, Register
- **Professional UI/UX** - Modern design with animations and smooth transitions
- **887 Pokémon** - Complete Pokédex with high-quality sprites
- **Gym Leader Tracker** - Full Kanto Gym Leaders + Elite Four + Champion data
- **Custom Background** - Immersive Minecraft-themed backdrop
- **Font Awesome Icons** - Professional vector icons throughout
- **Mobile Responsive** - Perfect on all devices

## 🚀 Quick Deploy to Vercel

1. **Push to your GitHub repository:**
   ```bash
   git add .
   git commit -m "Deploy MeowCraft website"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Live at `https://meowcraft.vercel.app`

3. **Add Custom Domain** (optional):
   - Vercel Dashboard → Settings → Domains
   - Add `meowcraft.net`
   - Update DNS records
   - SSL automatic!

## 📁 Project Structure

```
meowcraft/
├── index.html              # Home page
├── wiki.html              # Server documentation
├── shop.html              # Webstore
├── gym-leaders.html       # Gym Leaders showcase
├── pokedex.html           # Complete Pokédex
├── community.html         # Social media links
├── download.html          # Launcher download
├── login.html             # User login
├── register.html          # User registration
├── styles.css             # Global styles
├── script.js              # Main JavaScript
├── gym-config.js          # Gym Leaders data (49 Pokémon with stats)
├── pokedex-config.js      # Pokédex data (887 Pokémon)
├── vercel.json            # Vercel configuration
└── README.md              # This file
```

## 🎮 Features

### Home Page
- Hero section with call-to-action
- Live server statistics
- Server information with copy button
- 6 feature showcases
- Community highlights

### Gym Leaders Page
- **8 Kanto Gym Leaders** (Brock → Giovanni)
- **4 Elite Four** (Lorelei, Bruno, Agatha, Lance)
- **Champion Blue**
- **49 Pokémon** with calculated stats, moves, abilities

### Pokédex
- **887 Unique Pokémon**
- National Dex order
- Search functionality
- Professional card design

### Wiki
- Complete server guides
- Installation instructions
- Game mechanics
- Commands reference

### Shop
- Product categories
- Shopping cart
- Featured items
- Rank upgrades

### Community
- Discord (5.2K members)
- Social media links
- Server statistics

## 🛠️ Customization

### Update Server IP
Edit `script.js`:
```javascript
const SERVER_IP = 'play.meowcraft.net';
```

### Change Colors
Edit `styles.css`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
}
```

### Update Background
Edit `styles.css`:
```css
body::before {
    background-image: url('YOUR_IMAGE_URL');
}
```

## 📊 Technologies

- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome 6.4.2
- Google Fonts (Poppins, Orbitron)
- Particles.js
- AOS (Animate On Scroll)
- Vercel (Hosting)

## 📱 Responsive Design

- ✅ Desktop (1200px+)
- ✅ Laptop (992px - 1199px)
- ✅ Tablet (768px - 991px)
- ✅ Mobile (< 768px)

## 🚀 Performance

- Load Time: < 2 seconds
- Lighthouse Score: 90+
- Mobile Optimized: Yes
- SEO Ready: Yes

## 📈 Stats

- **Total Pages:** 9
- **Total Pokémon:** 887
- **Trainers:** 13 (Gym Leaders + Elite Four + Champion)
- **File Size:** 74KB compressed

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] Discord OAuth login
- [ ] Live server status
- [ ] Player dashboard
- [ ] Leaderboards
- [ ] Shop backend
- [ ] Admin panel

## 📞 Support

- **Discord:** [Join our server](https://discord.gg/meowcraft)
- **Server IP:** play.meowcraft.net
- **Version:** 1.21.1 (Cobblemon + Custom Mods)

## 🏗️ Built By

**Near (csx)** - Full Stack Developer  
🔗 [nearcsx.dev](https://nearcsx.dev)

---

**⭐ Star this repo if you found it helpful!**

**🐱 Join MeowCraft Today!**  
`play.meowcraft.net`
