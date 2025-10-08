import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/cart', label: 'Cart' },
  { to: '/checkout', label: 'Checkout', isProtected: true },
  { to: '/orders', label: 'Orders', isProtected: true },
];

const NavLinks = ({ linkClass }) => {
  const user = useSelector((s) => s.user.user);
  return (
    <>
      {navLinks.map(({ to, label, isProtected }) => {
        return (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${linkClass} ${
                  isProtected && !user
                    ? 'hidden'
                    : isActive
                    ? 'bg-neutral text-neutral-content'
                    : ''
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
