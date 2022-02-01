import React, { Component, useState, createContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../css_Files/barrelcss.css';
import { Link, Redirect } from 'react-router-dom';
import img from '../publicImageFolder/foreantech_logo.png';
// import logo from '../publicImageFolder/foreantech_logo.png';
// const imgreq = require('../publicImageFolder/foreantech_logo.png');

// const Cardname = createContext();
// const Sdescription = createContext();
// const Tablename = createContext();

const HomeCard = (props) => {
  // var myimgurl = JSON.stringify(imgurl);
  // const myreq = require(`../publicImageFolder/${imgurl}`);
  let {
    Job_id,
    Job_profile,
    Company_Location,
    Job_Industry,
    Company_Experience,
    Company_size,
    Company_Type,
    Required_Experience,
    Work_from,
    Job_Type,
    Language_Required,
    Required_Skills_Competencies,
    Soft_Skills,
    Email_id,
    Event_Feature,
    ImageName,
  } = props.value;
  const [cardClicked, setcardClicked] = useState(false);

  function cardIsClicked() {
    setcardClicked(true);
  }

  if (!cardClicked) {
    console.log(Email_id + 'lollllllllllllllllllllllllllllllllllol');
    console.log(Job_id + 'jkkkkkkkkkkkkkkkjkkkkkkkk');
    return (
      <>
        <div className='card_container' onClick={cardIsClicked}>
          <Card style={{ width: '18rem', height: '18rem' }}>
            {/* ../publicImageFolder/${imgurl}.png */}
            {/* <img src={myreq.default} className='images' /> */}
            <Card.Body>
              <Card.Title>{Email_id}</Card.Title>
              <Card.Text>{Job_id}</Card.Text>
              <Button variant='contained' color='primary'>
                Go On Full Detail...
              </Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Redirect
          to={{
            pathname: `/login/individual_product/${Job_id}`,
            state: {
              product_name: Email_id,
              description_of_product: Job_id,
              // imgurl_of_product: imgurl,
            },
          }}
        ></Redirect>
      </>
    );
  }
};

//

export default HomeCard;
