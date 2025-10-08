const About = () => {
  return (
    <section className='section-container py-20 flex flex-col gap-6'>
      <div className='flex flex-wrap justify-center items-center gap-4 '>
        <h1 className='text-center text-6xl font-bold'>We love</h1>
        <p className='bg-primary text-4xl py-3 px-4 rounded-lg shadow-accent shadow-sm font-bold text-primary-content tracking-widest'>
          comfy
        </p>
      </div>

      <p className='leading-7 text-lg max-w-2xl mx-auto tracking-wide'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        ipsam recusandae expedita quisquam, reprehenderit temporibus facilis
        repellendus maxime, deleniti aut ullam. Non enim consectetur corrupti
        itaque voluptate, repellendus laborum error!
      </p>
    </section>
  );
};
export default About;
