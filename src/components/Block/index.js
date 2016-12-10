import React, { Component, PropTypes } from 'react';
import { cardTarget, cardSource } from '../Blocks/dragAndDrop';
import { DragSource, DropTarget } from 'react-dnd';

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

@DropTarget('block', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource('block', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))
class Block extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Get the type of current block
    const type = this.props.type;

    const { connectDropTarget, connectDragPreview } = this.props;

    // Check if a component is available to handle this data type
    if (typeof blocksList[type] === 'undefined') {
      console.log(`The block type '${type}' is not defined`);
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
};

export default Block;
