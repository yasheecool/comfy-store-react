const TitleWithBorder = ({ text }) => {
  return (
    <h1 className='text-3xl tracking-wider border-b-1 border-neutral-content font-medium pb-4 mb-8'>
      {text}
    </h1>
  );
};
export default TitleWithBorder;
