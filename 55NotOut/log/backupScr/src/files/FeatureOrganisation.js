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
    Organisation_Name,
    Organisation_Motive,
    Information_about_Organisation,
    Organisation_Founder,
    Organisation_Co_Founder,
    Organisation_mail_id,
    Contact_no,
    Number_of_members_in_Oranisation,
    question,
    Organisation_establishment_Year,
    Type_of_Organisation,
    FeatureEvent,
    Image_Name,
  } = props.location.state;

  const Addsubscription = async (event) => {
    const Jobid = uuidv4();
    console.log(Organisation_Name + ' ' + Organisation_Motive);
    const params = JSON.stringify({
      Job_id: Jobid,
      Organisation_Name: Organisation_Name,
      Organisation_Motive: Organisation_Motive,
      Information_about_Organisation: Information_about_Organisation,
      Organisation_Founder: Organisation_Founder,
      Organisation_Co_Founder: Organisation_Co_Founder,
      Organisation_mail_id: Organisation_mail_id,
      FeatureEvent: FeatureEvent,
      Contact_no: Contact_no,
      Number_of_members_in_Oranisation: Number_of_members_in_Oranisation,
      question: question,
      Organisation_establishment_Year: Organisation_establishment_Year,
      Type_of_Organisation: Type_of_Organisation,
      Payment: inputvalue,
      Image_Name: Image_Name,
    });

    console.log(params);

    let { data } = await axios.post(`/api/users/addorganisation/${params}`);

    console.log('Your Subscription Is Added');

    history.push({
      pathname: '/login/Organisation',
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
