import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const Paginator = ({ totalPages, onPageChange }) => (
  <div id="react-paginate">
    <ReactPaginate
      previousLabel="previous"
      nextLabel="next"
      breakLabel={<a href="/">...</a>}
      breakClassName="break-me"
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName="pagination"
      subContainerClassName="pages pagination"
      activeClassName="active"
    />
  </div>
);

Paginator.propTypes = {
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paginator;
