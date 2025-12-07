# Momshies Website

A simple website with just a sad face.

## Deployment Instructions

### GitHub Deployment

1. Create a new repository on GitHub (https://github.com/new)
2. Name it something like "momshies-website" or "dumb-website2"
3. Don't initialize it with a README (since we already have one)
4. Run these commands to push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Vercel Deployment

#### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

#### Option 2: Using Vercel Dashboard

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a static site and deploy it
5. Your site will be live at a URL like `your-project.vercel.app`

