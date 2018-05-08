import React from 'react';
import BrandFilter from './BrandFilter';
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
        <BrandFilter />
        <PriceFilter />
        <ColorFilter />
      </div>
    );
  }
}

export default Filter;
