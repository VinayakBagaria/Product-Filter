import fetchData from './fetch_data';

const pager = pageNumber => ({
  type: 'CHANGE_PAGE_NUMBER',
  payload: pageNumber,
});

const changePage = pageNumber =>
  function changePageAction(dispatch) {
    dispatch(pager);
    fetchData(pageNumber);
  };

export default changePage;
