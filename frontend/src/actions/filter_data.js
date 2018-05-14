import { fetchData } from './index';

const priceFilter = (minPrice: number, highPrice: number) => ({
  type: 'CHANGE_PRICE',
  payload: {
    minPrice,
    highPrice,
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
