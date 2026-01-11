# Local Assets Setup

This project now uses locally hosted images, fonts, and icons instead of external resources.

## Images

All images have been downloaded to the `public/images/` directory:

- `image_1.jpg` through `image_22.jpg` - Product and content images
- `wood-texture.jpg` - Background texture overlay

A total of 23 images are now stored locally.

## Fonts

### Work Sans

For the Work Sans font, we're using system font fallbacks:

```css
font-family: "Work Sans", "Helvetica Neue", Arial, sans-serif;
```

### Material Symbols

The Material Symbols font is loaded via CSS import in `src/app/globals.css`.
For fully local usage, you can download the font files:

1. Visit [Google Fonts Material Symbols](https://fonts.google.com/icons)
2. Select the icons you need
3. Download the font files (usually in WOFF2 format)
4. Place them in the `public/fonts/` directory
5. Update `public/fonts/material-symbols-local.css` to reference the local files

Currently, the CSS contains a placeholder with instructions.

## Updating External URLs

If you add new images to your components, make sure to download them locally and update the URLs to point to `/images/filename.jpg` instead of external URLs.

## Client Components

Some components and pages needed to be converted to Client Components to handle interactivity:

- `src/app/portfolio/page.tsx` - Added "use client" for interactive filters
- `src/app/dashboard/page.tsx` - Already had "use client" for state management
- `src/components/Contact/ContactForm.tsx` - Already had "use client" for form state
- `src/components/Header/Header.tsx` - Already had "use client" for mobile menu state
- `src/components/UI/Checkbox.tsx` - Added "use client" for interactive checkbox

## Benefits

- Faster loading times
- Offline capability
- Reduced dependency on external services
- Better privacy compliance
- More reliable performance
- Improved SEO and Core Web Vitals
