import React, { Component, useState, createContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../css_Files/barrelcss.css';
import { Link, Redirect } from 'react-router-dom';
import featuredlogo from '../assets/img/featured-text.png';
import img from '../publicImageFolder/foreantech_logo.png';

const HomeCard = (props) => {
  let {
    Job_id,
    Event_profile,
    Event_description,
    Category,
    Event_mode,
    Event_Type,
    Event_Ending_date,
    Event_Starting_date,
    Event_Starting_time,
    Event_Feature,
    Payment,
    Feature_access,
    Event_access,
    ImageName,
    EventEndingTime,
  } = props.value;
  const [defaultimage, setDefaultimage] = useState('');
  const [cardClicked, setcardClicked] = useState(false);

  function cardIsClicked() {
    setcardClicked(true);
  }

  useEffect(() => {
    console.log(window.location.href);
    let arr = window.location.href.split('/');
    console.log(ImageName);
    console.log(`../jobImageFolder/${ImageName}`);
    // if (ImageName === undefined) {
    //   const myreq = require('../jobImageFolder/Old-Man-PNG-Image.png');
    //   console.log(myreq);
    //   setDefaultimage(myreq);
    // } else {
    //   const myreq = require(`../jobImageFolder/${ImageName}`);
    //   console.log(myreq);
    //   setDefaultimage(myreq);
    // }
  }, []);

  if (!cardClicked) {
    return (
      <>
        <div className='card_container zoom' onClick={cardIsClicked}>
          <Card style={{ width: '18rem', height: '22rem' }}>
            <div className='myimagefeaturedContainer'>
              <img src={featuredlogo} className='myimgfeatures'></img>
            </div>
            {/* <div className='jobfimage'>
              <img src={defaultimage.default} className='jbimg'></img>
            </div> */}
            <Card.Body>
              <Card.Title>{Event_profile}</Card.Title>
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
              product_name: Event_profile,
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
