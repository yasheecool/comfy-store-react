import { useLoaderData } from 'react-router';
import customFetch from '../lib/axios';
import endpoints from '../lib/endpoints';
import { Breadcrumbs } from '../components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../slices/cartSlice';
import { toast } from 'react-toastify';

const singleProductQuery = (id) => {
  return {
    queryKey: ['product', id],
    queryFn: () => customFetch.get(endpoints.singleProduct(id)),
  };
};

export const singleProductLoader =
  (queryClient) =>
  async ({ params }) => {
    const { id: productId } = params;
    const data = await queryClient.ensureQueryData(
      singleProductQuery(productId)
    );

    return { product: data.data.data.attributes, productId };
  };

const SingleProduct = () => {
  const { product, productId } = useLoaderData();
  const {
    // category,
    colors,
    company,
    // createdAt,
    description,
    // featured,
    image,
    price,
    // publishedAt,
    // shipping,
    title,
    // updatedAt,
  } = product;
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      addItem({
        quantity,
        color: currentColor,
        product,
      })
    );

    toast.success('Product added to cart!');
  };

  return (
    <section className='section-container py-20'>
      <Breadcrumbs />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-xl lg:w-full'
        />

        <div className='flex flex-col gap-3 items-start'>
          <h3 className='text-3xl font-bold'>{title}</h3>
          <p className='text-xl font-bold text-neutral-content'>{company}</p>
          <p className='text-xl'>${Number(price) / 100}</p>

          <p className='py-2 tracking-wide leading-7'>{description}</p>

          <div>
            <p className='font-semibold tracking-wide mb-2'>Colors</p>

            {colors.map((color) => (
              <button
                key={color}
                className={`btn btn-circle btn-xs mr-2 ${
                  currentColor === color ? 'border-secondary border-2' : ''
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setCurrentColor(color)}
              ></button>
            ))}
          </div>

          <div className='w-3/4 max-w-xs flex flex-col gap-1'>
            <label htmlFor={'quantity-select'}>Amount</label>
            <select
              className='select appearance-none select-secondary select-md w-full'
              id='quantity-select'
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[...Array(20)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <button
            className='btn btn-secondary text-secondary-content uppercase mt-3'
            onClick={addItemToCart}
          >
            Add to bag
          </button>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
