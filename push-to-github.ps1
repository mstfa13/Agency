# Apex Labs - GitHub Push Script
# Run this script after creating your GitHub repository

Write-Host "🚀 Apex Labs - GitHub Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "❌ Git repository not found! Please run 'git init' first." -ForegroundColor Red
    exit 1
}

Write-Host "📝 Setting up remote repository..." -ForegroundColor Yellow

# Add remote origin
$remoteUrl = "https://github.com/mstfa13/apex-labs.git"

# Check if remote already exists
$existingRemote = git remote get-url origin 2>$null

if ($existingRemote) {
    Write-Host "⚠️  Remote 'origin' already exists: $existingRemote" -ForegroundColor Yellow
    $confirm = Read-Host "Do you want to update it? (y/n)"
    if ($confirm -eq "y") {
        git remote set-url origin $remoteUrl
        Write-Host "✅ Remote URL updated!" -ForegroundColor Green
    }
} else {
    git remote add origin $remoteUrl
    Write-Host "✅ Remote 'origin' added!" -ForegroundColor Green
}

Write-Host ""
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow

# Push to GitHub
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Your repository: https://github.com/mstfa13/apex-labs" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📋 Next Steps:" -ForegroundColor Yellow
    Write-Host "  1. Go to https://vercel.com" -ForegroundColor White
    Write-Host "  2. Sign in with GitHub" -ForegroundColor White
    Write-Host "  3. Import the 'apex-labs' repository" -ForegroundColor White
    Write-Host "  4. Click 'Deploy' and wait 1-2 minutes" -ForegroundColor White
    Write-Host "  5. Your site will be live! 🎉" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Push failed! Please check the error above." -ForegroundColor Red
    Write-Host "💡 Make sure you've created the repository on GitHub first." -ForegroundColor Yellow
    Write-Host "   Visit: https://github.com/new" -ForegroundColor Cyan
    Write-Host ""
}

Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
