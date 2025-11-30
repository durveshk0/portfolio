# Deploy Your Portfolio to GitHub Pages

## 🚀 Quick Steps to Deploy

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `portfolio` (or any name you like)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** check "Initialize with README"
6. Click **"Create repository"**

### Step 2: Update Repository Name in Config

**IMPORTANT:** After creating your repository, update the repository name in `vite.config.js`:

1. Open `vite.config.js`
2. Replace `'portfolio'` with your actual repository name in the `base` field
3. For example, if your repo is `my-portfolio`, the base should be `'/my-portfolio/'`

### Step 3: Push Code to GitHub

Run these commands in your terminal (in the portfolio folder):

```bash
# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `REPO_NAME` with your repository name (e.g., `portfolio`)

### Step 4: Deploy to GitHub Pages

Run this command:

```bash
npm run deploy
```

This will:
1. Build your portfolio
2. Deploy it to the `gh-pages` branch
3. Make it live on GitHub Pages

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### Step 6: Your Site is Live! 🎉

Wait 1-2 minutes, then visit:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

For example: `https://durveshk0.github.io/portfolio/`

---

## 📝 Important Notes

### Repository Name Matters!
- The `base` in `vite.config.js` must match your repository name
- If your repo is `portfolio`, base should be `'/portfolio/'`
- If your repo is `my-portfolio`, base should be `'/my-portfolio/'`

### Updating Your Site
Whenever you make changes:

```bash
# Make your changes
# Then commit and push
git add .
git commit -m "Update portfolio"
git push

# Deploy the changes
npm run deploy
```

### Custom Domain (Optional)
1. In GitHub Pages settings, add your custom domain
2. Update DNS records as instructed
3. Your site will be available at your custom domain

---

## 🆘 Troubleshooting

### Site shows 404
- Check that `base` in `vite.config.js` matches your repo name
- Make sure GitHub Pages is enabled in repository settings
- Wait a few minutes for changes to propagate

### Assets not loading
- Verify the `base` path is correct
- Check browser console for 404 errors
- Rebuild and redeploy: `npm run deploy`

### Build fails
- Run `npm run build` locally to check for errors
- Make sure all dependencies are installed: `npm install`

---

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Updated `base` in vite.config.js with your repo name
- [ ] Pushed code to GitHub
- [ ] Ran `npm run deploy`
- [ ] Enabled GitHub Pages in repository settings
- [ ] Site is accessible at `https://username.github.io/repo-name/`

---

**That's it! Your portfolio is now live on GitHub Pages! 🚀**

