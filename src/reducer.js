const reducer = (state, action) => {
  if (action.type === 'SET_NAME') {
    return { ...state, text: action.payload };
  }
  if (action.type === 'EMPTY_FIELD') {
    return {
      ...state,
      alert: { show: true, type: 'danger', msg: 'please enter value' },
    };
  }
  if (action.type === 'CLEAR_ITEMS') {
    return {
      ...state,
      list: [],
      alert: { show: true, type: 'danger', msg: 'empty list' },
    };
  }
  if (action.type === 'DELETE_ITEM') {
    const newList = state.list.filter((item) => item.id !== action.payload);
    return {
      ...state,
      list: newList,
      alert: { show: true, type: 'danger', msg: 'item deleted' },
    };
  }
  if (action.type === 'ADD_ITEM') {
    const newList = [...state.list, action.payload];
    return {
      ...state,
      text: '',
      list: newList,
      alert: { show: true, type: 'success', msg: 'item added' },
    };
  }
  if (action.type === 'EDIT_ITEM') {
    let specificItem = state.list.find((item) => item.id === action.payload);
    return {
      ...state,
      text: specificItem.name,
      editID: action.payload,
      editing: true,
    };
  }
  if (action.type === 'CHANGE_ITEM') {
    let newList = state.list.map((item) => {
      if (item.id === state.editID) {
        return { ...item, name: action.payload };
      }
      return item;
    });
    return {
      ...state,
      text: '',
      list: newList,
      editID: null,
      editing: false,
      alert: { show: true, type: 'success', msg: 'item edited' },
    };
  }

  if (action.type === 'REMOVE_ALERT') {
    return { ...state, alert: { show: false, type: '', msg: '' } };
  }

  throw new Error('NO MATCHING ACTION TYPE!');
};

export default reducer;
