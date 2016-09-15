import React, { Component, PropTypes } from 'react';

function BlockControl({ title, icon, moveUp, moveDown, removeBlock, index }) {
  return (
    <div className="PyramidControl">
      <div className="PyramidControl__Title">
        {title}
      </div>

      <div className="PyramidControl__Controls">
        <a className="PyramidControl__Control" onClick={() => removeBlock(index)}>
          Remove
        </a>

        <a className="PyramidControl__Control" onClick={() => moveUp(index)}>
          Move up
        </a>

        <a className="PyramidControl__Control" onClick={() => moveDown(index)}>
          Move down
        </a>
      </div>
    </div>
  );
}

export default BlockControl;
