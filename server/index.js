:root {
  --blue-900: #0f4abe;
  --blue-700: #1f52d4;
  --blue-500: #2b6ef4;
  --blue-100: #edf4ff;
  --gray-50: #f7f7f7;
  --gray-100: #f1f3f6;
  --gray-200: #e5e7eb;
  --gray-400: #9ca3af;
  --gray-600: #4b5563;
  --gray-800: #1f2937;
  --white: #ffffff;
  --orange: #ff9f1a;
  --green: #1ca864;
  --red: #e11d48;
  --shadow: 0 12px 32px rgba(15, 31, 56, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: var(--gray-100);
  color: var(--gray-800);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: min(1280px, calc(100% - 32px));
  margin-inline: auto;
}

.top-header {
  background: linear-gradient(90deg, var(--blue-900), var(--blue-700));
  color: var(--white);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 0;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  font-size: 1.6rem;
}

.brand-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.search-wrap {
  flex: 1;
  position: relative;
}

.search-wrap input {
  width: 100%;
  min-width: 260px;
  border: none;
  border-radius: 10px;
  padding: 0.9rem 1rem 0.9rem 2.8rem;
  font-size: 0.96rem;
  background: rgba(255, 255, 255, 0.18);
  color: var(--white);
}

.search-wrap input::placeholder {
  color: rgba(255, 255, 255, 0.8);
}

.search-icon {
  position: absolute;
  left: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.nav-button,
.nav-link,
.link-button,
.primary-btn,
.secondary-btn,
.remove-link,
.login-button {
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav-button,
.nav-link,
.login-button {
  background: rgba(255, 255, 255, 0.12);
  color: var(--white);
  padding: 0.8rem 1rem;
  font-weight: 700;
}

.header-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.header-pill span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 0.75rem;
}

.main-nav {
  display: flex;
  gap: 1.4rem;
  align-items: center;
  padding-bottom: 0.9rem;
  overflow-x: auto;
}

.main-nav a {
  color: rgba(255, 255, 255, 0.88);
  font-weight: 600;
  padding-bottom: 0.2rem;
}

.main-nav a.active {
  border-bottom: 2px solid var(--white);
}

.page-block {
  padding: 1.4rem 0 2rem;
}

.category-menu-wrap {
  padding-top: 1rem;
}

.category-menu {
  display: grid;
  grid-template-columns: repeat(9, minmax(110px, 1fr));
  gap: 0.8rem;
  background: var(--white);
  border-radius: 18px;
  padding: 1rem;
  box-shadow: var(--shadow);
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  background: var(--gray-50);
  border-radius: 16px;
  min-height: 90px;
  text-align: center;
  padding: 0.7rem 0.5rem;
  transition: transform 0.2s ease;
}

.category-item:hover,
.nav-button:hover,
.nav-link:hover,
.link-button:hover,
.primary-btn:hover,
.secondary-btn:hover,
.remove-link:hover,
.dot:hover,
.color-pill:hover {
  transform: translateY(-2px);
}

.category-item span {
  font-size: 1.7rem;
}

.category-item strong {
  font-size: 0.8rem;
}

.banner-carousel {
  padding-top: 1.2rem;
}

.banner-slide {
  position: relative;
  height: 340px;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.banner-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-copy {
  position: absolute;
  inset: auto auto 22px 24px;
  background: rgba(17, 24, 39, 0.38);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.9rem 1.2rem;
  color: var(--white);
}

.banner-copy span {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}

.banner-copy h2 {
  margin: 0.3rem 0 0;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}

.banner-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.8rem;
}

.dot {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: rgba(17, 24, 39, 0.24);
  cursor: pointer;
}

.dot.active {
  background: var(--blue-700);
}

.content-section {
  background: var(--white);
  border-radius: 18px;
  padding: 1rem;
  margin-top: 1.4rem;
  box-shadow: var(--shadow);
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.25rem, 2vw, 1.7rem);
}

.link-button,
.secondary-btn,
.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.link-button {
  background: transparent;
  color: var(--blue-700);
  padding: 0.5rem 0.8rem;
}

.product-row {
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.4rem;
}

.product-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.05);
}

.card-media {
  position: relative;
  background: var(--gray-50);
  padding: 0.7rem;
}

.card-media img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
}

.wish-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: var(--gray-600);
  cursor: pointer;
}

.wish-button.active {
  background: rgba(225, 29, 72, 0.12);
  color: var(--red);
}

.card-body {
  padding: 0.9rem 0.9rem 1rem;
}

.card-header,
.price-row,
.rating-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.card-header {
  justify-content: space-between;
  margin-bottom: 0.4rem;
}

.product-brand,
.product-badge,
.rating-badge,
.review-count,
.discount,
.old-price,
.product-badge {
  font-size: 0.72rem;
}

.product-brand {
  color: var(--gray-600);
  font-weight: 700;
}

.product-badge {
  background: rgba(31, 82, 212, 0.08);
  color: var(--blue-700);
  padding: 0.3rem 0.5rem;
  border-radius: 8px;
  font-weight: 700;
}

.product-name-link h3 {
  margin: 0.25rem 0 0.6rem;
  font-size: 1rem;
  line-height: 1.5;
  min-height: 48px;
}

.rating-badge {
  background: var(--green);
  color: var(--white);
  border-radius: 999px;
  padding: 0.2rem 0.45rem;
  font-weight: 700;
}

.review-count {
  color: var(--gray-600);
}

.price-row {
  margin: 0.6rem 0;
}

.price-row strong {
  font-size: 1.2rem;
}

.old-price {
  text-decoration: line-through;
  color: var(--gray-400);
}

.discount {
  color: var(--green);
  font-weight: 700;
}

.card-actions {
  margin-top: 0.9rem;
}

.primary-btn {
  width: 100%;
  background: var(--blue-700);
  color: var(--white);
  padding: 0.8rem 1rem;
}

.secondary-btn {
  width: 100%;
  background: var(--gray-100);
  color: var(--gray-800);
  padding: 0.8rem 1rem;
}

.product-list-page {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 1.2rem;
}

.filters-panel,
.checkout-card,
.summary-box,
.auth-card,
.order-card,
.metric-card {
  background: var(--white);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.filters-panel {
  padding: 1rem;
  height: fit-content;
}

.panel-header h3 {
  margin: 0 0 1rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.filter-group label {
  font-weight: 700;
}

.filter-group select,
.filter-group input,
.auth-card input {
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  padding: 0.75rem 0.85rem;
  background: var(--gray-50);
}

.slider-group input {
  padding: 0;
}

.products-main {
  min-width: 0;
}

.toolbar {
  background: var(--white);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.toolbar h2 {
  margin: 0;
}

.toolbar p {
  margin: 0.3rem 0 0;
  color: var(--gray-600);
}

.toolbar select {
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  padding: 0.7rem 0.9rem;
  background: var(--gray-50);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1rem;
}

.empty-state,
.empty-state-box {
  background: var(--white);
  border-radius: 18px;
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow);
}

.product-detail-page {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.detail-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 0.8rem;
}

.detail-gallery img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.detail-content {
  background: var(--white);
  border-radius: 18px;
  padding: 1.4rem;
  box-shadow: var(--shadow);
}

.detail-badge {
  display: inline-flex;
  margin-bottom: 0.7rem;
}

.detail-content h1 {
  margin: 0 0 0.8rem;
  font-size: clamp(1.8rem, 2vw, 2.4rem);
}

.detail-price {
  margin-bottom: 1rem;
}

.detail-description {
  color: var(--gray-600);
  line-height: 1.5;
}

.detail-actions {
  display: flex;
  gap: 0.8rem;
  margin: 1.1rem 0;
}

.feature-box {
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 14px;
  padding: 1rem;
}

.feature-box h3 {
  margin-top: 0;
}

.feature-box ul {
  margin: 0;
  padding-left: 1.2rem;
  display: grid;
  gap: 0.5rem;
  color: var(--gray-600);
}

.color-options {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 1rem 0;
}

.color-pill {
  border: 1px solid var(--gray-200);
  border-radius: 999px;
  background: var(--gray-50);
  padding: 0.5rem 0.8rem;
  cursor: pointer;
}

.inline-link {
  display: inline-flex;
  margin-top: 0.7rem;
}

.cart-page {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);
  gap: 1.2rem;
}

.cart-items {
  display: grid;
  gap: 1rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  background: var(--white);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 1rem;
}

.cart-item img {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
}

.cart-item-info h3 {
  margin: 0;
}

.cart-item-info p {
  margin: 0.4rem 0;
  color: var(--gray-600);
}

.qty-control {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  border: 1px solid var(--gray-200);
  border-radius: 999px;
  padding: 0.3rem 0.5rem;
}

.qty-control button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: var(--gray-100);
  font-size: 1rem;
  cursor: pointer;
}

.remove-link {
  background: transparent;
  color: var(--red);
  font-weight: 700;
}

.summary-box {
  padding: 1.2rem;
  height: fit-content;
}

.summary-box h3 {
  margin-top: 0;
}

.summary-row,
.summary-item-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 0.7rem 0;
  color: var(--gray-600);
}

.total-row {
  border-top: 1px solid var(--gray-200);
  padding-top: 0.8rem;
  margin-top: 1rem;
  color: var(--gray-800);
  font-size: 1.1rem;
}

.checkout-button {
  margin-top: 1rem;
}

.auth-page {
  display: grid;
  place-items: center;
}

.auth-card {
  width: min(420px, 100%);
  padding: 1.5rem;
}

.auth-card h2 {
  margin-top: 0;
}

.auth-card label {
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.full-width-btn {
  margin-top: 0.5rem;
}

.switch-text {
  margin-top: 1rem;
  text-align: center;
  color: var(--gray-600);
}

.switch-text a {
  color: var(--blue-700);
  font-weight: 700;
}

.checkout-page {
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(260px, 0.9fr);
  gap: 1.2rem;
}

.checkout-main {
  display: grid;
  gap: 1rem;
}

.checkout-card {
  padding: 1rem;
}

.checkout-card h2 {
  margin-top: 0;
}

.address-option {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  padding: 0.8rem;
  margin: 0.8rem 0;
  background: var(--gray-50);
}

.address-option.selected {
  border-color: var(--blue-700);
  background: rgba(43, 110, 244, 0.04);
}

.address-option input {
  margin-top: 0.2rem;
}

.payment-card label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
}

.orders-list {
  display: grid;
  gap: 1rem;
}

.order-card {
  padding: 1rem 1.2rem;
}

.order-meta,
.order-metrics {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.muted-label {
  display: block;
  color: var(--gray-400);
  font-size: 0.74rem;
  margin-bottom: 0.2rem;
}

.status-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(28, 168, 100, 0.12);
  color: var(--green);
  padding: 0.4rem 0.7rem;
  font-weight: 700;
}

.order-metrics {
  margin: 0.9rem 0;
  color: var(--gray-600);
}

.order-total {
  font-size: 1.1rem;
  font-weight: 700;
}

.admin-page {
  display: grid;
  gap: 1rem;
}

.admin-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(140px, 1fr));
  gap: 1rem;
}

.metric-card {
  padding: 1rem;
  display: grid;
  gap: 0.4rem;
}

.metric-card span {
  color: var(--gray-600);
}

.metric-card strong {
  font-size: 1.5rem;
}

.admin-table-wrap {
  overflow-x: auto;
  background: var(--white);
  box-shadow: var(--shadow);
  border-radius: 18px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.9rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--gray-200);
}

th {
  background: var(--gray-50);
}

@media (max-width: 1024px) {
  .product-row {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }

  .product-list-page,
  .cart-page,
  .checkout-page,
  .product-detail-page {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
}

@media (max-width: 760px) {
  .header-row {
    flex-wrap: wrap;
  }

  .search-wrap {
    order: 3;
    width: 100%;
  }

  .header-actions {
    width: 100%;
    justify-content: space-between;
  }

  .category-menu {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  .product-row,
  .product-grid,
  .admin-metrics {
    grid-template-columns: 1fr;
  }

  .detail-gallery {
    grid-template-columns: 1fr;
  }

  .cart-item {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .cart-item img {
    margin: 0 auto;
  }

  .qty-control {
    justify-content: center;
  }
}
