import blocksConfig from '../../src/blocksConfig';

describe('blockList', () => {
  it('Should return a list of blocks', () => {
    expect(blocksConfig).to.be.instanceOf(Object);
  });

  it('Should return the basic blocks', () => {
    /* eslint-disable */
    expect(blocksConfig.defaultText).to.not.be.undefined;
    expect(blocksConfig.defaultText).to.be.instanceOf(Object);

    expect(blocksConfig.wysiwyg).to.not.be.undefined;
    expect(blocksConfig.wysiwyg).to.be.instanceOf(Object);

    expect(blocksConfig.input).to.not.be.undefined;
    expect(blocksConfig.input).to.be.instanceOf(Object);
    /* eslint-enable */
  });
});
