/* eslint-disable */
import React from 'react';
import Blocks from 'components/Blocks/Blocks';
import blocksIndex from 'components/Blocks';
import { shallow, mount } from 'enzyme';
/* eslint-enable */

const fakeProps = {
  moveUp: () => {},
  moveDown: () => {},
  removeBlock: () => {},
};

const fakeBlock = {
  type: 'defaultText',
};

describe('Blocks component', () => {
  it('Should create a Blocks component without errors', () => {
    shallow(<Blocks blocks={[]} />);
  });

  it('Should create a Blocks component with two items', () => {
    const element = mount(
      <Blocks
        blocks={[
          Object.assign({}, fakeBlock),
          Object.assign({}, fakeBlock),
        ]} {...fakeProps}
      />
    );

    expect(element).to.have.exactly(2).descendants('.PyramidBlock');
  });

  it('Should return a connect method', () => {
    expect(blocksIndex).to.be.a('function');
  });
});
