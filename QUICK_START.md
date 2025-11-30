# Quick Start Guide

## 🚀 Getting Your Portfolio Live in 5 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Update Your Information

#### Personal Details
1. **Email & Contact**: Update in:
   - `src/components/Hero.jsx` (line ~50)
   - `src/components/Contact.jsx` (line ~10)
   - `src/components/Resume.jsx` (line ~8)

2. **LinkedIn URL**: Update in:
   - `src/components/Hero.jsx`
   - `src/components/Contact.jsx`
   - `src/components/Resume.jsx`

3. **GitHub Username**: Already set to `durveshk0` - verify it's correct

### Step 3: Update Projects

Edit `src/components/Projects.jsx`:
- Replace example projects with your actual GitHub projects
- Update GitHub links
- Add real descriptions, tech stacks, and learnings
- Add demo links if available

### Step 4: Add Your Resume

1. Place your resume PDF in the `public` folder
2. Name it `resume.pdf` (or update the filename in `src/components/Resume.jsx` line ~95)
3. Update resume data in `src/components/Resume.jsx` with your actual:
   - Education details
   - Certifications
   - Achievements
   - Skills

### Step 5: Run and Deploy

#### Local Development
```bash
npm run dev
```
Visit `http://localhost:3000`

#### Build for Production
```bash
npm run build
```

#### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (It's automatic)

## ✅ Checklist Before Going Live

- [ ] All personal information updated
- [ ] All social media links working
- [ ] Projects section updated with real projects
- [ ] Resume PDF added and download working
- [ ] Resume data section filled with actual details
- [ ] Skills section matches your actual skills
- [ ] About section reflects your true background
- [ ] Tested on mobile devices
- [ ] Tested light/dark mode toggle
- [ ] All links work correctly
- [ ] No placeholder text remaining

## 🎨 Customization Tips

### Change Colors
Edit `src/index.css` - look for CSS variables starting with `--accent-`

### Change Fonts
Add Google Fonts link in `index.html` and update `font-family` in `src/index.css`

### Add More Sections
1. Create new component in `src/components/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## 📝 Important Notes

- **Email**: Replace `your.email@example.com` everywhere
- **Phone**: Update in Resume component
- **Location**: Update in Contact component
- **Projects**: Make sure GitHub links are correct
- **Resume**: PDF must be in `public` folder

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Check `SUGGESTIONS.md` for project ideas and GitHub tips
- Review component files for inline comments

## 🎉 You're Ready!

Once everything is updated, build and deploy. Your portfolio is ready to impress recruiters!

