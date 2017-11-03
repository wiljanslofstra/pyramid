import request from 'superagent';
import React, { PropTypes, Component } from 'react';
import Autocomplete from 'react-autocomplete';

class AutocompleteField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: '',
    };
  }

  request(val, cb) {
    const field = this.props.field;
    const api = field.api;

    request
      .get(api)
      .query({ value: val })
      .accept('json')
      .end((err, res) => {
        if (err) return;

        cb(res.body);
      });
  }

  render() {
    const { data, field, onChange, id } = this.props;

    const styles = {
      highlighted: { padding: '5px 10px' },
      normal: { padding: '5px 10px' },
    };

    return (
      <div className="PyramidBlock__ContentGroup">
        <label className="PyramidLabel" htmlFor={id}>
          {field.label}
        </label>

        <Autocomplete
          inputProps={{ name: field.name, id, className: 'PyramidFormControl' }}
          ref="autocomplete"
          value={this.state.value}
          items={this.state.items}
          getItemValue={(item) => item.name}
          wrapperStyle={{ display: 'block', position: 'relative', zIndex: 9000 }}
          onSelect={(value, item) => {
            // set the menu to only the selected item
            this.setState({ value, items: [ item ] });
            onChange(item.id.toString(), field.name);
          }}
          onChange={(event, value) => {
            this.setState({ value, loading: true });

            this.request(value, (items) => {
              this.setState({ items, loading: false })
            });
          }}
          renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlighted : styles.normal}
              key={item.id}
              id={item.id}
            >{item.name}</div>
          )}
        />

        <div style={{ marginTop: 10 }}>
          Artikel id: {(data !== undefined && data && data !== '') ? data : 'Geen artikel geselecteerd'}
        </div>
      </div>
    );
  }
}

AutocompleteField.propTypes = {
  onChange: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  data: PropTypes.string,
  id: PropTypes.string.isRequired,
};

AutocompleteField.defaultProps = {
  data: '',
};

export default AutocompleteField;
