import { Link, useRouteError } from 'react-router';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className='flex items-center justify-center h-[100vh]'>
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-9xl font-semibold text-primary'>404</h1>
          <h3 className='text-4xl font-bold'>Page not found</h3>
          <p className='text-lg'>
            Sorry, we couldn't find the page you're looking for
          </p>
          <Link
            to={'/'}
            className='btn bg-secondary rounded-md text-secondary-content btn-lg '
          >
            Go Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className='h-[100vh] flex items-center justify-center'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h3>There was an error!</h3>
        <p>Error: {error.message || 'Something went wrong'} </p>
        <button className='btn bg-secondary rounded-md text-secondary-content'>
          <Link to={'/'}>Go Back Home</Link>
        </button>
      </div>
    </main>
  );
};
export default Error;
