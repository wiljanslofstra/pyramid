import { filter } from 'lodash';
import moveInArray from '../helpers/moveInArray';

const initialState = {
  items: [{
    type: 'defaultText',
    data: { text: 'Test 0' },
    designOptions: {},
    options: {},
  }, {
    type: 'defaultText',
    data: { text: 'Test 1' },
    designOptions: {},
    options: {},
  }, {
    type: 'defaultText',
    data: { text: 'Test 2' },
    designOptions: {},
    options: {},
  }],
};

const blocksReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_UP' : {
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
    }
    case 'MOVE_DOWN' : {
      let moveDownIndex = action.payload + 1;

      // Check if the destination index is not out of bounds
      if (moveDownIndex > state.items.length - 1) {
        moveDownIndex = state.items.length - 1;
      }

      // Create a new state
      const movedDownState = Object.assign({}, state);

      // Move the items around
      movedDownState.items = moveInArray(
        movedDownState.items.slice(0),
        action.payload,
        moveDownIndex
      );

      // Return the new state
      return movedDownState;
    }
    case 'REMOVE_BLOCK' : {
      const newState = Object.assign({}, state);
      const index = action.payload;

      if (index >= newState.items.length) {
        throw new Error('The index should not exceed the number of blocks');
      } else if (index < 0) {
        throw new Error('The index should not be less than zero');
      }

      newState.items = filter(newState.items, (item, i) => i !== index);

      return newState;
    }
    case 'UPDATE_BLOCK_DATA' : {
      const newState = Object.assign({}, state);
      const items = newState.items.slice(0);
      const item = items[action.payload.index];

      item.data = action.payload.data;

      items[action.payload.index] = item;
      newState.items = items;
      return newState;
    }
    default:
      return state;
  }
};

export default blocksReducers;
