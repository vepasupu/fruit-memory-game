# 🚀 Auto-Deploy Setup Guide

Set up seamless deployment where every change you make automatically goes live!

## 🎯 **One-Time Setup (5 minutes)**

### **Step 1: Create GitHub Repository**
1. Go to [github.com](https://github.com) and sign in/create account
2. Click **"New repository"**
3. Name it: `fruit-memory-game`
4. Make it **Public**
5. **Don't** initialize with README (we have files already)
6. Click **"Create repository"**

### **Step 2: Connect Local to GitHub**
```bash
cd c:\code\vibe\fruit-memory-pwa

# Initialize git (if not done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Fruit Memory Game PWA"

# Connect to GitHub (replace with your username)
git remote add origin https://github.com/YOURUSERNAME/fruit-memory-game.git

# Push to GitHub
git push -u origin main
```

### **Step 3: Connect Netlify to GitHub**
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** and authorize
4. Select your **`fruit-memory-game`** repository
5. Deploy settings:
   - **Build command**: Leave empty
   - **Publish directory**: Leave empty (root)
6. Click **"Deploy site"**
7. **Copy your live URL** (e.g., `https://amazing-game-123.netlify.app`)

## ✨ **That's it! Now every change auto-deploys:**

### **Daily Workflow:**
```bash
# Make changes to your game files
# Save in VS Code

# Deploy changes (run in PWA folder)
git add .
git commit -m "Added new feature"
git push

# Your changes are LIVE in 30 seconds! 🚀
```

## 🛠️ **Even Easier: Use the Deploy Script**

### **Windows:**
```bash
cd c:\code\vibe\fruit-memory-pwa
.\deploy.bat
```

### **Mac/Linux:**
```bash
cd c:\code\vibe\fruit-memory-pwa
chmod +x deploy.sh
./deploy.sh
```

## 🔄 **VS Code Integration (Super Easy)**

### **Method 1: VS Code Git Panel**
1. Make changes to your files
2. Go to **Source Control** panel (Ctrl+Shift+G)
3. Type commit message
4. Click **✓ Commit**
5. Click **↑ Push**
6. **Live in 30 seconds!**

### **Method 2: VS Code Terminal**
```bash
# In VS Code terminal (Ctrl+`)
git add .
git commit -m "Updated game logic"
git push
```

## 🎯 **Custom Domain (Optional)**

### **If you have a domain:**
1. In Netlify dashboard → **Domain settings**
2. Add your custom domain
3. Follow DNS setup instructions
4. Your game at `https://yourdomain.com`

### **Free Netlify subdomain:**
1. In Netlify → **Site settings** → **Change site name**
2. Choose: `fruit-memory-game` → `https://fruit-memory-game.netlify.app`

## 📱 **Instant Testing Workflow**

```
1. Edit game in VS Code
2. Save file (Ctrl+S)
3. git add . && git commit -m "fix" && git push
4. Wait 30 seconds
5. Refresh mobile browser - changes live!
```

## 🔧 **Advanced: Watch Mode (Auto-commit)**

Create `watch.bat` for Windows:
```bash
@echo off
:loop
timeout /t 30 /nobreak >nul
git add .
git diff --staged --quiet || (
    git commit -m "Auto-update: %time%"
    git push
    echo ✅ Changes deployed!
)
goto loop
```

Run once, it auto-deploys every 30 seconds when you make changes!

## 🎉 **Benefits of This Setup**

- ✅ **Zero friction** - just save and push
- ✅ **Version control** - never lose changes
- ✅ **Instant live testing** on any device
- ✅ **Shareable URL** - send to anyone
- ✅ **Professional deployment** pipeline
- ✅ **Free hosting** forever (Netlify free tier)
- ✅ **Custom domain** support
- ✅ **HTTPS** automatically

## 🚨 **Quick Commands Reference**

```bash
# Quick deploy
git add . && git commit -m "update" && git push

# Undo last commit (if mistake)
git reset --soft HEAD~1

# See deployment status
# Check netlify.com dashboard

# View live site
# https://your-netlify-url.netlify.app
```

---

**After setup, your workflow becomes:**
1. **Edit** game in VS Code
2. **Save** files
3. **Run**: `git add . && git commit -m "update" && git push`
4. **Live** in 30 seconds! 🚀

No more zip uploads, drag & drop, or manual deployment! 🎉
