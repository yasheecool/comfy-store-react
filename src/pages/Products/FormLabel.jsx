const FormLabel = ({ htmlFor, text }) => {
  return (
    <label className='text-sm mb-2 block ml-1' htmlFor={htmlFor}>
      {text}
    </label>
  );
};
export default FormLabel;
