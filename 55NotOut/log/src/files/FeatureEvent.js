import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/featurecss.css';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

function FeatureEvent(props) {
  const [inputvalue, setInputvalue] = useState(0);

  let history = useHistory();

  let {
    Event_profile,
    Event_description,
    Category,
    Event_mode,
    Event_Starting_date,
    Event_Ending_date,
    Event_Type,
    EventStartingTime,
    FeatureEvent,
    Image_Name,
    EventEndingTime,
  } = props.location.state;

  const Addsubscription = async (event) => {
    const Jobid = uuidv4();

    const params = JSON.stringify({
      Job_id: Jobid,
      Event_profile: Event_profile,
      Event_description: Event_description,
      Category: Category,
      Event_mode: Event_mode,
      Event_Starting_date: Event_Starting_date,
      Event_Ending_date: Event_Ending_date,
      Event_Type: Event_Type,
      EventStartingTime: EventStartingTime,
      Event_Feature: FeatureEvent,
      Payment: inputvalue,
      Image_Name: Image_Name,
      EventEndingTime: EventEndingTime,
    });

    let { data } = await axios.post(`/api/users/addEvent/${params}`);

    console.log('Your Subscription Is Added');

    history.push({
      pathname: '/login/Events',
    });
  };

  const Inputtext = (event) => {
    console.log(event.target.value);
    setInputvalue(event.target.value);
  };

  return (
    <>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <div className='featureEvent'>
        <div className='cardpayment'>
          <label className='label'>Enter Amount :- </label>
          <input type='text' onChange={Inputtext}></input>
          <Button
            variant='contained'
            color='secondary'
            type='submit'
            className='flex_row'
            onClick={Addsubscription}
          >
            Payment
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FeatureEvent;
