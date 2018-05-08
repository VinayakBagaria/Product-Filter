export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return Object.assign({}, ...state, action.payload.data);
    default:
      return state;
  }
}
