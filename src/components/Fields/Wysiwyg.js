import React, { PropTypes, Component } from 'react';
import TinyMCE from 'react-tinymce';
import getTinyMCEConfig from '../../helpers/getTinyMCEConfig';

class Wysiwyg extends Component {
  shouldComponentUpdate(nextProps) {
    // Only update if the data or the id changed
    if (this.props.data === nextProps.data && this.props.id === nextProps.id) {
      return false;
    }

    return true;
  }

  render() {
    const { data, field, onChange, id } = this.props;

    return (
      <div className="PyramidBlock__ContentGroup">
        <label className="PyramidLabel" htmlFor={id}>
          {field.label}
        </label>

        <TinyMCE
          id={id}
          className="PyramidFormControl"
          onChange={(event) => { onChange(event.target.getContent(), field.name); }}
          content={data}
          config={getTinyMCEConfig}
        />
      </div>
    );
  }
}

Wysiwyg.propTypes = {
  onChange: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  data: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Wysiwyg;
