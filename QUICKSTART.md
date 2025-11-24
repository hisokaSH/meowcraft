# MeowCraft Website - Quick Start Guide

## 📦 What You Have

A complete multi-page website for your MeowCraft Cobblemon server with:

✅ **7 Main Pages**:
- index.html - Homepage with hero, features, stats
- wiki.html - Documentation and guides
- shop.html - Webstore with cart functionality
- download.html - Launcher downloads for Windows/Mac/Linux
- community.html - Discord and social media links
- login.html - User login page
- register.html - User registration page

✅ **Styling**:
- styles.css - Global styles for all pages
- home.css - Homepage specific styles
- wiki.css - Wiki page styles
- shop.css - Shop page styles  
- auth.css - Login/Register styles

✅ **Functionality**:
- script.js - Core functionality (particles, navigation, etc.)
- shop.js - Shopping cart system
- wiki.js - Search and category filtering
- auth.js - Authentication forms

✅ **Modern Features**:
- Particle effects background
- Smooth scroll animations
- Mobile responsive design
- Shopping cart with localStorage
- Search functionality
- Form validation
- Category filtering

## 🚀 Getting Started

### Step 1: Test Locally
1. Open `index.html` in your web browser
2. Click through all pages to see the features
3. Test the shopping cart on shop.html
4. Try the search on wiki.html

### Step 2: Customize Your Content

**Update Server IP** (in index.html):
```html
Line ~80: <code class="server-ip" id="server-ip">YOUR-SERVER-IP.COM</code>
```

**Change Colors** (in styles.css):
```css
Lines 1-7: Edit the color values in :root
```

**Add Social Links** (in all page footers):
```html
Update the href="#" to your actual links
```

### Step 3: Add Your Content

**Wiki Articles**: 
- Edit wiki.html and add your own guides
- Follow the existing article structure

**Shop Products**:
- Edit shop.html and modify/add products
- Update prices and descriptions

**Images**:
- Add a /images/ folder
- Replace placeholder emojis with actual images

### Step 4: Deploy

**Option 1 - GitHub Pages** (Free & Easy):
1. Create a GitHub repository
2. Upload all files
3. Enable Pages in Settings
4. Live in minutes!

**Option 2 - Your Web Host**:
1. Upload via FTP/SFTP
2. Ensure file structure is maintained
3. Set index.html as default page

## ⚙️ Important Customizations

### 1. Backend Integration (Required for Production)

The current site is frontend-only. For full functionality you need:

**Authentication**: 
- Set up a backend API (Node.js, Python, PHP)
- Modify auth.js to connect to your API
- See README.md for detailed instructions

**Payments**:
- Integrate Stripe, PayPal, or Tebex
- Modify shop.js checkout function
- Add your API keys

**Live Data**:
- Connect to your Minecraft server API
- Update player count in real-time
- Show server status

### 2. Must-Do Changes

Before going live:

1. ✏️ Replace "play.meowcraft.net" with your IP
2. ✏️ Update all social media links
3. ✏️ Add your Discord server link
4. ✏️ Customize shop products and prices
5. ✏️ Write your own wiki articles
6. ✏️ Add Google Analytics (optional)
7. ✏️ Set up real authentication backend
8. ✏️ Configure payment processing

### 3. Recommended Additions

- Add actual server rules to wiki
- Create a staff/team page
- Add a FAQ page
- Include screenshots/gallery
- Add Discord widget
- Set up contact form

## 📱 Testing Checklist

Before deploying:

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify forms submit correctly
- [ ] Test shopping cart
- [ ] Check responsive design
- [ ] Validate all HTML/CSS
- [ ] Test on slow internet connection
- [ ] Check all images load
- [ ] Verify colors match your brand

## 🎨 Design Notes

**Color Scheme**: Orange/yellow gradient theme
- Primary: #ff6b35 (Orange)
- Secondary: #f7931e (Light orange)  
- Accent: #ffd700 (Gold)

**Fonts**:
- Headings: Orbitron (Google Fonts)
- Body: Poppins (Google Fonts)

**Layout**: 
- Max width: 1400px
- Mobile breakpoint: 768px
- Navbar height: 80px

## 🔧 Common Issues

**Problem**: Particles not showing
**Solution**: Check particles.js CDN link is working

**Problem**: Cart not saving
**Solution**: Enable localStorage in browser

**Problem**: Pages not linked properly
**Solution**: Verify all href paths are correct

**Problem**: Forms not working
**Solution**: Set up backend API for authentication

## 📚 Additional Resources

- Full documentation: See README.md
- Need help? Check the troubleshooting section
- Want to add features? See "Advanced Features" in README

## 🎯 Next Steps

1. **Immediate**: Customize colors and content
2. **Short-term**: Set up backend authentication
3. **Mid-term**: Integrate payment processing
4. **Long-term**: Add more features based on user feedback

## 💡 Pro Tips

- Start simple, add features gradually
- Test thoroughly before going live
- Keep backups of your customizations
- Monitor Google Analytics for insights
- Engage with your community for feedback

---

**Need More Help?**
- Read the full README.md
- Check individual files for inline comments
- Join our Discord for support

Good luck with your MeowCraft website! 🐱
