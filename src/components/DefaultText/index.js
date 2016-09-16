import React, { Component, PropTypes } from 'react';
import BlockControl from '../BlockControl';

class DefaultText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Default text',
      icon: 'text.svg',
    };
  }

  render() {
    return (
      <div className="PyramidBlock">
        <BlockControl
          title={this.state.title}
          icon={this.state.icon}
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
