import React, { Component, useState, createContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../css_Files/barrelcss.css';
import { Link, Redirect } from 'react-router-dom';
import img from '../publicImageFolder/foreantech_logo.png';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import featuredlogo from '../assets/img/featured-text.png';
import '../css_Files/homecardorganisation.css';
import HomecardorganisationEditorshoe from './HomecardorganisationEditorshoe.js';
import '../css_Files/homecardorganisationeditorshow.css';

const HomeCard = ({
  featured,
  Job_id,
  table,
  imgurl,
  OrganisationName,
  aboutOrganisation,
}) => {
  const [cardClicked, setcardClicked] = useState(false);
  const [defaultimage, setDefaultimage] = useState('');
  const [aboutorganisation, setAboutorganisation] = useState('');
  const [datacome, setDatacome] = useState(false);

  console.log(Job_id);

  function cardIsClicked() {
    setcardClicked(true);
  }

  useEffect(() => {
    console.log(window.location.href);
    let arr = window.location.href.split('/');
    console.log(arr);
    console.log(aboutOrganisation);
    let decodedaboutorganisation = atob(aboutOrganisation);
    setAboutorganisation(decodedaboutorganisation);
    console.log(decodedaboutorganisation);
    setDatacome(true);

    console.log(`../jobImageFolder/${imgurl}`);
    if (imgurl === 'undefined' || imgurl.length == 0) {
      const myreq = require('../jobImageFolder/Old-Man-PNG-Image.png');
      console.log(myreq);
      setDefaultimage(myreq);
    } else {
      const myreq = require(`../organiationImageFolder/${imgurl}`);
      console.log(myreq);
      setDefaultimage(myreq);
    }
  }, []);

  if (!cardClicked) {
    return (
      <>
        <div className='card_container zoom' onClick={cardIsClicked}>
          <Card className='cardt' style={{ width: '18rem', height: '22rem' }}>
            {featured && (
              <div className='myimagefeaturedContainer'>
                <img src={featuredlogo} className='myimgfeatures'></img>
              </div>
            )}
            <div className='jobfimage'>
              <img src={defaultimage.default} className='jbimg'></img>
            </div>
            <Card.Body className='bodyCont'>
              <div className='bodycont'>
                <div className='jbprof'>{OrganisationName}</div>
                {datacome && (
                  <HomecardorganisationEditorshoe
                    value={aboutorganisation}
                  ></HomecardorganisationEditorshoe>
                )}
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
              product_name: OrganisationName,
              description_of_product: aboutOrganisation,
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
