import React, { Component, PropTypes } from 'react';
import getVideoInfo from '../../helpers/getVideoInfo';
import VideoPreview from './video/videoPreview';

class VideoBlock extends Component {
  constructor(props) {
    super(props);

    this.emptyState = {
      previewElement: null,
      videoUrl: '',
      videoData: null,
    };

    this.state = Object.assign({}, this.emptyState);

    this.onChange = this.onChange.bind(this);

    this.updateVideo();
  }

  componentDidUpdate() {
    this.updateVideo();
  }

  onChange(event) {
    this.props.onChange(event.target.value, 'url');
    this.renderVideo(event.target.value);
  }

  updateVideo() {
    if (
      typeof this.props.data !== 'undefined' &&
      this.props.data !== this.state.videoUrl
    ) {
      this.renderVideo(this.props.data);
    }
  }

  renderVideo(videoUrl) {
    getVideoInfo(videoUrl, (err, data) => {
      if (err) {
        return;
      }

      this.setState({
        videoUrl,
        data,
        previewElement: (
          <VideoPreview {...data} />
        ),
      });
    });

    if (this.state.videoUrl !== this.emptyState.videoUrl) {
      return this.setState(Object.assign({}, this.emptyState));
    }

    return false;
  }

  render() {
    const data = this.props.data;
    const field = this.props.field;

    return (
      <div className="PyramidBlock__ContentGroup">
        <label className="PyramidLabel" htmlFor={this.props.id}>
          {field.label}
        </label>

        <input
          id={this.props.id}
          type="text"
          className="PyramidFormControl"
          onChange={this.onChange}
          value={(data !== undefined) ? data : ''}
        />

        {this.state.previewElement}
      </div>
    );
  }
}

VideoBlock.propTypes = {
  onChange: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  data: PropTypes.string,
  id: PropTypes.string.isRequired,
};

VideoBlock.defaultProps = {
  data: '',
};

export default VideoBlock;
