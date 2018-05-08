import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { priceFilter } from './../../actions';

class PriceFilter extends React.Component {
  state = {
    val1: 0,
    val2: 10000,
  };

  onRangeChange = first => e => {
    const val = e.target.value;
    let slide1 = this.state.val1;
    let slide2 = this.state.val2;

    if (first) {
      slide1 = val;
    } else {
      slide2 = val;
    }

    if (slide1 > slide2) {
      [slide1, slide2] = [slide2, slide1];
    }
    this.setState({
      val1: slide1,
      val2: slide2,
    });
  };

  render() {
    const { val1, val2 } = this.state;
    // this.props.dispatch(priceFilter(val1, val2));
    return (
      <div className="range-slider">
        <span>
          from
          <input
            type="number"
            value={val1}
            min="0"
            max="120000"
            onChange={this.onRangeChange(true)}
          />{' '}
          to
          <input
            type="number"
            value={val2}
            min="0"
            max="120000"
            onChange={this.onRangeChange(false)}
          />
        </span>
        <input
          value={val1}
          min="0"
          max="120000"
          step="500"
          type="range"
          onChange={this.onRangeChange(true)}
        />
        <input
          value={val2}
          min="0"
          max="120000"
          step="500"
          type="range"
          onChange={this.onRangeChange(false)}
        />
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
