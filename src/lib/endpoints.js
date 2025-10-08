const endpoints = {
  featuredProducts: '/products?featured=true',
  singleProduct: (id) => `/products/${id}`,
  login: '/auth/local',
  register: '/auth/local/register',
  allProducts: '/products',
  allOrders: '/orders',
  paginateProducts: (pageNum) => `/products?page=${pageNum}`,
  filterProducts: (queryString) => `/products?${queryString}`,
};

export default endpoints;
