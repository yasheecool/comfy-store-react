import Filters from './Filters';
import { useLoaderData, Link } from 'react-router';
import { BsGridFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa6';
import { useState } from 'react';
import { ProductGrid } from '../../components';
import ProductList from './ProductList';
import {
  filterProductsQuery,
  allProductsQuery,
  paginateProductsQuery,
} from '../../queries/products';

export const productsLoader =
  (queryClient) =>
  async ({ request }) => {
    const searchParamsFromUrl = new URL(request.url).searchParams;
    const searchParamsStr = searchParamsFromUrl.toString();
    const searchParamsObj = Object.fromEntries(searchParamsFromUrl.entries());
    let result;

    if (!searchParamsStr) {
      result = await queryClient.ensureQueryData(allProductsQuery());
    } else if (searchParamsObj.page) {
      result = await queryClient.ensureQueryData(
        paginateProductsQuery(Number(searchParamsObj.page))
      );
    } else {
      result = await queryClient.ensureQueryData(
        filterProductsQuery(searchParamsObj, searchParamsStr)
      );
    }

    const {
      data: { data, meta },
    } = result;

    return { products: data, meta };
  };

const Products = () => {
  const [currentView, setCurrentView] = useState('grid');

  const { products, meta } = useLoaderData();
  const {
    pagination: { page, total, pageCount },
  } = meta;

  return (
    <section className='section-container py-20'>
      <Filters />

      <div className='mt-10 flex items-center justify-between pb-4 border-b-1 border-base-300 mb-12'>
        <p className='font-semibold'>{total} Products</p>

        <div className='flex gap-2 '>
          <button
            className={`btn btn-circle text-xl btn-sm ${
              currentView === 'grid' ? 'btn-primary' : 'btn-ghost'
            }`}
            onClick={() => setCurrentView('grid')}
          >
            <BsGridFill />
          </button>
          <button
            className={`btn btn-circle text-xl btn-sm ${
              currentView === 'list' ? 'btn-primary' : 'btn-ghost'
            }`}
            onClick={() => setCurrentView('list')}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {currentView === 'grid' ? (
        <ProductGrid products={products} />
      ) : (
        <ProductList products={products} />
      )}

      <div className='flex justify-end mt-12'>
        <div className='join'>
          {Array.from({ length: pageCount }).map((_, idx) => {
            return (
              <Link
                to={`/products?page=${idx + 1}`}
                key={idx + 1}
                className={`join-item btn ${
                  page === idx + 1 ? 'btn-active' : ''
                }`}
              >
                {idx + 1}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Products;
