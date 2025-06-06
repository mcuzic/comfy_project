import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState('grid');

  const setActiveStyle = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-based-content'
    }`;
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => {
              setLayout('grid');
            }}
            className={setActiveStyle('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => {
              setLayout('list');
            }}
            className={setActiveStyle('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* Products */}
      {totalProducts === 0 ? (
        <h4 className="text-3xl">No products available</h4>
      ) : layout === 'grid' ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </>
  );
};
export default ProductsContainer;
