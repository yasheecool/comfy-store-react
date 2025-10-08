import { Form, Link } from 'react-router';
import FormLabel from './FormLabel';
import { useState } from 'react';

const categories = ['Beds', 'Sofas', 'Chairs', 'Kids', 'Tables'];
const companies = ['Artifex', 'Homestead', 'Luxora', 'Comfora', 'Modenza'];
const sortOptions = ['a-z', 'z-a', 'high', 'low'];

// TODO: SPlit this component further
const Filters = () => {
  const [price, setPrice] = useState(100000);

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-10 items-center'>
      <div>
        <FormLabel htmlFor={'search-input'} text='Search Term' />
        <div className='input input-sm w-full'>
          <svg
            className='h-[1em] opacity-50'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2.5'
              fill='none'
              stroke='currentColor'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <path d='m21 21-4.3-4.3'></path>
            </g>
          </svg>
          <input
            type='search'
            placeholder='Search'
            id='search-input'
            name='search'
          />
        </div>
      </div>

      <div>
        <FormLabel htmlFor='categories' text={'Select Category'} />
        <select
          defaultValue='all'
          id='categories'
          className='select appearance-none select-sm font-semibold w-full'
          name='category'
        >
          <option>all</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>

      <div>
        <FormLabel htmlFor='companies' text={'Select Company'} />

        <select
          defaultValue='all'
          id='companies'
          className='select appearance-none select-sm font-semibold w-full'
          name='company'
        >
          <option>all</option>
          {companies.map((company) => (
            <option key={company}>{company}</option>
          ))}
        </select>
      </div>

      <div>
        <FormLabel htmlFor='sortOptions' text={'Sort Options'} />
        <select
          defaultValue='a-z'
          id='sortOptions'
          className='select appearance-none select-sm font-semibold w-full'
          name='order'
        >
          {sortOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <div className='flex justify-between items-center'>
          <FormLabel htmlFor='price' text={'Select Price Range'} />
          <p className='text-sm'>${price / 100}.00</p>
        </div>

        <input
          type='range'
          min={0}
          step={1000}
          max='100000'
          name='price'
          id='price'
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className='range range-primary w-full'
        />
        <div className='flex text-xs justify-between p-2 font-semibold'>
          <p>0</p>
          <p>Max: $1000.00</p>
        </div>
      </div>

      <div className='flex items-center justify-center flex-col'>
        <FormLabel htmlFor='shipping' text={'Free Shipping'} />
        <input
          type='checkbox'
          id='shipping'
          name='shipping'
          defaultChecked={false}
          className='checkbox checkbox-primary'
        />
      </div>

      <button
        className='btn btn-sm btn-primary text-primary-content uppercase'
        type='submit'
      >
        Search
      </button>

      <Link
        className='btn btn-sm btn-accent text-base-200 uppercase'
        to={'/products'}
      >
        Reset
      </Link>
    </Form>
  );
};
export default Filters;
