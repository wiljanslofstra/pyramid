import React, { PropTypes } from 'react';

function BlockAddControl({ onClick }) {
  return (
    <button className="PyramidAdd" onClick={onClick}>
      <div className="PyramidAdd__Handle">
        <i className="fa fa-plus" />
      </div>
    </button>
  );
}

BlockAddControl.propTypes = {
  onClick: PropTypes.func,
};

export default BlockAddControl;
