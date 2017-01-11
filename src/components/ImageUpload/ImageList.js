import React, { PropTypes, Component } from 'react';
import uuid from 'uuid';

class ImageList extends Component {
  onChange(e, index) {
    const val = e.currentTarget.value;
    const files = this.props.files.slice(0);

    const newFiles = files.map((file, i) => {
      const dupFile = file;

      if (i === index) {
        dupFile.alt = val;
      }

      return dupFile;
    });

    this.props.onChange(newFiles);
  }

  render() {
    const list = this.props.files.map((file, i) => {
      const preview = (typeof file.preview !== 'undefined') ? file.preview : file.url;

      const imageId = `alt-text-${uuid()}`;

      const altVal = (typeof file.alt !== 'undefined') ? file.alt : file.name;

      return (
        <div className="PyramidImageList__Row" key={i}>
          <div className="PyramidImageList__Thumb">
            <img className="PyramidImageList__Image" src={preview} alt={file.name} />
          </div>

          <div className="PyramidImageList__Content">
            <label htmlFor={imageId} className="PyramidFormLabel">
              Alternative text
            </label>

            <input
              className="PyramidFormControl"
              type="text"
              value={altVal}
              name="alt-text"
              id={imageId}
              onChange={(e) => { this.onChange(e, i); }}
            />
          </div>
        </div>
      );
    });

    return (
      <div className="PyramidImageList">
        {list}
      </div>
    );
  }
}

ImageList.propTypes = {
  files: PropTypes.array,
  onChange: PropTypes.func,
};

export default ImageList;
