function changePage(state = 1, action) {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return action.payload;
    default:
      return state;
  }
}

export default changePage;
