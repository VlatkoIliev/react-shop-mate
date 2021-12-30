import React from 'react';
import ListItem from './ListItem';

const List = ({ list, deleteItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            {...item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default List;
