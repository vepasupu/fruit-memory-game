#!/bin/bash

# Auto-deploy script for Fruit Memory Game PWA
echo "🍎 Deploying Fruit Memory Game..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Fruit Memory Game PWA"
    echo "✅ Git repository initialized"
else
    echo "📝 Adding changes..."
    git add .
    
    # Check if there are changes to commit
    if git diff --staged --quiet; then
        echo "ℹ️ No changes to deploy"
        exit 0
    fi
    
    echo "💾 Committing changes..."
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo "🚀 Push to GitHub to trigger auto-deployment!"
echo "   git remote add origin https://github.com/yourusername/fruit-memory-game.git"
echo "   git push -u origin main"
echo ""
echo "🌐 After pushing, your game will be live at:"
echo "   https://your-netlify-url.netlify.app"
echo ""
echo "✨ Every future git push will auto-deploy!"
