import axios from 'axios';

const END_POINT = '/api/all?page=';

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

const fetchData = (pageNumber = 1) =>
  function fetcher(dispatch) {
    dispatch(requestData);

    return axios(`${END_POINT}${pageNumber}`).then(json =>
      dispatch(receiveData(json, pageNumber)));
  };

const changePage = pageNumber =>
  function changer(dispatch) {
    dispatch(fetchData(pageNumber));
  };

export { fetchData, changePage };
