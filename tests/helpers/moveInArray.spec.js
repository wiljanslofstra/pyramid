/* eslint-disable */
import moveInArray from 'helpers/moveInArray';
/* eslint-enable */

describe('moveInArray', () => {
  it('Should move item at index 3 to index 1', () => {
    const initial = [0, 1, 2, 3, 4, 5, 6];
    const expected = [0, 3, 1, 2, 4, 5, 6];

    const outcome = moveInArray(initial, 3, 1);

    expect(outcome).to.eql(expected);
  });

  it('Should move item at index 0 to index 5', () => {
    const initial = [0, 1, 2, 3, 4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 0, 6];

    const outcome = moveInArray(initial, 0, 5);

    expect(outcome).to.eql(expected);
  });
});
