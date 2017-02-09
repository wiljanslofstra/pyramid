import React, { PropTypes } from 'react';

function BlockAddControl({ onClick, type }) {
  let clsName = 'PyramidAdd';

  if (type === 'lg') {
    clsName += ' PyramidAdd--Large';
  }

  return (
    <button className={clsName} onClick={onClick} type="button">
      <div className="PyramidAdd__Handle">
        <i className="fa fa-plus" />
      </div>
    </button>
  );
}

BlockAddControl.propTypes = {
  onClick: PropTypes.func,
};

BlockAddControl.defaultProps = {
  type: 'default',
};

export default BlockAddControl;
