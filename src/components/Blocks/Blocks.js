import React, { Component, PropTypes } from 'react';

class Blocks extends Component {
  render() {
    console.log(this.props);
    this.props.moveDown(4);
    this.props.moveUp(4);
    this.props.addBlock('tweet');
    this.props.removeBlock(4);

    return (
      <div>
        <h1>Blocks</h1>
      </div>
    );
  }
}

export default Blocks;
