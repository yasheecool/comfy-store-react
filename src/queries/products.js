import customFetch from '../lib/axios';
import endpoints from '../lib/endpoints';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch.get(endpoints.featuredProducts),
};

const allProductsQuery = () => {
  return {
    queryKey: ['products', { page: 1 }],
    queryFn: () => customFetch.get(endpoints.allProducts),
  };
};

const paginateProductsQuery = (pageNum) => {
  return {
    queryKey: ['products', { page: pageNum }],
    queryFn: () => customFetch.get(endpoints.paginateProducts(pageNum)),
  };
};

const filterProductsQuery = (paramsObj, paramStr) => {
  return {
    queryKey: ['products', paramsObj],
    queryFn: () => customFetch.get(endpoints.filterProducts(paramStr)),
  };
};

export {
  featuredProductsQuery,
  allProductsQuery,
  paginateProductsQuery,
  filterProductsQuery,
};
