# Deployment Guide - Military Taxi Co Website

## 🚀 Quick Deploy to Vercel

### Option 1: Direct GitHub Integration (Recommended)

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import from GitHub: `Syed-Aarij012/Taxiwebsite`

2. **Configure Build Settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at: `https://your-project-name.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd TaxiWebsite/taxi-project
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: military-taxi-co
# - Directory: ./
# - Override settings? N
```

## 🌐 Other Deployment Options

### Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - "New site from Git" → GitHub
   - Select `Syed-Aarij012/Taxiwebsite`

2. **Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://syed-aarij012.github.io/Taxiwebsite",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🔧 Build Configuration

### Environment Variables (Optional)

If you add Google Maps API key later:

```bash
# .env.local
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Build Optimization

The project is already optimized for production:
- ✅ Vite build optimization
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Tailwind CSS via CDN (fast loading)

## 📊 Performance

### Current Build Stats
- **Bundle Size**: ~271KB (gzipped: ~77KB)
- **Build Time**: ~1 second
- **Assets**: Optimized images and CSS

### Lighthouse Scores (Expected)
- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 90+

## 🛠️ Troubleshooting

### Common Issues

1. **Build Fails with Tailwind Error**
   - ✅ Fixed: Removed `@tailwindcss/vite` dependency
   - Uses Tailwind via CDN for better compatibility

2. **Images Not Loading**
   - Ensure all images are in `src/assets/`
   - Use relative imports: `./src/assets/image.png`

3. **Routing Issues**
   - Single-page app - no additional routing needed
   - All navigation is handled by scroll anchors

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🔄 Continuous Deployment

### Automatic Deployments

Once connected to Vercel/Netlify:
1. Push to `main` branch
2. Automatic build triggers
3. Site updates live in ~2 minutes

### Manual Deployment

```bash
# Update code
git add .
git commit -m "Update: description of changes"
git push

# Deployment happens automatically
```

## 📞 Support

For deployment issues:
- **Technical**: Check build logs in deployment platform
- **Business**: Contact Themillitarytaxico@gmail.com
- **Emergency**: 07999997820

## 🎯 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages/sections accessible
- [ ] Contact forms work
- [ ] Phone/email links functional
- [ ] Mobile responsive
- [ ] Route visualization working
- [ ] Booking modal functional
- [ ] Images loading properly

## 🔗 Live Site

Once deployed, your Military Taxi Co website will be available at:
- **Vercel**: `https://taxiwebsite-[hash].vercel.app`
- **Netlify**: `https://[site-name].netlify.app`
- **Custom Domain**: Configure in platform settings

---

**Military Taxi Co** - *Professional deployment for professional service*