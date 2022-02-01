import React, { useEffect, useState } from 'react';
import '../css_Files/userMentorlist.css';
import axios from 'axios';
import UserDataLoopFile from './UserDataLoopFile';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from './Footer';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
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
    let { data } = await axios.get(`api/users/getallMentors`);
    console.log(data);
    setMydata(data.user);
  }, []);

  const val1 = 'true';
  const val2 = 'false';

  const allowclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/featureMentor/${val1}/${Job_id}`);
  };

  const rejectclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/featureMentor/${val2}/${Job_id}`);
  };

  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='container1'>
        <div className='containerOfUsers'>
          <div className='name111'>First Name</div>
          <div className='email11'>Last Name</div>
          <div className='phonenumber11'>Experience </div>
          <div className='usertype11'>Contact_Number </div>
          <div className='startingdate11'>Email_id </div>
          <div className='endingdate11'>pricing </div>
          <div className='eventfeature1'>Gender </div>
          <div className='payment1'>Event_Feature </div>
          <div className='FeatureAcess1'>Payment </div>
          <div className='FeatureAcess'>Feature_access </div>
        </div>
        {mydata.map((value, index) => {
          return (
            <div className='containerOfUsers'>
              <div className='name111'>{value.First_Name}</div>
              <div className='email11'>{value.Last_Name}</div>
              <div className='phonenumber11'>{value.Experience}</div>
              <div className='usertype11'>{value.Contact_Number}</div>
              <div className='startingdate11'>{value.Email_id}</div>
              <div className='endingdate11'>{value.pricing}</div>
              <div className='eventfeature1'>{value.Gender}</div>
              <div className='payment1'>{value.Event_Feature}</div>
              <div className='FeatureAcess1'>{value.Payment}</div>
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
