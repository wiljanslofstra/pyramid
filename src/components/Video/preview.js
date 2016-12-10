import React, { Component, PropTypes } from 'react';

class VideoPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <img src={this.props.url} />
      </div>
    );
  }
}

export default VideoPreview;
