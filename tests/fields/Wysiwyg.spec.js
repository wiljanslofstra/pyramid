/* eslint-disable */
import React from 'react';
import Wysiwyg from '../../src/components/Fields/Wysiwyg';
import { shallow, mount } from 'enzyme';
import TinyMCE from 'react-tinymce';
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

describe('Wysiwyg field', () => {
  it('should render the wysiwyg field', () => {
    const elem = shallow(<Wysiwyg {...fakeProps} />);

    // Expect a single label to be rendered
    expect(elem.find('.PyramidLabel')).to.have.length(1);

    // Renders the label text
    expect(elem.find('.PyramidLabel').text()).to.equal('Text label');

    expect(elem.find('.PyramidFormControl').text()).to.equal('<TinyMCE />');

    expect(elem.find('.PyramidFormControl').prop('content')).to.equal(fakeProps.data);
  });
});
