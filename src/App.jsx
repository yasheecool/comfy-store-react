import { createBrowserRouter, redirect } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './App.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {
  Error,
  Products,
  About,
  HomeLayout,
  Landing,
  Checkout,
  Register,
  Cart,
  SingleProduct,
  Login,
  Orders,
} from './pages';
import { landingLoader } from './pages/Landing/Landing';
import { singleProductLoader } from './pages/SingleProduct';
import { productsLoader } from './pages/Products/Products';
import { loginAction } from './pages/Login';
import { registerAction } from './pages/Register';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store';
import { toast } from 'react-toastify';
import { checkoutAction } from './pages/Checkout';
import { orderLoader } from './pages/Orders';

const queryClient = new QueryClient();

async function authLoader() {
  const user = store.getState().user;

  if (!user.user) {
    toast.info('Please login to access the desired page');
    throw redirect('/login');
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        Component: Landing,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'products',
        children: [
          {
            index: true,
            loader: productsLoader(queryClient),
            Component: Products,
          },
          {
            path: ':id',
            loader: singleProductLoader(queryClient),
            Component: SingleProduct,
          },
        ],
      },
      {
        path: 'cart',
        Component: Cart,
      },
      {
        path: 'checkout',
        action: checkoutAction(store),
        Component: Checkout,
      },
      {
        path: 'orders',
        loader: () => {
          authLoader();
          return orderLoader(queryClient)();
        },
        Component: Orders,
      },
    ],
  },
  {
    path: '/login',
    errorElement: <Error />,
    action: loginAction(store),
    Component: Login,
  },
  {
    path: '/register',
    errorElement: <Error />,
    action: registerAction,
    Component: Register,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position='top-center' />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
