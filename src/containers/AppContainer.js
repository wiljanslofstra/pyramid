import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Blocks from '../components/Blocks';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Blocks />
      </Provider>
    );
  }
}

AppContainer.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
};

export default AppContainer;
