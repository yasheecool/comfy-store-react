import ProductListCard from './ProductListCard';

const ProductList = ({ products }) => {
  return (
    <div className='flex flex-col gap-4'>
      {products.map((product) => {
        return <ProductListCard key={product.id} product={product} />;
      })}
    </div>
  );
};
export default ProductList;
