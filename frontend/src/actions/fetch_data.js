import axios from 'axios';

const END_POINT = '/api/all?';

export function requestData() {
  return {
    type: 'REQUEST_DATA',
  };
}

function receiveData(json, pageNumber) {
  return {
    type: 'RECEIVE_DATA',
    payload: {
      data: json.data,
      pageNumber,
    },
  };
}

const fetchData = (url = 'pricelow=&colors=&brand=', pageNumber = 1) =>
  function fetcher(dispatch) {
    dispatch(requestData);

    return axios(`${END_POINT}${url}page=${pageNumber}`).then(json =>
      dispatch(receiveData(json, pageNumber)));
  };

const changePage = pageNumber =>
  function changer(dispatch) {
    dispatch(fetchData(pageNumber));
  };

export { fetchData, changePage };
