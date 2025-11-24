# 🖼️ Adding Background Images to Your Website

Your website now has a **professional background image system** just like on nearcsx.dev!

## 📸 What You Need

Take or gather 5 high-quality screenshots from your Minecraft server:

1. **hero-bg.jpg** - Main homepage background (best showcase shot)
2. **download-bg.jpg** - Download page (launcher or gameplay)
3. **shop-bg.jpg** - Shop page (cool builds or cosmetics)
4. **wiki-bg.jpg** - Wiki page (educational/tutorial scene)
5. **community-bg.jpg** - Community page (players together)

## 📏 Recommended Specifications

### Image Size & Quality
- **Resolution**: 1920x1080 (Full HD) or higher
- **Format**: JPG (recommended) or PNG
- **File Size**: 200KB - 1MB per image (compress for web)
- **Aspect Ratio**: 16:9 works best

### Screenshot Tips
✅ Take screenshots in daytime or well-lit areas
✅ Use shaders if you have them (makes it look amazing)
✅ Include interesting builds, Pokémon, or players
✅ Avoid busy/cluttered scenes (keep it clean)
✅ Hide your HUD (F1 in Minecraft)
✅ Use high render distance for depth

### What Makes a Good Background
- 🎨 **Visual Interest**: Cool builds, landscapes, Pokémon
- 🌟 **Lighting**: Good lighting makes everything better
- 🎯 **Focal Point**: Something interesting to look at
- 🎨 **Color Balance**: Not too bright, not too dark
- 📐 **Composition**: Rule of thirds applies here too

## 📁 Where to Put Images

### Folder Structure
```
meowcraft-multipage/
├── images/
│   ├── hero-bg.jpg          (Homepage background)
│   ├── download-bg.jpg      (Download page background)
│   ├── shop-bg.jpg          (Shop page background)
│   ├── wiki-bg.jpg          (Wiki page background)
│   └── community-bg.jpg     (Community page background)
└── ... (other files)
```

### Steps to Add Your Images

1. **Take your screenshots** in Minecraft (F2 key)
2. **Find them** in `.minecraft/screenshots/`
3. **Rename them** to match the names above
4. **Optimize them** (see optimization section below)
5. **Copy them** to the `images/` folder
6. **Test** - Open index.html and you should see your background!

## 🎨 Image Optimization

**Important**: Large images slow down your website!

### Option 1: Online Tools (Easiest)
- **TinyPNG** (https://tinypng.com/)
  - Upload your images
  - Download compressed versions
  - Usually reduces size by 50-70%

- **Squoosh** (https://squoosh.app/)
  - More control over compression
  - Can convert to WebP format

### Option 2: Photoshop/GIMP
1. Open image
2. Image → Image Size → Set width to 1920px
3. File → Export → Save for Web
4. JPEG quality: 70-80%
5. Save

### Option 3: Command Line (Advanced)
```bash
# Install ImageMagick first
# Then run:
convert hero-bg.png -quality 80 -resize 1920x1080 hero-bg.jpg
```

## ✨ Current Effects Applied

Your backgrounds automatically have:

✅ **Parallax Effect** - Images move slower than content when scrolling
✅ **Dark Overlay** - Ensures text is readable over any image
✅ **Orange Gradient** - Subtle orange tint matching your theme
✅ **Text Shadows** - Extra readability on titles
✅ **Fade-in Animation** - Smooth appearance on page load
✅ **Mobile Optimized** - Looks great on all devices

## 🎛️ Customization Options

### Change the Overlay Darkness

Edit `backgrounds.css` (around line 15):

```css
/* Make it darker (more readable text) */
background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.95) 0%,    /* Increase this value (0.95 = darker) */
    rgba(255, 107, 53, 0.3) 50%,
    rgba(10, 10, 10, 0.95) 100%
);

/* Make it lighter (show more image) */
background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.7) 0%,     /* Decrease this value (0.7 = lighter) */
    rgba(255, 107, 53, 0.3) 50%,
    rgba(10, 10, 10, 0.7) 100%
);
```

### Disable Parallax Effect

In `backgrounds.css`, change:
```css
background-attachment: fixed; /* Parallax effect */
```
To:
```css
background-attachment: scroll; /* No parallax */
```

### Use Different Images for Each Page

Already set up! Just add different images:
- `hero-bg.jpg` → Homepage
- `download-bg.jpg` → Download page
- `shop-bg.jpg` → Shop page
- `wiki-bg.jpg` → Wiki page
- `community-bg.jpg` → Community page

### Add More Background Images (Slideshow)

Want a slideshow of multiple backgrounds? See the "Advanced" section below.

## 🚀 Quick Start (5 Minutes)

1. **Take 5 screenshots** from your server
2. **Use TinyPNG.com** to compress them
3. **Rename** to hero-bg.jpg, download-bg.jpg, etc.
4. **Copy** to the `images/` folder
5. **Refresh** your website - Done!

## 🎯 Using Specific Images from Your Server

### For Homepage (hero-bg.jpg)
Best shots:
- Spawn area with players
- Epic build showcase
- Legendary Pokémon encounter
- Tournament arena
- Beautiful landscape with structures

### For Download Page (download-bg.jpg)
Best shots:
- Launcher UI
- Character with starter Pokémon
- Journey beginning scene
- Player inventory with items
- Training scene

### For Shop Page (shop-bg.jpg)
Best shots:
- Player with rare cosmetics
- Shiny Pokémon showcase
- VIP area or exclusive content
- Custom items display
- Battle scene with effects

### For Wiki Page (wiki-bg.jpg)
Best shots:
- Gym battle scene
- Pokémon catching moment
- Training area
- PC/storage system
- NPC interaction

### For Community Page (community-bg.jpg)
Best shots:
- Multiple players together
- Group photo at spawn
- Discord meetup in-game
- Tournament crowd
- Community event

## 🐛 Troubleshooting

### Images Not Showing
1. **Check file names** - Must be exact: `hero-bg.jpg` not `Hero-BG.JPG`
2. **Check file location** - Must be in `images/` folder
3. **Clear browser cache** - Ctrl+F5 or Cmd+Shift+R
4. **Check file format** - Must be .jpg or .png

### Images Too Dark/Light
- Adjust the overlay in `backgrounds.css` (see Customization section)

### Images Slow to Load
- Optimize/compress your images (see Optimization section)
- Keep file sizes under 500KB each

### Text Hard to Read
- Increase overlay darkness (see Customization section)
- Use images with less busy backgrounds
- Take screenshots with shaders for more depth

## 🎨 Advanced: Background Slideshow

Want multiple rotating backgrounds? Add this to your homepage:

1. Add multiple images: `hero-bg-1.jpg`, `hero-bg-2.jpg`, `hero-bg-3.jpg`

2. Update `index.html` hero section:
```html
<section class="hero hero-slideshow">
    <div class="bg-image-1" style="background-image: url('images/hero-bg-1.jpg')"></div>
    <div class="bg-image-2" style="background-image: url('images/hero-bg-2.jpg')"></div>
    <div class="bg-image-3" style="background-image: url('images/hero-bg-3.jpg')"></div>
    <div class="container">
        <!-- Your content here -->
    </div>
</section>
```

The CSS is already set up in `backgrounds.css` to rotate every 5 seconds!

## 🌐 Alternative: Use Online Images

Don't have good screenshots yet? You can temporarily use online images:

```css
/* In backgrounds.css, replace the url */
.hero {
    background-image: url('https://your-image-hosting.com/image.jpg');
}
```

Host on:
- Imgur
- GitHub
- Your own server
- Any image hosting service

## 📊 Performance Tips

✅ **Do's**:
- Compress images before uploading
- Use JPG for photos, PNG for graphics
- Keep total images under 3MB
- Use lazy loading for multiple images

❌ **Don'ts**:
- Don't use 4K screenshots (overkill for web)
- Don't use PNG for photographs (much larger)
- Don't skip optimization
- Don't use too many background images per page

## 💡 Pro Tips

1. **Seasonal Backgrounds** - Change images for holidays/events
2. **A/B Testing** - Try different images and see what looks best
3. **Blur Background** - Use Photoshop blur for artistic effect
4. **Color Grading** - Enhance colors to match your orange theme
5. **Consistency** - Use similar lighting/mood across all images

## 🎉 You're All Set!

Once you add your images, your website will look just like nearcsx.dev with those awesome server screenshots in the background!

Need help? Check the main README.md or ask in Discord!
