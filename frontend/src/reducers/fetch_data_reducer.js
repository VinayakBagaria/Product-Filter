const initialState = {
  count: 0,
  isFetching: false,
  products: [],
  pageNumber: 1,
};

let productsInPage = 0;

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
      productsInPage = productsInPage === 0 ? products.length : productsInPage;
      const totalPages = Math.ceil(count / productsInPage);
      return {
        isFetching: false,
        products,
        totalPages,
        pageNumber,
      };
    }
    default:
      return state;
  }
}
