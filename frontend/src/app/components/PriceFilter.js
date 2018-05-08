import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 4000, max: 80000 },
    };
  }

  render() {
    return (
      <InputRange
        step={100}
        maxValue={100000}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
    );
  }
}

export default PriceFilter;
