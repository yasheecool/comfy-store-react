import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import CartItemCard from './CartItemCard';
import CartSummary from '../../components/CartSummary';
import { removeItem, editItem } from '../../slices/cartSlice';
import { toast } from 'react-toastify';
import { TitleWithBorder } from '../../components';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, shipping, subtotal, tax } = useSelector((s) => s.cart);

  const user = useSelector((s) => s.user.user);

  const removeItemFromCart = ({ color, title, quantity, price }) => {
    dispatch(removeItem({ color, title, quantity, price }));
    toast.error('Item removed!');
  };

  const editItemInCart = ({ color, quantity, title, price }) => {
    dispatch(editItem({ color, quantity, title, price }));
    toast.success('Cart Updated!');
  };

  if (!cartItems.length)
    return (
      <section className='section-container py-20'>
        <TitleWithBorder text={'Your Cart is Empty'} />
      </section>
    );

  return (
    <section className='section-container py-20'>
      <TitleWithBorder text={'Shopping Cart'} />

      <div className='grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto]'>
        {cartItems.map(({ product, quantity, color }) => {
          const cartItemProps = {
            ...product,
            quantity,
            color,
          };

          return (
            <CartItemCard
              {...cartItemProps}
              key={color + product.title}
              removeItem={removeItemFromCart}
              editItem={editItemInCart}
            />
          );
        })}

        <div className='flex flex-col gap-6 lg:w-84'>
          <CartSummary shipping={shipping} subtotal={subtotal} tax={tax} />
          {user ? (
            <Link
              className='btn btn-primary btn-block uppercase'
              to={'/checkout'}
            >
              Proceed to checkout
            </Link>
          ) : (
            <Link className='btn btn-block btn-primary uppercase' to={'/login'}>
              Please Login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default Cart;
