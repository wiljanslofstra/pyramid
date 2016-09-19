/* global Stretchy */

import React, { Component, PropTypes } from 'react';
import 'stretchy';

import DefaultText from '../DefaultText';

Stretchy.selectors.filter = '.PyramidFormControl--stretch';

const blocksList = {
  defaultText: DefaultText,
};

class Blocks extends Component {
  getAllBlocks() {
    return this.props.blocks.map((block, i) => {
      // Get the type of current block
      const type = block.type;

      // Check if a component is available to handle this data type
      if (typeof blocksList[type] !== 'undefined') {
        const Block = blocksList[type];

        // Return the element, and spread the data all over it
        return (
          <Block {...this.props} {...block} index={i} key={i} />
        );
      }

      throw new Error('This block type is not defined, at it to the configuration to continue.');
    });
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

export default Blocks;
