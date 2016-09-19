/* eslint-disable */
import {
  moveUp, moveDown, addBlock, removeBlock, updateBlockData,
  MOVE_UP, MOVE_DOWN, ADD_BLOCK, REMOVE_BLOCK, UPDATE_BLOCK_DATA
} from 'components/Blocks/actionTypes';
/* eslint-enable */

describe('Blocks actions', () => {
  it('Should create a moveUp action', () => {
    const expected = { type: MOVE_UP, payload: 3 };
    const action = moveUp(3);

    expect(action).to.eql(expected);
  });

  it('Should create a moveDown action', () => {
    const expected = { type: MOVE_DOWN, payload: 3 };
    const action = moveDown(3);

    expect(action).to.eql(expected);
  });

  it('Should create a removeBlock action', () => {
    const expected = { type: REMOVE_BLOCK, payload: 2 };
    const action = removeBlock(2);

    expect(action).to.eql(expected);
  });

  it('Should create a addBlock action', () => {
    const expected = { type: ADD_BLOCK, payload: 'defaultText' };
    const action = addBlock('defaultText');

    expect(action).to.eql(expected);
  });

  it('Should create a updateBlockData action', () => {
    const expected = { type: UPDATE_BLOCK_DATA, payload: { index: 1, data: {} } };
    const action = updateBlockData({}, 1);

    expect(action).to.eql(expected);
  });
});
