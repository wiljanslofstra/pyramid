import React, { Component, PropTypes } from 'react';

import DefaultText from '../DefaultText';

const blocksList = {
  defaultText: DefaultText,
};

class Blocks extends Component {
  render() {
    // Create an array of React components for every item in the state
    const allBlocks = this.props.blocks.map((block, i) => {
      // Get the type of current block
      const type = block.type;

      // Check if a component is available to handle this data type
      if (typeof blocksList[type] !== 'undefined') {
        const Block = blocksList[type];

        // Return the element, and spread the data all over it
        return (
          <Block {...this.props} {...block} index={i} key={i} />
        );
      } else {
        // Throw an error when the block type is not available, we could ignore it.
        // But the consequence could be data loss
        throw new Error('This block type is not defined, at it to the configuration to continue.');
      }
    });

    return (
      <div className="PyramidContainer">
        {allBlocks}
      </div>
    );
  }
}

Blocks.propTypes = {
  moveDown: PropTypes.func,
  moveUp: PropTypes.func,
  addBlock: PropTypes.func,
  removeBlock: PropTypes.func,
};

export default Blocks;
