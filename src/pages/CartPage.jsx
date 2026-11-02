import { Link, useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { products, addToCart, toggleWishlist, wishlist } = useStore();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div className="empty-state container">Product not found.</div>;
  }

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="container page-block product-detail-page">
      <div className="detail-gallery">
        {product.images.map((image, index) => (
          <img key={`${product.id}-${index}`} src={image} alt={`${product.name} view ${index + 1}`} />
        ))}
      </div>

      <div className="detail-content">
        <span className="product-badge detail-badge">{product.badge}</span>
        <h1>{product.name}</h1>

        <div className="rating-row">
          <span className="rating-badge">★ {product.rating}</span>
          <span className="review-count">{product.reviews} Reviews</span>
        </div>

        <div className="price-row detail-price">
          <strong>₹{product.price.toLocaleString('en-IN')}</strong>
          <span className="old-price">₹{product.oldPrice.toLocaleString('en-IN')}</span>
          <span className="discount">{product.discount}% off</span>
        </div>

        <p className="detail-description">{product.description}</p>

        <div className="detail-actions">
          <button type="button" className="primary-btn" onClick={() => addToCart(product)}>
            Add to cart
          </button>
          <button type="button" className="secondary-btn" onClick={() => toggleWishlist(product.id)}>
            {isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          </button>
        </div>

        <div className="feature-box">
          <h3>Highlights</h3>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="color-options">
          <span>Colors:</span>
          {product.colors.map((color) => (
            <button key={color} type="button" className="color-pill">
              {color}
            </button>
          ))}
        </div>

        <Link to="/products" className="link-button inline-link">Continue shopping</Link>
      </div>
    </div>
  );
}
