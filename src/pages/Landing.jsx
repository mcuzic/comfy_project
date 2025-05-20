import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utilits';

const url = 'products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  return { products: response.data.data };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
