import React, { PropTypes } from 'react';

function BlockControl({ title, icon, moveUp, moveDown, removeBlock, index }) {
  return (
    <div className="PyramidControl">
      <div className="PyramidControl__Title">
        {icon} {title}
      </div>

      <div className="PyramidControl__Controls">
        <button className="PyramidControl__Control" onClick={() => removeBlock(index)}>
          Remove
        </button>

        <button className="PyramidControl__Control" onClick={() => moveUp(index)}>
          Move up
        </button>

        <button className="PyramidControl__Control" onClick={() => moveDown(index)}>
          Move down
        </button>
      </div>
    </div>
  );
}

BlockControl.propTypes = {
  moveDown: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  removeBlock: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default BlockControl;
