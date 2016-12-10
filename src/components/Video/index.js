import React, { Component, PropTypes } from 'react';
import youtubeUrl from 'youtube-url';
import camelcaseKeys from 'camelcase-keys';
import getYoutubeInfo from '../../helpers/getYoutubeInfo';
import BlockControl from '../BlockControl';
import VideoPreview from './preview';

const title = 'Video';
const icon = `
  <svg
    id="i-edit"
    viewBox="0 0 32 32"
    width="32" height="32"
    fill="none"
    stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
      <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
  </svg>
`;

class VideoBlock extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onEdit.bind(this);

    this.state = {
      previewElement: null,
      videoUrl: '',
      videoData: null,
    };

    this.updateVideo();
  }

  componentDidUpdate() {
    this.updateVideo();
  }

  onEdit(val, key) {
    const data = Object.assign({}, this.props.data);

    data[key] = val;

    this.props.updateBlockData(data, this.props.index);
  }

  updateVideo() {
    if (typeof this.props.data.url !== 'undefined' && this.props.data.url !== this.state.videoUrl) {
      this.renderVideo(this.props.data.url);
    }
  }

  renderVideo(videoUrl) {
    if (youtubeUrl.valid(videoUrl)) {
      getYoutubeInfo(videoUrl, (data) => {
        const camelcasedData = camelcaseKeys(data);

        this.setState({
          videoUrl,
          videoData: camelcasedData,
          previewElement: (
            <VideoPreview {...camelcasedData} />
          ),
        });
      });
    }
  }

  render() {
    const data = (typeof this.props.data !== 'undefined') ? this.props.data : {};

    return (
      <div className="PyramidBlock">
        <BlockControl
          title={title}
          icon={icon}
          {...this.props}
        />

        <div className="PyramidBlock__Content">
          <div className="PyramidBlock__Group">
            <input
              type="text"
              className="PyramidFormControl"
              onChange={(event) => { this.onChange(event.target.value, 'url'); }}
              value={(data.url !== undefined) ? data.url : ''}
            />
          </div>

          {this.state.previewElement}
        </div>
      </div>
    );
  }
}

VideoBlock.propTypes = {
  updateBlockData: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object,
};

export default VideoBlock;
