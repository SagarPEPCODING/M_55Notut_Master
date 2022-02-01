const Increment = () => {
  return {
    type: 'Increment',
    payload: 1,
  };
};

const Decrement = () => {
  return {
    type: 'Decrement',
    payload: 1,
  };
};

const loggedin = (boolean) => {
  console.log(boolean);
  return {
    type: 'signin',
    payload: boolean,
  };
};

const emailid = (email) => {
  console.log(email);
  return {
    type: 'emailid',
    payload: email,
  };
};

export { Increment, Decrement, loggedin, emailid };
