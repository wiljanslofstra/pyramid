/* eslint-disable */
import React from 'react';
import Video from '../../src/components/Video';
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

describe('Video component', () => {
  it('Should create a Video component without errors', () => {
    shallow(<Video {...fakeProps} />);
  });

  it('Should have a .PyramidBlock className', () => {
    const element = shallow(<Video {...fakeProps} />);
    expect(element).to.have.className('PyramidBlock');
  });

  it('Should have a content block (.PyramidBlock__Content)', () => {
    const element = mount(<Video {...fakeProps} />);
    expect(element.find('.PyramidBlock__Content')).to.be.present();
  });

  it('Should call updateBlockData on video url change', () => {
    const newProps = Object.assign({}, fakeProps);
    const updateBlockData = sinon.spy();
    newProps.updateBlockData = updateBlockData;

    const element = mount(<Video {...newProps} />);

    // Trigger a change on the textarea
    element.find('.PyramidFormControl').simulate('change', { target: { value: 'test 123' } });

    expect(updateBlockData.calledOnce).to.equal(true);
  });

  it('Should show the video if a correct YouTube url is entered', (done) => {
    const newProps = Object.assign({}, fakeProps);
    newProps.data = {};
    newProps.data.url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    const element = mount(<Video {...newProps} />);

    setTimeout(() => {
      expect(element.find('.PyramidVideoPreview')).to.have.length(1);
      done();
    }, 2000);
  }).timeout(3000);
});
