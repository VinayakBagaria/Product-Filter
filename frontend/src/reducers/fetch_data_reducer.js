import type { ProductDescription } from '../app/ProductDescription';

type InitialState = {
  +totalPages: number,
  +isFetching: boolean,
  +products: ProductDescription[],
  +pageNumber: number,
};

const initialState = {
  totalPages: 0,
  isFetching: false,
  products: [],
  pageNumber: 1,
};

type RequestDataAction = {
  type: 'REQUEST_DATA',
};

type ServerResponse = {
  count: number,
  results: ProductDescription[],
};

type ReceiveDataPayload = {
  data: ServerResponse,
  pageNumber: number,
};

type ReceiveDataAction = {
  type: 'RECEIVE_DATA',
  payload: ReceiveDataPayload,
};

type Action = RequestDataAction | ReceiveDataAction;

let productsInPage: number = 0;

const fetchDataReducer = (
  state: InitialState = initialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_DATA': {
      const {
        payload: {
          data: { count, results: products },
          pageNumber,
        },
      }: ReceiveDataAction = action;

      productsInPage = productsInPage === 0 ? products.length : productsInPage;
      const totalPages: number = Math.ceil(count / productsInPage);

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
};

export default fetchDataReducer;
