import React, { Component, PropTypes } from 'react';

import TextField from '../Fields/Text';
import InputField from '../Fields/Input';
import VideoField from '../Fields/Video';
import WysiwygField from '../Fields/Wysiwyg';
import ImageField from '../Fields/Image';

class Customisable extends Component {
  constructor(props) {
    super(props);

    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(val, key) {
    const data = Object.assign({}, this.props.data);
    data[key] = val;
    this.props.updateBlockData(data, this.props.index);
  }

  render() {
    const data = (typeof this.props.data !== 'undefined') ? this.props.data : {};

    const fields = this.props.blockData.schema.map((field, i) => {
      const dataForField = (typeof data[field.name] !== 'undefined') ?
        data[field.name] :
        field.defaultValue;

      const fieldProps = {
        key: i,
        onChange: this.onEdit,
        data: dataForField,
        field,
      };

      switch (field.type) {
        case 'text' : {
          return (
            <TextField {...fieldProps} />
          );
        }
        case 'input' : {
          return (
            <InputField {...fieldProps} />
          );
        }
        case 'video' : {
          return (
            <VideoField {...fieldProps} />
          );
        }
        case 'wysiwyg' : {
          return (
            <WysiwygField {...fieldProps} />
          );
        }
        case 'image' : {
          return (
            <ImageField {...fieldProps} />
          );
        }
      }
    });

    return (
      <div className="PyramidBlock">
        <div className="PyramidBlock__Content">
          {fields}
        </div>
      </div>
    );
  }
}

Customisable.propTypes = {
  updateBlockData: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object,
};

export default Customisable;
