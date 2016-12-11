/* global Stretchy */

import React, { Component, PropTypes } from 'react';
import 'stretchy';
import { DragDropContext as dragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Block from '../Block';
import Picker from '../Picker';

Stretchy.selectors.filter = '.PyramidFormControl--stretch';

class Blocks extends Component {
  constructor(props) {
    super(props);

    this.moveCard = this.moveCard.bind(this);
  }

  getAllBlocks() {
    return this.props.blocks.map((block, i) => (
      <Block {...this.props} {...block} index={i} key={block.uuid} moveCard={this.moveCard} />
    ));
  }

  moveCard(dragIndex, hoverIndex) {
    this.props.move(dragIndex, hoverIndex);
  }

  render() {
    // Create an array of React components for every item in the state
    const allBlocks = this.getAllBlocks.call(this);

    return (
      <div className="PyramidContainer">
        <Picker />

        <ReactCSSTransitionGroup
          transitionName="PyramidBlockWrapper"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {allBlocks}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Blocks.propTypes = {
  blocks: PropTypes.array,
  move: PropTypes.func,
};

export default dragDropContext(HTML5Backend)(Blocks);
