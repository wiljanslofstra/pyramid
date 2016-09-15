const initialState = {
  items: [{
    title: 'Default text',
    icon: 'text.svg',
    type: 'defaultText',
    data: {},
    designOptions: {},
    options: {},
  }],
};

const blocksReducers = (state = initialState, action) => {
  console.log(state, action);
  return state;
};

export default blocksReducers;
