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
    const props = this.props;

    return (
      <div className="PyramidBlock">
        <BlockControl
          title={this.state.title}
          icon={this.state.icon}
          moveUp={props.moveUp}
          moveDown={props.moveDown}
          removeBlock={props.removeBlock}
          index={props.index}
        />

        <div className="PyramidBlock__Content">
          Block Content
        </div>
      </div>
    );
  }
}

export default DefaultText;
