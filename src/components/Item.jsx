const Item = (props) => {
  const { task, handleRemove } = props;

  return (
    <div className='row'>
      <div className='col-auto'>
        <button type='button' className='btn btn-primary btn-sm' onClick={handleRemove}>-</button>
      </div>
      <div className='col'>{task}</div>
    </div>
  );
};

export default Item;