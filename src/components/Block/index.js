import { connect } from 'react-redux';
import Block from './Block';
import { showPicker, insertAtIndex } from './actionTypes';

const mapDispatchToProps = {
  showPicker,
  insertAtIndex,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Block);
