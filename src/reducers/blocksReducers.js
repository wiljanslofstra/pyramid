const initialState = {
  items: [],
};

const blocksReducers = (state = initialState, action) => {
  console.log(state, action);
  return state;
};

export default blocksReducers;
