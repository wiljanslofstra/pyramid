import React, { PropTypes } from 'react';

function BlockControl({ title, icon, moveUp, moveDown, removeBlock, index }) {
  let iconHTML = null;

  if (icon) {
    const dangerousIcon = {
      __html: icon,
    };

    iconHTML = (
      <div className="PyramidControl__TitleIcon" dangerouslySetInnerHTML={dangerousIcon} />
    );
  }

  return (
    <div className={(iconHTML) ? 'PyramidControl has-icon' : 'PyramidControl'}>
      <div className="PyramidControl__Title">
        {iconHTML}
        <div className="PyramidControl__TitleText">{title}</div>
      </div>

      <div className="PyramidControl__Controls">
        <button
          className="PyramidControl__Control PyramidControl__Control--Remove"
          onClick={() => removeBlock(index)}
        >
          Remove
        </button>

        <button
          className="PyramidControl__Control PyramidControl__Control--Up"
          onClick={() => moveUp(index)}
        >
          Move up
        </button>

        <button
          className="PyramidControl__Control PyramidControl__Control--Down"
          onClick={() => moveDown(index)}
        >
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
