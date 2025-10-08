import { useLoaderData } from 'react-router';
import { ProductGrid } from '../../components';

const FeaturedProducts = () => {
  const { featuredProducts } = useLoaderData();

  return (
    <section className='section-container py-20'>
      <h2 className='text-3xl tracking-wider font-semibold mb-4'>
        Featured Products
      </h2>
      <div className='border-[0.75px] border-base-300 mb-8'></div>

      <ProductGrid products={featuredProducts} />
    </section>
  );
};

export default FeaturedProducts;
