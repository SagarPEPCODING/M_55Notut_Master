const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'signin':
      return { ...state, loggin: action.payload };
    default:
      return state;
  }
};

export default loggedReducer;
