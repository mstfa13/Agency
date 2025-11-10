# 🚀 Apex Labs - Deployment Guide

## GitHub Setup

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in with your account (username: **mstfa13**)
2. Click the **"+"** icon in the top-right corner and select **"New repository"**
3. Enter repository details:
   - **Repository name**: `apex-labs`
   - **Description**: `Apex Labs - Digital Agency Website`
   - **Visibility**: Choose **Public** or **Private**
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```powershell
git remote add origin https://github.com/mstfa13/apex-labs.git
git push -u origin main
```

**OR** if you prefer SSH:

```powershell
git remote add origin git@github.com:mstfa13/apex-labs.git
git push -u origin main
```

---

## Vercel Deployment

### Step 3: Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** to link your GitHub account
4. Once logged in, click **"Add New..."** → **"Project"**
5. Import your GitHub repository:
   - Search for **"apex-labs"**
   - Click **"Import"**
6. Configure your project:
   - **Project Name**: `apex-labs` (or your preferred name)
   - **Framework Preset**: Leave as **"Other"**
   - **Root Directory**: `./`
   - **Build Command**: Leave empty (static site)
   - **Output Directory**: Leave empty or set to `./`
7. Click **"Deploy"**
8. Wait 1-2 minutes for deployment to complete ⏳

### Step 4: Your Website is Live! 🎉

Once deployed, Vercel will provide you with:
- **Production URL**: `https://apex-labs.vercel.app` (or similar)
- **Deployment dashboard** with analytics and settings

---

## Quick Commands Reference

### Git Commands (Future Updates)

When you make changes to your website:

```powershell
# Stage all changes
git add .

# Commit with a message
git commit -m "Description of your changes"

# Push to GitHub
git push origin main
```

**Note**: Vercel will automatically redeploy your site when you push to GitHub! ✨

---

## Custom Domain (Optional)

To use your own domain:

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

---

## Support

- **Email**: www.mostfaakram@gmail.com
- **GitHub**: [@mstfa13](https://github.com/mstfa13)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)

---

## Repository Information

- **GitHub Repo**: `https://github.com/mstfa13/apex-labs`
- **Local Path**: `C:\Users\Mostafa\Desktop\Apex`
- **Git Status**: ✅ Initialized and committed

---

**Ready to Deploy!** 🚀

Follow Steps 1-4 above to get your website live on the internet!
