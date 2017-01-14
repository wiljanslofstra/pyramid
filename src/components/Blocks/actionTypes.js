export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';
export const MOVE = 'MOVE';
export const ADD_BLOCK = 'ADD_BLOCK';
export const REMOVE_BLOCK = 'REMOVE_BLOCK';
export const UPDATE_BLOCK_DATA = 'UPDATE_BLOCK_DATA';
export const ENABLE_DEBUG = 'ENABLE_DEBUG';
export const DISABLE_DEBUG = 'DISABLE_DEBUG';

export function moveUp(index) {
  return {
    type: MOVE_UP,
    payload: index,
  };
}

export function moveDown(index) {
  return {
    type: MOVE_DOWN,
    payload: index,
  };
}

export function move(from, to) {
  return {
    type: MOVE,
    payload: {
      from,
      to,
    },
  };
}

export function addBlock(type) {
  return {
    type: ADD_BLOCK,
    payload: type,
  };
}

export function removeBlock(index) {
  return {
    type: REMOVE_BLOCK,
    payload: index,
  };
}

export function updateBlockData(data, index) {
  return {
    type: UPDATE_BLOCK_DATA,
    payload: {
      data,
      index,
    },
  };
}

export function enableDebug() {
  return {
    type: ENABLE_DEBUG,
  };
}

export function disableDebug() {
  return {
    type: DISABLE_DEBUG,
  };
}
