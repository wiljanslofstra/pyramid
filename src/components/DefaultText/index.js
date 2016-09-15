import React, { Component, PropTypes } from 'react';
import BlockControl from '../BlockControl';

class DefaultText extends Component {
  render() {
    const props = this.props;

    console.log(props.index);

    return (
      <div>
        <BlockControl
          title={props.title}
          icon={props.icon}
          moveUp={props.moveUp}
          moveDown={props.moveDown}
          removeBlock={props.removeBlock}
          index={props.index}
        />

        <div>
          Block Content
        </div>
      </div>
    );
  }
}

export default DefaultText;
