# antavii-foods

A simple, fast recipe-discovery site that helps visitors explore dishes by category and filters.

> Live demo: https://isaaciyo.github.io/antavii-foods/

## Overview

* Top navigation includes **Recipes** (with quick links like *Most Searched*, *Breakfast*, *Lunch*, *Dinner*) and **Contact Us**.
* Landing page features a hero (“Delicious Treats at your fingertips / What do you feel like today?”), quick filters by **Cuisine / Diet / Meal**, and tappable category cards (e.g., **Salads**, **Pasta**, **Pies**, **Cakes & Sweets**, **Meat**, **Cajun**). ([isaaciyo.github.io][1])

## Features

* Category-based browsing via prominent cards
* Quick filter chips (Cuisine, Diet, Meal)
* Lightweight, responsive layout suited to mobile and desktop
* Deployed on GitHub Pages for zero-config hosting

## Tech Stack

* **Frontend:** Static HTML, CSS, and JavaScript (no framework required)
* **Hosting:** GitHub Pages

> If your local project uses a framework or API keys, update this section accordingly.

## Getting Started (Local Development)

You can open the site directly, or run a tiny static server for cleaner routing.

**Option A — Open directly**

1. Clone or download the project.
2. Open `index.html` in your browser.

**Option B — Serve locally**

```bash
# using Python 3
python -m http.server 5173

# or Node's http-server (if installed)
npx http-server -p 5173
```

Then visit `http://localhost:5173`.

## Project Structure (suggested)

```
antavii-foods/
├─ index.html
├─ /assets        # images, icons
├─ /styles        # CSS files
├─ /scripts       # JS modules
└─ /data          # optional JSON/data seeds (if used)
```

> Adjust the folders above to match your repo if names differ.

## Content & Attribution

* Replace any placeholder or externally sourced images with assets you own or that are properly licensed.
* If you keep third-party imagery, add credits in a `CREDITS.md` or in this README’s **Acknowledgements** section.

## Accessibility & SEO (baseline)

* Use semantic headings for sections (Hero, Filters, Categories)
* Ensure accessible names for filter controls and images (`alt` text)
* Include basic SEO metadata (`<title>`, `<meta name="description">`, social preview tags)

## Deployment

* Push to the repository’s `main` (or `gh-pages`) branch configured for GitHub Pages.
* In **Settings → Pages**, set *Source* to your branch (e.g., `main` → `/root`).
* Wait for Pages to build, then confirm the site URL.

## Roadmap

* Global search with autosuggest
* Recipe detail pages (ingredients, steps, nutrition)
* Favorites / saved recipes (localStorage)
* Pagination or infinite scroll for large result sets
* Dark mode toggle
* Optional PWA support (offline cache for recent recipes)

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push the branch: `git push origin feat/your-feature`
5. Open a Pull Request

## Troubleshooting

* **Images not loading on GitHub Pages:** ensure asset paths are relative (e.g., `./assets/...`) and case-sensitive.
* **CORS on remote images/APIs:** prefer hosting images locally or use services that allow cross-origin reads.

## License

Add your preferred license (e.g., MIT) or link to `LICENSE`.

## Acknowledgements

* Design inspiration and category imagery references credited to their respective owners. Add specific attributions here if you retain third-party media.

---

**Maintainer:** Antavii Foods team
**Contact:** Use the “Contact Us” link on the site or open an issue in the repo. ([isaaciyo.github.io][1])

[1]: https://isaaciyo.github.io/antavii-foods/ "Home"

