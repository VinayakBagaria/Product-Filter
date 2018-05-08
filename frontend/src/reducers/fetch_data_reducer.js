const initialState = {
  count: 0,
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA': {
      const { count, results: products } = action.payload.data;
      return { count, products };
    }
    default:
      return state;
  }
}
