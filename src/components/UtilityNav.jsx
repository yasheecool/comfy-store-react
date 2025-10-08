import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/userSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const UtilityNav = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    toast.success('logged out successfully!');
  };

  return (
    <div className='h-[35px] bg-neutral'>
      <div className='section-container flex items-center h-full gap-4 text-sm justify-end text-neutral-content'>
        {user ? (
          <>
            <p>Hello, {user.username}</p>
            <Link
              to={'/'}
              className='btn btn-xs btn-outline uppercase btn-primary'
              onClick={logoutUser}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to='/login'>Sign in / Guest</Link>
            <Link to='/register'>Create Account</Link>
          </>
        )}
      </div>
    </div>
  );
};
export default UtilityNav;
