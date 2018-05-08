import axios from 'axios';

export default function fetchData() {
  const END_POINT = 'http://localhost:8000/api/all';

  return {
    type: 'FETCH_DATA',
    payload: axios.get(END_POINT),
  };
}
