import { useDispatch, useSelector } from 'react-redux';
import { TitleWithBorder } from '../components';
import { Form } from 'react-router';
import { toast } from 'react-toastify';
import customFetch from '../lib/axios';

import CartSummary from '../components/CartSummary';
import endpoints from '../lib/endpoints';
import { clearCart } from '../slices/cartSlice';

export const checkoutAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const address = formData.get('address');

    if (!name || !address) {
      toast.error('Please provide all values');
      return null;
    }
    const cart = store.getState().cart;

    const newCartItems = cart.cartItems.map(({ product, quantity, color }) => {
      return {
        amount: quantity,
        ...product,
        productColor: color,
        productID: color + product.title,
        cartId: color + product.title,
      };
    });

    try {
      const body = {
        name,
        address,
        numItemsInCart: cart.quantity,
        chargeTotal: cart.subtotal + cart.shipping + cart.tax,
        orderTotal: String(cart.subtotal + cart.shipping + cart.tax),
        cartItems: newCartItems,
      };

      const data = await customFetch.post(endpoints.allOrders, {
        data: { ...body },
      });

      store.dispatch(clearCart());
      toast.success('Order placed successfully!');
    } catch (e) {}
  };

const Checkout = () => {
  const { cartItems, subtotal, shipping, tax } = useSelector((s) => s.cart);
  if (!cartItems.length)
    return (
      <section className='section-container py-20'>
        <TitleWithBorder text={'Your Cart is Empty'} />
      </section>
    );

  return (
    <section className='section-container py-20'>
      <TitleWithBorder text={'Place Your Order'} />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
        <Form className='flex flex-col gap-6' method='POST' action='/checkout'>
          <p className='text-xl font-medium'>Shipping Information</p>

          <div className='flex flex-col gap-2'>
            <label className='text-sm ml-1' htmlFor='name'>
              First Name
            </label>
            <input
              type='text'
              className='input input-lg w-full'
              id='name'
              name='name'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm ml-1' htmlFor='address'>
              Address
            </label>
            <input
              type='text'
              className='input input-lg w-full'
              id='address'
              name='address'
            />
          </div>

          <button className='btn btn-primary' type='submit'>
            Place your order
          </button>
        </Form>

        <CartSummary subtotal={subtotal} shipping={shipping} tax={tax} />
      </div>
    </section>
  );
};
export default Checkout;
