import React from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  totalPages: number,
  onPageChange: Function,
};

const Paginator = ({ totalPages, onPageChange }: Props) => (
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

export default Paginator;
