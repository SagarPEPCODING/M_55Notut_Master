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

function FeatureJob(props) {
  const [inputvalue, setInputvalue] = useState(0);

  let history = useHistory();

  let {
    First_Name,
    Last_Name,
    FeatureEvent,
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
    Image_Name,
  } = props.location.state;

  const Addsubscription = async (event) => {
    const Jobid = uuidv4();
    console.log(
      Mentor_profile + ' ' + FeatureEvent + ' ' + Email_id + ' ' + Image_Name
    );

    const params = JSON.stringify({
      Job_id: Jobid,
      First_Name: First_Name,
      Last_Name: Last_Name,
      Experience: Experience,
      FeatureEvent: FeatureEvent,
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
      Payment: inputvalue,
      Image_Name: Image_Name,
    });

    console.log(params);

    let { data } = await axios.post(`/api/users/addMentor/${params}`);

    console.log('Your Subscription Is Added');

    history.push({
      pathname: '/login/Mentor',
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

export default FeatureJob;
