import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Blocks from '../components/Blocks';

function AppContainer({ store }) {
  return (
    <Provider store={store}>
      <Blocks />
    </Provider>
  );
}

AppContainer.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
};

export default AppContainer;
