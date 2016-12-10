/* eslint-disable */
import React from 'react';
import AppContainer from 'containers/AppContainer';
import { shallow, mount } from 'enzyme';
/* eslint-enable */

const storeObj = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => {},
};

describe('AppContainer', () => {
  it('Should render the AppContainer', () => {
    expect(shallow(<AppContainer store={storeObj} />)).to.be.present();
  });
});
