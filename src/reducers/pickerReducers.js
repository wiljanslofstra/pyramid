const initialState = {
  pickerVisible: false,
  insertIndex: -1,
};

const blocksReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_PICKER' : {
      // Create a new state
      const newState = Object.assign({}, state);

      newState.pickerVisible = true;

      // Return the new state
      return newState;
    }
    case 'HIDE_PICKER' : {
      // Create a new state
      const newState = Object.assign({}, state);

      newState.pickerVisible = false;

      // Return the new state
      return newState;
    }
    case 'PICKER_INSERT_INDEX' : {
      // Create a new state
      const newState = Object.assign({}, state);

      newState.insertIndex = action.payload + 1;

      // Return the new state
      return newState;
    }
    default:
      return state;
  }
};

export default blocksReducers;
