import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ListItem = ({ id, name, deleteItem, editItem }) => {
  return (
    <article className='grocery-item'>
      <p className='grocery-title'>{name}</p>
      <div className='btn-container'>
        <button type='btn' className='edit-btn' onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button
          type='btn'
          className='delete-btn'
          onClick={() => deleteItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default ListItem;
