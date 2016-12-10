import React, { Component, PropTypes } from 'react';
import BlockControl from '../BlockControl';

const title = 'Input';
const icon = `
  <svg
    id="i-edit"
    viewBox="0 0 32 32"
    width="32" height="32"
    fill="none"
    stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
      <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
  </svg>
`;

class InputBlock extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onEdit.bind(this);
  }

  moveCard() {
    console.log('mvoe card');
  }

  onEdit(val, key) {
    const data = Object.assign({}, this.props.data);

    data[key] = val;

    this.props.updateBlockData(data, this.props.index);
  }

  render() {
    const data = (typeof this.props.data !== 'undefined') ? this.props.data : {};

    return (
      <div className="PyramidBlock">
        <BlockControl
          title={title}
          icon={icon}
          {...this.props}
        />

        <div className="PyramidBlock__Content">
          <input type="text"
            className="PyramidFormControl"
            onChange={(event) => { this.onChange(event.target.value, 'text'); }}
            value={(data.text !== undefined) ? data.text : ''}
          />
        </div>
      </div>
    );
  }
}

InputBlock.propTypes = {
  updateBlockData: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object,
};

export default InputBlock;
