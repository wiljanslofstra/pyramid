import React, { Component, PropTypes } from 'react';

class DefaultText extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onEdit.bind(this);
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
        <div className="PyramidBlock__Content">
          <textarea
            className="PyramidFormControl PyramidFormControl--stretch"
            placeholder="Place your content here..."
            onChange={(event) => { this.onChange(event.target.value, 'text'); }}
            value={(data.text !== undefined) ? data.text : ''}
          />
        </div>
      </div>
    );
  }
}

DefaultText.propTypes = {
  updateBlockData: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object,
};

export default DefaultText;
