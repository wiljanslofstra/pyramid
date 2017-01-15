import React, { Component, PropTypes } from 'react';
import TinyMCE from 'react-tinymce';
import getTinyMCEConfig from '../../helpers/getTinyMCEConfig';

const Wysiwyg = ({ data, field, onChange }) => {
  return (
    <div className="PyramidBlock__ContentGroup">
      <label>
        {field.label}
      </label>

      <TinyMCE
        className="PyramidFormControl"
        onChange={(event) => { onChange(event.target.getContent(), field.name); }}
        content={data}
        config={getTinyMCEConfig}
      />
    </div>
  );
}

Wysiwyg.propTypes = {
  onChange: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  data: PropTypes.string,
};

export default Wysiwyg;
