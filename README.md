# Golden Arrow Club

Vue 3 clothing lookbook / e-commerce frontend. Brand site with collections, product gallery, and GSAP motion. Cart store exists. Cart UI and button wiring are not finished.

App lives in [`golden-arrow/`](./golden-arrow/).

## What works

- Home product grid (first 4 items)
- Collection page with card reveal animations
- Product gallery route (`/collection/:slug`)
- Responsive nav and mobile drawer
- Pinia product store from `public/products.json` (prices in cents)
- Pinia cart store: `add`, `remove`, `count`, `subtotal`
- Gallery **Add to Cart** button calls `cart.add` (`AddToCartBig.vue`)
- Light Rays WebGL on collection

## Tech

Vue 3, Vite, TypeScript, Tailwind CSS, Pinia, Vue Router, GSAP, OGL

## What needs to be done

Ship these before putting a live URL on a resume.

### Must have (demo)

- [ ] Build `src/pages/cart.vue` (list items, change qty, remove, subtotal)
- [ ] Wire `AddToCartSmall.vue` — it imports the cart store but never calls `add`
- [ ] Wire **Buy Now** (currently no click handler)
- [ ] Cart icon badge using `cart.count`
- [ ] Size select (S–XL) before add; gallery has no size
- [ ] Real color picker (`color.vue` is a dummy yellow circle)
- [ ] Persist cart to `localStorage`
- [ ] Fix `clead()` typo in cart store (`clear`)
- [ ] Fix price math in `AddToCartBig.vue` — JSON is already cents (`3500`), then `price * 100` stores `$3500`
- [ ] Write real copy on `src/pages/story.vue` (still placeholder)
- [ ] Unique product photos (six names share two image sets)
- [ ] Production build and host `dist` on the domain

### Cleanup

- [ ] Delete empty stubs (`src/components/heroPage.vue` and unused duplicates)
- [ ] Fix `index.html` `lang="ts"` → `lang="en"`

### Not required for a portfolio demo

Stripe/PayPal, user accounts, admin, search. This repo is frontend only. Backend is not in this repo yet.

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
