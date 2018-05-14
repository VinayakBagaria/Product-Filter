import { fetchData } from './index';

const priceFilter = (start: number, end: number) => ({
  type: 'CHANGE_PRICE',
  payload: {
    start,
    end,
  },
});

const colorFilter = (colors: string) => ({
  type: 'CHANGE_COLOR',
  payload: colors,
});

const brandFilterFunction = (brand: string) => ({
  type: 'CHANGE_BRAND',
  payload: brand,
});

const brandFilter = (brand: string, url: string, pageNumber: number) => (
  dispatch: Function
) => {
  dispatch(brandFilterFunction(brand));
  dispatch(fetchData(url, pageNumber));
};

export { priceFilter, colorFilter, brandFilter };
