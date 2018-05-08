const initialState = {
  min_price: 0,
  high_price: 0,
  colors: [],
  brand: '',
  name: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_PRICE':
      return {
        ...state,
        min_price: action.payload.start,
        high_price: action.payload.end,
      };
    case 'CHANGE_COLOR':
      return {
        ...state,
        colors: action.payload,
      };
    case 'CHANGE_BRAND':
      return {
        ...state,
        brand: action.payload,
      };
    default:
      return state;
  }
}
