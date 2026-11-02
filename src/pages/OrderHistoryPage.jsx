import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function CheckoutPage() {
  const { addresses, cartItems, subtotal, shippingFee, total, placeOrder } = useStore();
  const [selectedAddressId, setSelectedAddressId] = useState(addresses[0]?.id || '');
  const [paymentMethod, setPaymentMethod] = useState('Test Gateway');
  const navigate = useNavigate();

  const selectedAddress = addresses.find((address) => address.id === selectedAddressId) || addresses[0];

  const handlePlaceOrder = () => {
    if (!selectedAddress) return;
    placeOrder({ ...selectedAddress, paymentMethod });
    navigate('/orders');
  };

  return (
    <div className="container page-block checkout-page">
      <div className="checkout-main">
        <section className="checkout-card">
          <h2>Choose delivery address</h2>
          {addresses.map((address) => (
            <label key={address.id} className={selectedAddressId === address.id ? 'address-option selected' : 'address-option'}>
              <input
                type="radio"
                checked={selectedAddressId === address.id}
                onChange={() => setSelectedAddressId(address.id)}
              />
              <div>
                <strong>{address.label}</strong>
                <p>
                  {address.name} • {address.phone}
                </p>
                <p>
                  {address.line1}, {address.line2}, {address.city}, {address.state} - {address.pincode}
                </p>
              </div>
            </label>
          ))}
        </section>

        <section className="checkout-card payment-card">
          <h2>Select payment method</h2>
          <label>
            <input
              type="radio"
              checked={paymentMethod === 'Test Gateway'}
              onChange={() => setPaymentMethod('Test Gateway')}
            />
            Test payment gateway
          </label>
          <label>
            <input
              type="radio"
              checked={paymentMethod === 'Cash on Delivery'}
              onChange={() => setPaymentMethod('Cash on Delivery')}
            />
            Cash on Delivery
          </label>
        </section>
      </div>

      <aside className="summary-box">
        <h3>Order summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="summary-item-line">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
          </div>
        ))}
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

        <button type="button" className="primary-btn checkout-button" onClick={handlePlaceOrder}>
          Confirm order
        </button>
      </aside>
    </div>
  );
}
