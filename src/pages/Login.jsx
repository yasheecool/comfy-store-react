import { FormInput } from '../components';
import { Form, redirect } from 'react-router';
import { toast } from 'react-toastify';
import customFetch from '../lib/axios';
import endpoints from '../lib/endpoints';
import { login } from '../slices/userSlice';

export const loginAction =
  (store) =>
  async ({ request }) => {
    let formData = await request.formData();
    const identifier = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await customFetch.post(endpoints.login, {
        identifier,
        password,
      });

      const userWithToken = res.data;
      store.dispatch(login(userWithToken));
      toast.success(`Welcome ${userWithToken.user.username}`);
      return redirect('/');
    } catch (e) {
      const errorMsg = e.response.data.error.message;
      toast.error(errorMsg);
      return null;
    }
  };

const Login = () => {
  return (
    <main className='h-screen'>
      <Form method='POST' className='flex items-center justify-center h-full'>
        <FormInput mode={'login'} />
      </Form>
    </main>
  );
};

export default Login;
