/* eslint-disable */
import createStore from 'store/createStore';
/* eslint-enable */

describe('createStore', () => {
  it('Should return a store', () => {
    const store = createStore({});
    expect(store).to.be.a('object'); // eslint-disable-line
  });

  it('Should return a store when __DEV__ is defined', () => {
    const store = createStore({}, true);
    expect(store).to.be.a('object'); // eslint-disable-line
  });
});
