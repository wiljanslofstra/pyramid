import React, { PropTypes } from 'react';

function videoPreview({ thumbnailUrl, url }) {
  return (
    <div className="PyramidVideoPreview">
      <a className="PyramidVideoPreview__Thumbnail" href={url} target="_blank" rel="noopener noreferrer">
        <img className="PyramidVideoPreview__ThumbnailImage" src={thumbnailUrl} role="presentation" />

        <div className="PyramidVideoPreview__ThumbnailOverlay">
          <div>
            <i className="fa fa-external-link" />
            Show video in new window
          </div>
        </div>
      </a>
    </div>
  );
}

videoPreview.propTypes = {
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
};

export default videoPreview;
