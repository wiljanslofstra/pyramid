import React, { Component, PropTypes } from 'react';
import TinyMCE from 'react-tinymce';
import BlockControl from '../BlockControl';
import getTinyMCEConfig from '../../helpers/getTinyMCEConfig';

class WysiwygBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.data.text,
    };

    this.onChange = this.onEdit.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Disable update for TinyMCE
    if (nextProps.data.text !== this.props.data.text) {
      return false;
    }

    return true;
  }

  onEdit(val, key) {
    const data = Object.assign({}, this.props.data);

    data[key] = val;

    this.props.updateBlockData(data, this.props.index);
  }

  render() {
    return (
      <div className="PyramidBlock">
        <div className="PyramidBlock__Content PyramidBlock__Content--nopadding">
          <TinyMCE
            className="PyramidFormControl"
            onChange={(event) => { this.onChange(event.target.getContent(), 'text'); }}
            content={this.state.content}
            config={getTinyMCEConfig}
          />
        </div>
      </div>
    );
  }
}

WysiwygBlock.propTypes = {
  updateBlockData: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object,
};

export default WysiwygBlock;
