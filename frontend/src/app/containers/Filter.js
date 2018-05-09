import React from 'react';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import './../styles/Filter.css';

const Filter = () => (
  <div className="filter-area">
    <PriceFilter />
    <ColorFilter />
  </div>
);

export default Filter;
