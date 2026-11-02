import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export default function CategoryMenu() {
  const { categories } = useStore();

  return (
    <div className="category-menu-wrap container">
      <div className="category-menu">
        {categories.map((category) => (
          <Link key={category.id} to={`/products?category=${category.id}`} className="category-item">
            <span>{category.icon}</span>
            <strong>{category.name}</strong>
          </Link>
        ))}
      </div>
    </div>
  );
}
