import React from 'react';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import './Filter.css';

class Filter extends React.Component {
  state = {
    a: 1,
  };
  render() {
    return (
      <div className="filter-area">
        <PriceFilter />
        <ColorFilter />
      </div>
    );
  }
}

export default Filter;
