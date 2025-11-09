# 🚀 Quick Start Guide - MeowCraft Website

## 📁 What You Have

This professional website package includes:

```
meowcraft-website/
├── index.html          ← Main website file
├── styles.css          ← All styling and animations  
├── script.js           ← Interactive features
├── README.md           ← Full documentation
├── DEPLOYMENT.md       ← Deployment instructions
├── .gitignore          ← Git ignore file
└── QUICKSTART.md       ← This file
```

## ⚡ 3-Minute Setup (GitHub Pages)

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **New Repository** (green button)
3. Name it `meowcraft-website` or any name you like
4. Click **Create repository**

### Step 2: Upload Files

**Option A - Web Upload (Easy)**
1. Click **uploading an existing file**
2. Drag all files from this folder
3. Scroll down and click **Commit changes**

**Option B - Git Command Line**
```bash
# In the meowcraft-website folder, run:
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/meowcraft-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository
2. Click **Settings**
3. Click **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**
6. Wait 1-2 minutes
7. Your site is live at: `https://YOURUSERNAME.github.io/meowcraft-website`

## 🎨 Customize Your Site

### Change Server IP

**File:** `index.html`  
**Line:** ~300

```html
<code id="server-ip">meowcraft.play-network.io</code>
```
Change to your server IP.

### Update Colors

**File:** `styles.css`  
**Lines:** 1-15

```css
:root {
    --primary-color: #ff6b35;      /* Change main orange */
    --secondary-color: #f7931e;    /* Change secondary orange */
    --accent-color: #ffd700;       /* Change gold accent */
}
```

### Modify Features

**File:** `index.html`  
**Section:** Features (around line 500-700)

Add/remove feature cards:
```html
<div class="feature-card">
    <div class="feature-icon">🎮</div>
    <h3>Your Feature Name</h3>
    <p>Description of your feature</p>
</div>
```

### Add Social Links

**File:** `index.html`  
**Lines:** ~900

```html
<a href="https://discord.gg/YOUR_INVITE" class="community-card discord">
```

## 🔧 Common Tasks

### Add a Download Link

**File:** `script.js`  
**Function:** `downloadLauncher`

```javascript
function downloadLauncher(platform) {
    const urls = {
        windows: 'https://your-cdn.com/launcher-windows.exe',
        mac: 'https://your-cdn.com/launcher-mac.dmg',
        linux: 'https://your-cdn.com/launcher-linux.AppImage'
    };
    window.location.href = urls[platform];
}
```

### Change Countdown Timer

**File:** `script.js`  
**Function:** `initCountdown`

```javascript
countdownDate.setDate(countdownDate.getDate() + 30); // Change 30 to your days
```

### Connect Login/Register Forms

**File:** `script.js`  
**Functions:** `handleLogin` and `handleRegister`

Replace the comment sections with your API calls:
```javascript
fetch('https://your-api.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
})
```

## 📱 Test Your Site Locally

### Option 1: Direct Open
Double-click `index.html` (works but some features limited)

### Option 2: Simple Server (Recommended)

**Python 3:**
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

**Node.js (if installed):**
```bash
npx http-server
# Visit: http://localhost:8080
```

**VS Code:**
Install "Live Server" extension, then right-click `index.html` → "Open with Live Server"

## 🎯 Next Steps

1. ✅ Upload to GitHub
2. ✅ Enable GitHub Pages  
3. 🔧 Customize server info
4. 🎨 Update colors/branding
5. 📝 Add your content
6. 🔗 Connect social media links
7. 📊 Add analytics (optional)
8. 🌐 Set up custom domain (optional)

## 💡 Pro Tips

- **Mobile First**: Always test on mobile devices
- **Image Optimization**: Compress images before uploading
- **SEO**: Update meta tags in `<head>` section
- **Security**: Use HTTPS (automatic with GitHub Pages)
- **Performance**: Check with [PageSpeed Insights](https://pagespeed.web.dev/)

## 🆘 Need Help?

- **Full Documentation**: Read `README.md`
- **Deployment Guide**: Read `DEPLOYMENT.md`
- **Issues**: Create a GitHub Issue
- **Discord**: Join your server's Discord

## ✨ Features Included

✅ Particle background effects  
✅ Smooth scroll animations  
✅ Responsive mobile design  
✅ Loading screen  
✅ Interactive navigation  
✅ Server status display  
✅ Animated counters  
✅ Login/Register modals  
✅ Copy-to-clipboard for server IP  
✅ Countdown timer  
✅ Feature showcase  
✅ Download section  
✅ Wiki links  
✅ Social media integration  
✅ Back-to-top button  
✅ Notification system  

## 🎊 You're All Set!

Your professional MeowCraft website is ready to go live!

**Remember**: Replace placeholder content with your actual server info, links, and branding.

---

**Made with ❤️ for the MeowCraft community**

Questions? Check the README.md or DEPLOYMENT.md files!