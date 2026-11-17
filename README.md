# charmseer — Portfolio 2026

A clean, futuristic dark-mode portfolio for Sreeram Hrithwik.  
Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

## Files

```
index.html   — Structure & content
style.css    — All styling, CSS variables, dark/light themes
script.js    — Theme toggle, starfield, scroll animations, cursor
favicon.png  — Keep your existing favicon (already in the repo)
images/      — Keep your existing images folder
```

## To deploy

Just replace the files in your repo:

```bash
# From your cloned repo root
cp /path/to/new/index.html .
cp /path/to/new/style.css .
cp /path/to/new/script.js .
git add .
git commit -m "redesign: 2026 portfolio upgrade"
git push
```

GitHub Pages will auto-deploy if it's already configured (you have a CNAME so it is).

## Customising

### Fill in your experience (index.html)
Search for `[ Add Company ]` and replace with your real details.

### Fill in your projects (index.html)
Search for `XR Project 1` through `XR Project 5` and replace with:
- Real project name
- Description (1–2 sentences: what it is, platform, impact)
- Correct platform tags
- Link the card: change `<div class="project-card">` to `<a href="YOUR_URL" class="project-card" target="_blank" rel="noopener">`

### Update stats (index.html)
Find the `.about-stats` section and update the numbers to reflect your real metrics.

### Change accent color (style.css)
The accent color is `#00d4ff` (cyan). To change it globally:
- In `:root` → change `--accent` and `--accent2`
- In `[data-theme="light"]` → change `--accent` and `--accent2`

### Add a project image (optional)
Inside any `.project-card`, add before `.project-tags`:
```html
<img src="images/your-project.jpg" alt="Project name" class="project-img"/>
```
Then add to style.css:
```css
.project-img { width:100%; aspect-ratio:16/9; object-fit:cover; margin-bottom:1rem; }
```

## After changing style.css or script.js

Both pages load them as `style.css?v=…` and `script.js?v=…`. Bump that date in `index.html` and `petalworks/index.html` whenever you change either file. GitHub Pages lets browsers reuse cached files for 10 minutes, and without the bump a visitor can get the new page with the old styles.

## Project pages

Each project with its own page gets a folder, so `petalworks/index.html` is served at `charmseer.com/petalworks`. It reuses `style.css` and `script.js`; its own styles are at the bottom of `style.css` under `PETALWORKS PROJECT PAGE`, scoped to `body.page-petalworks`.

### Petalworks placeholders
- **Video:** in `petalworks/index.html`, find `VIDEO:`. Delete the placeholder div and uncomment the YouTube `<iframe>`, replacing `VIDEO_ID`.
- **Screenshots:** add them to `petalworks/images/` and swap each `<div class="pw-shot-ph">` for an `<img>` (see the `IMAGES:` comment). Use 16:9.
- **Store link:** find `STORE:` and set the button's `href` to the Meta Horizon Store listing once it's live.
- **Logos:** `petalworks/images/` holds the app icon (title lockup and store header), white logo (gallery watermark), banner (the video backdrop), `cover.jpg` (1200×630 link preview) and `favicon.png`.

## Font
Uses Google Fonts:
- **Syne** (headings, body) — bold, geometric
- **Space Mono** (labels, tags, code-like text) — technical feel

Both load from Google Fonts CDN. No installation needed.
