import React from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'react-input-range/lib/css/index.css';
import { priceFilter } from './../../actions';

class PriceFilter extends React.Component {
  state = {
    value: { min: 0, max: 100000 },
  };

  render() {
    this.props.dispatch(priceFilter(this.state.value.min, this.state.value.max));
    return (
      <InputRange
        step={100}
        maxValue={100000}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })}
        onChangeComplete={value =>
          this.props.dispatch(priceFilter(value.min, value.max))
        }
      />
    );
  }
}

PriceFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(PriceFilter);
