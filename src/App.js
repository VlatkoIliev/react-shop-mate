import React, { useEffect, useReducer } from 'react';
import { v4 as uuid4 } from 'uuid';
import List from './components/List';
import InputForm from './components/InputForm';
import reducer from './reducer';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

const initState = {
  text: '',
  list: getLocalStorage(),
  editID: null,
  editing: false,
  alert: { show: false, type: '', msg: '' },
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleChange = (e) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.text) {
      dispatch({ type: 'EMPTY_FIELD ' });
    } else if (state.text && state.editing) {
      dispatch({ type: 'CHANGE_ITEM', payload: state.text });
    } else {
      const newItem = {
        id: uuid4(),
        name: state.text,
      };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
    }
  };

  const clearItems = () => {
    dispatch({ type: 'CLEAR_ITEMS' });
  };

  const deleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };
  const editItem = (id) => {
    dispatch({ type: 'EDIT_ITEM', payload: id });
  };

  const removeAlert = () => {
    dispatch({ type: 'REMOVE_ALERT' });
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.list));
  }, [state.list]);
  return (
    <section className='section-center'>
      <InputForm
        text={state.text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        removeAlert={removeAlert}
        editing={state.editing}
        list={state.list}
        alert={state.alert}
      />
      <div className='grocery-container'>
        <List list={state.list} deleteItem={deleteItem} editItem={editItem} />
        <button className='clear-btn' onClick={clearItems}>
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
