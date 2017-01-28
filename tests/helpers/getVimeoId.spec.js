import getVimeoId from '../../src/helpers/getVimeoId';

describe('getVimeoId', () => {
  it('should return the id from the Vimeo video url', () => {
    const ids = [
      getVimeoId('https://vimeo.com/120469122'),
      getVimeoId('https://vimeo.com/channels/documentaryfilm/120469122'),
      getVimeoId('http://vimeo.com/120469122'),
      getVimeoId('https://vimeo.com/groups/musicvideo/videos/120469122'),
      getVimeoId('http://www.vimeo.com/120469122'),
      getVimeoId('https://vimeo.com/120469122?query=foo'),
    ];

    ids.forEach((id) => {
      expect(id).to.equal('120469122');
    });
  });

  it('should return false when the url is invalid', () => {
    const noHTTP = getVimeoId('vimeo.com/120469122');
    expect(noHTTP).to.equal(false);

    const nonExistingGroup = getVimeoId('https://vimeo.com/helloworld/120469122');
    expect(nonExistingGroup).to.equal(false);

    const wrongDomain = getVimeoId('https://vimeohoh.com/120469122');
    expect(wrongDomain).to.equal(false);
  });
});
