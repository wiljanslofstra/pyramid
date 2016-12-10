import React, { Component, PropTypes } from 'react';
import { DragSource as dragSource, DropTarget as dropTarget } from 'react-dnd';
import { cardTarget, cardSource } from '../Blocks/dragAndDrop';

import DefaultText from '../DefaultText';
import Wysiwyg from '../Wysiwyg';
import Input from '../Input';
import Video from '../Video';

const blocksList = {
  defaultText: DefaultText,
  wysiwyg: Wysiwyg,
  input: Input,
  video: Video,
};

@dropTarget('block', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))
@dragSource('block', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))
class Block extends Component {
  render() {
    // Get the type of current block
    const type = this.props.type;

    const { connectDropTarget, connectDragPreview } = this.props;

    // Check if a component is available to handle this data type
    if (typeof blocksList[type] === 'undefined') {
      console.log(`The block type '${type}' is not defined`); // eslint-disable-line
      return null;
    }

    const CustomBlock = blocksList[type];

    // Return the element, and spread the data all over it
    return connectDragPreview(connectDropTarget(
      <div>
        <CustomBlock {...this.props} key={this.props.index} />
      </div>
    ));
  }
}

Block.propTypes = {
  type: PropTypes.string,
  connectDropTarget: PropTypes.func,
  connectDragPreview: PropTypes.func,
  index: PropTypes.number,
};

export default Block;
