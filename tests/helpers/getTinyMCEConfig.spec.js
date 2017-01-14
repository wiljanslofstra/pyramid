/* eslint-disable */
import getTinyMCEConfig from '../../src/helpers/getTinyMCEConfig';
/* eslint-enable */

describe('getTinyMCEConfig', () => {
  it('Should return a TinyMCE config object', () => {
    expect(getTinyMCEConfig).to.be.a.instanceOf(Object);
    /* eslint-disable */
    expect(getTinyMCEConfig.style_formats).to.not.be.undefined;
    expect(getTinyMCEConfig.toolbar).to.not.be.undefined;
    /* eslint-enable */
  });
});
