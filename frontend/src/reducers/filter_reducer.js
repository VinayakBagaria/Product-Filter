type PricePayload = {
  +minPrice: number,
  +highPrice: number,
};

type InitialState = PricePayload & {
  +colors: string,
  +brand: string,
};

const initialState = {
  minPrice: 0,
  highPrice: 80000,
  colors: '',
  brand: '',
};

type ChangePriceAction = {
  type: 'CHANGE_PRICE',
  payload: PricePayload,
};

type ChangeColorAction = {
  type: 'CHANGE_COLOR',
  payload: string,
};

type ChangeBrandAction = {
  type: 'CHANGE_BRAND',
  payload: string,
};

type Action = ChangePriceAction | ChangeColorAction | ChangeBrandAction;

const filterReducer = (
  state: InitialState = initialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case 'CHANGE_PRICE': {
      const { minPrice, highPrice }: PricePayload = action.payload;
      return {
        ...state,
        minPrice,
        highPrice,
      };
    }
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
};

export default filterReducer;
