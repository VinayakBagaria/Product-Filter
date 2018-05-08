import axios from 'axios';

const END_POINT = 'http://localhost:8000/api/all?page=';

const fetchData = (pageNumber: Number = 1) => ({
  type: 'FETCH_DATA',
  payload: axios.get(`${END_POINT}${pageNumber}`),
});

export default fetchData;
