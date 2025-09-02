# antavii-foods

A recipe discovery web app powered by the **Edamam Recipe API** and the **Spoonacular Recipe API**, designed to help visitors explore dishes by category, filter by diet/cuisine, and get inspired for their next meal.

> **Live demo:** [Antavii Foods](https://isaaciyo.github.io/antavii-foods/)

---

## Overview

* Browse recipes by categories like *Salads, Pasta, Pies, Cakes & Sweets, Meat, Cajun*
* Filter by **Cuisine, Diet, Meal** type
* Quick links for *Most Searched*, *Breakfast*, *Lunch*, *Dinner*
* Fully responsive with **Bootstrap**
* Enhanced interactivity via **jQuery**
* Deployed with GitHub Pages

---

## Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6), jQuery
* **UI Framework:** Bootstrap
* **APIs:**

  * [Edamam Recipe API](https://developer.edamam.com/)
  * [Spoonacular Recipe API](https://spoonacular.com/food-api)
* **Hosting:** GitHub Pages

---

## Project Structure (example)

```
antavii-foods/
├── index.html
├── /assets         # images, icons
├── /styles         # CSS files (Bootstrap + custom)
├── /scripts        # JS files
│   ├── api.js      # API fetch logic (Edamam & Spoonacular)
│   ├── ui.js       # UI interactions (filters, modals, etc.)
│   └── main.js     # initialization
└── /data           # optional static JSON seeds
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/antavii-foods.git
cd antavii-foods
```

### 2. Add API Keys

Both Edamam and Spoonacular require API keys. Create a `config.js` (or use `.env` if running with a local backend):

```js
// config.js
const CONFIG = {
  EDAMAM_APP_ID: "your-edamam-app-id",
  EDAMAM_APP_KEY: "your-edamam-app-key",
  SPOONACULAR_KEY: "your-spoonacular-key"
};
```


### 3. Run locally

Open `index.html` directly in your browser **or** serve with a local server:

```bash
# Python 3
python -m http.server 5173

# Node.js (http-server)
npx http-server -p 5173
```

Visit [http://localhost:5173](http://localhost:5173).

---

## Roadmap

* Recipe detail pages with ingredients, steps, and nutrition info
* Save favorites (via localStorage or backend)
* User login with custom preferences
* Dark mode toggle
* Progressive Web App (PWA) support

---

## Contributing

1. Fork this repository
2. Create your feature branch: `git checkout -b feat/awesome-feature`
3. Commit changes: `git commit -m "feat: add awesome feature"`
4. Push branch: `git push origin feat/awesome-feature`
5. Open a Pull Request

---

## Acknowledgements

* [Edamam Recipe API](https://developer.edamam.com/)
* [Spoonacular Recipe API](https://spoonacular.com/food-api)
* [Bootstrap](https://getbootstrap.com/)
* [jQuery](https://jquery.com/)

---
