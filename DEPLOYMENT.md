# GitHub Pages Deployment Guide

## Quick Deploy (Vanilla JS Version)

Your WordCamp Bhopal 2025 Poster Creator is ready to deploy to GitHub Pages!

### Steps:

1. **Enable GitHub Pages**
   - Go to your repository: https://github.com/ethicaladitya/wcbhopal-poster-maker
   - Click on **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select branch: **main**
   - Select folder: **/ (root)**
   - Click **Save**

2. **Wait for Deployment**
   - GitHub will automatically build and deploy your site
   - This usually takes 1-2 minutes
   - Your site will be live at: `https://ethicaladitya.github.io/wcbhopal-poster-maker/`

3. **Verify**
   - Visit the URL above
   - Test the poster creator functionality

## Important Notes

### Image Paths
The current code uses paths like `uploads/wordcamp-poster1.png`. This has been updated to use relative paths for better compatibility with GitHub Pages.

**Option 1: Use relative paths (Recommended)**
Change `/uploads/` to `./public/uploads/` in:
- `index.html` (vanilla version)
- `script.js` (vanilla version)

**Option 2: Add base path**
If deploying the React version, update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/wcbhopal-poster-maker/',
  // ... rest of config
})
```

### Custom Domain (Optional)
If you want to use a custom domain:
1. Add a `CNAME` file to the root with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use the custom domain

## Troubleshooting

**Images not loading?**
- Check that image paths are correct
- Ensure images are in the `public/uploads/` folder
- Verify the paths in your HTML/JS files

**404 errors?**
- Make sure you selected the correct branch and folder in GitHub Pages settings
- Wait a few minutes for deployment to complete

## Alternative: Deploy React Version

If you prefer to deploy the React version instead:

1. Build the production version:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` folder

3. In GitHub Pages settings:
   - Select folder: **/dist** (if available)
   - OR use GitHub Actions for automatic deployment

Would you like me to set up automatic deployment with GitHub Actions?
