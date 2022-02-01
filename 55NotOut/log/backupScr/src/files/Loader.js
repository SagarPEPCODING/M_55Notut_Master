import React from 'react';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div id='loader'>
      <img src='https://react-pdf.org/images/logo.png' alt='loader' />
      <p>Loading</p>
    </div>
  );
};

export default Loader;
