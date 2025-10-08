import { Link } from 'react-router';
import { useSubmit, useNavigation } from 'react-router';

const modeConfig = {
  login: {
    switchText: 'Not a member yet?',
    switchLink: '/register',
    switchLinkText: 'Register',
    showUsername: false,
  },
  register: {
    switchText: 'Already a member?',
    switchLink: '/login',
    switchLinkText: 'Login',
    showUsername: true,
  },
};

const FormInput = ({ mode }) => {
  const config = modeConfig[mode] || {};
  const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const loginAsGuest = () => {
    submit({ email: 'test@test.com', password: 'secret' }, { method: 'post' });
  };

  return (
    <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-xl'>
      <h1 className='mx-auto text-3xl font-semibold'>{mode.toUpperCase()}</h1>

      {config.showUsername && (
        <>
          <label className='label mt-3'>Username</label>
          <input
            type='text'
            className='input'
            placeholder='Username'
            name='username'
          />
        </>
      )}

      <label className='label mt-3'>Email</label>
      <input type='email' className='input' placeholder='Email' name='email' />

      <label className='label mt-3'>Password</label>
      <input
        type='password'
        className='input'
        placeholder='Password'
        name='password'
      />

      {isSubmitting ? (
        <button className='btn mt-4' disabled>
          Sending <span className='loading loading-spinner'></span>
        </button>
      ) : (
        <button
          className='btn btn-primary mt-4'
          type='submit'
          disabled={isSubmitting}
        >
          {mode.toUpperCase()}
        </button>
      )}

      {mode === 'login' && (
        <button
          className='btn btn-secondary mt-2'
          onClick={loginAsGuest}
          type='button'
        >
          Guest User
        </button>
      )}

      <p className='mx-auto mt-2 text-sm'>
        {config.switchText}{' '}
        <Link to={config.switchLink} className='link text-primary link-hover'>
          {config.switchLinkText}
        </Link>
      </p>
    </fieldset>
  );
};

export default FormInput;
