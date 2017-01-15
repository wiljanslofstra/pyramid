import React, { Component, PropTypes } from 'react';
import { DragSource as dragSource, DropTarget as dropTarget } from 'react-dnd';
import { cardTarget, cardSource } from '../Blocks/dragAndDrop';
import BlockAddControl from '../BlockAddControl';
import BlockControl from '../BlockControl';
import blocksList from '../blockList';
import Customisable from '../Customisable';

@dropTarget('block', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))
@dragSource('block', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))
class Block extends Component {
  constructor(props) {
    super(props);

    this.onAddClick = this.onAddClick.bind(this);
  }

  onAddClick() {
    this.props.insertAtIndex(this.props.index);
    this.props.showPicker();
  }

  render() {
    // Get the type of current block
    const type = this.props.type;

    const { connectDropTarget, connectDragPreview } = this.props;

    // Check if a component is available to handle this data type
    if (typeof blocksList[type] === 'undefined') {
      console.log(`The block type '${type}' is not defined`); // eslint-disable-line
      return null;
    }

    const customBlock = blocksList[type];
    const title = customBlock.title;

    // Return the element, and spread the data all over it
    return connectDragPreview(connectDropTarget(
      <div className="PyramidBlockWrapper">
        <BlockControl
          title={title}
          {...this.props}
        />
        <Customisable {...this.props} blockData={customBlock} key={this.props.index} />
        <BlockAddControl onClick={this.onAddClick} />
      </div>
    ));
  }
}

Block.propTypes = {
  type: PropTypes.string,
  connectDropTarget: PropTypes.func,
  connectDragPreview: PropTypes.func,
  index: PropTypes.number,
  insertAtIndex: PropTypes.func,
  showPicker: PropTypes.func,
};

export default Block;
