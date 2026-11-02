import { useEffect, useState } from 'react';
import { banners } from '../data/mockData';

export default function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="banner-carousel container">
      <div className="banner-slide">
        <img src={banners[activeIndex].image} alt={banners[activeIndex].title} />
        <div className="banner-copy">
          <span>{banners[activeIndex].title}</span>
          <h2>{banners[activeIndex].subtitle}</h2>
        </div>
      </div>

      <div className="banner-dots" aria-label="Banner navigation">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            className={index === activeIndex ? 'dot active' : 'dot'}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
