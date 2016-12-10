import React, { Component, PropTypes } from 'react';
import BlockControl from '../BlockControl';
import TinyMCE from 'react-tinymce';
import getTinyMCEConfig from '../../helpers/getTinyMCEConfig';

const title = 'Wysiwyg';
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

class WysiwygBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.data.text,
    };

    this.onChange = this.onEdit.bind(this);
  }

  onEdit(val, key) {
    const data = Object.assign({}, this.props.data);

    data[key] = val;

    this.props.updateBlockData(data, this.props.index);
  }

  shouldComponentUpdate(nextProps) {
    // Disable update for TinyMCE
    if (nextProps.data.text !== this.props.data.text) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div className="PyramidBlock">
        <BlockControl
          title={title}
          icon={icon}
          {...this.props}
        />

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
