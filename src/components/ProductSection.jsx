import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <article className="product-card">
      <div className="card-media">
        <button
          type="button"
          className={isWishlisted ? 'wish-button active' : 'wish-button'}
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
        >
          ♥
        </button>
        <Link to={`/products/${product.id}`}>
          <img src={product.images[0]} alt={product.name} />
        </Link>
      </div>

      <div className="card-body">
        <div className="card-header">
          <span className="product-brand">{product.brand}</span>
          <span className="product-badge">{product.badge}</span>
        </div>

        <Link to={`/products/${product.id}`} className="product-name-link">
          <h3>{product.name}</h3>
        </Link>

        <div className="rating-row">
          <span className="rating-badge">★ {product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>

        <div className="price-row">
          <strong>₹{product.price.toLocaleString('en-IN')}</strong>
          <span className="old-price">₹{product.oldPrice.toLocaleString('en-IN')}</span>
          <span className="discount">{product.discount}% off</span>
        </div>

        <div className="card-actions">
          <button type="button" className="primary-btn" onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
