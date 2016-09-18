import React from 'react';
import DefaultText from 'components/DefaultText';
import { shallow, mount } from 'enzyme';

const fakeProps = {
  moveUp: () => {},
  moveDown: () => {},
  removeBlock: () => {},
};

describe('DefaultText component', () => {
  it('Should create a DefaultText component without errors', () => {
    const element = shallow(<DefaultText />);
  });

  it('Should have a .PyramidBlock className', () => {
    const element = shallow(<DefaultText {...fakeProps} />);
    expect(element).to.have.className('PyramidBlock');
  });

  it('Should have a control bar (.PyramidControl)', () => {
    const element = mount(<DefaultText {...fakeProps} />);
    expect(element.find('.PyramidControl')).to.be.present();
  });

  it('Should have a content block (.PyramidBlock__Content)', () => {
    const element = mount(<DefaultText {...fakeProps} />);
    expect(element.find('.PyramidBlock__Content')).to.be.present();
  });
});
