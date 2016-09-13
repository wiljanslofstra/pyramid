import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Blocks from './BlocksContainer';

class AppContainer extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Blocks />
      </Provider>
    );
  }
}

AppContainer.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
};

export default AppContainer;
