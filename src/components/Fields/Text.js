import React, { Component, PropTypes } from 'react';

const Text = ({ data, field, onChange }) => {
  return (
    <div className="PyramidBlock__ContentGroup">
      <label>
        {field.label}
      </label>

      <textarea
        className="PyramidFormControl PyramidFormControl--stretch"
        placeholder={field.placeholder}
        onChange={(event) => { onChange(event.target.value, field.name); }}
        value={(data !== undefined) ? data : ''}
      />
    </div>
  );
}

Text.propTypes = {
  onChange: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  data: PropTypes.string,
};

Text.defaultProps = {
  data: '',
};

export default Text;
