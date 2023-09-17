const Form = (props) => {
  const { handleSubmit, handleChange, value } = props;

  return (
    <form className='d-flex' onSubmit={handleSubmit}>
      <div className='me-3'>
        <input
          className='form-control'
          type='text'
          placeholder='I am going...'
          value={value}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>add</button>
    </form>
  );
};

export default Form;