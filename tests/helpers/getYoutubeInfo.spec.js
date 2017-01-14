/* eslint-disable */
import 'whatwg-fetch';
import polyfill from 'es6-promise';
polyfill.polyfill();
import getYoutubeInfo from '../../src/helpers/getYoutubeInfo';
/* eslint-enable */

describe('getYoutubeInfo', () => {
  it('Should return an object with the video info', (done) => {
    getYoutubeInfo('https://www.youtube.com/watch?v=dQw4w9WgXcQ', (err, data) => {
      /* eslint-disable */
      expect(err).to.be.null;
      expect(data).to.not.be.undefined;
      expect(data).to.be.instanceOf(Object);
      expect(data.html).to.not.be.undefined;
      expect(data.url).to.not.be.undefined;
      expect(data.thumbnail_url).to.not.be.undefined;
      /* eslint-enable */
      done();
    });
  }).timeout(5000);

  it('Should return nothing if the video doesn\'t exist', (done) => {
    getYoutubeInfo('https://www.youtube.com/watch?v=dQw4w9WgX', (err, data) => {
      /* eslint-disable */
      expect(err).to.not.be.null;
      expect(data).to.be.undefined;
      /* eslint-enable */
      done();
    });
  }).timeout(5000);
});
