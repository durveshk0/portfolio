# Deployment Guide - Make Your Portfolio Live Online

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest & Free)

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "Add New Project"
5. Import your repository
6. Vercel auto-detects Vite - click "Deploy"
7. Your site will be live in 2 minutes!

**Your site URL will be:** `https://your-portfolio.vercel.app`

---

### Option 2: Netlify (Also Easy & Free)

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Click "Add new site" → "Import an existing project"
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

**Your site URL will be:** `https://your-portfolio.netlify.app`

---

### Option 3: GitHub Pages (Free but requires setup)

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Update `package.json` scripts (see below)
3. Update `vite.config.js` (see below)
4. Run: `npm run deploy`

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:
- [ ] All your information is updated (name, email, phone, location)
- [ ] All links work correctly
- [ ] Projects section has your actual projects
- [ ] Resume PDF is in the public folder
- [ ] Test the site locally: `npm run dev`
- [ ] Build works: `npm run build`

---

## 🔧 Setup Instructions

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it: `portfolio` (or any name you like)
4. Don't initialize with README
5. Click "Create repository"

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## 🎯 Vercel Deployment (Step-by-Step)

### Method 1: Via Vercel Website (Easiest)

1. **Push to GitHub** (follow steps above)

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub"

3. **Import Project:**
   - Click "Add New Project"
   - Select your `portfolio` repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

4. **Wait 2 minutes** - Your site will be live!

5. **Get Your Link:**
   - After deployment, you'll get a URL like: `https://portfolio-xyz.vercel.app`
   - You can customize it in project settings

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

---

## 🎯 Netlify Deployment (Step-by-Step)

1. **Push to GitHub** (follow steps above)

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Click "Sign up" → "Sign up with GitHub"

3. **Import Project:**
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

4. **Your site is live!**
   - URL: `https://random-name.netlify.app`
   - Customize in Site settings → Change site name

---

## 🔧 GitHub Pages Setup (If you choose this)

### 1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

### 2. Update package.json:
Add these scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3. Update vite.config.js:
```js
export default defineConfig({
  base: '/portfolio/',  // Replace 'portfolio' with your repo name
  plugins: [react()],
  // ... rest of config
})
```

### 4. Deploy:
```bash
npm run deploy
```

Your site will be at: `https://YOUR_USERNAME.github.io/portfolio/`

---

## ✅ After Deployment

1. **Test Your Live Site:**
   - Check all links work
   - Test on mobile
   - Verify resume download works
   - Check all sections load properly

2. **Custom Domain (Optional):**
   - Vercel/Netlify allow custom domains
   - Add your domain in project settings
   - Example: `portfolio.yourname.com`

3. **Update Links:**
   - Add your portfolio link to:
     - LinkedIn profile
     - GitHub profile
     - Resume
     - Email signature

---

## 🆘 Troubleshooting

### Build Fails:
- Check build locally: `npm run build`
- Look for errors in terminal
- Make sure all imports are correct

### Site Not Loading:
- Check build logs in Vercel/Netlify dashboard
- Verify build command and output directory
- Clear cache and redeploy

### Images/Assets Not Loading:
- Make sure files are in `public` folder
- Check file paths are correct
- Verify build includes all assets

---

## 📝 Quick Commands Reference

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (if using CLI)
vercel --prod

# Deploy to GitHub Pages
npm run deploy
```

---

## 🎉 You're Live!

Once deployed, share your portfolio link:
- **Vercel:** `https://your-portfolio.vercel.app`
- **Netlify:** `https://your-portfolio.netlify.app`
- **GitHub Pages:** `https://your-username.github.io/portfolio/`

**Recommended:** Use Vercel - it's the easiest and fastest! 🚀

