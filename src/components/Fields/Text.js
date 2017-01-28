import React, { PropTypes } from 'react';

const Text = ({ data, field, onChange, id }) => (
  <div className="PyramidBlock__ContentGroup">
    <label className="PyramidLabel" htmlFor={id}>
      {field.label}
    </label>

    <textarea
      id={id}
      className="PyramidFormControl PyramidFormControl--stretch"
      placeholder={field.placeholder}
      onChange={(event) => { onChange(event.target.value, field.name); }}
      value={(data !== undefined) ? data : ''}
    />
  </div>
);

Text.propTypes = {
  onChange: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  data: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Text.defaultProps = {
  data: '',
};

export default Text;
