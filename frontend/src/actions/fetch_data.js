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

/*
Thunk Middleware:
When we dispatch a function, Redux Thunk will give it dispatch as an argument.
If Redux Thunk middleware is enabled, any time you attempt to dispatch a function instead of an
action object, the middleware will call that function with dispatch method itself as the first
argument.
This is required to dispatch functions one by one, abstracting from component itself.
*/
const fetchData = (url, pageNumber = 1) => dispatch => {
  dispatch(requestData);
  const axiosEndPoint = `${END_POINT}?page=${pageNumber}${url}`;
  axios(axiosEndPoint).then(json => dispatch(receiveData(json, pageNumber)));
};

const changePage = (url, pageNumber) => dispatch =>
  dispatch(fetchData(url, pageNumber));

export { fetchData, changePage };
