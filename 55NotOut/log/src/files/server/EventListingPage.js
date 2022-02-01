import React, { useEffect, useState } from 'react';
import '../css_Files/userEventlistcss.css';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import UserDataLoopFile from './UserDataLoopFile';
import Checkbox from '@material-ui/core/Checkbox';
import Header from './Header';
import HomeResponsiveHeader from './HomeResponsiveHeader';

function EventListingPage() {
  const [userData, setUserData] = useState(false);
  const [mydata, setMydata] = useState([]);
  const [myindex, setMyIndex] = useState(null);
  const [checked, setChecked] = React.useState(true);

  // componentDidMount...
  // componentDidUpdate...
  // componentDidMount...
  useEffect(async () => {
    let { data } = await axios.get(`api/users/getallEvents`);
    console.log(data);
    setMydata(data.user);
  }, []);

  const val1 = 'true';
  const val2 = 'false';

  // console.log(email_id);

  // Category: "Professional"
  // Event_Ending_date: "2021-01-24"
  // Event_Feature: null
  // Event_Starting_date: "2021-01-13"
  // Event_Starting_time: "08:30"
  // Event_Type: "Free"
  // Event_description: "Hello Everybody"
  // Event_mode: "Offline"
  // Event_profile: "Kavishala"
  // Job_id: "110e83d2-ebad-4d38-8bc4-84275b345234"
  // Payment: null

  const allowclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/featureEvents/${val1}/${Job_id}`);
  };

  const rejectclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/featureEvents/${val2}/${Job_id}`);
  };

  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='container1'>
        <div className='containerOfUsers'>
          <div className='name11'>Event Name</div>
          <div className='email1'>Event Category</div>
          <div className='phonenumber1'>Event Mode</div>
          <div className='usertype1'>Event Type</div>
          <div className='startingdate1'>Event Starting Date</div>
          <div className='endingdate1'>Event Ending Date</div>
          <div className='eventfeature'>Event Feature</div>
          <div className='payment'>Payment</div>
          <div className='FeatureAcess'>Feature Access</div>
        </div>
        {mydata.map((value, index) => {
          return (
            <div className='containerOfUsers'>
              <div className='name11'>{value.Event_profile}</div>
              <div className='email1'>{value.Category}</div>
              <div className='phonenumber1'>{value.Event_mode}</div>
              <div className='usertype1'>{value.Event_Type}</div>
              <div className='startingdate1'>{value.Event_Starting_date}</div>
              <div className='endingdate1'>{value.Event_Ending_date}</div>
              <div className='eventfeature'>{value.Event_Feature}</div>
              <div className='payment'>{value.Payment}</div>
              <div className='FeatureAcess'>
                <div className='accept' value={index} onClick={allowclicked}>
                  Allow
                </div>
                <div className='reject' value={index} onClick={rejectclicked}>
                  Reject
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default EventListingPage;
