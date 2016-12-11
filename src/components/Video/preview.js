import React, { PropTypes } from 'react';

function videoPreview({ thumbnailUrl, url, title, authorName }) {
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

      <div className="PyramidVideoPreview__Content">
        <div className="PyramidVideoPreview__ContentLabel">
          Video title
        </div>

        <div className="PyramidVideoPreview__ContentTitle">
          {title}
        </div>

        <div className="PyramidVideoPreview__ContentLabel">
          Author
        </div>

        <div className="PyramidVideoPreview__ContentAuthor">
          {authorName}
        </div>
      </div>
    </div>
  );
}

videoPreview.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  authorName: PropTypes.string,
  thumbnailUrl: PropTypes.string,
};

export default videoPreview;
