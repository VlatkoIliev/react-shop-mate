import React from 'react';
import Alert from './Alert';

const InputForm = ({
  text,
  handleSubmit,
  handleChange,
  list,
  alert,
  removeAlert,
  editing,
}) => {
  return (
    <form className='grocery-form' onSubmit={handleSubmit}>
      <Alert {...alert} removeAlert={removeAlert} list={list} />
      <h3>shop mate</h3>
      <div className='form-control'>
        <input
          type='text'
          placeholder='e.g milk'
          className='grocery'
          value={text}
          onChange={handleChange}
        />
        <button type='submit' className='submit-btn'>
          {!editing ? 'submit' : 'edit'}
        </button>
      </div>
    </form>
  );
};

export default InputForm;
