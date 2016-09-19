/* eslint-disable */
import blocksReducers from 'reducers/blocksReducers';
/* eslint-enable */

describe('Blocks reducer', () => {
  beforeEach(() => {
  });

  it('Should return state', () => {
    const givenState = { test: 'data' };
    const state = blocksReducers(Object.assign({}, givenState), { type: 'FAKE_TYPE' });
    expect(state).to.eql(givenState);
  });

  it('Should move item two to position three', () => {
    // Initial state
    const givenState = { items: [{ text: 'test 1' }, { text: 'test 2' }, { text: 'test 3' }] };

    // Action to perform on the reducer
    const action = {
      type: 'MOVE_DOWN',
      payload: 1,
    };

    // Expected state after the action
    const expectedState = { items: [{ text: 'test 1' }, { text: 'test 3' }, { text: 'test 2' }] };

    // Run the reducer
    const state = blocksReducers(Object.assign({}, givenState), action);

    // Check if the generated state is equal to the expected state
    expect(state).to.eql(expectedState);
  });

  it('Should move item two to position one', () => {
    // Initial state
    const givenState = { items: [{ text: 'test 1' }, { text: 'test 2' }, { text: 'test 3' }] };

    // Action to perform on the reducer
    const action = {
      type: 'MOVE_UP',
      payload: 1,
    };

    // Expected state after the action
    const expectedState = { items: [{ text: 'test 2' }, { text: 'test 1' }, { text: 'test 3' }] };

    // Run the reducer
    const state = blocksReducers(Object.assign({}, givenState), action);

    // Check if the generated state is equal to the expected state
    expect(state).to.eql(expectedState);
  });

  it('Should keep item three on it\'s position, because it\'s the last', () => {
    // Initial state
    const givenState = { items: [{ text: 'test 1' }, { text: 'test 2' }, { text: 'test 3' }] };

    // Action to perform on the reducer
    const action = {
      type: 'MOVE_DOWN',
      payload: 2,
    };

    // Expected state after the action
    const expectedState = { items: [{ text: 'test 1' }, { text: 'test 2' }, { text: 'test 3' }] };

    // Run the reducer
    const state = blocksReducers(Object.assign({}, givenState), action);

    // Check if the generated state is equal to the expected state
    expect(state).to.eql(expectedState);
  });

  it('Should keep item one on it\'s position, because it\'s the first', () => {
    // Initial state
    const givenState = { items: [{ text: 'test 1' }, { text: 'test 2' }, { text: 'test 3' }] };

    // Action to perform on the reducer
    const action = {
      type: 'MOVE_UP',
      payload: 0,
    };

    // Expected state after the action
    const expectedState = { items: [{ text: 'test 1' }, { text: 'test 2' }, { text: 'test 3' }] };

    // Run the reducer
    const state = blocksReducers(Object.assign({}, givenState), action);

    // Check if the generated state is equal to the expected state
    expect(state).to.eql(expectedState);
  });

  it('Should the block from state', () => {
    // Initial state
    const givenState = { items: [{ text: 'test 1' }, { text: 'test 2' }, { text: 'test 3' }] };

    // Action to perform on the reducer
    const action = {
      type: 'REMOVE_BLOCK',
      payload: 1,
    };

    // Expected state after the action
    const expectedState = { items: [{ text: 'test 1' }, { text: 'test 3' }] };

    // Run the reducer
    const state = blocksReducers(Object.assign({}, givenState), action);

    // Check if the generated state is equal to the expected state
    expect(state).to.eql(expectedState);
  });

  it('Should throw errors when removing non-existing blocks', () => {
    // Initial state
    const givenState = { items: [{ text: 'test 1' }, { text: 'test 2' }, { text: 'test 3' }] };

    // Action to perform on the reducer
    const action = {
      type: 'REMOVE_BLOCK',
      payload: -1,
    };

    // Check if the generated state is equal to the expected state
    expect(() => {
      blocksReducers(Object.assign({}, givenState), action);
    }).to.throw('The index should not be less than zero');

    const secondAction = {
      type: 'REMOVE_BLOCK',
      payload: 3,
    };

    expect(() => {
      blocksReducers(Object.assign({}, givenState), secondAction);
    }).to.throw('The index should not exceed the number of blocks');
  });

  it('Should update the data on block with index 1', () => {
    const givenState = {
      items: [
        { type: 'defaultText', data: { text: 'Text 1' } },
        { type: 'defaultText', data: { text: 'Text 2' } },
        { type: 'defaultText', data: { text: 'Text 3' } },
      ],
    };

    const outcome = blocksReducers(Object.assign({}, givenState), {
      type: 'UPDATE_BLOCK_DATA',
      payload: {
        index: 1,
        data: {
          text: 'New text',
        },
      },
    });

    expect(outcome.items[1].data.text).to.be.equal('New text');
  });
});
