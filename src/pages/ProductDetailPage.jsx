import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FiltersSidebar from '../components/FiltersSidebar';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';

export default function ProductListPage() {
  const { products, searchTerm } = useStore();
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    brand: 'all',
    maxPrice: 50000,
  });

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setFilters((current) => ({ ...current, category: categoryFromUrl }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    const list = products.filter((product) => {
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      const matchesBrand = filters.brand === 'all' || product.brand === filters.brand;
      const matchesPrice = product.price <= filters.maxPrice;
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
    });

    switch (sortBy) {
      case 'low-high':
        return [...list].sort((a, b) => a.price - b.price);
      case 'high-low':
        return [...list].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }, [filters, products, searchTerm, sortBy]);

  return (
    <div className="page-block container product-list-page">
      <FiltersSidebar filters={filters} setFilters={setFilters} maxPrice={filters.maxPrice} />

      <main className="products-main">
        <div className="toolbar">
          <div>
            <h2>Products</h2>
            <p>{filteredProducts.length} items found</p>
          </div>

          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="empty-state">No products match your filters.</div>
          )}
        </div>
      </main>
    </div>
  );
}
