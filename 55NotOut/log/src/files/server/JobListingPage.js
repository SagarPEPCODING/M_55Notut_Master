import React, { useEffect, useState } from 'react';
import '../css_Files/userJoblistcss.css';
import axios from 'axios';
import UserDataLoopFile from './UserDataLoopFile';
import Checkbox from '@material-ui/core/Checkbox';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
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
    let { data } = await axios.get(`api/users/getallJobs`);
    console.log(data);
    setMydata(data.user);
  }, []);

  const val1 = 'true';
  const val2 = 'false';

  const allowclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/featureJobs/${val1}/${Job_id}`);
  };

  const rejectclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/featureJobs/${val2}/${Job_id}`);
  };

  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='container1'>
        <div className='containerOfUsers'>
          <div className='name11'>Job Profile</div>
          <div className='email1'>Company Location</div>
          <div className='phonenumber1'>Job Industry</div>
          <div className='usertype1'>Job Type</div>
          <div className='startingdate1'>Pay Scale</div>
          <div className='endingdate11'>Company Email_Id</div>
          <div className='eventfeature'>Job Feature</div>
          <div className='payment'>Payment</div>
          <div className='FeatureAcess'>Feature Access</div>
        </div>
        {mydata.map((value, index) => {
          return (
            <div className='containerOfUsers'>
              <div className='name11'>{value.Job_profile}</div>
              <div className='email1'>{value.Company_Location}</div>
              <div className='phonenumber1'>{value.Job_Industry}</div>
              <div className='usertype1'>{value.Job_Type}</div>
              <div className='startingdate1'>{value.Pay_Range}</div>
              <div className='endingdate11'>{value.Email_id}</div>
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
