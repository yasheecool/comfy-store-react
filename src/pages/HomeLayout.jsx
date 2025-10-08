import { Outlet } from 'react-router';
import { Navbar, UtilityNav } from '../components';

const HomeLayout = () => {
  return (
    <>
      <header>
        <UtilityNav />
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
export default HomeLayout;
