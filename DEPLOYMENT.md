# Apex - Egyptian Digital Agency

Official website for Apex, an Egyptian brand specialized in building digital products, brands, and experiences.

## 🚀 Features

- **Bilingual Support**: Toggle between English and Arabic with a single click
- **Contact Form**: Integrated with Google Sheets for lead capture
- **Project Portfolio**: Filterable project showcase (Website, Landing Page, iOS App, Android App, Branding)
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fast Performance**: Optimized for speed and user experience

## 📋 Prerequisites

Before deploying, make sure you have:
- A GitHub account (username: mstfa13)
- A Vercel account (can sign up with GitHub)
- Google Sheets webhook URL for contact form integration

## 🔧 Setup Instructions

### 1. Configure Google Sheets Integration

1. Create a Google Sheet for storing contact form submissions
2. Set up a webhook using Google Apps Script or a service like Zapier/Make
3. Open `assets/js/contact.js`
4. Replace `YOUR_WEBHOOK_URL` with your actual webhook URL:
   ```javascript
   const WEBHOOK_URL = 'https://your-webhook-url-here';
   ```

### 2. Update Social Media Links

Edit the footer in `index.html` to add your actual social media URLs:
- Instagram: Line ~792
- LinkedIn: Line ~798
- Facebook: Line ~804

### 3. Customize Content

- Update images in `assets/images/` with your own project screenshots
- Modify service descriptions to match your offerings
- Update testimonials in the testimonials section

## 🚀 Deployment to GitHub & Vercel

### Step 1: Initialize Git Repository

Open PowerShell in the project directory and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Apex website"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `apex-website` (or your preferred name)
3. Keep it public or private (your choice)
4. Don't initialize with README (we already have files)
5. Click "Create repository"

### Step 3: Push to GitHub

```powershell
# Add the remote repository
git remote add origin https://github.com/mstfa13/apex-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

If prompted for credentials, use:
- Username: mstfa13
- Password: Your GitHub Personal Access Token (not your account password)

To create a Personal Access Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with 'repo' permissions
3. Copy and save it securely

### Step 4: Deploy to Vercel

#### Option A: Via Vercel Website (Easiest)

1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "Add New" → "Project"
4. Import your GitHub repository (apex-website)
5. Vercel will auto-detect the settings
6. Click "Deploy"
7. Your site will be live in minutes!

#### Option B: Via Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### Step 5: Configure Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed by Vercel

## 📁 Project Structure

```
apex-website/
├── index.html              # Main homepage
├── contact.html            # Contact form page
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet with RTL support
│   ├── js/
│   │   ├── script.js      # Main JavaScript + project filters
│   │   ├── translations.js # Bilingual support (EN/AR)
│   │   └── contact.js     # Contact form handler
│   └── images/            # All image assets
├── README.md              # This file
└── DEPLOYMENT.md          # Deployment guide
```

## 🌐 Language Support

The website supports both English and Arabic:
- Click the 🌐 button in the navigation to toggle languages
- Language preference is saved in browser localStorage
- Full RTL support for Arabic

## 📧 Contact Form Integration

The contact form collects:
- Full Name
- Email Address
- Phone Number
- Service Interest (Website, Landing Page, iOS App, Android App, Branding, UI/UX, Other)
- Project Details

All submissions are sent to your Google Sheets via webhook.

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --majorelle-blue: hsl(241, 77%, 63%);
  --raisin-black-2: hsl(240, 8%, 12%);
  /* ... more colors ... */
}
```

### Translations
Edit `assets/js/translations.js` to modify English/Arabic text.

## 🤝 Support

For questions or issues, contact:
- Email: www.mstfaakram@gmail.com
- GitHub: @mstfa13

## 📄 License

© 2025 Apex. All Rights Reserved - Egyptian Digital Agency

---

Built with ❤️ in Egypt
