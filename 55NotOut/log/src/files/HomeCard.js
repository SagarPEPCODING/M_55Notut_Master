import React, { Component, useState, createContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../css_Files/barrelcss.css';
import { Link, Redirect } from 'react-router-dom';
import img from '../publicImageFolder/foreantech_logo.png';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import featuredlogo from '../assets/img/featured-text.png';

const HomeCard = ({
  value,
  ImageName,
  name,
  featured,
  Job_profile,
  Company_Location,
  Company_Type,
  Required_Experience,
  Job_Type,
  packageJob,
  Job_id,
  eventdescription,
}) => {
  const [cardClicked, setcardClicked] = useState(false);
  const [defaultimage, setDefaultimage] = useState('');

  console.log(Job_id);

  function cardIsClicked() {
    setcardClicked(true);
  }

  useEffect(() => {
    console.log(window.location.href);
    let arr = window.location.href.split('/');
    console.log(arr);

    console.log(`../jobImageFolder/${ImageName}`);
    if (ImageName === undefined) {
      const myreq = require('../jobImageFolder/Old-Man-PNG-Image.png');
      console.log(myreq);
      setDefaultimage(myreq);
    } else {
      const myreq = require(`../jobImageFolder/${ImageName}`);
      console.log(myreq);
      setDefaultimage(myreq);
    }
  }, []);

  if (!cardClicked) {
    return (
      <>
        <div className='card_container zoom' onClick={cardIsClicked}>
          <Card className='cardt' style={{ width: '18rem', height: '22rem' }}>
            <div className='myimagefeaturedContainer'>
              <img src={featuredlogo} className='myimgfeatures'></img>
            </div>
            <div className='jobfimage'>
              <img src={defaultimage.default} className='jbimg'></img>
            </div>
            <Card.Body className='bodyCont'>
              <div className='bodycont'>
                <div className='jbprof'>{Job_profile}</div>
                <div className='jbbodyextylo margintopjb'>
                  <div className='jbex widthjb '>
                    <div className='expreq'>Experience</div>
                    <div className='andexreq'>{Required_Experience} years</div>
                  </div>
                  <div className='jbtype widthjb '>{Job_Type}</div>
                  <div className='jblo widthjb '>{Company_Location}</div>
                </div>
              </div>
              <div className='btncont'>Go For Details</div>
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
            pathname: `/individual_Organisation/${Job_id}`,
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

export default HomeCard;
