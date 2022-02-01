import React, { Component, useState, createContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../css_Files/barrelcss.css';
import { Link, Redirect } from 'react-router-dom';
import img from '../publicImageFolder/foreantech_logo.png';
import featuredlogo from '../assets/img/featured-text.png';
import CardMentorEditor from './CardMentorEditor';
import '../css_Files/homecardjobs.css';

const HomecardMentor = ({
  firstName,
  lastName,
  mentorProfile,
  Experience,
  featured,
  name,
  Last_Name,
  First_Name,
  eventtype,
  eventdescription,
  Email_id,
  Job_id,
  description,
  imgurl,
  CareerSummary,
}) => {
  const [cardClicked, setcardClicked] = useState(false);
  const [defaultimage, setDefaultimage] = useState('');

  console.log(Job_id + ' ' + description);

  function cardIsClicked() {
    setcardClicked(true);
  }

  useEffect(() => {
    console.log(window.location.href);
    let arr = window.location.href.split('/');
    console.log(arr);

    console.log(imgurl);
    console.log(`../eventImageFolder/${imgurl}`);
    if (imgurl === 'undefined') {
      const myreq = require('../mentorImageFolder/Old-Man-PNG-Image.png');
      console.log(myreq);
      setDefaultimage(myreq);
    } else {
      const myreq = require(`../mentorImageFolder/${imgurl}`);
      console.log(myreq);
      setDefaultimage(myreq);
    }
  }, []);

  if (!cardClicked) {
    console.log(description);
    return (
      <>
        <div className='card_container zoom' onClick={cardIsClicked}>
          <Card style={{ width: '18rem', height: '22rem' }}>
            {featured && (
              <div className='myimagefeaturedContainer'>
                <img src={featuredlogo} className='myimgfeatures'></img>
              </div>
            )}
            <div className='jobfimage'>
              <img src={defaultimage.default} className='jbimg'></img>
            </div>
            <Card.Body>
              <div className='bodycont'>
                <div className='jbprof'>
                  {firstName}
                  {lastName}
                </div>
                <div className='jbtype widthjbb '>{mentorProfile}</div>
                <div className='mevh'>
                  <CardMentorEditor value={description}></CardMentorEditor>
                </div>
              </div>
              <div className='homecardmentor'>
                <div className='btncont'>Go For Details</div>
              </div>
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
            pathname: `/individual_Mentor/${Job_id}`,
            state: {
              product_name: name,
              description_of_product: description,
              Job_id: Job_id,
            },
          }}
        ></Redirect>
      </>
    );
  }
};

//

export default HomecardMentor;
