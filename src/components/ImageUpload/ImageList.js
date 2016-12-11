import React, { PropTypes } from 'react';

function ImageList({ files }) {
  const list = files.map((file, i) => {
    const preview = (typeof file.preview !== 'undefined') ? file.preview : file.url;

    return (
      <div key={i}>
        <img src={preview} alt={file.name} />
      </div>
    );
  });

  return (
    <div>
      {list}
    </div>
  );
}

ImageList.propTypes = {
  files: PropTypes.array,
};

export default ImageList;
