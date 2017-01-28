/* eslint-disable */
import React from 'react';
import Input from '../../src/components/Fields/Input';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
/* eslint-enable */

const fakeProps = {
  onChange: () => {},
  id: 'unique-id',
  field: {
    label: 'Input label',
    placeholder: 'Input placeholder text',
  },
  data: 'Input text',
};

describe('Input field', () => {
  it('should render the input field', () => {
    const elem = shallow(<Input {...fakeProps} />);

    // Expect a single label to be rendered
    expect(elem.find('.PyramidLabel')).to.have.length(1);

    // Renders the label text
    expect(elem.find('.PyramidLabel').text()).to.equal('Input label');

    // Render input field
    expect(elem.find('.PyramidFormControl')).to.have.length(1);

    // Render the input field with a placeholder text
    expect(elem.find('.PyramidFormControl').prop('placeholder')).to.equal('Input placeholder text');
  });

  it('should call onChange when the input changes', () => {
    fakeProps.onChange = sinon.spy();

    const elem = shallow(<Input {...fakeProps} />);

    elem.find('.PyramidFormControl').simulate('change', {
      target: {
        value: 'Input value',
      },
    });

    expect(fakeProps.onChange.calledOnce).to.equal(true);
  });
});
