import React, { PropTypes } from 'react';
import TinyMCE from 'react-tinymce';
import getTinyMCEConfig from '../../helpers/getTinyMCEConfig';

const Wysiwyg = ({ data, field, onChange, id }) => (
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

Wysiwyg.propTypes = {
  onChange: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  data: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Wysiwyg;
