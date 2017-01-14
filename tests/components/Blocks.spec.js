/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';
import Blocks from '../../src/components/Blocks/Blocks';
import blocksIndex from '../../src/components/Blocks';
import uuid from 'uuid/v4';
import { shallow, mount } from 'enzyme';
import createStore from '../../src/store/createStore';
/* eslint-enable */

const fakeProps = {
  move: () => {},
  moveUp: () => {},
  moveDown: () => {},
  removeBlock: () => {},
  updateBlockData: () => {},
};

const fakeBlock = {
  type: 'defaultText',
};

describe('Blocks component', () => {
  it('Should create a Blocks component without errors', () => {
    shallow(<Blocks blocks={[]} />);
  });

  it('Should create a Blocks component with two items', () => {
    const exampleStore = createStore();

    const element = mount(
      <Provider store={exampleStore}>
        <Blocks
          blocks={[
            Object.assign({}, fakeBlock, { uuid: uuid() }),
            Object.assign({}, fakeBlock, { uuid: uuid() }),
          ]} {...fakeProps}
        />
      </Provider>
    );

    expect(element.find('.PyramidBlockWrapper')).to.have.length(2);
  });

  it('Should return a connect method', () => {
    expect(blocksIndex).to.be.a('function');
  });
});
