# 🚀 Deployment Guide

This guide will help you deploy the MeowCraft website to various hosting platforms.

## 📋 Table of Contents

- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [Custom Domain Setup](#custom-domain-setup)
- [Performance Optimization](#performance-optimization)

---

## 🌐 GitHub Pages

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/meowcraft-website.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under **Source**, select `main` branch
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io/meowcraft-website`

### Step 3: Custom Domain (Optional)

1. Create a `CNAME` file in the root directory:
   ```
   www.meowcraft.com
   ```
2. In your domain registrar, add these DNS records:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
3. Enable "Enforce HTTPS" in GitHub Pages settings

---

## 🎨 Netlify

### Method 1: Deploy with Git

1. Push your code to GitHub (see above)
2. Go to [Netlify](https://netlify.com)
3. Click **New site from Git**
4. Choose GitHub and select your repository
5. Build settings (leave default for static site):
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click **Deploy site**

### Method 2: Drag & Drop

1. Go to [Netlify](https://netlify.com)
2. Drag your website folder directly to Netlify
3. Your site is live instantly!

### Custom Domain on Netlify

1. Go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain (e.g., `meowcraft.com`)
4. Update your DNS records as instructed by Netlify
5. SSL certificate will be automatically provisioned

### Environment Variables (if needed)

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add variables:
   ```
   API_URL=https://api.meowcraft.com
   DISCORD_WEBHOOK=your_webhook_url
   ```

---

## ⚡ Vercel

### Deploy with Git

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click **New Project**
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: `./`
6. Click **Deploy**

### Deploy with CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain on Vercel

1. Go to **Project Settings** → **Domains**
2. Add your domain
3. Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

---

## 🌍 Custom Domain Setup

### Update Files

1. Create `CNAME` file with your domain:
   ```
   www.meowcraft.com
   ```

2. Update meta tags in `index.html`:
   ```html
   <meta property="og:url" content="https://www.meowcraft.com">
   <link rel="canonical" href="https://www.meowcraft.com">
   ```

### DNS Configuration

For most domain registrars:

```
# For www subdomain
Type: CNAME
Name: www
Value: yourusername.github.io (or your hosting provider)

# For root domain
Type: A
Name: @
Value: [Your hosting provider's IP]

# Alternative for root (ALIAS/ANAME if supported)
Type: ALIAS
Name: @
Value: yourusername.github.io
```

### SSL Certificate

- **GitHub Pages**: Automatically provided
- **Netlify**: Automatically provided via Let's Encrypt
- **Vercel**: Automatically provided
- **Custom Server**: Use [Let's Encrypt](https://letsencrypt.org/)

---

## ⚡ Performance Optimization

### Before Deployment

1. **Minify CSS**
   ```bash
   # Using online tools or:
   npm install -g csso-cli
   csso styles.css -o styles.min.css
   ```

2. **Minify JavaScript**
   ```bash
   npm install -g terser
   terser script.js -o script.min.js -c -m
   ```

3. **Optimize Images**
   - Use [TinyPNG](https://tinypng.com/)
   - Convert to WebP format
   - Serve responsive images

4. **Update HTML to use minified files**
   ```html
   <link rel="stylesheet" href="styles.min.css">
   <script src="script.min.js"></script>
   ```

### CDN Configuration

Add these headers for better caching:

```
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
    
[[headers]]
  for = "*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

### Enable Compression

Most platforms enable this automatically, but for custom servers:

```nginx
# nginx.conf
gzip on;
gzip_vary on;
gzip_types text/plain text/css text/xml text/javascript 
           application/x-javascript application/xml+rss;
```

---

## 🔧 Post-Deployment Checklist

- [ ] Test on multiple browsers
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test forms and modals
- [ ] Check page load speed ([PageSpeed Insights](https://pagespeed.web.dev/))
- [ ] Verify SEO tags ([Meta Tags](https://metatags.io/))
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Test SSL certificate
- [ ] Set up monitoring (UptimeRobot, etc.)

---

## 📊 Analytics Integration

### Google Analytics

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible Analytics (Privacy-friendly)

```html
<script defer data-domain="meowcraft.com" 
        src="https://plausible.io/js/script.js"></script>
```

---

## 🐛 Troubleshooting

### Site Not Loading

1. Check DNS propagation: [DNS Checker](https://dnschecker.org/)
2. Clear browser cache
3. Check deployment logs
4. Verify file paths are correct

### Particles Not Working

1. Ensure particles.js is loaded from CDN
2. Check browser console for errors
3. Verify JavaScript is enabled

### Slow Loading

1. Optimize images
2. Enable caching
3. Use CDN for assets
4. Minify CSS/JS

---

## 📞 Support

If you need help with deployment:

1. Check the [GitHub Issues](https://github.com/yourusername/meowcraft-website/issues)
2. Join our [Discord Server](https://discord.gg/yourserver)
3. Read platform documentation:
   - [GitHub Pages Docs](https://docs.github.com/en/pages)
   - [Netlify Docs](https://docs.netlify.com/)
   - [Vercel Docs](https://vercel.com/docs)

---

**Good luck with your deployment! 🚀**