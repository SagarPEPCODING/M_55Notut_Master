import React, { Component, useState, createContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../css_Files/barrelcss.css';
import { Link, Redirect } from 'react-router-dom';
import img from '../publicImageFolder/foreantech_logo.png';
import featuredlogo from '../assets/img/featured-text.png';

const HomecardEvents = ({
  name,
  eventtype,
  eventdescription,
  Email_id,
  Job_id,
  featured,
}) => {
  const [cardClicked, setcardClicked] = useState(false);
  console.log(Job_id);

  function cardIsClicked() {
    setcardClicked(true);
  }

  useEffect(() => {
    console.log(window.location.href);
    let arr = window.location.href.split('/');
    console.log(arr);
  }, []);

  if (!cardClicked) {
    if (featured) {
      return (
        <>
          <div className='card_container zoom' onClick={cardIsClicked}>
            <Card style={{ width: '18rem', height: '18rem' }}>
              <div className='myimagefeaturedContainer'>
                <img src={featuredlogo} className='myimgfeatures'></img>
              </div>
              <Card.Body>
                <Card.Title>{Email_id}</Card.Title>
                <Card.Text>{eventdescription}</Card.Text>
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
          <div className='card_container zoom' onClick={cardIsClicked}>
            <Card style={{ width: '18rem', height: '18rem' }}>
              <Card.Body>
                <Card.Title>{Email_id}</Card.Title>
                <Card.Text>{eventdescription}</Card.Text>
                <Card.Text>{Job_id}</Card.Text>
                <Button variant='contained' color='primary'>
                  Go On Full Detail...
                </Button>
              </Card.Body>
            </Card>
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <Redirect
          to={{
            pathname: `/individual_Event/${Job_id}`,
            state: {
              product_name: name,
              description_of_product: eventdescription,
              Job_id: Job_id,
            },
          }}
        ></Redirect>
      </>
    );
  }
};

//

export default HomecardEvents;
