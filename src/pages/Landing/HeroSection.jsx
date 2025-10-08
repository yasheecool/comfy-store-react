import hero1 from '../../assets/hero1.webp';
import hero2 from '../../assets/hero2.webp';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <section className='section-container py-20'>
      <div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>
        <div className='flex flex-col gap-6 items-start max-w-2xl'>
          <h1 className='text-6xl font-bold tracking-tight'>
            We are changing the way people shop
          </h1>

          <p className='leading-7 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            laborum voluptates asperiores repudiandae ad, libero eum, molestiae,
            unde tempora. Lorem ipsum, dolor sit amet consectur.
          </p>

          <Link
            to='/products'
            className='btn btn-primary uppercase text-primary-content mt-2'
          >
            Our Products
          </Link>
        </div>

        <div className='bg-neutral rounded-2xl p-4  gap-4 hidden lg:flex overflow-hidden h-[28rem]'>
          <img src={hero1} alt='' className='rounded-2xl' />
          <img src={hero2} alt='' className='rounded-2xl' />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
