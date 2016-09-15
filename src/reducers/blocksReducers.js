import moveInArray from '../helpers/moveInArray';

const initialState = {
  items: [{
    title: 'Default text 1',
    icon: 'text.svg',
    type: 'defaultText',
    data: {},
    designOptions: {},
    options: {},
  }, {
    title: 'Default text 2',
    icon: 'text.svg',
    type: 'defaultText',
    data: {},
    designOptions: {},
    options: {},
  }, {
    title: 'Default text 3',
    icon: 'text.svg',
    type: 'defaultText',
    data: {},
    designOptions: {},
    options: {},
  }],
};

const blocksReducers = (state = initialState, action) => {
  switch(action.type) {
    case 'MOVE_UP' :
      let moveUpIndex = action.payload - 1;

      // Check if the destination index is not out of bounds
      if (moveUpIndex < 0) {
        moveUpIndex = 0;
      }

      // Create a new state
      const movedUpState = Object.assign({}, state);

      // Move the items around
      movedUpState.items = moveInArray(movedUpState.items.slice(0), action.payload, moveUpIndex);

      // Return the new state
      return movedUpState;
    case 'MOVE_DOWN' :
      let moveDownIndex = action.payload + 1;

      // Check if the destination index is not out of bounds
      if (moveDownIndex > state.items.length - 1) {
        moveDownIndex = state.items.length - 1;
      }

      // Create a new state
      const movedDownState = Object.assign({}, state);

      // Move the items around
      movedDownState.items = moveInArray(movedDownState.items.slice(0), action.payload, moveDownIndex);

      // Return the new state
      return movedDownState;
    case 'REMOVE_BLOCK' :
      return state;
    default:
      return state;
  }
};

export default blocksReducers;
