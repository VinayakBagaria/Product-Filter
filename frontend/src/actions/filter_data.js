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

export { priceFilter, colorFilter, brandFilter };
