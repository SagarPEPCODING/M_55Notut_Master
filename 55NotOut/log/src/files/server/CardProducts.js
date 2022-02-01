import React, { useState, useEffect } from 'react';
import '../css_Files/card.css';
import { Link, Redirect } from 'react-router-dom';

function Card(props) {
  console.log(props.value);
  console.log(props.Category);
  console.log(props.Eventtype);
  console.log(props.Eventmode);
  const mydata = props.value;
  // console.log(mydata);

  // const [category,setCategory] = useState(false);
  // const [eventtype,setEventtype] = useState(false);
  // const [Eventmode,setEventmode] = useState(false);

  const [click, setClick] = useState(false);
  const [requiredFile, setRequiredFile] = useState('');

  const CardClicked = () => {
    // console.log('card clicked');
    setClick(true);
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (props.value.ImageName.length == 0) {
      const myreq = require('../productImageFolder/blank-profile-picture-973460_640.png');
      setRequiredFile(myreq);
    } else {
      const myreq = require(`../productImageFolder/${props.value.ImageName}`);
      setRequiredFile(myreq);
    }
  }, []);

  // useEffect(() => {
  //   if(props.Category.length == 0){
  //     setCategory(true);
  //   }else if(props.Eventtype.length == 0){
  //     setEventtype(true);
  //   }else if(props.Eventmode.length == 0){
  //     setEventmode(true);
  //   }else{

  //   }
  // });

  if (!click) {
    // console.log('my value is :- ' + { click });
    return (
      <div className='flexjustifycenter zoom'>
        <div className='myCard' onClick={CardClicked}>
          <div className='justifycontentcenter margin_top'>
            <div className='imgcontainer'>
              <img src={requiredFile.default} className='myimgofcard' />
            </div>
          </div>
          <div className='productname'>{props.value.Name_of_product}</div>
          <div className='productdetail'>{props.value.Discription}</div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Redirect
          to={{
            pathname: `/login/individual_Products/${props.value.jobid}`,
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
