import { IoCartOutline } from 'react-icons/io5';
import { RiMenu4Line } from 'react-icons/ri';
import { Link } from 'react-router';
import NavLinks from './NavLinks';
import ThemeSwitcher from './ThemeSwitcher';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((s) => s.cart);
  const { quantity } = cart;

  return (
    <nav className='bg-base-200'>
      <div className='section-container flex items-center justify-between py-2'>
        <Link
          to='/'
          className='hidden items-center btn btn-primary btn-lg text-3xl lg:flex'
        >
          C
        </Link>

        <div className='lg:hidden'>
          <button
            className='btn text-3xl font-semibold'
            popoverTarget='popover-1'
            style={{ anchorName: '--anchor-1' }}
          >
            <RiMenu4Line />
          </button>

          <ul
            className='dropdown menu w-52 rounded-box bg-base-200 shadow-sm'
            popover='auto'
            id='popover-1'
            style={{ positionAnchor: '--anchor-1' }}
          >
            <NavLinks />
          </ul>
        </div>

        <ul className='hidden lg:flex'>
          <NavLinks linkClass={'btn font-normal'} />
        </ul>

        <div className='flex gap-2 items-center'>
          <ThemeSwitcher />
          <Link className='btn btn-circle  relative' to='/cart'>
            <p className='btn-circle absolute bg-primary h-4 w-7 top-0 right-0 translate-x-1/3 text-xs text-primary-content'>
              {quantity}
            </p>
            <IoCartOutline className='text-3xl' />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
