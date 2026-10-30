# GharKaKhana – Homemade Food Ordering Platform

Frontend-only university semester project. **Homemade Food, Delivered with Love.**

Built with HTML5, CSS3, Vanilla JavaScript, Bootstrap 5 and Bootstrap Icons. No backend, no database, no real payments.

## How to run

1. Unzip the folder.
2. Double-click `index.html` (opens in your browser). No server needed.
3. You need an internet connection for Bootstrap, Bootstrap Icons and Google Fonts (loaded from CDNs).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home / food discovery, categories, popular meals, Chef Hira's cakes, featured chefs |
| `explore.html` | Search, filters, category pills, food listing, chef modal, cart panel |
| `cart.html` | Cart, order summary, delivery form, payment options, simulated checkout |

## Images (please add these files)

The images could not be bundled automatically, so every image shows a friendly emoji placeholder until you add real photos. Download free photos (e.g. from [Unsplash](https://unsplash.com)) and save them in the `images/` folder with **exactly these names** (JPG, ideally about 800×600):

| File | Used for | Unsplash search |
|------|----------|-----------------|
| `hero.jpg` | Homepage hero background (wide, 1600×900+) | pakistani food spread |
| `biryani.jpg` | Chicken Biryani, Beef Pulao | chicken biryani |
| `karahi.jpg` | Chicken Karahi | chicken karahi |
| `burger.jpg` | Zinger Burger, Seekh Kebabs | homemade burger / bbq |
| `dessert.jpg` | Kheer, promo banner | pakistani dessert kheer |
| `chef.jpg` | All chef profile photos (square works best) | home chef cooking |
| `breakfast.jpg` | Homemade Parathas | paratha breakfast |
| `kitchen.jpg` | About section, Chicken Wrap | home kitchen cooking |
| `cake-chocolate.jpg` | Chocolate Birthday Cake | chocolate birthday cake |
| `cake-bento.jpg` | Customized Bento Cake | bento cake |
| `cake-redvelvet.jpg` | Red Velvet Cake | red velvet cake |
| `cake-wedding.jpg` | Customized Wedding Cake | wedding cake |

Want a different photo for each food or chef? Change the `image` / `avatar` paths in the data arrays at the top of `js/script.js`.

## Updating sample data

All data lives at the top of `js/script.js`: `CHEFS`, `FOODS`, `CITIES`, `HOME_CATEGORIES`, `FILTER_CATEGORIES` and `DELIVERY_FEE`. Edit there and every page updates.

## Features

- Responsive mobile-first layout with hamburger menu and collapsible filters
- Live search by food, chef or city; filters for city, category, price, rating and prep time; Clear Filters
- Chef details modal with menu, prices and prep times
- Cart (offcanvas panel + cart page): add, increase, decrease, remove, subtotal, delivery fee, total, item count
- Cart saved in `localStorage`, shared across all three pages
- **Chef Hira's customizable cakes:** size (1/2/3/5 lb), flavour, cake message, decoration notes and delivery date are chosen in a modal, stored with the cart item, and shown in the cart, offcanvas and order confirmation. The same cake with different customizations becomes separate cart lines.
- Checkout form validation, payment option selection, sample order ID, success modal, cart cleared after order

## Important notes

- All prices, ratings, preparation times, delivery fees and chef profiles are **illustrative sample data**.
- Cake base prices are samples; final prices for special decorations may vary.
- Checkout is a **demonstration only**. No real order or payment is processed.
- Contact details in the footer are sample placeholders.
