import React, { useState, useEffect } from 'react';
import '../css_Files/card.css';
import { Link, Redirect } from 'react-router-dom';
import CardMentorEditor from './CardMentorEditor';
import '../css_Files/texteditorvisibilityhodden.css';

function Card(props) {
  console.log(props.value);

  const [click, setClick] = useState(false);
  const [requiredFile, setRequiredFile] = useState('');

  const CardClicked = () => {
    console.log('card clicked');
    setClick(true);
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (props.value.ImageName.length == 0) {
      console.log(props.value.ImageName);
      const myreq = require('../mentorImageFolder/blank-profile-picture-973460_640.png');
      setRequiredFile(myreq);
    } else {
      console.log(props.value.ImageName);
      const myreq = require(`../mentorImageFolder/${props.value.ImageName}`);
      setRequiredFile(myreq);
    }
  }, []);

  if (!click) {
    console.log(props.value.CareerSummary);
    return (
      <div className='myCard' onClick={CardClicked}>
        <div className='imgcontainer'>
          <img src={requiredFile.default} />
        </div>
        <div className='productname'>{props.value.First_Name}</div>
        <div className='productdetail'>{props.value.Mentor_profile}</div>
        {/* <div className='productname'>{props.value.CareerSummary}</div> */}
        <div className='visibilityhidden'>
          <CardMentorEditor
            value={props.value.CareerSummary}
          ></CardMentorEditor>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Redirect
          to={{
            pathname: `/login/individual_Mentor/${props.value.Job_id}`,
            state: {
              myval: props.value,
            },
          }}
        ></Redirect>
      </>
    );
  }
}

export default Card;
