import { useStore } from '../context/StoreContext';

export default function OrderHistoryPage() {
  const { orders } = useStore();

  return (
    <div className="container page-block">
      <div className="section-heading compact-heading">
        <h2>Order history</h2>
      </div>

      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-meta">
              <div>
                <span className="muted-label">Order id</span>
                <strong>{order.id}</strong>
              </div>
              <span className="status-chip">{order.status}</span>
            </div>

            <div className="order-metrics">
              <span>{order.itemCount} items</span>
              <span>{order.date}</span>
              <span>ETA: {order.eta}</span>
            </div>

            <div className="order-total">Total: ₹{order.total.toLocaleString('en-IN')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
