/* eslint-disable */
import asyncReducers from '../../src/store/reducers';
/* eslint-enable */

describe('Reducers wrapper', () => {
  it('Should return a combineReducers outcome', () => {
    expect(asyncReducers({ items: [] })).to.be.a('function');
  });
});
