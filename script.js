/* =========================================================
   GharKaKhana - script.js  (Vanilla JS, beginner friendly)
   All sample data is centralized in section 1.
   All prices, ratings, prep times, delivery fee and chef
   profiles are ILLUSTRATIVE sample data (university project).
   ========================================================= */

/* ---------- 1. SAMPLE DATA ---------- */
const DELIVERY_FEE = 150; // illustrative flat delivery fee (PKR)
const CART_KEY = 'gkk_cart';
const LOCATION_KEY = 'gkk_location';

const CITIES = ['Lahore', 'Islamabad', 'Faisalabad', 'Karachi', 'Rawalpindi'];

// Category cards shown on the homepage (filter = value used on Explore page)
const HOME_CATEGORIES = [
  { name: 'Pakistani Cuisine', filter: 'Pakistani', icon: 'bi-egg-fried' },
  { name: 'Biryani & Rice', filter: 'Biryani', icon: 'bi-basket2' },
  { name: 'BBQ & Grilled', filter: 'BBQ', icon: 'bi-fire' },
  { name: 'Fast Food', filter: 'Fast Food', icon: 'bi-lightning-charge' },
  { name: 'Healthy Meals', filter: 'Healthy', icon: 'bi-heart-pulse' },
  { name: 'Desserts', filter: 'Desserts', icon: 'bi-cake2' },
  { name: 'Breakfast', filter: 'Breakfast', icon: 'bi-cup-hot' },
  { name: 'Homemade Traditional Food', filter: 'Traditional', icon: 'bi-house-heart' }
];

// Category pills on Explore page
const FILTER_CATEGORIES = ['All', 'Pakistani', 'Biryani', 'BBQ', 'Fast Food', 'Healthy', 'Desserts', 'Breakfast', 'Traditional'];

const CHEFS = [
  { id: 'ayesha', name: 'Chef Ayesha', city: 'Lahore', specialty: 'Biryani & Desserts', rating: 4.8, avatar: 'images/chef.jpg',
    intro: 'Chef Ayesha cooks fragrant biryani and creamy desserts using her grandmother\'s family recipes.' },
  { id: 'fatima', name: 'Chef Fatima', city: 'Islamabad', specialty: 'Karahi & Traditional Food', rating: 4.7, avatar: 'images/chef.jpg',
    intro: 'Chef Fatima prepares slow-cooked karahi and fresh parathas just like a family breakfast table.' },
  { id: 'ahmed', name: 'Chef Ahmed', city: 'Faisalabad', specialty: 'Pulao & Rice Dishes', rating: 4.6, avatar: 'images/chef.jpg',
    intro: 'Chef Ahmed is known for aromatic beef pulao and hearty rice dishes made in small batches.' },
  { id: 'sana', name: 'Chef Sana', city: 'Lahore', specialty: 'Homemade Fast Food', rating: 4.5, avatar: 'images/chef.jpg',
    intro: 'Chef Sana makes crispy zinger burgers with freshly ground spices and soft homemade buns.' },
  { id: 'hamza', name: 'Chef Hamza', city: 'Karachi', specialty: 'BBQ & Kebabs', rating: 4.7, avatar: 'images/chef.jpg',
    intro: 'Chef Hamza grills juicy seekh kebabs over charcoal with his own special masala blend.' },
  { id: 'maryam', name: 'Chef Maryam', city: 'Rawalpindi', specialty: 'Healthy Wraps & Meals', rating: 4.4, avatar: 'images/chef.jpg',
    intro: 'Chef Maryam focuses on light, fresh and balanced homemade meals for busy people.' },
  { id: 'hira', name: 'Chef Hira', city: 'Lahore', specialty: 'Customized Cakes & Desserts', rating: 4.9, avatar: 'images/chef.jpg',
    intro: 'Chef Hira creates freshly baked, beautifully customized cakes for birthdays, weddings, anniversaries and other special occasions.' }
];

// time = preparation time in minutes
const FOODS = [
  { id: 1, name: 'Chicken Biryani', chef: 'ayesha', price: 650, time: 45, rating: 4.8, categories: ['Biryani', 'Pakistani'], image: 'images/biryani.jpg', emoji: '🍛' },
  { id: 2, name: 'Chicken Karahi', chef: 'fatima', price: 1450, time: 50, rating: 4.7, categories: ['Pakistani', 'Traditional'], image: 'images/karahi.jpg', emoji: '🍲' },
  { id: 3, name: 'Beef Pulao', chef: 'ahmed', price: 850, time: 60, rating: 4.6, categories: ['Biryani', 'Traditional'], image: 'images/biryani.jpg', emoji: '🍚' },
  { id: 4, name: 'Chicken Zinger Burger', chef: 'sana', price: 550, time: 30, rating: 4.5, categories: ['Fast Food'], image: 'images/burger.jpg', emoji: '🍔' },
  { id: 5, name: 'Seekh Kebabs', chef: 'hamza', price: 900, time: 40, rating: 4.7, categories: ['BBQ'], image: 'images/burger.jpg', emoji: '🍢' },
  { id: 6, name: 'Homemade Chicken Wrap', chef: 'maryam', price: 450, time: 25, rating: 4.4, categories: ['Healthy', 'Fast Food'], image: 'images/kitchen.jpg', emoji: '🌯' },
  { id: 7, name: 'Kheer', chef: 'ayesha', price: 350, time: 35, rating: 4.6, categories: ['Desserts', 'Traditional'], image: 'images/dessert.jpg', emoji: '🍮' },
  { id: 8, name: 'Homemade Parathas', chef: 'fatima', price: 300, time: 20, rating: 4.5, categories: ['Breakfast', 'Traditional'], image: 'images/breakfast.jpg', emoji: '🥞' },
  // Chef Hira's customizable cakes
  { id: 9, name: 'Chocolate Birthday Cake', chef: 'hira', price: 2800, time: 1440, rating: 4.9, categories: ['Desserts'], image: 'images/cake-chocolate.jpg', emoji: '🎂', customizable: true, defaultSize: '2', defaultFlavour: 'Chocolate' },
  { id: 10, name: 'Customized Bento Cake', chef: 'hira', price: 1200, time: 720, rating: 4.8, categories: ['Desserts'], image: 'images/cake-bento.jpg', emoji: '🧁', customizable: true, defaultSize: '1', defaultFlavour: 'Vanilla' },
  { id: 11, name: 'Red Velvet Cake', chef: 'hira', price: 3200, time: 1440, rating: 4.9, categories: ['Desserts'], image: 'images/cake-redvelvet.jpg', emoji: '🍰', customizable: true, defaultSize: '2', defaultFlavour: 'Red Velvet' },
  { id: 12, name: 'Customized Wedding Cake', chef: 'hira', price: 8500, time: 4320, rating: 4.9, categories: ['Desserts'], image: 'images/cake-wedding.jpg', emoji: '💍', customizable: true, defaultSize: '5', defaultFlavour: 'Vanilla' }
];

const CAKE_SIZES = ['1', '2', '3', '5'];
const CAKE_FLAVOURS = ['Chocolate', 'Vanilla', 'Red Velvet', 'Black Forest'];

/* ---------- 2. SMALL HELPERS ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const money = n => 'Rs. ' + Number(n).toLocaleString('en-US');
const getChef = id => CHEFS.find(c => c.id === id);
const getFood = id => FOODS.find(f => f.id === Number(id));

function esc(text) { // stop user text from being treated as HTML
  return String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function formatTime(min) {
  if (min < 60) return min + ' min';
  if (min < 1440) return (min / 60) + ' hrs';
  const d = min / 1440;
  return d + (d === 1 ? ' day' : ' days');
}

function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function tomorrowISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

// Images: if a file is missing, show a friendly emoji placeholder
function placeholderSvg(emoji) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='450'><rect width='100%' height='100%' fill='#FFF9F0'/><text x='50%' y='50%' font-size='120' text-anchor='middle' dominant-baseline='central'>${emoji}</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
function imgFallback(el) { el.onerror = null; el.src = placeholderSvg(el.dataset.emoji || '🍽️'); }
function img(src, alt, emoji, cls) {
  return `<img src="${src}" alt="${esc(alt)}" class="${cls || ''}" loading="lazy" data-emoji="${emoji}" onerror="imgFallback(this)">`;
}

/* ---------- 3. CART (localStorage) ---------- */
let cart = loadCart();

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return saved.filter(i => getFood(i.id)); // ignore unknown items
  } catch (e) { return []; }
}
function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* storage blocked */ }
}

function addToCart(food, custom) {
  // Same food with identical customization -> just increase quantity
  const sameJson = JSON.stringify(custom || null);
  const existing = cart.find(i => i.id === food.id && JSON.stringify(i.custom || null) === sameJson);
  if (existing) existing.qty++;
  else cart.push({ uid: Date.now() + '-' + Math.floor(Math.random() * 1000), id: food.id, qty: 1, custom: custom || null });
  saveCart();
  renderCart();
  showToast(`<i class="bi bi-check-circle me-1"></i>${esc(food.name)} added to cart`);
}

function changeQty(uid, delta) {
  const item = cart.find(i => i.uid === uid);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) cart = cart.filter(i => i.uid !== uid);
  saveCart();
  renderCart();
}
function removeItem(uid) {
  cart = cart.filter(i => i.uid !== uid);
  saveCart();
  renderCart();
}
function clearCart() { cart = []; saveCart(); renderCart(); }

function totals() {
  const subtotal = cart.reduce((sum, i) => sum + getFood(i.id).price * i.qty, 0);
  const delivery = cart.length ? DELIVERY_FEE : 0;
  return { subtotal, delivery, total: subtotal + delivery };
}

function customHTML(c) {
  if (!c) return '';
  return `<ul class="custom-details">
    <li><strong>Size:</strong> ${c.size} lb</li>
    <li><strong>Flavour:</strong> ${esc(c.flavour)}</li>
    ${c.message ? `<li><strong>Message:</strong> “${esc(c.message)}”</li>` : ''}
    ${c.decoration ? `<li><strong>Decoration:</strong> ${esc(c.decoration)}</li>` : ''}
    <li><strong>Delivery date:</strong> ${formatDate(c.date)}</li>
    <li class="text-muted fst-italic">Final price may vary for special decorations.</li>
  </ul>`;
}

function cartRowHTML(item) {
  const f = getFood(item.id), chef = getChef(f.chef);
  return `<div class="cart-row">
    ${img(f.image, f.name, f.emoji, 'cart-thumb')}
    <div class="cart-info">
      <h3 class="h6 mb-0">${esc(f.name)}</h3>
      <small class="text-muted">by ${esc(chef.name)} · ${chef.city}</small>
      ${customHTML(item.custom)}
      <div class="d-flex align-items-center gap-3 mt-2 flex-wrap">
        <div class="qty-box" role="group" aria-label="Quantity for ${esc(f.name)}">
          <button type="button" class="qty-btn" data-action="dec" data-uid="${item.uid}" aria-label="Decrease quantity"><i class="bi bi-dash"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button type="button" class="qty-btn" data-action="inc" data-uid="${item.uid}" aria-label="Increase quantity"><i class="bi bi-plus"></i></button>
        </div>
        <small class="text-muted">${money(f.price)} each</small>
      </div>
    </div>
    <div class="cart-side">
      <strong>${money(f.price * item.qty)}</strong>
      <button type="button" class="btn btn-sm btn-outline-danger" data-action="remove" data-uid="${item.uid}" aria-label="Remove ${esc(f.name)}"><i class="bi bi-trash"></i></button>
    </div>
  </div>`;
}

function emptyCartHTML() {
  return `<div class="empty-cart text-center py-5">
    <i class="bi bi-basket3 display-3 text-muted"></i>
    <h3 class="h5 mt-3">Your cart is empty</h3>
    <p class="text-muted">Add some delicious homemade meals to get started.</p>
    <a href="explore.html" class="btn btn-gkk">Explore Food</a>
  </div>`;
}

function renderCart() {
  const count = cart.reduce((n, i) => n + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(b => { b.textContent = count; b.classList.toggle('d-none', count === 0); });
  const t = totals();
  const rows = cart.map(cartRowHTML).join('');

  // Offcanvas cart (home + explore pages)
  const canvasItems = $('#canvasItems');
  if (canvasItems) {
    canvasItems.innerHTML = cart.length ? rows : emptyCartHTML();
    $('#canvasSubtotal').textContent = money(t.subtotal);
    $('#canvasDelivery').textContent = money(t.delivery);
    $('#canvasTotal').textContent = money(t.total);
    $('#canvasFooter').classList.toggle('d-none', cart.length === 0);
  }
  // Cart page
  const pageItems = $('#cartItems');
  if (pageItems) {
    pageItems.innerHTML = cart.length ? rows : emptyCartHTML();
    $('#sumSubtotal').textContent = money(t.subtotal);
    $('#sumDelivery').textContent = money(t.delivery);
    $('#sumTotal').textContent = money(t.total);
  }
}

/* ---------- 4. SHARED UI (navbar, footer, modals) ---------- */
function injectShared() {
  const page = document.body.dataset.page;
  const active = p => (page === p ? 'active' : '');
  const cartBtn = page === 'cart'
    ? `<a href="cart.html" class="btn btn-cart position-relative" aria-label="Shopping cart">`
    : `<button type="button" class="btn btn-cart position-relative" data-bs-toggle="offcanvas" data-bs-target="#cartCanvas" aria-label="Open shopping cart">`;
  const cartBtnEnd = page === 'cart' ? '</a>' : '</button>';

  $('#site-header').innerHTML = `
  <nav class="navbar navbar-expand-lg gkk-nav sticky-top">
    <div class="container">
      <a class="navbar-brand" href="index.html"><i class="bi bi-egg-fried"></i> Ghar<span>Ka</span>Khana</a>
      <div class="d-flex align-items-center gap-2 order-lg-3">
        <a href="explore.html?focus=1" class="btn btn-cart" aria-label="Search food"><i class="bi bi-search"></i></a>
        ${cartBtn}<i class="bi bi-bag"></i><span class="cart-count badge rounded-pill d-none">0</span>${cartBtnEnd}
        <button class="btn btn-gkk d-none d-lg-inline-block" type="button" data-bs-toggle="modal" data-bs-target="#authModal">Login / Sign Up</button>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      </div>
      <div class="collapse navbar-collapse order-lg-2" id="mainNav">
        <ul class="navbar-nav mx-lg-auto">
          <li class="nav-item"><a class="nav-link ${active('home')}" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link ${active('explore')}" href="explore.html">Explore Food</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#chefs">Home Chefs</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#about">About Us</a></li>
          <li class="nav-item d-lg-none mt-2"><button class="btn btn-gkk w-100" type="button" data-bs-toggle="modal" data-bs-target="#authModal">Login / Sign Up</button></li>
        </ul>
      </div>
    </div>
  </nav>`;

  $('#site-footer').innerHTML = `
  <footer class="gkk-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <h2 class="h5 footer-brand"><i class="bi bi-egg-fried"></i> GharKaKhana</h2>
          <p>Homemade Food, Delivered with Love. We connect Pakistani home cooks with customers who want fresh, affordable homemade meals.</p>
        </div>
        <div class="col-6 col-lg-2">
          <h3 class="h6">Quick Links</h3>
          <ul class="list-unstyled footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="explore.html">Explore Food</a></li>
            <li><a href="index.html#chefs">Home Chefs</a></li>
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="cart.html">My Cart</a></li>
            <li><a href="#" data-demo="Home chef registration is not available yet (demo project).">Become a Home Chef</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <h3 class="h6">Contact (sample details)</h3>
          <ul class="list-unstyled footer-links">
            <li><i class="bi bi-envelope me-2"></i>hello@gharkakhana.example</li>
            <li><i class="bi bi-telephone me-2"></i>+92 300 0000000</li>
            <li><i class="bi bi-geo-alt me-2"></i>Lahore, Pakistan</li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h3 class="h6">Follow Us</h3>
          <div class="social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://x.com" target="_blank" rel="noopener" aria-label="X"><i class="bi bi-twitter-x"></i></a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <hr>
      <p class="small mb-0 text-center">&copy; 2026 GharKaKhana – University semester project. All prices, ratings, delivery fees and chef profiles are illustrative sample data.</p>
    </div>
  </footer>`;

  const offcanvas = page === 'cart' ? '' : `
  <div class="offcanvas offcanvas-end" tabindex="-1" id="cartCanvas" aria-labelledby="cartCanvasLabel">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title h5" id="cartCanvasLabel"><i class="bi bi-bag me-2"></i>Your Cart</h2>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" id="canvasItems"></div>
    <div class="offcanvas-footer p-3 border-top d-none" id="canvasFooter">
      <div class="d-flex justify-content-between"><span>Subtotal</span><span id="canvasSubtotal"></span></div>
      <div class="d-flex justify-content-between"><span>Delivery fee <small class="text-muted">(sample)</small></span><span id="canvasDelivery"></span></div>
      <div class="d-flex justify-content-between fw-bold fs-5 mt-1"><span>Total</span><span id="canvasTotal"></span></div>
      <a href="cart.html" class="btn btn-gkk w-100 mt-3">Go to Checkout</a>
    </div>
  </div>`;

  const chefModal = page === 'cart' ? '' : `
  <div class="modal fade" id="chefModal" tabindex="-1" aria-labelledby="chefModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header"><h2 class="modal-title h5" id="chefModalLabel">Home Chef Details</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
        <div class="modal-body" id="chefModalBody"></div>
      </div>
    </div>
  </div>`;

  const customModal = page === 'cart' ? '' : `
  <div class="modal fade" id="customModal" tabindex="-1" aria-labelledby="customModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <form class="modal-content" id="customForm" novalidate>
        <div class="modal-header"><h2 class="modal-title h5" id="customModalLabel">Customize: <span id="customTitle"></span></h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
        <div class="modal-body">
          <fieldset class="mb-3">
            <legend class="form-label fs-6">Cake size</legend>
            <div class="d-flex flex-wrap gap-2">
              ${CAKE_SIZES.map(s => `<input type="radio" class="btn-check" name="cakeSize" id="size${s}" value="${s}"><label class="btn btn-outline-gkk" for="size${s}">${s} lb</label>`).join('')}
            </div>
          </fieldset>
          <div class="mb-3"><label for="cakeFlavour" class="form-label">Cake flavour</label>
            <select id="cakeFlavour" class="form-select">${CAKE_FLAVOURS.map(f => `<option>${f}</option>`).join('')}</select></div>
          <div class="mb-3"><label for="cakeMessage" class="form-label">Message on the cake <small class="text-muted">(optional)</small></label>
            <input type="text" id="cakeMessage" class="form-control" maxlength="40" placeholder="e.g. Happy Birthday Sara!"></div>
          <div class="mb-3"><label for="cakeDecoration" class="form-label">Additional decoration instructions <small class="text-muted">(optional)</small></label>
            <textarea id="cakeDecoration" class="form-control" rows="2" maxlength="200" placeholder="e.g. Pink flowers, gold sprinkles"></textarea></div>
          <div class="mb-3"><label for="cakeDate" class="form-label">Required delivery date</label>
            <input type="date" id="cakeDate" class="form-control" required>
            <div class="invalid-feedback">Please choose a delivery date (tomorrow or later).</div></div>
          <div class="alert alert-warning small mb-0"><i class="bi bi-info-circle me-1"></i>Sample base price: <strong id="customPrice"></strong>. Final prices for special decorations or additional customization may vary (illustrative).</div>
        </div>
        <div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button><button type="submit" class="btn btn-gkk">Add to Cart</button></div>
      </form>
    </div>
  </div>`;

  const authModal = `
  <div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <form class="modal-content" id="authForm">
        <div class="modal-header"><h2 class="modal-title h5" id="authModalLabel">Login / Sign Up</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
        <div class="modal-body">
          <div class="mb-3"><label for="authEmail" class="form-label">Email</label><input type="email" id="authEmail" class="form-control" required></div>
          <div class="mb-3"><label for="authPass" class="form-label">Password</label><input type="password" id="authPass" class="form-control" minlength="6" required></div>
          <p class="small text-muted mb-0">Demonstration only. No account is created and no data is stored.</p>
        </div>
        <div class="modal-footer"><button type="submit" class="btn btn-gkk w-100">Continue</button></div>
      </form>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend',
    offcanvas + chefModal + customModal + authModal + '<div class="toast-container position-fixed bottom-0 end-0 p-3" id="toastWrap"></div>');
}

function showToast(html) {
  const el = document.createElement('div');
  el.className = 'toast align-items-center text-bg-success border-0';
  el.setAttribute('role', 'status');
  el.innerHTML = `<div class="d-flex"><div class="toast-body">${html}</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>`;
  $('#toastWrap').appendChild(el);
  el.addEventListener('hidden.bs.toast', () => el.remove());
  new bootstrap.Toast(el, { delay: 2200 }).show();
}

/* ---------- 5. CARDS ---------- */
function foodCardHTML(f) {
  const chef = getChef(f.chef);
  return `<article class="card food-card h-100">
    <div class="food-img-wrap">${img(f.image, f.name, f.emoji, 'food-img')}<span class="badge cat-badge">${f.categories[0]}</span></div>
    <div class="card-body d-flex flex-column">
      <h3 class="h6 card-title mb-1">${esc(f.name)}</h3>
      <button type="button" class="chef-link text-start" data-chef="${chef.id}"><i class="bi bi-person-hearts"></i> ${esc(chef.name)}</button>
      <small class="text-muted"><i class="bi bi-geo-alt"></i> ${chef.city}</small>
      <div class="d-flex justify-content-between small mt-2">
        <span title="Sample rating"><i class="bi bi-star-fill text-accent"></i> ${f.rating.toFixed(1)}</span>
        <span title="Sample preparation time"><i class="bi bi-clock"></i> ${formatTime(f.time)}</span>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-auto pt-3">
        <strong class="price">${money(f.price)}</strong>
        <button type="button" class="btn btn-gkk btn-sm" data-add="${f.id}">${f.customizable ? '<i class="bi bi-magic"></i> Customize &amp; Add' : '<i class="bi bi-cart-plus"></i> Add to Cart'}</button>
      </div>
    </div>
  </article>`;
}

function renderFoods(container, list, colClass) {
  container.innerHTML = list.map(f => `<div class="${colClass}">${foodCardHTML(f)}</div>`).join('');
}

function chefCardHTML(c) {
  return `<article class="card chef-card h-100 text-center">
    <div class="card-body">
      ${img(c.avatar, c.name, '👩‍🍳', 'chef-avatar')}
      <h3 class="h5 mt-3 mb-0">${c.name}</h3>
      <p class="text-muted mb-1"><i class="bi bi-geo-alt"></i> ${c.city}</p>
      <p class="specialty mb-1">${c.specialty}</p>
      <p class="mb-3"><i class="bi bi-star-fill text-accent"></i> ${c.rating.toFixed(1)} <small class="text-muted">(sample)</small></p>
      <button type="button" class="btn btn-outline-gkk" data-chef="${c.id}">View Menu</button>
    </div>
  </article>`;
}

/* ---------- 6. CHEF MODAL + CAKE CUSTOMIZATION ---------- */
function openChefModal(chefId) {
  const c = getChef(chefId);
  const menu = FOODS.filter(f => f.chef === chefId);
  $('#chefModalLabel').textContent = c.name;
  $('#chefModalBody').innerHTML = `
    <div class="d-flex flex-column flex-sm-row gap-3 align-items-sm-center mb-3">
      ${img(c.avatar, c.name, '👩‍🍳', 'chef-avatar')}
      <div>
        <h3 class="h4 mb-0">${c.name}</h3>
        <p class="mb-1 text-muted"><i class="bi bi-geo-alt"></i> ${c.city}</p>
        <p class="mb-1"><strong>Specialty:</strong> ${c.specialty}</p>
        <p class="mb-0"><i class="bi bi-star-fill text-accent"></i> ${c.rating.toFixed(1)} / 5 <small class="text-muted">(illustrative sample rating)</small></p>
      </div>
    </div>
    <p>${c.intro}</p>
    <h4 class="h6 border-top pt-3">Available Menu <small class="text-muted fw-normal">(sample prices &amp; times)</small></h4>
    ${menu.map(f => `
      <div class="menu-row">
        ${img(f.image, f.name, f.emoji, 'menu-thumb')}
        <div class="flex-grow-1">
          <strong>${esc(f.name)}</strong><br>
          <small class="text-muted"><i class="bi bi-clock"></i> ${formatTime(f.time)} · <i class="bi bi-star-fill text-accent"></i> ${f.rating.toFixed(1)}</small>
        </div>
        <div class="text-end">
          <div class="price">${money(f.price)}</div>
          <button type="button" class="btn btn-gkk btn-sm mt-1" data-add="${f.id}">${f.customizable ? 'Customize' : 'Add'}</button>
        </div>
      </div>`).join('')}`;
  bootstrap.Modal.getOrCreateInstance($('#chefModal')).show();
}

let customFood = null;

function openCustomModal(food) {
  customFood = food;
  $('#customTitle').textContent = food.name;
  $('#customPrice').textContent = money(food.price);
  document.querySelector(`input[name="cakeSize"][value="${food.defaultSize || '1'}"]`).checked = true;
  $('#cakeFlavour').value = food.defaultFlavour || 'Chocolate';
  $('#cakeMessage').value = '';
  $('#cakeDecoration').value = '';
  const date = $('#cakeDate');
  date.value = '';
  date.min = tomorrowISO();
  date.classList.remove('is-invalid');
  bootstrap.Modal.getOrCreateInstance($('#customModal')).show();
}

function handleAdd(id) {
  const food = getFood(id);
  if (!food.customizable) { addToCart(food); return; }
  // Close the chef modal first (Bootstrap can't stack two modals nicely)
  const chefEl = $('#chefModal');
  if (chefEl && chefEl.classList.contains('show')) {
    chefEl.addEventListener('hidden.bs.modal', () => openCustomModal(food), { once: true });
    bootstrap.Modal.getInstance(chefEl).hide();
  } else {
    openCustomModal(food);
  }
}

function submitCustomForm(e) {
  e.preventDefault();
  const date = $('#cakeDate');
  if (!date.value || date.value < tomorrowISO()) { date.classList.add('is-invalid'); date.focus(); return; }
  const custom = {
    size: document.querySelector('input[name="cakeSize"]:checked').value,
    flavour: $('#cakeFlavour').value,
    message: $('#cakeMessage').value.trim(),
    decoration: $('#cakeDecoration').value.trim(),
    date: date.value
  };
  addToCart(customFood, custom);
  bootstrap.Modal.getInstance($('#customModal')).hide();
}

/* ---------- 7. PAGE: HOME ---------- */
function initHome() {
  $('#categoryGrid').innerHTML = HOME_CATEGORIES.map(c => `
    <div class="col-6 col-md-3">
      <a class="cat-card" href="explore.html?cat=${encodeURIComponent(c.filter)}"><i class="bi ${c.icon}"></i><span>${c.name}</span></a>
    </div>`).join('');

  renderFoods($('#popularMeals'), FOODS.filter(f => [1, 2, 3, 4].includes(f.id)), 'col-sm-6 col-lg-3');
  renderFoods($('#cakeMeals'), FOODS.filter(f => f.chef === 'hira'), 'col-sm-6 col-lg-3');
  $('#chefGrid').innerHTML = ['ayesha', 'fatima', 'ahmed', 'hira'].map(id => `<div class="col-sm-6 col-lg-3">${chefCardHTML(getChef(id))}</div>`).join('');

  $('#heroForm').addEventListener('submit', e => {
    e.preventDefault();
    const loc = $('#heroLocation').value.trim();
    const q = $('#heroSearch').value.trim();
    try { localStorage.setItem(LOCATION_KEY, loc); } catch (err) { /* ignore */ }
    window.location.href = 'explore.html' + (q ? '?q=' + encodeURIComponent(q) : '');
  });
}

/* ---------- 8. PAGE: EXPLORE ---------- */
const filters = { q: '', city: '', category: 'All', price: 'any', rating: 0, time: 'any' };

function initExplore() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('q')) filters.q = params.get('q');
  if (FILTER_CATEGORIES.includes(params.get('cat'))) filters.category = params.get('cat');

  // Delivery location typed on the homepage
  let loc = '';
  try { loc = localStorage.getItem(LOCATION_KEY) || ''; } catch (e) { /* ignore */ }
  if (loc) {
    $('#locationNote').textContent = 'Delivering to: ' + loc;
    $('#locationNote').classList.remove('d-none');
    const match = CITIES.find(c => loc.toLowerCase().includes(c.toLowerCase()));
    if (match) filters.city = match;
  }

  $('#filterCity').innerHTML = '<option value="">All cities</option>' + CITIES.map(c => `<option>${c}</option>`).join('');
  $('#filterCategory').innerHTML = FILTER_CATEGORIES.map(c => `<option>${c}</option>`).join('');
  $('#categoryPills').innerHTML = FILTER_CATEGORIES.map(c => `<button type="button" class="pill" data-pill="${c}">${c}</button>`).join('');

  const bind = (id, key, num) => $(id).addEventListener('input', e => { filters[key] = num ? Number(e.target.value) : e.target.value; applyFilters(); });
  bind('#searchInput', 'q'); bind('#filterCity', 'city'); bind('#filterCategory', 'category');
  bind('#filterPrice', 'price'); bind('#filterRating', 'rating', true); bind('#filterTime', 'time');

  $('#categoryPills').addEventListener('click', e => {
    const pill = e.target.closest('[data-pill]');
    if (pill) { filters.category = pill.dataset.pill; applyFilters(); }
  });
  $('#clearFilters').addEventListener('click', () => {
    Object.assign(filters, { q: '', city: '', category: 'All', price: 'any', rating: 0, time: 'any' });
    applyFilters();
  });
  $('#searchForm').addEventListener('submit', e => e.preventDefault());

  applyFilters();
  if (params.get('focus')) $('#searchInput').focus();
}

function inRange(value, rangeText) {
  if (rangeText === 'any') return true;
  const [min, max] = rangeText.split('-').map(Number);
  return value >= min && value <= max;
}

function applyFilters() {
  // keep the controls in sync with the filters object
  $('#searchInput').value = filters.q;
  $('#filterCity').value = filters.city;
  $('#filterCategory').value = filters.category;
  $('#filterPrice').value = filters.price;
  $('#filterRating').value = filters.rating;
  $('#filterTime').value = filters.time;
  document.querySelectorAll('[data-pill]').forEach(p => p.classList.toggle('active', p.dataset.pill === filters.category));

  const q = filters.q.trim().toLowerCase();
  const list = FOODS.filter(f => {
    const chef = getChef(f.chef);
    const text = [f.name, chef.name, chef.city, f.categories.join(' ')].join(' ').toLowerCase();
    return (!q || text.includes(q)) &&
      (!filters.city || chef.city === filters.city) &&
      (filters.category === 'All' || f.categories.includes(filters.category)) &&
      inRange(f.price, filters.price) &&
      f.rating >= filters.rating &&
      inRange(f.time, filters.time);
  });

  renderFoods($('#foodGrid'), list, 'col-sm-6 col-xl-4');
  $('#resultCount').textContent = list.length + (list.length === 1 ? ' meal found' : ' meals found');
  $('#noResults').classList.toggle('d-none', list.length > 0);
}

/* ---------- 9. PAGE: CART / CHECKOUT ---------- */
function initCartPage() {
  $('#checkoutCity').innerHTML = '<option value="">Select city</option>' + CITIES.map(c => `<option>${c}</option>`).join('');
  $('#placeOrderBtn').addEventListener('click', placeOrder);
}

function placeOrder() {
  const form = $('#checkoutForm');
  const emptyAlert = $('#emptyCartAlert');
  emptyAlert.classList.add('d-none');

  if (cart.length === 0) { emptyAlert.classList.remove('d-none'); emptyAlert.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
  form.classList.add('was-validated');
  if (!form.checkValidity()) { form.querySelector(':invalid').focus(); return; }

  // Take a snapshot BEFORE clearing the cart
  const t = totals();
  const orderId = 'GKK-' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 90 + 10);
  const payment = form.querySelector('input[name="payment"]:checked').value;

  $('#orderId').textContent = orderId;
  $('#orderCustomer').innerHTML = `
    <strong>${esc($('#fullName').value)}</strong><br>
    ${esc($('#mobile').value)}<br>
    ${esc($('#address').value)}, ${esc($('#checkoutCity').value)}
    ${$('#instructions').value.trim() ? `<br><em>Note: ${esc($('#instructions').value.trim())}</em>` : ''}
    <br><span class="text-muted">Payment: ${esc(payment)}</span>`;
  $('#orderItems').innerHTML = cart.map(i => {
    const f = getFood(i.id);
    return `<li class="mb-2">${i.qty} × ${esc(f.name)} <span class="float-end">${money(f.price * i.qty)}</span>${customHTML(i.custom)}</li>`;
  }).join('');
  $('#orderTotals').innerHTML = `
    <div class="d-flex justify-content-between"><span>Subtotal</span><span>${money(t.subtotal)}</span></div>
    <div class="d-flex justify-content-between"><span>Delivery fee (sample)</span><span>${money(t.delivery)}</span></div>
    <div class="d-flex justify-content-between fw-bold"><span>Total</span><span>${money(t.total)}</span></div>`;

  clearCart();
  form.reset();
  form.classList.remove('was-validated');
  bootstrap.Modal.getOrCreateInstance($('#orderModal')).show();
}

/* ---------- 10. GLOBAL EVENTS + START ---------- */
document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) { handleAdd(add.dataset.add); return; }

  const chef = e.target.closest('[data-chef]');
  if (chef) { openChefModal(chef.dataset.chef); return; }

  const act = e.target.closest('[data-action]');
  if (act) {
    if (act.dataset.action === 'inc') changeQty(act.dataset.uid, 1);
    if (act.dataset.action === 'dec') changeQty(act.dataset.uid, -1);
    if (act.dataset.action === 'remove') removeItem(act.dataset.uid);
    return;
  }

  const demo = e.target.closest('[data-demo]');
  if (demo) { e.preventDefault(); showToast(esc(demo.dataset.demo)); }
});

document.addEventListener('DOMContentLoaded', () => {
  injectShared();
  const customForm = $('#customForm');
  if (customForm) customForm.addEventListener('submit', submitCustomForm);
  $('#authForm').addEventListener('submit', e => {
    e.preventDefault();
    bootstrap.Modal.getInstance($('#authModal')).hide();
    showToast('Demo only – no account was created.');
  });

  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  if (page === 'explore') initExplore();
  if (page === 'cart') initCartPage();
  renderCart();
});
