import BannerCarousel from '../components/BannerCarousel';
import CategoryMenu from '../components/CategoryMenu';
import ProductSection from '../components/ProductSection';
import { useStore } from '../context/StoreContext';

export default function HomePage() {
  const { products } = useStore();

  return (
    <>
      <CategoryMenu />
      <BannerCarousel />

      <div className="page-block container">
        <ProductSection title="Deals of the Day" products={products.slice(0, 5)} />
        <ProductSection title="Top Rated Electronics" products={products.slice(3, 8)} />
        <ProductSection title="Fashion & Lifestyle" products={products.slice(2, 7)} />
        <ProductSection title="Smart Home & Appliances" products={products.slice(4, 9)} />
      </div>
    </>
  );
}
