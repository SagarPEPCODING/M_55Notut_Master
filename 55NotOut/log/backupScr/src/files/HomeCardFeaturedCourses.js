import React, { Component, useState, createContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../css_Files/barrelcss.css';
import { Link, Redirect } from 'react-router-dom';
import img from '../publicImageFolder/foreantech_logo.png';
import featuredlogo from '../assets/img/featured-text.png';
import '../css_Files/cardfeature.css';
import '../css_Files/homecardfeaturescourses.css';
import HomecardcoursesEditorshow from './HomecardcoursesEditorshow.js';

const HomeCardFeaturedCourses = (props) => {
  let {
    name,
    description,
    price,
    feature_access,
    filename,
    see_access,
    uuid,
  } = props.value;
  const [cardClicked, setcardClicked] = useState(false);
  const [defaultimage, setDefaultimage] = useState('');
  const [descriptionis, setDescriptionis] = useState('');
  const [coursedatacome, setCoursedatacome] = useState(false);

  useEffect(() => {
    console.log(window.location.href);
    let arr = window.location.href.split('/');
    console.log(filename);
    let decodeddescription = atob(description);
    console.log(decodeddescription);
    setDescriptionis(decodeddescription);
    setCoursedatacome(true);
    console.log(`../jobImageFolder/${filename}`);
    if (filename === undefined) {
      const myreq = require('../jobImageFolder/Old-Man-PNG-Image.png');
      console.log(myreq);
      setDefaultimage(myreq);
    } else {
      const myreq = require(`../publicImageFoldercourse/${filename}`);
      console.log(myreq);
      setDefaultimage(myreq);
    }
  }, []);

  function cardIsClicked() {
    setcardClicked(true);
  }

  if (!cardClicked) {
    console.log(name);
    console.log(description);
    console.log(descriptionis);
    return (
      <>
        <div className='card_container zoom' onClick={cardIsClicked}>
          <Card style={{ width: '18rem', height: '22rem' }}>
            <div className='myimagefeaturedContainer'>
              <img src={featuredlogo} className='myimgfeatures'></img>
            </div>
            <div className='jobfimage'>
              <img src={defaultimage.default} className='jbimg'></img>
            </div>
            <Card.Body>
              <div className='bodycontc'>
                <div className='jbprof'>{name}</div>
                {coursedatacome && (
                  <HomecardcoursesEditorshow
                    value={descriptionis}
                  ></HomecardcoursesEditorshow>
                )}
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
            pathname: `/login/individualproductOfFeaturedCourses/${uuid}`,
            state: {
              name: name,
              description: description,
              price: price,
              feature_access: feature_access,
              filename: filename,
              see_access: see_access,
              uuid: uuid,
            },
          }}
        ></Redirect>
      </>
    );
  }
};

//

export default HomeCardFeaturedCourses;
