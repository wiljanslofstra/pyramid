import { connect } from 'react-redux';
import Blocks from './Blocks';

export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';
export const ADD_BLOCK = 'ADD_BLOCK';
export const REMOVE_BLOCK = 'REMOVE_BLOCK';

export function moveUp(index) {
  return {
    type: MOVE_UP,
    payload: index,
  };
};

export function moveDown(index) {
  return {
    type: MOVE_DOWN,
    payload: index,
  };
};

export function addBlock(type) {
  return {
    type: ADD_BLOCK,
    payload: type,
  };
};

export function removeBlock(index) {
  return {
    type: REMOVE_BLOCK,
    payload: index,
  };
};

const mapDispatchToProps = {
  moveUp,
  moveDown,
  addBlock,
  removeBlock,
};

const mapStateToProps = (state) => ({
  blocks: state.blocks,
});

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);
