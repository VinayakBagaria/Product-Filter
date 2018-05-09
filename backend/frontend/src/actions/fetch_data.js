import axios from 'axios';

const END_POINT = '/api/all';

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

const fetchData = (url, pageNumber = 1) =>
  function fetcher(dispatch) {
    dispatch(requestData);
    const axiosEndPoint = `${END_POINT}?page=${pageNumber}${url}`;
    return axios(axiosEndPoint).then(json =>
      dispatch(receiveData(json, pageNumber)));
  };

const changePage = (url, pageNumber) =>
  function changer(dispatch) {
    dispatch(fetchData(url, pageNumber));
  };

export { fetchData, changePage };
