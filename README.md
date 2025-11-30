# Durvesh K - Portfolio Website

A modern, professional portfolio website showcasing AI/ML, Data Science, and Data Analytics projects and skills.

## Features

- ✨ Modern, clean, and minimal design
- 🌓 Light and Dark mode toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Professional color palette with gradient accents
- ⚡ Smooth animations and transitions
- 🔍 ATS-friendly content structure
- 📄 Resume section with downloadable PDF support
- 🚀 Built with React and Vite

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with CSS variables for theming

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/              # Static assets (add your resume PDF here)
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Skills.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization Guide

### 1. Update Personal Information

Edit the following files to update your personal information:

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Contact Section**: `src/components/Contact.jsx`
- **Resume Section**: `src/components/Resume.jsx`

### 2. Update Projects

Edit `src/components/Projects.jsx` to add/update your projects:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    summary: 'One-sentence summary',
    description: 'Detailed description...',
    techStack: ['Python', 'TensorFlow', '...'],
    githubLink: 'https://github.com/yourusername/project',
    problemSolved: 'What problem it solves...',
    learnings: 'What you learned...',
    impact: 'Impact of the project...'
  },
  // Add more projects...
]
```

### 3. Update Skills

Edit `src/components/Skills.jsx` to update your skills:

```jsx
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Skill 1', 'Skill 2', ...]
  },
  // Add more categories...
]
```

### 4. Add Resume PDF

1. Place your resume PDF in the `public` folder
2. Update the download link in `src/components/Resume.jsx`:

```jsx
const handleDownload = () => {
  const link = document.createElement('a')
  link.href = '/your-resume.pdf'
  link.download = 'Durvesh-K-Resume.pdf'
  link.click()
}
```

### 5. Update Social Links

Update all social media links in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Resume.jsx`

### 6. Customize Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --accent-primary: #0066cc;  /* Your primary color */
  --accent-secondary: #0052a3; /* Your secondary color */
  /* ... more colors ... */
}
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

4. Deploy: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out!

---

Built with ❤️ by Durvesh K

