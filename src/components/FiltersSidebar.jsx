import ProductCard from './ProductCard';

export default function ProductSection({ title, products, showViewAll = true }) {
  return (
    <section className="content-section">
      <div className="section-heading">
        <div>
          <h2>{title}</h2>
        </div>
        {showViewAll && <button type="button" className="link-button">View all</button>}
      </div>

      <div className="product-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
