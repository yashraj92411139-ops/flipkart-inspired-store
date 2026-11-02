import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';

export default function WishlistPage() {
  const { products, wishlist } = useStore();
  const favoriteProducts = products.filter((product) => wishlist.includes(product.id));

  return (
    <div className="container page-block">
      <div className="section-heading compact-heading">
        <h2>My Wishlist</h2>
        <Link to="/products" className="link-button">Continue shopping</Link>
      </div>

      {favoriteProducts.length > 0 ? (
        <div className="product-grid">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">No items in your wishlist yet.</div>
      )}
    </div>
  );
}
