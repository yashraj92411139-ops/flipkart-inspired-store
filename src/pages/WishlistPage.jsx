import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function CartPage() {
  const { cartItems, updateCartQuantity, removeFromCart, subtotal, shippingFee, total } = useStore();

  if (cartItems.length === 0) {
    return (
      <div className="container page-block empty-state-box">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="primary-btn inline-btn">Shop now</Link>
      </div>
    );
  }

  return (
    <div className="container page-block cart-page">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.images[0]} alt={item.name} />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>₹{item.price.toLocaleString('en-IN')} each</p>
              <div className="qty-control">
                <button type="button" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
            </div>
            <button type="button" className="remove-link" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <aside className="summary-box">
        <h3>Price details</h3>
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <strong>₹{shippingFee.toLocaleString('en-IN')}</strong>
        </div>
        <div className="summary-row total-row">
          <span>Total</span>
          <strong>₹{total.toLocaleString('en-IN')}</strong>
        </div>

        <Link to="/checkout" className="primary-btn checkout-button">
          Proceed to checkout
        </Link>
      </aside>
    </div>
  );
}
