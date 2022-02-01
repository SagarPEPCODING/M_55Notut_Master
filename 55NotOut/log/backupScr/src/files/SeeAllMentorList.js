import React, { useState, useEffect } from 'react';
import '../css_Files/seealleventcss.css';
import axios from 'axios';
import Header from './Header';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

function SeeAllMentorList() {
  const [mydata, setMydata] = useState([]);

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
    await axios.post(`api/users/seeAllMentorFeature/${val1}/${Job_id}`);
  };

  const rejectclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/seeAllMentorFeature/${val2}/${Job_id}`);
  };

  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='seeallevents_container'>
        <div className='headercontainer11'>
          <div className='job_id'>Job Id</div>
          <div className='Event_profile'>name</div>
          <div className='Event_description'>Mentor profile </div>
          <div className='Category'>Contact Number </div>
          <div className='Event_mode'>Email_id</div>
          <div className='Event_Type'>CareerSummary </div>
          <div className='Event_Starting_date'>No_of_Sessions </div>
          <div className='Event_Ending_date'>pricing </div>
          <div className='Event_Feature'>Mentor_Feature </div>
          <div className='Payment'> Payment</div>
          <div className='Feature_access'>Feature_access</div>
          <div className='Event_access'>Event_access</div>
          {/* <div className='Event_access'> </div> */}
        </div>

        {mydata.map((value, index) => {
          return (
            <div className='headercontainer1'>
              <div className='job_id'>{value.Job_id}</div>
              <div className='Event_profile'>{value.First_Name}</div>
              <div className='Event_description'>{value.Mentor_profile}</div>
              <div className='Category'>{value.Contact_Number}</div>
              <div className='Event_mode'>{value.Email_id}</div>
              <div className='Event_Type'>{value.CareerSummary}</div>
              <div className='Event_Starting_date'>{value.No_of_Sessions}</div>
              <div className='Event_Ending_date'>{value.pricing}</div>
              <div className='Event_Feature'>{value.Event_Feature}</div>
              <div className='Payment'>{value.Payment}</div>
              <div className='Feature_access'>{value.Feature_access}</div>
              <div className='Event_access'>
                <div className='accept' value={index} onClick={allowclicked}>
                  ACCEPT
                </div>
                <div className='reject' value={index} onClick={rejectclicked}>
                  REJECT
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

export default SeeAllMentorList;
