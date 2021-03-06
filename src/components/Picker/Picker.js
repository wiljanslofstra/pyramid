import React, { Component, PropTypes } from 'react';
import { map } from 'lodash';
import blocksConfig from '../../blocksConfig';

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
    const renderedList = map(blocksConfig, (item, key) => (
      <button
        className="PyramidPicker__Button"
        key={key}
        onClick={() => { this.onItemClick(key); }}
        type="button"
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

        <button
          onClick={this.hidePicker}
          className={`PyramidPicker__Bg  ${((this.props.pickerVisible) ? ' is-visible' : '')}`}
          type="button"
        />
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
