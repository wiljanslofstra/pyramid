import { connect } from 'react-redux';
import Picker from './Picker';
import { hidePicker, addBlock } from './actionTypes';

const mapDispatchToProps = {
  hidePicker,
  addBlock,
};

const mapStateToProps = state => ({
  pickerVisible: state.picker.pickerVisible,
  insertIndex: state.picker.insertIndex,
});

export default connect(mapStateToProps, mapDispatchToProps)(Picker);
