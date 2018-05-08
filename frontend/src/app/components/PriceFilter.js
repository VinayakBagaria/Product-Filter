import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { priceFilter } from './../../actions';

class PriceFilter extends React.Component {
  state = {
    min: 0,
    max: 100000,
    value: 5000,
  };

  render() {
    const { min, max, value } = this.state;
    this.props.dispatch(priceFilter(min, value));
    return (
      <div className="range-slider">
        <span>
          from
          <input type="number" value="25000" min="0" max="120000" /> to
          <input type="number" value="50000" min="0" max="120000" />
        </span>
        <input value="25000" min="0" max="120000" step="500" type="range" />
        <input value="50000" min="0" max="120000" step="500" type="range" />
        <svg width="100%" height="24">
          <line
            x1="4"
            y1="0"
            x2="300"
            y2="0"
            stroke="#444"
            strokeWidth="12"
            strokeDasharray="1 28"
          />
        </svg>
      </div>
    );
  }
}

PriceFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(PriceFilter);
