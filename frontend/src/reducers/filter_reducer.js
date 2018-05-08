const initialState = {
  minPrice: 0,
  highPrice: 80000,
  colors: '',
  brand: '',
  name: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_PRICE':
      return {
        ...state,
        minPrice: action.payload.start,
        highPrice: action.payload.end,
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