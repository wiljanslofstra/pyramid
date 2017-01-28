/* eslint-disable */
import React from 'react';
import Text from '../../src/components/Fields/Text';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
/* eslint-enable */

const fakeProps = {
  onChange: () => {},
  id: 'unique-id',
  field: {
    label: 'Text label',
    placeholder: 'Text placeholder text',
  },
  data: 'Text text',
};

describe('Text field', () => {
  it('should render the input field', () => {
    const elem = shallow(<Text {...fakeProps} />);

    // Expect a single label to be rendered
    expect(elem.find('.PyramidLabel')).to.have.length(1);

    // Renders the label text
    expect(elem.find('.PyramidLabel').text()).to.equal('Text label');

    // Render text field
    expect(elem.find('.PyramidFormControl')).to.have.length(1);

    // Render the text field with a placeholder text
    expect(elem.find('.PyramidFormControl').prop('placeholder')).to.equal('Text placeholder text');
  });

  it('should call onChange when the Text changes', () => {
    fakeProps.onChange = sinon.spy();

    const elem = shallow(<Text {...fakeProps} />);

    elem.find('.PyramidFormControl').simulate('change', {
      target: {
        value: 'Text value',
      },
    });

    expect(fakeProps.onChange.calledOnce).to.equal(true);
  });
});
