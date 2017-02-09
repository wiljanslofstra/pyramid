/* global Stretchy, document */

import React, { Component, PropTypes } from 'react';
import 'stretchy';
import { DragDropContext as dragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BlockAddControl from '../BlockAddControl';

import Block from '../Block';
import Picker from '../Picker';

const outputElement = document.getElementById('blocks-state');

Stretchy.selectors.filter = '.PyramidFormControl--stretch';

class Blocks extends Component {
  constructor(props) {
    super(props);

    this.moveCard = this.moveCard.bind(this);
    this.toggleDebug = this.toggleDebug.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    outputElement.value = JSON.stringify({ items: nextProps.blocks });
  }

  getAllBlocks() {
    return this.props.blocks.map((block, i) => (
      <Block {...this.props} {...block} index={i} key={block.uuid} moveCard={this.moveCard} />
    ));
  }

  onAddClick() {
    this.props.insertAtIndex(this.props.index);
    this.props.showPicker();
  }

  moveCard(dragIndex, hoverIndex) {
    this.props.move(dragIndex, hoverIndex);
  }

  toggleDebug() {
    if (this.props.debug) {
      this.props.disableDebug();
    } else {
      this.props.enableDebug();
    }
  }

  render() {
    // Create an array of React components for every item in the state
    const allBlocks = this.getAllBlocks.call(this);

    let debugDiv = null;

    if (this.props.debug) {
      const jsonData = JSON.stringify(this.props.blocks, null, 4);

      debugDiv = (
        <pre className="PyramidDebug__Code">
          {jsonData}
        </pre>
      );
    }

    let blockAddControl = null;

    if (!allBlocks.length) {
      blockAddControl = (
        <BlockAddControl type="lg" onClick={this.onAddClick} />
      );
    }

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

        {blockAddControl}

        <button
          onClick={this.toggleDebug}
          className="PyramidDebug__Button"
          type="button"
        >
          Debug
        </button>

        {debugDiv}
      </div>
    );
  }
}

Blocks.propTypes = {
  blocks: PropTypes.array,
  move: PropTypes.func,
  debug: PropTypes.bool,
  disableDebug: PropTypes.func,
  enableDebug: PropTypes.func,
};

export default dragDropContext(HTML5Backend)(Blocks);
