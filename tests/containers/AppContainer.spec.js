/* eslint-disable */
import React from 'react';
import AppContainer from 'containers/AppContainer';
import { shallow, mount } from 'enzyme';
/* eslint-enable */

describe('AppContainer', () => {
  it('Should render the AppContainer', () => {
    expect(shallow(<AppContainer store={{}} />)).to.be.present();
  });
});
