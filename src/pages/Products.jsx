import { Filters, Paginations, ProductsContainer } from '../components';
import { customFetch } from '../utilits';

const url = '/products';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, { params });

  return { products: response.data.data, meta: response.data.meta, params };
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <Paginations />
    </div>
  );
};
export default Products;
