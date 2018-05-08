const priceFilter = (start, end) => ({
  type: 'CHANGE_PRICE',
  payload: {
    start,
    end,
  },
});

const colorFilter = colors => ({
  type: 'CHANGE_COLOR',
  payload: colors,
});

const brandFilter = brand => ({
  type: 'CHANGE_BRAND',
  payload: brand,
});

export { priceFilter, colorFilter, brandFilter };
