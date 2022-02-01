import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function SimplePopper() {
  return (
    <Popup trigger position='right center'>
      <div>Popup content here !!</div>
    </Popup>
  );
}

export default SimplePopper;
