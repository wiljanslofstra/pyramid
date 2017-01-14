import React, { Component, PropTypes } from 'react';
import { map } from 'lodash';
import blocksList from '../blockList';

class Picker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderedList: null,
    };

    this.hidePicker = this.hidePicker.bind(this);
  }

  componentDidMount() {
    if (!this.state.renderedList) {
      this.renderList();
    }
  }

  onItemClick(key) {
    this.props.hidePicker();
    this.props.addBlock(key, this.props.insertIndex);
  }

  hidePicker() {
    this.props.hidePicker();
  }

  renderList() {
    const renderedList = map(blocksList, (item, key) => (
      <button
        className="PyramidPicker__Button"
        key={key}
        onClick={() => { this.onItemClick(key); }}
      >
        {item.title}
      </button>
    ));

    this.setState({ renderedList });
  }

  render() {
    return (
      <div>
        <div className={`PyramidPicker ${((this.props.pickerVisible) ? ' is-visible' : '')}`}>
          {this.state.renderedList}
        </div>

        <div
          onClick={this.hidePicker}
          className={`PyramidPicker__Bg  ${((this.props.pickerVisible) ? ' is-visible' : '')}`}
        ></div>
      </div>
    );
  }
}

Picker.propTypes = {
  hidePicker: PropTypes.func,
  addBlock: PropTypes.func,
  insertIndex: PropTypes.number,
  pickerVisible: PropTypes.bool,
};

export default Picker;
