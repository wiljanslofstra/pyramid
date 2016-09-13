import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Blocks from './BlocksContainer';

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  render () {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Blocks />
      </Provider>
    );
  }
};

export default AppContainer
