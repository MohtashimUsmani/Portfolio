# Mohtashim Usmani — Portfolio

Cinematic full-stack portfolio built with React.js

---

## 🚀 Deploy on GitHub Pages (Step by Step)

### STEP 1 — Edit package.json
Open `package.json` and change this line:
```
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/mohtashim-portfolio"
```
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.
Example: if your username is `mohtashim99`, it becomes:
```
"homepage": "https://mohtashim99.github.io/mohtashim-portfolio"
```

---

### STEP 2 — Install dependencies
Open terminal in this folder and run:
```bash
npm install
```

---

### STEP 3 — Create a GitHub Repository
1. Go to https://github.com
2. Click **"New"** (green button)
3. Repository name: `mohtashim-portfolio`
4. Keep it **Public**
5. Do NOT check "Add README"
6. Click **"Create repository"**

---

### STEP 4 — Push your code to GitHub
Run these commands one by one in your terminal:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/mohtashim-portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

---

### STEP 5 — Deploy to GitHub Pages
```bash
npm run deploy
```
This command will:
- Build the project automatically
- Push the build to a `gh-pages` branch on GitHub
- Make your site live!

---

### STEP 6 — Your site is LIVE! 🎉
Visit: `https://YOUR_GITHUB_USERNAME.github.io/mohtashim-portfolio`

It may take 1-2 minutes to go live after first deploy.

---

## 🔄 How to Update Your Site Later

Whenever you make changes:
```bash
git add .
git commit -m "Updated portfolio"
git push
npm run deploy
```

---

## 💻 Run Locally

```bash
npm install
npm start
```
Opens at http://localhost:3000

---

## 📦 Tech Stack
- React 18
- Framer Motion
- React Icons
- React Type Animation
- React Scroll
- tsParticles
- React Parallax Tilt
