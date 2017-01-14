import blockList from '../../src/components/blockList';

describe('blockList', () => {
  it('Should return a list of blocks', () => {
    expect(blockList).to.be.instanceOf(Object);
  });

  it('Should return the basic blocks', () => {
    expect(blockList.defaultText).to.not.be.undefined;
    expect(blockList.defaultText).to.be.instanceOf(Object);

    expect(blockList.wysiwyg).to.not.be.undefined;
    expect(blockList.wysiwyg).to.be.instanceOf(Object);

    expect(blockList.input).to.not.be.undefined;
    expect(blockList.input).to.be.instanceOf(Object);
  });
});
