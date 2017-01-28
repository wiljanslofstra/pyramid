/* eslint-disable */
import React from 'react';
import Video from '../../src/components/Fields/Video';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
/* eslint-enable */

const fakeProps = {
  onChange: () => {},
  id: 'unique-id',
  field: {
    label: 'Video label',
  },
  data: 'https://www.youtube.com/watch?v=1NCZ9hgjIzI',
};

describe('Text field', () => {
  it('should render the input field', () => {
    const elem = shallow(<Video {...fakeProps} />);

    // Expect a single label to be rendered
    expect(elem.find('.PyramidLabel')).to.have.length(1);

    // Renders the label text
    expect(elem.find('.PyramidLabel').text()).to.equal('Video label');

    // Render text field
    expect(elem.find('.PyramidFormControl')).to.have.length(1);
  });

  it('should call onChange when the Text changes', () => {
    fakeProps.onChange = sinon.spy();

    const elem = shallow(<Video {...fakeProps} />);

    elem.find('.PyramidFormControl').simulate('change', {
      target: {
        value: 'https://www.youtube.com/watch?v=1NCZ9hgjIzI',
      },
    });

    expect(fakeProps.onChange.calledOnce).to.equal(true);
  });

  it('should show a video preview', (done) => {
    const elem = mount(<Video {...fakeProps} />);

    setTimeout(() => {
      expect(elem.find('.PyramidVideoPreview')).to.have.length(1);
      expect(elem.find('.PyramidVideoPreview__Thumbnail')).to.have.length(1);
      done();
    }, 2000);
  }).timeout(3000);
});
