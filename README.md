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

## Font
Uses Google Fonts:
- **Syne** (headings, body) — bold, geometric
- **Space Mono** (labels, tags, code-like text) — technical feel

Both load from Google Fonts CDN. No installation needed.
