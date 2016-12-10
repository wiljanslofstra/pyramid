/* global Stretchy */

import React, { Component, PropTypes } from 'react';
import 'stretchy';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Block from '../Block';

Stretchy.selectors.filter = '.PyramidFormControl--stretch';

class Blocks extends Component {
  constructor(props) {
    super(props);

    this.moveCard = this.moveCard.bind(this);
  }

  getAllBlocks() {
    return this.props.blocks.map((block, i) => {
      return (
        <Block {...this.props} {...block} index={i} key={i} moveCard={this.moveCard} />
      );
    });
  }

  moveCard(dragIndex, hoverIndex) {
    this.props.move(dragIndex, hoverIndex);
  }

  render() {
    // Create an array of React components for every item in the state
    const allBlocks = this.getAllBlocks.call(this);

    return (
      <div className="PyramidContainer">
        {allBlocks}
      </div>
    );
  }
}

Blocks.propTypes = {
  blocks: PropTypes.array,
};

export default DragDropContext(HTML5Backend)(Blocks);
