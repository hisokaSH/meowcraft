# 🐱 MeowCraft - Cobblemon Server Website

A professional, modern website for the MeowCraft Cobblemon Minecraft server featuring stunning animations, particle effects, and a fully responsive design.

![MeowCraft Banner](https://i.ibb.co/5XDLJ7F0/Adobe-Express-file.png)

## ✨ Features

- 🎨 **Modern Design**: Sleek gradient backgrounds with orange/yellow theme
- ⚡ **Particle Effects**: Interactive particle.js background
- 🎬 **Smooth Animations**: AOS (Animate On Scroll) library integration
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🚀 **Fast Loading**: Optimized performance with loading screen
- 🎯 **Interactive Elements**: Hover effects, smooth scrolling, dynamic counters
- 🔐 **Authentication Modals**: Login/Register system ready for backend integration
- ⏰ **Countdown Timer**: Shop coming soon countdown
- 📊 **Live Stats**: Animated server statistics
- 🎮 **Feature Showcase**: 18+ server features beautifully displayed
- 💾 **GitHub Pages Ready**: Can be deployed instantly

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. Fork this repository
2. Go to Settings → Pages
3. Select "main" branch as source
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/meowcraft-website.git

# Navigate to the directory
cd meowcraft-website

# Open in your browser
# Simply open index.html in your web browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📁 File Structure

```
meowcraft-website/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Change Server Information

Edit `index.html` and update:

```html
<!-- Server IP -->
<code id="server-ip">your-server-ip.com</code>

<!-- Version Info -->
<span class="version-value">1.21.1</span>
```

### Modify Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
    --accent-color: #ffd700;
    /* Add your custom colors */
}
```

### Update Features

Edit the features section in `index.html`:

```html
<div class="feature-card">
    <div class="feature-icon">🎮</div>
    <h3>Your Feature</h3>
    <p>Description here</p>
</div>
```

### Countdown Timer

Change the countdown duration in `script.js`:

```javascript
function initCountdown() {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 30); // 30 days
}
```

## 🔌 Backend Integration

The website is ready for backend integration. Key areas to connect:

### Authentication

In `script.js`, update the login/register functions:

```javascript
function handleLogin(event) {
    // Add your API endpoint
    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        // Handle response
    });
}
```

### Download Links

Update the download function:

```javascript
function downloadLauncher(platform) {
    const downloadUrls = {
        windows: '/downloads/launcher-windows.exe',
        mac: '/downloads/launcher-mac.dmg',
        linux: '/downloads/launcher-linux.AppImage'
    };
    window.location.href = downloadUrls[platform];
}
```

### Player Count API

Replace the simulated player count with real data:

```javascript
function initPlayerCount() {
    fetch('/api/server/players')
        .then(response => response.json())
        .then(data => {
            document.getElementById('players-count').textContent = data.online;
        });
}
```

## 🔗 External Resources

The website uses these CDN resources:

- [Particles.js](https://vincentgarreau.com/particles.js/) - Particle effects
- [AOS](https://michalsnik.github.io/aos/) - Scroll animations
- [Google Fonts](https://fonts.google.com/) - Poppins & Orbitron fonts

## 📱 Social Media Integration

Update social media links in `index.html`:

```html
<a href="https://discord.gg/yourserver" class="social-link">💬</a>
<a href="https://twitter.com/yourhandle" class="social-link">🐦</a>
```

## 🎯 Performance Tips

1. **Image Optimization**: Compress images before uploading
2. **CDN**: Consider using a CDN for faster global loading
3. **Caching**: Enable browser caching for static assets
4. **Minification**: Minify CSS and JS for production

## 🐛 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💬 Support

Need help? Join our Discord server or open an issue!

- **Discord**: [Your Discord Link]
- **Issues**: [GitHub Issues](https://github.com/yourusername/meowcraft-website/issues)

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](screenshots/desktop.png)

### Mobile View
![Mobile Screenshot](screenshots/mobile.png)

## 🎉 Credits

- **Design & Development**: MeowCraft Team
- **Cobblemon**: [Cobblemon Mod](https://cobblemon.com/)
- **Minecraft**: © Mojang Studios
- **Pokémon**: © The Pokémon Company

---

Made with ❤️ for the MeowCraft community

**Note**: This website is not affiliated with Mojang Studios or The Pokémon Company.
