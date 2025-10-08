import { Link } from 'react-router';

const ProductListCard = ({ product }) => {
  const { id, attributes } = product;

  const { image, title, price, company } = attributes;

  return (
    <Link
      to={`/products/${id}`}
      className='shadow-lg flex flex-col p-8 rounded-lg hover:shadow-xl transition-all gap-6 group md:flex-row md:gap-12'
    >
      <div className='w-36 h-36 overflow-hidden rounded-md group-hover:scale-105 transition-transform'>
        <img src={image} alt={title} className='w-full h-full' />
      </div>

      <div className='flex justify-between w-full flex-1'>
        <div>
          <h2 className='font-semibold text-lg'>{title}</h2>
          <p className='text-neutral-content'>{company}</p>
        </div>
        <p className='text-lg font-semibold'>${price / 100}</p>
      </div>
    </Link>
  );
};
export default ProductListCard;
