const initialState = {
  count: 0,
  isFetching: false,
  products: [],
  pageNumber: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_DATA': {
      const {
        payload: {
          data: { results: products, count },
          pageNumber,
        },
      } = action;
      return {
        isFetching: false,
        products,
        count,
        pageNumber,
      };
    }
    default:
      return state;
  }
}
