import React, { PropTypes } from 'react';

const Input = ({ data, field, onChange, id }) => (
  <div className="PyramidBlock__ContentGroup">
    <label className="PyramidLabel" htmlFor={id}>
      {field.label}
    </label>

    <input
      id={id}
      type="text"
      className="PyramidFormControl"
      placeholder={field.placeholder}
      onChange={(event) => { onChange(event.target.value, field.name); }}
      value={(data !== undefined) ? data : ''}
    />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  data: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Input.defaultProps = {
  data: '',
};

export default Input;
