const Decrement = (state = 0, action) => {
  switch (action.type) {
    case 'Decrement':
      return state - 1;

    default:
      return state;
  }
};

export default Decrement;
