/* eslint-disable */
import 'whatwg-fetch';
import polyfill from 'es6-promise';
polyfill.polyfill();
import getVimeoInfo from '../../src/helpers/getVimeoInfo';
/* eslint-enable */

describe('getVimeoInfo', () => {
  it('Should return an object with the video info', (done) => {
    getVimeoInfo('120469122', (err, data) => {
      /* eslint-disable */
      expect(err).to.be.null;
      expect(data).to.not.be.undefined;
      expect(data).to.be.instanceOf(Object);
      expect(data.url).to.not.be.undefined;
      expect(data.thumbnail_large).to.not.be.undefined;
      /* eslint-enable */
      done();
    });
  }).timeout(5000);

  it('Should return nothing if the video doesn\'t exist', (done) => {
    getVimeoInfo('12046912232ABC', (err, data) => {
      /* eslint-disable */
      expect(err).to.not.be.null;
      expect(data).to.be.undefined;
      /* eslint-enable */
      done();
    });
  }).timeout(5000);
});
