# Setting Up Your Launcher Downloads

## 📥 Download Page Overview

Your website now has a complete download page (`download.html`) with:

✅ **3 Platform Options**: Windows, Mac, and Linux
✅ **Installation Guides**: Step-by-step for each platform
✅ **System Requirements**: Listed for each OS
✅ **Troubleshooting Section**: Common issues and solutions
✅ **Auto-Detection**: Highlights user's OS automatically

## 🚀 How It Currently Works

Right now, the download page is in **DEMO MODE**. When users click download:
- They'll see a notification
- A modal will appear explaining how to set up real downloads
- No actual file downloads (yet!)

## 🔧 Setting Up Real Downloads

### Option 1: GitHub Releases (FREE & RECOMMENDED)

This is the easiest and most reliable method:

1. **Create a GitHub repository** for your launcher
2. **Build your launcher** for each platform (Windows .exe, Mac .dmg, Linux .AppImage)
3. **Create a Release** on GitHub:
   - Go to your repo → Releases → Create new release
   - Upload your built launcher files
   - Tag it as "latest"

4. **Update download.js** (around line 10):
```javascript
const downloadUrls = {
    windows: 'https://github.com/YOUR-USERNAME/meowcraft-launcher/releases/latest/download/MeowCraft-Launcher-Windows.exe',
    mac: 'https://github.com/YOUR-USERNAME/meowcraft-launcher/releases/latest/download/MeowCraft-Launcher-Mac.dmg',
    linux: 'https://github.com/YOUR-USERNAME/meowcraft-launcher/releases/latest/download/MeowCraft-Launcher-Linux.AppImage'
};
```

**Benefits:**
- ✅ Free hosting
- ✅ Unlimited bandwidth
- ✅ Built-in version control
- ✅ CDN distribution
- ✅ Automatic updates possible

### Option 2: Your Own Server

Host files on your web server:

1. Upload launcher files to `/downloads/` folder
2. Update download.js:
```javascript
const downloadUrls = {
    windows: 'https://yoursite.com/downloads/MeowCraft-Launcher-Windows.exe',
    mac: 'https://yoursite.com/downloads/MeowCraft-Launcher-Mac.dmg',
    linux: 'https://yoursite.com/downloads/MeowCraft-Launcher-Linux.AppImage'
};
```

### Option 3: CDN (Cloudflare R2, AWS S3)

For high-traffic servers:

1. Upload files to your CDN
2. Get public URLs
3. Update download.js with CDN URLs

## 📦 If You Don't Have a Launcher Yet

You have several options:

### 1. Use Existing Solutions
- **Prism Launcher** - Fork and customize
- **MultiMC** - Already has custom instance support
- **ATLauncher** - Can create custom packs

### 2. Build Your Own
Using Electron + Node.js (like you've done before):
- Create launcher interface
- Handle authentication
- Manage mod downloads
- Auto-update functionality

### 3. Temporary Solution
While building your launcher, you can:
- Link directly to modpack downloads
- Provide manual installation instructions
- Use existing launcher with your modpack

## 🎯 Quick Implementation Steps

### Immediate (5 minutes):
1. Open `download.js`
2. Replace `YOUR-USERNAME` in the URLs
3. Test the download buttons

### Short-term (1 hour):
1. Create GitHub repository
2. Build/gather launcher files
3. Create GitHub Release
4. Update URLs in download.js
5. Test all platforms

### Long-term:
1. Set up automatic updates
2. Add download analytics
3. Create changelog system
4. Implement version checking

## 📝 Files You Need to Edit

### download.js (Line ~10)
```javascript
const downloadUrls = {
    windows: 'YOUR-ACTUAL-URL-HERE.exe',
    mac: 'YOUR-ACTUAL-URL-HERE.dmg',
    linux: 'YOUR-ACTUAL-URL-HERE.AppImage'
};
```

### download.html (Optional Customization)
- Line ~35: Update version number
- Line ~50: Update file sizes
- Line ~200+: Customize installation steps

## 🧪 Testing Your Downloads

Before going live:

1. **Test Each Platform**:
   - Click each download button
   - Verify file downloads correctly
   - Check file names are correct

2. **Test Installation**:
   - Install on actual Windows/Mac/Linux
   - Verify launcher works
   - Test server connection

3. **Check Links**:
   - Ensure URLs are public
   - Verify no 404 errors
   - Test download speed

## 🔐 Security Considerations

1. **File Integrity**:
   - Provide SHA256 checksums
   - Sign executables (Windows/Mac)
   - Use HTTPS for downloads

2. **Virus Scanning**:
   - Scan files before uploading
   - Some antivirus may flag unsigned .exe files
   - Add code signing for Windows

## 📊 Analytics (Optional)

Track downloads by adding to download.js:

```javascript
// After successful download
if (typeof gtag !== 'undefined') {
    gtag('event', 'download', {
        'event_category': 'launcher',
        'event_label': platform,
        'value': 1
    });
}
```

## 🎨 Customization Tips

### Update Launcher Version
In `download.html` line ~35:
```html
<span>Latest Version: 2.0.1</span>
<span class="version-date">Updated: November 2024</span>
```

### Change File Sizes
In `download.html` around line ~50 for each platform:
```html
<span class="file-size">~150 MB</span>
```

### Modify System Requirements
In `download.html` under each platform card:
```html
<ul>
    <li>Your requirement here</li>
</ul>
```

## 💡 Pro Tips

1. **Version Naming**: Use semantic versioning (e.g., v2.0.1)
2. **Changelog**: Keep a changelog for each release
3. **Beta Testing**: Have a beta channel for testing
4. **Auto-Updates**: Implement auto-update checking in launcher
5. **Multiple Versions**: Keep previous versions available

## 🐛 Common Issues

### "Download not working"
- Check URL is publicly accessible
- Verify file exists at that URL
- Check for CORS issues

### "File won't run after download"
- Sign your executables
- Provide instructions for security warnings
- Add to troubleshooting section

### "Wrong file downloads"
- Verify filename in URL matches actual file
- Check download.js platform mapping

## 📚 Additional Resources

- [Electron Documentation](https://www.electronjs.org/docs)
- [GitHub Releases Guide](https://docs.github.com/en/repositories/releasing-projects-on-github)
- [Code Signing for Windows](https://docs.microsoft.com/en-us/windows/win32/seccrypto/cryptography-tools)
- [Notarizing macOS Apps](https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution)

## 🎉 You're All Set!

Once you've set up your download URLs, your download page will be fully functional! Users will be able to:
- Download the appropriate launcher for their OS
- Follow installation instructions
- Get troubleshooting help
- See system requirements

Need help? Check the main README.md or ask in the community!
