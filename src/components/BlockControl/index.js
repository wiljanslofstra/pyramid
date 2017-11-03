import React, { PropTypes } from 'react';
import i18n from '../../helpers/i18n';

function BlockControl({ title, moveUp, moveDown, removeBlock, index, connectDragSource }) {
  return (
    <div className="PyramidControl">
      <div className="PyramidControl__Title">
        <div className="PyramidControl__TitleText">{title}</div>
      </div>

      <div className="PyramidControl__Controls">
        <button
          className="PyramidControl__Control PyramidControl__Control--Remove"
          onClick={() => removeBlock(index)}
          title={i18n.get('remove')}
          type="button"
        >
          <i className="fa fa-times" />
        </button>

        <button
          className="PyramidControl__Control PyramidControl__Control--Up"
          onClick={() => moveUp(index)}
          title={i18n.get('move_up')}
          type="button"
        >
          <i className="fa fa-chevron-up" />
        </button>

        <button
          className="PyramidControl__Control PyramidControl__Control--Down"
          onClick={() => moveDown(index)}
          title={i18n.get('move_down')}
          type="button"
        >
          <i className="fa fa-chevron-down" />
        </button>

        {connectDragSource(
          <div
            className="PyramidControl__Control PyramidControl__Control--Move"
          >
            <i className="fa fa-arrows" />
          </div>
        )}
      </div>
    </div>
  );
}

BlockControl.propTypes = {
  moveDown: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  removeBlock: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  connectDragSource: PropTypes.func,
};

export default BlockControl;
