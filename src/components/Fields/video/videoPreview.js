import React, { PropTypes } from 'react';
import i18n from '../../../helpers/i18n';

function videoPreview({ thumbnailUrl, url, title, authorName, error }) {
  if (typeof error !== 'undefined' && error.indexOf('404') >= 0) {
    return (
      <div>
        {i18n.get('video_not_found')}
      </div>
    );
  }

  return (
    <div className="PyramidVideoPreview">
      <a className="PyramidVideoPreview__Thumbnail" href={url} target="_blank" rel="noopener noreferrer">
        <img className="PyramidVideoPreview__ThumbnailImage" src={thumbnailUrl} role="presentation" />

        <div className="PyramidVideoPreview__ThumbnailOverlay">
          <div>
            <i className="fa fa-external-link" />
            {i18n.get('video_new_window')}
          </div>
        </div>
      </a>

      <div className="PyramidVideoPreview__Content">
        <div className="PyramidVideoPreview__ContentLabel">
          {i18n.get('video_title')}
        </div>

        <div className="PyramidVideoPreview__ContentTitle">
          {title}
        </div>

        <div className="PyramidVideoPreview__ContentLabel">
          {i18n.get('video_author')}
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
  error: PropTypes.string,
};

export default videoPreview;
