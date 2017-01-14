import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import { find, findIndex } from 'lodash';
import ImageList from './ImageList';
import uploadFiles from './uploadFiles';

class ImageUpload extends Component {
  constructor(props) {
    super(props);

    this.onEdit = this.onEdit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles/* rejectedFiles */) {
    let files = (typeof this.props.data.files !== 'undefined') ?
      this.props.data.files.slice(0) :
      [];

    files = files.concat(acceptedFiles);

    // Immediately render the dropped images
    this.onEdit(files, 'files');

    // Start uploading the accepted files
    uploadFiles(acceptedFiles, (uploadedFiles) => {
      // We're going to match the uploaded file to the non-upload file and add the
      // real url to the object
      uploadedFiles.forEach((uploadedFile) => {
        const { name } = uploadedFile;

        // Find the item in the files
        let foundItem = find(files, { name });

        if (!foundItem) {
          return;
        }

        // Get the index of the found item
        const itemIndex = findIndex(files, file => (foundItem.name === file.name));

        foundItem = Object.assign({}, foundItem, uploadedFile);

        // Before inserting (with splice) we clone the array to prevent unwanted mutation
        const copyFiles = files.slice(0);

        // Swap the old item with the new item
        copyFiles.splice(itemIndex, 1, foundItem);

        this.onEdit(copyFiles, 'files');
      });
    });
  }

  onEdit(val, key) {
    const data = Object.assign({}, this.props.data);

    data[key] = val;

    this.props.updateBlockData(data, this.props.index);
  }

  render() {
    const mb = 1000 * 1000;
    const maxFileSize = mb * 10; // 10 MB

    let imageList = null;

    if (typeof this.props.data.files !== 'undefined' && this.props.data.files.length) {
      imageList = (
        <ImageList
          files={this.props.data.files}
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
