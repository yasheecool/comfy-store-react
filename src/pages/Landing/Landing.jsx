import { featuredProductsQuery } from '../../queries/products';
import FeaturedProducts from './FeaturedProducts';
import HeroSection from './HeroSection';

export const landingLoader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(featuredProductsQuery);
  return { featuredProducts: data.data.data };
};

const Landing = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
