import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
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
    value: [],
  };

  render() {
    this.props.dispatch(colorFilter(this.state.value));
    return (
      <Select
        closeOnSelect={false}
        multi
        onChange={value => {
          this.setState({ value });
          this.props.dispatch(colorFilter(value));
        }}
        options={COLOURS}
        placeholder="Select your favourite(s)"
        removeSelected
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
