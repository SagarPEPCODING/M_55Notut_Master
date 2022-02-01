import React, { Component, useState, createContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../css_Files/barrelcss.css';
import { Link, Redirect } from 'react-router-dom';
import img from '../publicImageFolder/foreantech_logo.png';
import featuredlogo from '../assets/img/featured-text.png';
import '../css_Files/homecardjobs.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import '../css_Files/homecardeventcss.css';

const HomeHomecardEvents = ({
  value,
  imgurl,
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
  Event_profile,
  Category,
  Event_mode,
  Event_Starting_date,
  Event_Ending_date,
  Event_Starting_time,
  EventEndingTime,
}) => {
  const [cardClicked, setcardClicked] = useState(false);
  const [defaultimage, setDefaultimage] = useState('');
  console.log(value);

  function cardIsClicked() {
    setcardClicked(true);
  }

  useEffect(() => {
    console.log(window.location.href);
    let arr = window.location.href.split('/');
    console.log(imgurl);
    console.log(`../jobImageFolder/${imgurl}`);
    if (imgurl === undefined) {
      const myreq = require('../jobImageFolder/Old-Man-PNG-Image.png');
      console.log(myreq);
      setDefaultimage(myreq);
    } else {
      const myreq = require(`../eventImageFolder/${imgurl}`);
      console.log(myreq);
      setDefaultimage(myreq);
    }
  }, []);

  if (!cardClicked) {
    if (featured) {
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
                  <div className='jbprof'>{Event_profile}</div>
                  {/* <div className='jbbodyextylo margintopjb'>
                    <div className='jbex widthjb '>
                      <div className='expreq'>Experience</div>
                      <div className='andexreq'>
                        {Required_Experience} years
                      </div>
                    </div>
                    <div className='jbtype widthjb '>{Job_Type}</div>
                    <div className='jblo widthjb '>{Company_Location}</div>
                  </div> */}
                  <div className='nextinfo'>
                    <div className='ncont1'>
                      <div className='eventcat'>{Category}</div>
                      <div className='eventmode'>{Event_mode}</div>
                    </div>
                    <div className='ncont2'>
                      <div className='statdate'>{Event_Starting_date}</div>
                      <div className='enddate'>{Event_Ending_date}</div>
                    </div>
                    <div className='ncont3'>
                      <div className='starttime'>{Event_Starting_time}</div>
                      <div className='endtime'>{EventEndingTime}</div>
                    </div>
                  </div>
                </div>
                <div className='btncont1'>Go For Details</div>
              </Card.Body>
            </Card>
          </div>
        </>
      );
    } else {
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
                  <div className='jbprof'>{Event_profile}</div>
                  {/* <div className='jbbodyextylo margintopjb'>
                    <div className='jbex widthjb '>
                      <div className='expreq'>Experience</div>
                      <div className='andexreq'>
                        {Required_Experience} years
                      </div>
                    </div>
                    <div className='jbtype widthjb '>{Job_Type}</div>
                    <div className='jblo widthjb '>{Company_Location}</div>
                  </div> */}
                  <div className='nextinfo'>
                    <div className='ncont1'>
                      <div className='eventcat'>{Category}</div>
                      <div className='eventmode'>{Event_mode}</div>
                    </div>
                    <div className='ncont2'>
                      <div className='statdate'>{Event_Starting_date}</div>
                      <div className='enddate'>{Event_Ending_date}</div>
                    </div>
                    <div className='ncont3'>
                      <div className='starttime'>{Event_Starting_time}</div>
                      <div className='endtime'>{EventEndingTime}</div>
                    </div>
                  </div>
                </div>
                <div className='btncont1'>Go For Details</div>
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

export default HomeHomecardEvents;
