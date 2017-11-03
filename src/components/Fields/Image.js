import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import { find, findIndex } from 'lodash';
import ImageList from './image/ImageList';
import uploadFiles from './image/uploadFiles';
import i18n from '../../helpers/i18n';

class ImageUpload extends Component {
  constructor(props) {
    super(props);

    this.onEdit = this.onEdit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles/* rejectedFiles */) {
    let files = (typeof this.props.data !== 'undefined') ?
      this.props.data.slice(0) :
      [];

    files = files.concat(acceptedFiles);

    // Immediately render the dropped images
    this.onEdit(files, 'files');

    console.log(this.props);

    // Start uploading the accepted files
    uploadFiles(acceptedFiles, (uploadedFiles) => {
      // Before inserting (with splice) we clone the array to prevent unwanted mutation
      const copyFiles = files.slice(0);

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

        // Swap the old item with the new item
        copyFiles.splice(itemIndex, 1, foundItem);
      });

      this.onEdit(copyFiles, 'files');
    });
  }

  onEdit(val) {
    this.props.onChange(val, this.props.field.name);
  }

  render() {
    const mb = 1000 * 1000;
    const maxFileSize = mb * 10; // 10 MB

    let imageList = null;

    if (typeof this.props.data !== 'undefined' && this.props.data.length) {
      imageList = (
        <ImageList
          files={this.props.data}
          onChange={(files) => { this.onEdit(files, 'files'); }}
        />
      );
    }

    return (
      <div className="PyramidBlock__ContentGroup">
        <label className="PyramidLabel" htmlFor={this.props.id}>
          {this.props.field.label}
        </label>

        <Dropzone
          className="PyramidImage__Dropzone"
          onDrop={this.onDrop}
          maxSize={maxFileSize}
          accept="image/*"
        >
          <div>{i18n.get('dropzone_text')}</div>
        </Dropzone>

        {imageList}
      </div>
    );
  }
}

ImageUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  data: PropTypes.array,
  id: PropTypes.string,
};

export default ImageUpload;
