const myemailReducer = (state = '', action) => {
  switch (action.type) {
    case 'emailid':
      return { ...state, myemail: action.payload };

    default:
      return state;
  }
};

export default myemailReducer;
