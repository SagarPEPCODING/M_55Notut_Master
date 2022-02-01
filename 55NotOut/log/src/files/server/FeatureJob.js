import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/featurecss.css';
import { v4 as uuidv4 } from 'uuid';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import HomeResponsiveHeader from './HomeResponsiveHeader';

function FeatureJob(props) {
  const [inputvalue, setInputvalue] = useState(0);

  let history = useHistory();

  let {
    job_profile,
    Company_Location,
    Job_Industry,
    Company_Experience,
    Company_size,
    Company_Type,
    Required_Experience,
    Work_from,
    Job_Type,
    Language_Required,
    Pay_Range,
    Required_Skills_Competencies,
    Soft_Skills,
    About_Role,
    About_Company,
    Email_id,
    Starting_Date,
    Ending_Date,
    FeatureEvent,
    Job_Image,
  } = props.location.state;

  const Addsubscription = async (event) => {
    const Jobid = uuidv4();
    console.log(job_profile + ' ' + FeatureEvent + ' ' + Email_id);
    const params = JSON.stringify({
      Job_id: Jobid,
      job_profile: job_profile,
      Company_Location: Company_Location,
      Job_Industry: Job_Industry,
      Company_Experience: Company_Experience,
      Company_size: Company_size,
      Company_Type: Company_Type,
      Required_Experience: Required_Experience,
      Work_from: Work_from,
      Job_Type: Job_Type,
      Language_Required: Language_Required,
      Pay_Range: Pay_Range,
      Required_Skills_Competencies: Required_Skills_Competencies,
      Soft_Skills: Soft_Skills,
      About_Role: About_Role,
      About_Company: About_Company,
      Email_id: Email_id,
      Starting_Date: Starting_Date,
      Ending_Date: Ending_Date,
      FeatureEvent: FeatureEvent,
      Payment: inputvalue,
      Job_Image: Job_Image,
    });

    console.log(params);

    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
    if (Email_id === storage.myemail.myemail) {
      console.log('hii i am in job');
      let { data } = await axios.post(`/api/users/addjob/${params}`);
      console.log(storage.myemail.myemail);
      let data1 = await axios.get(
        `/api/user/getpostjobdata/${storage.myemail.myemail}`
      );
      console.log(data1.data.user);
      let mycount = 0;
      if (data1.data.user[0] === undefined) {
        mycount = 1;
        await axios.post(
          `/api/user/postjobproviderjob/${storage.myemail.myemail}/${mycount}`
        );
      } else {
        mycount = data1.data.user[0].NoOfJobsPosted;
        mycount = mycount + 1;
        await axios.post(
          `/api/user/postjobproviderjobdata/${storage.myemail.myemail}/${mycount}`
        );
      }

      // console.log(data1);

      var today = new Date(),
        date =
          today.getFullYear() +
          '-' +
          (today.getMonth() + 1) +
          '-' +
          today.getDate();

      var today = new Date(),
        time =
          today.getHours() +
          ':' +
          today.getMinutes() +
          ':' +
          today.getSeconds();

      await axios.post(
        `/api/user/postedjobss/${storage.myemail.myemail}/${Jobid}/${job_profile}/${Company_Location}/${date}/${today}`
      );
    }

    console.log('Your Subscription Is Added');

    history.push({
      pathname: '/login/Job',
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
