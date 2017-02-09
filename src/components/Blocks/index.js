import { connect } from 'react-redux';
import Blocks from './Blocks';
import {
  moveUp, moveDown, move, addBlock, removeBlock, updateBlockData, enableDebug, disableDebug,
} from './actionTypes';
import {
  showPicker,
  insertAtIndex,
} from '../Block/actionTypes';

const mapDispatchToProps = {
  moveUp,
  moveDown,
  move,
  addBlock,
  removeBlock,
  updateBlockData,
  enableDebug,
  disableDebug,
  showPicker,
  insertAtIndex,
};

const mapStateToProps = state => ({
  blocks: state.blocks.items,
  debug: state.blocks.debug,
});

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);
