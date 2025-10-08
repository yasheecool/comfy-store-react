import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  const {
    attributes: { title, price, image },
    id,
  } = product;
  const formattedPrice = Number(price) / 100;

  return (
    <Link
      className='rounded-xl shadow-lg p-4 flex flex-col gap-4 hover:shadow-2xl hover:cursor-pointer transition-all duration-300'
      to={`/products/${id}`}
    >
      <div className='rounded-xl overflow-hidden max-h-[240px]'>
        <img src={image} className='object-cover object-center h-full w-full' />
      </div>

      <div className='flex flex-col p-3 items-center justify-center gap-2'>
        <h3 className='text-xl font-semibold tracking-wider'>{title}</h3>
        <p className='text-secondary'>${formattedPrice}</p>
      </div>
    </Link>
  );
};
export default ProductCard;
