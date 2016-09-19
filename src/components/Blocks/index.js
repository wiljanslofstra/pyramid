import { connect } from 'react-redux';
import Blocks from './Blocks';
import { moveUp, moveDown, addBlock, removeBlock, updateBlockData } from './actionTypes';

const mapDispatchToProps = {
  moveUp,
  moveDown,
  addBlock,
  removeBlock,
  updateBlockData,
};

const mapStateToProps = state => ({
  blocks: state.blocks.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);
