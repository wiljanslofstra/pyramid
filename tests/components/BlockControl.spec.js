/* eslint-disable */
import React from 'react';
import BlockControl from '../../src/components/BlockControl';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
/* eslint-enable */

const fakeProps = {
  title: 'Test',
  icon: 'SVG icon',
  index: 1,
  moveUp: () => {},
  moveDown: () => {},
  removeBlock: () => {},
  connectDragSource: () => {},
};

describe('BlockControl component', () => {
  it('Should create a BlockControl component without errors', () => {
    shallow(<BlockControl {...fakeProps} />);
  });

  it('Should have a .PyramidControl className', () => {
    const element = shallow(<BlockControl {...fakeProps} />);
    expect(element).to.have.className('PyramidControl');
  });

  it('Should render the title', () => {
    const element = mount(<BlockControl {...fakeProps} title="Hello world" />);
    expect(element.find('.PyramidControl__TitleText')).to.have.text('Hello world');
  });

  it('Should render controls for moveDown, moveUp and removeBlock', () => {
    const element = mount(<BlockControl {...fakeProps} />);
    expect(
      element.find('.PyramidControl__Controls')
    ).to.have.exactly(3).descendants('.PyramidControl__Control');
  });

  it('Should call removeBlock', () => {
    const onRemoveClick = sinon.spy();

    const customProps = Object.assign({}, fakeProps, {
      removeBlock: onRemoveClick,
    });

    const element = mount(<BlockControl {...customProps} />);

    element.find('.PyramidControl__Control--Remove').simulate('click');

    expect(onRemoveClick.calledOnce).to.equal(true);
  });

  it('Should call moveUp', () => {
    const onMoveUp = sinon.spy();

    const customProps = Object.assign({}, fakeProps, {
      moveUp: onMoveUp,
    });

    const element = mount(<BlockControl {...customProps} />);

    element.find('.PyramidControl__Control--Up').simulate('click');

    expect(onMoveUp.calledOnce).to.equal(true);
  });

  it('Should call moveDown', () => {
    const onMoveDown = sinon.spy();

    const customProps = Object.assign({}, fakeProps, {
      moveDown: onMoveDown,
    });

    const element = mount(<BlockControl {...customProps} />);

    element.find('.PyramidControl__Control--Down').simulate('click');

    expect(onMoveDown.calledOnce).to.equal(true);
  });
});
