# 🌐 Netlify Auto-Deploy Setup

## Step 1: Connect Repository to Netlify

1. **Open browser** and go to: https://netlify.com
2. **Sign up/Sign in** (you can use your GitHub account for easy setup)
3. **Click "Add new site"** button
4. **Choose "Import an existing project"**
5. **Select "Deploy with GitHub"**
6. **Authorize Netlify** to access your GitHub repositories
7. **Find and select** your `fruit-memory-game` repository
8. **Configure build settings:**
   - Build command: `(leave empty)`
   - Publish directory: `(leave empty)`
   - ✅ Our `netlify.toml` file handles all the configuration automatically!
9. **Click "Deploy site"**

## Step 2: Get Your Live URL

After deployment (takes 1-2 minutes):
1. **Copy the live URL** (something like: `https://amazing-name-123456.netlify.app`)
2. **Test the URL** on your mobile device
3. **Bookmark it** for easy access

## Step 3: Optional - Custom Site Name

1. **In Netlify dashboard** → Go to "Site settings"
2. **Click "Change site name"**
3. **Enter:** `fruit-memory-game` (if available)
4. **Your URL becomes:** `https://fruit-memory-game.netlify.app`

## Step 4: Test Auto-Deployment

Now test that changes auto-deploy:

```powershell
# Make a small change to test
# For example, edit the title in index.html

# Then deploy:
git add .
git commit -m "Test auto-deploy"
git push

# Wait 30-60 seconds, then refresh your live URL
# Your changes should be live!
```

## 🎉 **Success!**

Your setup is complete! Now every time you:
1. **Make changes** in VS Code
2. **Save files**
3. **Run:** `git add . && git commit -m "description" && git push`
4. **Changes go live** in 30-60 seconds automatically!

## 📱 **Share Your Game**

Your game is now live at: `https://your-netlify-url.netlify.app`
- ✅ **Works on any device**
- ✅ **Installable as PWA**
- ✅ **Works offline**
- ✅ **Auto-updates** when you push changes

## 🔄 **Daily Workflow**

```powershell
# Edit your game files in VS Code
# Save changes (Ctrl+S)

# Quick deploy:
git add .
git commit -m "Added new feature"
git push

# Or use the deploy script:
.\deploy.bat
```

**Your game is now professional-grade deployed! 🚀**
