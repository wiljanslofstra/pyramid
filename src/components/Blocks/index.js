import { connect } from 'react-redux';
import Blocks from './Blocks';
import {
  moveUp, moveDown, move, addBlock, removeBlock, updateBlockData, enableDebug, disableDebug,
} from './actionTypes';

const mapDispatchToProps = {
  moveUp,
  moveDown,
  move,
  addBlock,
  removeBlock,
  updateBlockData,
  enableDebug,
  disableDebug,
};

const mapStateToProps = state => ({
  blocks: state.blocks.items,
  debug: state.blocks.debug,
});

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);
