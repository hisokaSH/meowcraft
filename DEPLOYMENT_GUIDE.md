# 🚀 Deployment Guide - GitHub + Vercel

## Quick Deploy (5 Minutes)

Follow these exact steps to get your MeowCraft website live!

---

## Step 1: Upload to GitHub 📤

### Option A: Using GitHub Desktop (Easiest)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click **File** → **Add Local Repository**
4. Select your `meowcraft-multipage` folder
5. Click **Publish repository**
6. Name it: `meowcraft`
7. Uncheck "Keep this code private"
8. Click **Publish repository**
9. ✅ Done! Your code is on GitHub!

### Option B: Using Git Command Line
1. Open terminal/command prompt
2. Navigate to your website folder:
   ```bash
   cd /path/to/meowcraft-multipage
   ```

3. Initialize Git (if not already):
   ```bash
   git init
   ```

4. Add all files:
   ```bash
   git add .
   ```

5. Commit files:
   ```bash
   git commit -m "Initial commit - MeowCraft website"
   ```

6. Connect to your GitHub repo:
   ```bash
   git remote add origin https://github.com/hisokaSH/meowcraft.git
   ```

7. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

8. ✅ Done! Check https://github.com/hisokaSH/meowcraft

### Option C: Manual Upload (Simplest)
1. Go to https://github.com/hisokaSH/meowcraft
2. Click **Add file** → **Upload files**
3. Drag and drop ALL your website files
4. Scroll down and click **Commit changes**
5. ✅ Done!

---

## Step 2: Deploy to Vercel 🚀

### First Time Setup

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click **Sign Up** (use GitHub account)

2. **Import Project:**
   - Click **Add New Project**
   - Click **Import Git Repository**
   - Select `hisokaSH/meowcraft`
   - Click **Import**

3. **Configure Project:**
   - **Framework Preset:** Other (or leave as None)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** Leave empty
   - **Output Directory:** Leave empty
   - Click **Deploy**

4. **Wait for Deployment:**
   - Takes 30-60 seconds
   - ✅ You'll see "Congratulations!" when done

5. **Your Site is LIVE!**
   - URL: `https://meowcraft.vercel.app`
   - Or: `https://meowcraft-xxxxx.vercel.app`

---

## Step 3: Add Custom Domain (Optional) 🌐

### Add Your Domain

1. **In Vercel Dashboard:**
   - Click your project (meowcraft)
   - Click **Settings** tab
   - Click **Domains** in sidebar

2. **Add Domain:**
   - Enter: `meowcraft.net`
   - Click **Add**
   - Enter: `www.meowcraft.net`
   - Click **Add**

3. **Update DNS Records:**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Go to DNS settings
   - Add these records:

   **For meowcraft.net:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 300
   ```

   **For www.meowcraft.net:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 300
   ```

4. **Wait for DNS:**
   - Takes 5-30 minutes
   - Vercel will auto-detect changes
   - SSL certificate is automatic!

5. **Done!**
   - Visit `https://meowcraft.net`
   - ✅ Your site is live with custom domain!

---

## Step 4: Make Updates 🔄

### After Making Changes

1. **Update GitHub:**
   ```bash
   git add .
   git commit -m "Updated website"
   git push origin main
   ```

2. **Vercel Auto-Deploys:**
   - Vercel watches your GitHub repo
   - New commits trigger automatic deployment
   - Takes 30-60 seconds
   - Changes go live automatically!

3. **Check Deployment:**
   - Go to Vercel dashboard
   - See deployment status
   - View logs if needed

---

## Troubleshooting 🔧

### Issue: "Git not found"
**Solution:** Install Git from [git-scm.com](https://git-scm.com)

### Issue: "Permission denied" on GitHub
**Solution:** 
1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. Add to GitHub: Settings → SSH Keys → New SSH Key
3. Use SSH URL instead:
   ```bash
   git remote set-url origin git@github.com:hisokaSH/meowcraft.git
   ```

### Issue: Vercel deployment fails
**Solution:**
1. Check `vercel.json` exists
2. Check all files uploaded correctly
3. View deployment logs in Vercel dashboard
4. Make sure no build errors

### Issue: 404 on routes
**Solution:** Already handled by `vercel.json` config!

### Issue: Styles not loading
**Solution:**
1. Check all CSS files are uploaded
2. Clear browser cache (Ctrl+F5)
3. Check browser console for errors

### Issue: Custom domain not working
**Solution:**
1. Wait 30 minutes for DNS propagation
2. Check DNS records are correct
3. Use [DNS Checker](https://dnschecker.org) to verify
4. Contact domain registrar support

---

## Quick Reference 📋

### File Checklist
- ✅ vercel.json
- ✅ .gitignore
- ✅ README.md
- ✅ All HTML files (9 total)
- ✅ All CSS files
- ✅ All JS files
- ✅ Config files (gym-config.js, pokedex-config.js)

### Deployment URLs
- **Vercel Default:** `https://meowcraft.vercel.app`
- **Custom Domain:** `https://meowcraft.net`
- **GitHub Repo:** `https://github.com/hisokaSH/meowcraft`

### Important Commands
```bash
# Check Git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View remote URLs
git remote -v
```

---

## Next Steps After Deployment 🎯

1. ✅ **Share Your Site:**
   - Tell your Discord community
   - Post on social media
   - Add to server MOTD

2. ✅ **Monitor Analytics:**
   - Add Google Analytics
   - Track visitor stats
   - Monitor performance

3. ✅ **Add Features:**
   - Live server status API
   - Discord OAuth login
   - Shop backend integration

4. ✅ **Optimize SEO:**
   - Add meta descriptions
   - Submit sitemap
   - Google Search Console

5. ✅ **Test Everything:**
   - All pages load correctly
   - Mobile responsive works
   - Forms function properly
   - Links are correct

---

## Support 💬

**Need Help?**
- Check this guide again carefully
- Google your error message
- Ask in MeowCraft Discord
- Check Vercel documentation

**Resources:**
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- Git Tutorial: https://git-scm.com/doc

---

## Success Checklist ✅

- [ ] Code uploaded to GitHub
- [ ] Vercel project created
- [ ] First deployment successful
- [ ] Website loads at Vercel URL
- [ ] All pages accessible
- [ ] Gym Leaders page shows data
- [ ] Pokédex displays Pokémon
- [ ] Mobile responsive works
- [ ] Custom domain added (optional)
- [ ] DNS records updated (optional)
- [ ] SSL certificate active
- [ ] Shared with community!

---

**🎉 Congratulations! Your MeowCraft website is LIVE! 🎉**

**URL:** https://meowcraft.vercel.app  
**Custom Domain:** https://meowcraft.net (after DNS setup)

**Now go tell your players about it!** 🐱✨
