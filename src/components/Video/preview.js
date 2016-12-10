import React, { PropTypes } from 'react';

function videoPreview({ url }) {
  return (
    <div>
      <img src={url} role="presentation" />
    </div>
  );
}

videoPreview.propTypes = {
  url: PropTypes.string,
};

export default videoPreview;
