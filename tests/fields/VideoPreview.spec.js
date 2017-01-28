/* eslint-disable */
import React from 'react';
import VideoPreview from '../../src/components/Fields/video/videoPreview';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
/* eslint-enable */

const fakeProps = {
  thumbnailUrl: 'image.jpg',
  url: 'https://www.youtube.com/',
  title: 'Video title',
  authorName: 'First Last',
};

describe('VideoPreview field', () => {
  it('should render the input field', () => {
    const elem = shallow(<VideoPreview {...fakeProps} />);

    const thumb = elem.find('.PyramidVideoPreview__Thumbnail');

    // Expect a single label to be rendered
    expect(thumb).to.have.length(1);

    // Render text field
    expect(elem.find('.PyramidVideoPreview__Content')).to.have.length(1);

    expect(thumb.prop('href')).to.equal(fakeProps.url);

    expect(thumb.find('img').prop('src')).to.equal('image.jpg');

    expect(elem.find('.PyramidVideoPreview__ContentTitle').text()).to.equal(fakeProps.title);

    expect(elem.find('.PyramidVideoPreview__ContentAuthor').text()).to.equal(fakeProps.authorName);
  });
});
