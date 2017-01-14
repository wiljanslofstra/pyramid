import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import { find, indexOf } from 'lodash';
import ImageList from './ImageList';
import uploadFiles from './uploadFiles';

class ImageUpload extends Component {
  constructor(props) {
    super(props);

    this.onEdit = this.onEdit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles/* rejectedFiles */) {
    const files = (typeof this.props.data.files !== 'undefined') ?
      this.props.data.files.slice(0) :
      [];

    // Immediately render the dropped images
    this.updateFiles(files.concat(acceptedFiles));

    // Start uploading the accepted files
    uploadFiles(acceptedFiles, (uploadedFiles) => {
      // We're going to match the uploaded file to the non-upload file and add the
      // real url to the object
      uploadedFiles.forEach((uploadedFile) => {
        const { name, url } = uploadedFile;

        // Find the item in the files
        let foundItem = find(this.props.data.files, { name });

        if (!foundItem) {
          return;
        }

        // Get the index of the found item
        const itemIndex = indexOf(files, foundItem);

        foundItem = Object.assign({}, foundItem, uploadedFile);

        // Before inserting (with splice) we clone the array to prevent unwanted mutation
        const copyFiles = files.slice(0);

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
    const simplifiedFiles = files.map(({ name, url, size }) => ({ name, url, size, alt: name }));
    this.onEdit(simplifiedFiles, 'files');
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
