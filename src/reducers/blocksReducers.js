/* global document */

import { filter } from 'lodash';
import uuid from 'uuid/v4';
import moveInArray from '../helpers/moveInArray';

const stateElem = document.getElementById('blocks-state');

let initialState = { items: [] };

if (stateElem && stateElem.value.trim()) {
  try {
    initialState = JSON.parse(stateElem.value);
    initialState.items = initialState.items.map(item => ({ ...item, uuid: uuid() }));
  } catch (err) {
    console.error('There\'s an error in your JSON data', err); // eslint-disable-line
  }
}

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
    case 'MOVE' : {
      const movedState = Object.assign({}, state);

      movedState.items = moveInArray(
        movedState.items.slice(0),
        action.payload.from,
        action.payload.to
      );

      return movedState;
    }
    case 'ADD_BLOCK' : {
      const newState = Object.assign({}, state);
      const items = newState.items.slice(0);

      items.splice(action.payload.index, 0, {
        type: action.payload.type,
        data: {},
        designOptions: {},
        options: {},
        uuid: uuid(),
      });

      newState.items = items;

      return newState;
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
      const index = action.payload.index;

      // Clone state
      return Object.assign({}, state, {
        // Overwrite items
        items: state.items.map((item, i) => {
          // If this item changed
          if (i === index) {
            // Clone the item and change it's data
            return Object.assign({}, state.items[index], {
              data: action.payload.data,
            });
          }

          return item;
        }),
      });
    }
    default:
      return state;
  }
};

export default blocksReducers;
