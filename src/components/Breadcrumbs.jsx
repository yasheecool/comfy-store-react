import { Link } from 'react-router';

const Breadcrumbs = () => {
  return (
    <div className='breadcrumbs text-base mb-6 '>
      <ul>
        <li>
          <Link className='link link-hover' to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className='link link-hover' to={'/products'}>
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Breadcrumbs;
