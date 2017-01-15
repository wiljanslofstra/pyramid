import React, { Component, PropTypes } from 'react';

const Input = ({ data, field, onChange }) => {
  return (
    <div className="PyramidBlock__ContentGroup">
      <label>
        {field.label}
      </label>

      <input
        type="text"
        className="PyramidFormControl"
        placeholder={field.placeholder}
        onChange={(event) => { onChange(event.target.value, field.name); }}
        value={(data !== undefined) ? data : ''}
      />
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  data: PropTypes.string,
};

Input.defaultProps = {
  data: '',
};

export default Input;
