/* eslint-disable */
import pickerReducers from '../../src/reducers/pickerReducers';
/* eslint-enable */

describe('Picker reducer', () => {
  beforeEach(() => {
  });

  it('Should return state', () => {
    const givenState = { test: 'data' };
    const state = pickerReducers(Object.assign({}, givenState), { type: 'FAKE_TYPE' });
    expect(state).to.eql(givenState);
  });

  it('Should make the picker visible', () => {
    const givenState = {
      pickerVisible: false,
    };

    // Action to perform on the reducer
    const action = {
      type: 'SHOW_PICKER',
    };

    // Expected state after the action
    const expectedState = {
      pickerVisible: true,
    };

    // Run the reducer
    const state = pickerReducers(Object.assign({}, givenState), action);

    // Check if the generated state is equal to the expected state
    expect(state).to.eql(expectedState);
  });

  it('Should make the hide the picker', () => {
    const givenState = {
      pickerVisible: true,
    };

    // Action to perform on the reducer
    const action = {
      type: 'HIDE_PICKER',
    };

    // Expected state after the action
    const expectedState = {
      pickerVisible: false,
    };

    // Run the reducer
    const state = pickerReducers(Object.assign({}, givenState), action);

    // Check if the generated state is equal to the expected state
    expect(state).to.eql(expectedState);
  });

  it('Should move insertIndex for the picker', () => {
    const givenState = {
      insertIndex: -1,
    };

    // Action to perform on the reducer
    const action = {
      type: 'PICKER_INSERT_INDEX',
      payload: 3,
    };

    // Expected state after the action
    const expectedState = {
      insertIndex: 4,
    };

    // Run the reducer
    const state = pickerReducers(Object.assign({}, givenState), action);

    // Check if the generated state is equal to the expected state
    expect(state).to.eql(expectedState);
  });
});
