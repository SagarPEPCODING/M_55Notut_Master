import React, { Component, useState, createContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../css_Files/barrelcss.css';
import { Link, Redirect } from 'react-router-dom';
import img from '../publicImageFolder/foreantech_logo.png';

const HomeCardFeaturedProfileOfMentors = (props) => {
  let {
    Job_id,
    First_Name,
    Last_Name,
    Experience,
    Mentor_profile,
    topics,
    Contact_Number,
    Email_id,
    Languages_known,
    CareerSummary,
    No_of_Sessions,
    pricing,
    Gender,
    question,
    Event_Feature,
    Payment,
    Feature_access,
    Event_access,
    ImageName,
  } = props.value;
  const [cardClicked, setcardClicked] = useState(false);

  function cardIsClicked() {
    setcardClicked(true);
  }

  if (!cardClicked) {
    console.log(First_Name);
    console.log(Email_id);
    return (
      <>
        <div className='card_container' onClick={cardIsClicked}>
          <Card style={{ width: '18rem', height: '18rem' }}>
            {/* ../publicImageFolder/${imgurl}.png */}
            {/* <img src={myreq.default} className='images' /> */}
            <Card.Body>
              <Card.Title>{First_Name}</Card.Title>
              <Card.Text>{Email_id}</Card.Text>
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
            pathname: `/login/individualproductOfFeaturedMentor/${Job_id}`,
            state: {
              Job_id: Job_id,
              First_Name: First_Name,
              Last_Name: Last_Name,
              Experience: Experience,
              Mentor_profile: Mentor_profile,
              topics: topics,
              Contact_Number: Contact_Number,
              Email_id: Email_id,
              Languages_known: Languages_known,
              CareerSummary: CareerSummary,
              No_of_Sessions: No_of_Sessions,
              pricing: pricing,
              Gender: Gender,
              question: question,
              Event_Feature: Event_Feature,
              Payment: Payment,
              Feature_access: Feature_access,
              Event_access: Event_access,
              ImageName: ImageName,
            },
          }}
        ></Redirect>
      </>
    );
  }
};

//

export default HomeCardFeaturedProfileOfMentors;
