const CartItemCard = ({
  title,
  color,
  image,
  company,
  quantity,
  price,
  removeItem,
  editItem,
}) => {
  return (
    <div
      className='flex flex-col justify-between sm:flex-row'
      key={title + color}
    >
      <img src={image} className='w-36 h-36 rounded-lg' />

      {/* TITLE + COMPANY + COLOR */}
      <div className='flex flex-col gap-4'>
        <p className='font-semibold'>{title}</p>
        <p className='text-sm text-neutral-content'>{company}</p>
        <div className='text-sm flex items-center'>
          <p>Color: </p>
          <span className='h-4 w-4 bg-amber-100 rounded-full ml-2 inline-block'></span>
        </div>
      </div>

      {/* SELECT + REMOVE BUTTON */}
      <div className='flex flex-col gap-2 justify-start'>
        <label htmlFor='select-qty' className='text-sm'>
          Quantity
        </label>
        <select
          defaultValue={quantity}
          className='select appearance-none select-xs'
          id='select-qty'
          onChange={(e) =>
            editItem({ title, quantity: Number(e.target.value), color, price })
          }
        >
          {Array.from({ length: 7 }).map((val, idx) => {
            return (
              <option key={idx} value={idx + 1}>
                {idx + 1}
              </option>
            );
          })}
        </select>
        <button
          className='btn btn-primary btn-sm bg-transparent border-0 text-primary hover:btn-link'
          onClick={() => {
            removeItem({ title, color, quantity, price });
          }}
        >
          Remove
        </button>
      </div>

      <p>${price / 100}</p>
    </div>
  );
};
export default CartItemCard;
