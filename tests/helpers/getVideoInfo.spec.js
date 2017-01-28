/* eslint-disable */
import 'whatwg-fetch';
import polyfill from 'es6-promise';
polyfill.polyfill();
import getVideoInfo from '../../src/helpers/getVideoInfo';
/* eslint-enable */

describe('getVideoInfo', () => {
  it('Should return an object with the video info from Vimeo', (done) => {
    getVideoInfo('https://vimeo.com/120469122', (err, data) => {
      /* eslint-disable */
      expect(err).to.be.null;
      expect(data).to.not.be.undefined;
      expect(data).to.be.instanceOf(Object);
      expect(data.url).to.not.be.undefined;
      expect(data.title).to.not.be.undefined;
      expect(data.authorName).to.not.be.undefined;
      expect(data.thumbnailUrl).to.not.be.undefined;
      /* eslint-enable */
      done();
    });
  }).timeout(5000);

  it('Should return an object with the video info from YouTube', (done) => {
    getVideoInfo('https://www.youtube.com/watch?v=dQw4w9WgXcQ', (err, data) => {
      /* eslint-disable */
      expect(err).to.be.null;
      expect(data).to.not.be.undefined;
      expect(data).to.be.instanceOf(Object);
      expect(data.url).to.not.be.undefined;
      expect(data.title).to.not.be.undefined;
      expect(data.authorName).to.not.be.undefined;
      expect(data.thumbnailUrl).to.not.be.undefined;
      /* eslint-enable */
      done();
    });
  }).timeout(5000);
});
