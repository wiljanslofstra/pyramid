import React, { Component } from 'react';

class BlockAddControl extends Component {
  render() {
    return (
      <button className="PyramidAdd">
        <div className="PyramidAdd__Handle">
          <i className="fa fa-plus" />
        </div>
      </button>
    );
  }
}

export default BlockAddControl;
