import { useStore } from '../context/StoreContext';

export default function AdminPage() {
  const { products } = useStore();

  const inventorySummary = [
    { label: 'Products', value: products.length },
    { label: 'Low stock', value: products.filter((item) => item.stock < 10).length },
    { label: 'Revenue', value: '₹2.84L' },
    { label: 'Orders', value: '128' },
  ];

  return (
    <div className="container page-block admin-page">
      <div className="section-heading compact-heading">
        <h2>Admin dashboard</h2>
      </div>

      <div className="admin-metrics">
        {inventorySummary.map((metric) => (
          <div key={metric.label} className="metric-card">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>

      <div className="admin-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Brand</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.stock}</td>
                <td>₹{product.price.toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
