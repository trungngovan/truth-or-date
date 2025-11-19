# Vercel Deployment Guide - Truth or Dare 18+ Adult Edition

## Prerequisites

Before deploying to Vercel, ensure you have:

1. ✅ A [Vercel account](https://vercel.com/signup) (free tier works perfectly)
2. ✅ [Git](https://git-scm.com/) installed on your computer
3. ✅ A [GitHub](https://github.com/), [GitLab](https://gitlab.com/), or [Bitbucket](https://bitbucket.org/) account
4. ✅ [Vercel CLI](https://vercel.com/docs/cli) installed (optional, for command-line deployment)

---

## Deployment Method 1: Via Vercel Dashboard (Recommended for Beginners)

### Step 1: Push Your Code to Git Repository

1. **Initialize Git repository** (if not already done):
   ```bash
   cd /Users/trungngovan/Repositories/personal-repo/truth-or-dare
   git init
   ```

2. **Create `.gitignore` file** (if not exists):
   ```bash
   echo "node_modules
   dist
   .DS_Store
   *.log" > .gitignore
   ```

3. **Commit your code**:
   ```bash
   git add .
   git commit -m "Initial commit - Truth or Dare 18+ Adult Edition"
   ```

4. **Create a new repository on GitHub**:
   - Go to [GitHub](https://github.com/new)
   - Repository name: `truth-or-dare-18plus` (or your preferred name)
   - Set to **Private** (recommended for adult content)
   - Click "Create repository"

5. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/truth-or-dare-18plus.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Login" and sign in with your GitHub account

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find your `truth-or-dare-18plus` repository
   - Click "Import"

3. **Configure Project**:
   - **Project Name**: `truth-or-dare-18plus` (or your preferred name)
   - **Framework Preset**: Vite (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Configure Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

---

## Deployment Method 2: Via Vercel CLI (For Advanced Users)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

Navigate to your project directory and run:

```bash
cd /Users/trungngovan/Repositories/personal-repo/truth-or-dare
vercel
```

Follow the prompts:
- **Set up and deploy**: Yes
- **Which scope**: Select your account
- **Link to existing project**: No
- **Project name**: truth-or-dare-18plus
- **Directory**: `./` (press Enter)
- **Override settings**: No

### Step 4: Deploy to Production

```bash
vercel --prod
```

---

## Post-Deployment Checklist

After deployment, verify the following:

- [ ] Age verification modal appears on first visit
- [ ] Language selector (EN/VI) works correctly
- [ ] Vietnamese fonts display properly
- [ ] All neon effects and animations work
- [ ] Card flip animations are smooth
- [ ] Truth and Dare buttons function correctly
- [ ] Challenge counter increments
- [ ] Copyright footer displays at bottom
- [ ] Mobile responsive design works
- [ ] All 18+ content displays correctly

---

## Environment Variables (If Needed)

Currently, this project doesn't require environment variables. If you add any in the future:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy the project

---

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- ✅ Deploy every push to `main` branch to production
- ✅ Create preview deployments for pull requests
- ✅ Run build checks before deploying

To update your site:
```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically rebuild and deploy!

---

## Troubleshooting

### Build Fails

**Error**: `Command "npm run build" exited with 1`

**Solution**:
1. Test build locally first:
   ```bash
   npm run build
   ```
2. Fix any TypeScript or build errors
3. Commit and push changes

### Fonts Not Loading

**Error**: Vietnamese characters display incorrectly

**Solution**:
- Ensure Google Fonts are loaded in `index.html`
- Check that Bebas Neue, Rajdhani, and Inter are specified
- Clear Vercel cache and redeploy

### 404 Errors on Refresh

**Error**: Page not found when refreshing on routes

**Solution**:
- Ensure `vercel.json` is present with SPA rewrites
- Check that the configuration is correct

### Age Verification Not Showing

**Error**: Age modal doesn't appear

**Solution**:
- Clear browser cache and cookies
- Verify `isAgeVerified` state is set to `false` by default
- Check browser console for JavaScript errors

---

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Compression (Brotli/Gzip)
- ✅ Edge caching
- ✅ Image optimization

Your site should load in < 2 seconds globally!

---

## Security & Privacy

For adult content sites:

1. **Set Repository to Private** on GitHub
2. **Consider adding password protection**:
   - Vercel Pro plan offers password protection
   - Or implement custom authentication

3. **Add robots.txt** to prevent search engine indexing:
   ```txt
   User-agent: *
   Disallow: /
   ```

4. **Add meta tags** to `index.html`:
   ```html
   <meta name="robots" content="noindex, nofollow">
   <meta name="rating" content="adult">
   ```

---

## Monitoring & Analytics

### Vercel Analytics (Optional)

1. Go to your project → Analytics
2. Enable Vercel Analytics
3. View real-time visitor data

### Google Analytics (Optional)

Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

---

## Support & Resources

- 📚 [Vercel Documentation](https://vercel.com/docs)
- 💬 [Vercel Community](https://github.com/vercel/vercel/discussions)
- 🐛 [Report Issues](https://github.com/vercel/vercel/issues)
- 📧 Contact: trung2601.it@gmail.com

---

## Quick Reference Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (CLI)
vercel

# Deploy to production (CLI)
vercel --prod

# Check deployment status
vercel ls

# View deployment logs
vercel logs
```

---

## Estimated Deployment Time

- ⏱️ **Initial Setup**: 5-10 minutes
- ⏱️ **Build Time**: 1-2 minutes
- ⏱️ **Total Time**: ~10-15 minutes

---

## Success! 🎉

Your Truth or Dare 18+ Adult Edition is now live on Vercel!

**Your deployment URL**: `https://your-project-name.vercel.app`

Share it responsibly and enjoy! 🔥

---

**Created by TrungNgo** | trung2601.it@gmail.com
