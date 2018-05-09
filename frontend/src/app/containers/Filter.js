import React from 'react';
import { PriceFilter, ColorFilter } from './../components';
import './../styles/Filter.css';

const Filter = () => (
  <div className="filter-area">
    <PriceFilter />
    <ColorFilter />
  </div>
);

export default Filter;
