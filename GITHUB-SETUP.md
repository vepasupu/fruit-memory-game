# 🚀 GitHub Repository Setup Instructions

## Step 1: Create Repository on GitHub

1. **Open browser** and go to: https://github.com
2. **Sign in** to your GitHub account (or create one if needed)
3. **Click the green "New" button** (or the "+" icon → "New repository")
4. **Fill in repository details:**
   - Repository name: `fruit-memory-game`
   - Description: `🍎 A beautiful Progressive Web App memory matching game with fruits`
   - Visibility: **Public** (so Netlify can access it for free)
   - ❌ **Do NOT check** "Add a README file"
   - ❌ **Do NOT check** "Add .gitignore"
   - ❌ **Do NOT check** "Choose a license"
5. **Click "Create repository"**

## Step 2: Copy the Repository URL
After creating, GitHub will show you a page with commands. 
**Copy the HTTPS URL** - it will look like:
```
https://github.com/YOURUSERNAME/fruit-memory-game.git
```

## Step 3: Run These Commands
Open PowerShell in VS Code (Ctrl+`) and run:

```powershell
# Make sure you're in the right directory
cd c:\code\vibe\fruit-memory-pwa

# Add the GitHub repository as remote (replace YOURUSERNAME)
git remote add origin https://github.com/YOURUSERNAME/fruit-memory-game.git

# Push your code to GitHub
git push -u origin master

# If master branch doesn't work, try main:
# git branch -M main
# git push -u origin main
```

## Step 4: Verify Upload
Refresh your GitHub repository page - you should see all your game files uploaded!

---

**Once this is done, proceed to NETLIFY-SETUP.md for the final step!**
