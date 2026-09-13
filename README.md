# Golden Arrow Club

Vue 3 clothing lookbook / e-commerce frontend. Brand site with collections, product gallery, and GSAP motion. Shopping flow is not finished.

App lives in [`golden-arrow/`](./golden-arrow/).

## What works

- Home product grid (first 4 items)
- Collection page with card reveal animations
- Product gallery route (`/collection/:slug`)
- Responsive nav and mobile drawer
- Pinia product store loaded from `public/products.json`
- Light Rays WebGL on collection
- Cart **route** and add-to-cart **button** (UI only)

## Tech

Vue 3, Vite, TypeScript, Tailwind CSS, Pinia, Vue Router, GSAP, OGL

## What needs to be done

Ship these before putting a live URL on a resume.

### Must have (demo)

- [ ] Implement `src/stores/cart.ts` (add, remove, quantity, total, localStorage)
- [ ] Build `src/pages/cart.vue` (list items, change qty, remove, subtotal)
- [ ] Wire add-to-cart so the plus button actually adds a product
- [ ] Add size select (S–XL) before add; gallery currently has no size
- [ ] Replace gallery placeholder text `"color"` with a real color/size picker
- [ ] Cart icon badge with item count
- [ ] Write real copy on `src/pages/story.vue` (still placeholder)
- [ ] Unique product photos (six names currently share two image sets; all $35)
- [ ] Production build and host `dist` on the domain

### Cleanup

- [ ] Delete empty stubs: `src/components/navBar.vue`, `src/components/heroPage.vue`
- [ ] Keep one `addToCart` component (duplicates in `assets/` and `components/`)
- [ ] Fix `index.html` `lang="ts"` → `lang="en"`
- [ ] Push remaining local commits

### Not required for a portfolio demo

Stripe/PayPal, user accounts, admin, search, Flask backend. This repo is frontend only.

## Run

```sh
cd golden-arrow
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

# AIM HIGHER
