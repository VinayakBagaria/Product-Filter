import React from 'react';
import Select from 'react-select';
import * as Animated from 'react-select/lib/animated';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colorFilter } from './../../actions';

const COLOURS = [
  { label: 'Red', value: 'Red' },
  { label: 'Black', value: 'Black' },
  { label: 'Blue', value: 'Blue' },
  { label: 'Yellow', value: 'Yellow' },
];

class ColorFilter extends React.Component {
  state = {
    value: '',
  };

  render() {
    this.props.dispatch(colorFilter(this.state.value));
    return (
      <Select
        className="multi-select"
        closeMenuOnSelect={false}
        isMulti
        components={Animated}
        onChange={value => this.setState({ value })}
        onMenuClose={() => {
          if (this.state.value.length) {
            const result = this.state.value.map(a => a.label);
            this.props.dispatch(colorFilter(Object.values(result).toString()));
          }
        }}
        options={COLOURS}
        placeholder="Select your favourite(s)"
        simpleValue
        value={this.state.value}
      />
    );
  }
}

ColorFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ColorFilter);
