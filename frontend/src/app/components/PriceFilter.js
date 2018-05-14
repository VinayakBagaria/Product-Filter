import React, { Component } from 'react';
import { connect } from 'react-redux';
import { priceFilter } from './../../actions';

type Props = {
  dispatch: Function,
};

type State = {
  val1: number,
  val2: number,
};

class PriceFilter extends Component<Props, State> {
  state = {
    val1: 0,
    val2: 1000000,
  };

  onRangeChange = (first: boolean) => e => {
    const val: number = parseFloat(e.target.value);
    let slide1: number = this.state.val1;
    let slide2: number = this.state.val2;

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
    const { val1, val2 }: { val1: number, val2: number } = this.state;
    this.props.dispatch(priceFilter(val1, val2));
    return (
      <div className="range-slider">
        <h3>Price Filter</h3>
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

export default connect()(PriceFilter);
