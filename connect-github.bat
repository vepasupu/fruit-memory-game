@echo off
echo 🚀 GitHub Repository Connection Script
echo.
echo This script will connect your local repository to GitHub
echo.
echo 📋 FIRST: Complete these steps on GitHub:
echo    1. Create repository named: fruit-memory-game
echo    2. Make it PUBLIC
echo    3. Do NOT initialize with README, .gitignore, or license
echo    4. Copy the repository URL when created
echo.
set /p repo_url="📎 Paste your GitHub repository URL here: "

echo.
echo 🔗 Connecting to GitHub...
git remote add origin %repo_url%

echo 📤 Pushing your game to GitHub...
git push -u origin master

if %errorlevel% neq 0 (
    echo.
    echo ⚠️ If that failed, try with 'main' branch:
    git branch -M main
    git push -u origin main
)

echo.
echo ✅ SUCCESS! Your game is now on GitHub!
echo.
echo 🌐 Next steps:
echo    1. Go to https://netlify.com
echo    2. Click "Add new site" → "Import from Git"
echo    3. Connect your fruit-memory-game repository
echo    4. Deploy!
echo.
echo 📱 You'll get a live URL that works on any mobile device!
echo.
pause
