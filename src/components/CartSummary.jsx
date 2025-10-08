const CartSummary = ({ subtotal, shipping, tax }) => {
  return (
    <div className='p-8 bg-base-200 rounded-xl text-xs flex flex-col gap-4'>
      <div className='flex justify-between border-b-1 border-base-300 pb-1'>
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className='flex justify-between border-b-1 border-base-300 pb-2'>
        <p>Shipping</p>
        <p>${shipping}</p>
      </div>
      <div className='flex justify-between border-b-1 border-base-300 pb-2'>
        <p>Tax</p>
        <p>${tax.toFixed(2)}</p>
      </div>
      <div className='flex justify-between text-sm'>
        <p>Order Total</p>
        <p>${(subtotal + shipping + tax).toFixed(2)}</p>
      </div>
    </div>
  );
};
export default CartSummary;
