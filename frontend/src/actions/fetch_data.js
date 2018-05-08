import axios from 'axios';

const END_POINT = 'http://localhost:8000/api/all?page=';

const fetchInitialData = (pageNumber: Number) => ({
  type: 'FETCH_DATA',
  payload: axios.get(`${END_POINT}${pageNumber}`),
});

const priceFilter = (start: Number, end: Number) => ({
  type: 'CHANGE_PRICE',
  payload: {
    start,
    end,
  },
});

const colorFilter = (colors: Array<String>) => ({
  type: 'CHANGE_COLOR',
  payload: colors,
});

const brandFilter = (brand: String) => ({
  type: 'CHANGE_BRAND',
  payload: brand,
});

export { fetchInitialData, priceFilter, colorFilter, brandFilter };
