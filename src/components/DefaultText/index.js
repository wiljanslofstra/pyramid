import React, { Component, PropTypes } from 'react';
import BlockControl from '../BlockControl';

const title = 'Default text';
const icon = `
  <svg id="i-edit" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
      <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
  </svg>
`;

class DefaultText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PyramidBlock">
        <BlockControl
          title={title}
          icon={icon}
          moveUp={this.props.moveUp}
          moveDown={this.props.moveDown}
          removeBlock={this.props.removeBlock}
          index={this.props.index}
        />

        <div className="PyramidBlock__Content">
          Block Content
        </div>
      </div>
    );
  }
}

DefaultText.propTypes = {
  moveDown: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  removeBlock: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default DefaultText;
