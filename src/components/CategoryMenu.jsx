import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function Header() {
  const { user, cartCount, wishlistCount, searchTerm, setSearchTerm } = useStore();

  return (
    <header className="top-header">
      <div className="header-row container">
        <Link to="/" className="brand-mark">
          <span className="brand-badge">S</span>
          <span>Shoply</span>
        </Link>

        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for products, brands and more"
            aria-label="Search products"
          />
        </div>

        <div className="header-actions">
          <NavLink to="/login" className="nav-button login-button">
            {user.isLoggedIn ? user.name : 'Login'}
          </NavLink>
          <NavLink to="/wishlist" className="nav-link header-pill">
            Wishlist <span>{wishlistCount}</span>
          </NavLink>
          <NavLink to="/cart" className="nav-link header-pill cart-pill">
            Cart <span>{cartCount}</span>
          </NavLink>
        </div>
      </div>

      <nav className="main-nav container" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </header>
  );
}
