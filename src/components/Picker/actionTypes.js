export const HIDE_PICKER = 'HIDE_PICKER';
export const ADD_BLOCK = 'ADD_BLOCK';

export function hidePicker() {
  return {
    type: HIDE_PICKER,
    payload: {},
  };
}

export function addBlock(key, index) {
  return {
    type: ADD_BLOCK,
    payload: {
      type: key,
      index,
    },
  };
}
