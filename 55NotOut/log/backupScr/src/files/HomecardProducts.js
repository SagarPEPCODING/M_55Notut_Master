import React, { Component, useState, createContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../css_Files/barrelcss.css';
import { Link, Redirect } from 'react-router-dom';
import img from '../publicImageFolder/foreantech_logo.png';
import featuredlogo from '../assets/img/featured-text.png';
import CardMentorEditor from './CardMentorEditor.js';

const HomecardProducts = ({
  name,
  eventtype,
  description,
  Email_id,
  Job_id,
  imgurl,
  ProductOrigin,
}) => {
  const [cardClicked, setcardClicked] = useState(false);
  const [defaultimage, setDefaultimage] = useState('');
  console.log(ProductOrigin);

  function cardIsClicked() {
    setcardClicked(true);
  }

  useEffect(() => {
    console.log(window.location.href);
    let arr = window.location.href.split('/');
    console.log(imgurl);
    console.log(`../jobImageFolder/${imgurl}`);
    if (imgurl === 'undefined') {
      const myreq = require('../jobImageFolder/Old-Man-PNG-Image.png');
      console.log(myreq);
      setDefaultimage(myreq);
    } else {
      console.log(imgurl);
      const myreq = require(`../productImageFolder/${imgurl}`);
      console.log(myreq);
      setDefaultimage(myreq);
    }
  }, []);

  if (!cardClicked) {
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
            <Card.Body className='bodyCont'>
              <div className='bodycont'>
                <div className='jbprofd'>
                  <div className='jbprof1'>{name}</div>
                  <div className='jbprof2'>{ProductOrigin}</div>
                </div>
                <div className='mevh'>
                  <CardMentorEditor value={description}></CardMentorEditor>
                </div>
                {/* <div className='jbbodyextylo margintopjb'>
                  <div className='jbex widthjb '>
                    <div className='expreq'>Experience</div>
                    <div className='andexreq'>{Required_Experience} years</div>
                  </div>
                  <div className='jbtype widthjb '>{Job_Type}</div>
                  <div className='jblo widthjb '>{Company_Location}</div>
                </div> */}
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
            pathname: `/individual_Products/${Job_id}`,
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

export default HomecardProducts;
