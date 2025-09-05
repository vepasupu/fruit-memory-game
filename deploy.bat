@echo off
REM Auto-deploy script for Fruit Memory Game PWA (Windows)
echo 🍎 Deploying Fruit Memory Game...

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit: Fruit Memory Game PWA"
    echo ✅ Git repository initialized
) else (
    echo 📝 Adding changes...
    git add .
    
    REM Check if there are changes to commit
    git diff --staged --quiet >nul 2>&1
    if %errorlevel% equ 0 (
        echo ℹ️ No changes to deploy
        goto :end
    )
    
    echo 💾 Committing changes...
    git commit -m "Update: %date% %time%"
)

echo.
echo 🚀 Push to GitHub to trigger auto-deployment!
echo    git remote add origin https://github.com/yourusername/fruit-memory-game.git
echo    git push -u origin main
echo.
echo 🌐 After pushing, your game will be live at:
echo    https://your-netlify-url.netlify.app
echo.
echo ✨ Every future git push will auto-deploy!

:end
pause
