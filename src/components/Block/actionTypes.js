export const SHOW_PICKER = 'SHOW_PICKER';
export const PICKER_INSERT_INDEX = 'PICKER_INSERT_INDEX';

export function showPicker() {
  return {
    type: SHOW_PICKER,
    payload: {},
  };
}

export function insertAtIndex(index) {
  return {
    type: PICKER_INSERT_INDEX,
    payload: index,
  };
}
