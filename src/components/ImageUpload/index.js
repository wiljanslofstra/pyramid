import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import { find, indexOf } from 'lodash';
import ImageList from './ImageList';
import uploadFiles from './uploadFiles';

class ImageUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: (typeof this.props.data.files !== 'undefined') ? this.props.data.files : [],
    };

    this.onEdit = this.onEdit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles/* rejectedFiles */) {
    // Immediately render the dropped images
    this.updateFiles(this.state.files.concat(acceptedFiles));

    // Start uploading the accepted files
    uploadFiles(acceptedFiles, (uploadedFiles) => {
      // We're going to match the uploaded file to the non-upload file and add the
      // real url to the object
      uploadedFiles.forEach(({ url, name }) => {
        // Find the item in the files
        const foundItem = find(this.state.files, { name });

        // Get the index of the found item
        const itemIndex = indexOf(this.state.files, foundItem);

        // Add the 'real' url
        foundItem.url = url;

        // Before inserting (with splice) we clone the array to prevent unwanted mutation
        const copyFiles = this.state.files.slice(0);

        // Swap the old item with the new item
        copyFiles.splice(itemIndex, 1, foundItem);

        this.updateFiles(copyFiles);
      });
    });
  }

  onEdit(val, key) {
    const data = Object.assign({}, this.props.data);

    data[key] = val;

    this.props.updateBlockData(data, this.props.index);
  }

  updateFiles(files) {
    this.setState({
      files,
    });

    const simplifiedFiles = files.map(({ name, url, size }) => ({ name, url, size, alt: name }));

    this.onEdit(simplifiedFiles, 'files');
  }

  render() {
    const mb = 1000 * 1000;
    const maxFileSize = mb * 10; // 10 MB

    let imageList = null;

    if (typeof this.state.files !== 'undefined' && this.state.files.length) {
      imageList = (
        <ImageList
          files={this.state.files}
          onChange={(files) => { this.onEdit(files, 'files'); }}
        />
      );
    }

    return (
      <div className="PyramidBlock">
        <div className="PyramidBlock__Content">
          <Dropzone
            className="PyramidImage__Dropzone"
            onDrop={this.onDrop}
            maxSize={maxFileSize}
            accept="image/*"
          >
            <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>

          {imageList}
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  updateBlockData: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object,
};

export default ImageUpload;
