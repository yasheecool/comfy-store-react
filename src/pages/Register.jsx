import { FormInput } from '../components';
import { Form } from 'react-router';
import endpoints from '../lib/endpoints';
import customFetch from '../lib/axios';
import { toast } from 'react-toastify';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const res = await customFetch.post(endpoints.register, {
      email,
      username,
      password,
    });
    const userWithToken = res.data;
    store.dispatch(login(userWithToken));
    toast.success(`Welcome ${userWithToken.user.username}`);
    return redirect('/');
  } catch (e) {
    const errorMsg = e.response.data.error.message || 'An error occured!';
    toast.error(errorMsg);
    return null;
  }
};

const Register = () => {
  return (
    <main className='h-screen'>
      <Form className='flex items-center justify-center h-full' method='POST'>
        <FormInput mode={'register'} />
      </Form>
    </main>
  );
};
export default Register;
