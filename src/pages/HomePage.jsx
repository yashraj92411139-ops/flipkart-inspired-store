export default function FiltersSidebar({ filters, setFilters, maxPrice }) {
  const brands = ['All', 'Noise', 'Samsung', 'Puma', 'Realme', 'Roadster', 'Borosil', 'Lakmé', 'Reebok', 'Havells'];

  return (
    <aside className="filters-panel">
      <div className="panel-header">
        <h3>Filters</h3>
      </div>

      <div className="filter-group">
        <label>Category</label>
        <select
          value={filters.category}
          onChange={(event) => setFilters((current) => ({ ...current, category: event.target.value }))}
        >
          <option value="all">All categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          <option value="appliances">Appliances</option>
          <option value="beauty">Beauty</option>
          <option value="fitness">Fitness</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Brand</label>
        <select
          value={filters.brand}
          onChange={(event) => setFilters((current) => ({ ...current, brand: event.target.value }))}
        >
          {brands.map((brand) => (
            <option key={brand} value={brand === 'All' ? 'all' : brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group slider-group">
        <label>Max price : ₹{maxPrice.toLocaleString('en-IN')}</label>
        <input
          type="range"
          min="500"
          max="50000"
          step="500"
          value={filters.maxPrice}
          onChange={(event) => setFilters((current) => ({ ...current, maxPrice: Number(event.target.value) }))}
        />
      </div>
    </aside>
  );
}
