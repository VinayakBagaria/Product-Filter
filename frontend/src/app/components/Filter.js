import React from 'react';
import PriceFilter from './PriceFilter';
import './Filter.css';

class Filter extends React.Component {
  state = {
    a: 1,
  };
  render() {
    return (
      <div className="filter-area">
        <PriceFilter />
      </div>
    );
  }
}

export default Filter;
