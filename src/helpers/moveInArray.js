/* eslint-disable */
export default (arr, oldIndex, newIndex) => {
  if (newIndex >= arr.length) {
    var k = newIndex - arr.length;

    while ((k--) + 1) {
      arr.push(undefined);
    }
  }

  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);

  return arr;
};
/* eslint-enable */
