/* eslint-disable */
import React from 'react';
import DefaultText from '../../src/components/DefaultText';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
/* eslint-enable */

const fakeProps = {
  moveUp: () => {},
  moveDown: () => {},
  removeBlock: () => {},
  updateBlockData: () => {},
  connectDragSource: () => {},
  index: 0,
};

describe('DefaultText component', () => {
  it('Should create a DefaultText component without errors', () => {
    shallow(<DefaultText {...fakeProps} />);
  });

  it('Should have a .PyramidBlock className', () => {
    const element = shallow(<DefaultText {...fakeProps} />);
    expect(element).to.have.className('PyramidBlock');
  });

  it('Should have a content block (.PyramidBlock__Content)', () => {
    const element = mount(<DefaultText {...fakeProps} />);
    expect(element.find('.PyramidBlock__Content')).to.be.present();
  });

  it('Should call updateBlockData on textarea change', () => {
    const newProps = Object.assign({}, fakeProps);
    const updateBlockData = sinon.spy();
    newProps.updateBlockData = updateBlockData;

    const element = mount(<DefaultText {...newProps} />);

    // Trigger a change on the textarea
    element.find('.PyramidFormControl').simulate('change', { target: { value: 'test 123' } });

    expect(updateBlockData.calledOnce).to.equal(true);
  });
});
