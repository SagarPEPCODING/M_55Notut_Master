import React, { useState, useEffect } from 'react';
import '../css_Files/seealleventcss.css';
import axios from 'axios';
import Header from './Header';
import '../css_Files/adminseeallmentor.css';
import { useHistory } from 'react-router-dom';

function SeeAllMentorList() {
  const [mydata, setMydata] = useState([]);
  let history = useHistory();

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

  const editseealljob = (event) => {
    console.log('hello');
    let variable = event.target.getAttribute('value');
    let Job_data = mydata[variable];
    history.push({
      pathname: '/login/edit/userseeallmentoredit',
      state: {
        mydata: Job_data,
        index: variable,
      },
    });
  };

  return (
    <>
      <div className='seeallevents_container'>
        <div className='headercontainer11'>
          <div className='ejob_id'>Job Id</div>
          <div className='eEvent_profile'>name</div>
          <div className='eEvent_description'>Mentor profile </div>
          <div className='eCategory'>Contact Number </div>
          <div className='eEvent_mode'>Email_id</div>
          <div className='eEvent_Type'>CareerSummary </div>
          <div className='eEvent_Starting_date'>No_of_Sessions </div>
          <div className='eEvent_Ending_date'>pricing </div>
          <div className='eEvent_Feature'>Mentor_Feature </div>
          <div className='ePayment'> Payment</div>
          <div className='eFeature_access'>Feature_access</div>
          <div className='eEvent_access'>Event_access</div>
          {/* <div className='Event_access'> </div> */}
        </div>

        {mydata.map((value, index) => {
          return (
            <div className='headercontainer1'>
              <div className='ejob_id'>{value.Job_id}</div>
              <div className='eEvent_profile'>{value.First_Name}</div>
              <div className='eEvent_description'>{value.Mentor_profile}</div>
              <div className='eCategory'>{value.Contact_Number}</div>
              <div
                className='eEvent_mode'
                value={index}
                onClick={editseealljob}
              >
                {value.Email_id}
              </div>
              <div className='eEvent_Type'>{value.CareerSummary}</div>
              <div className='eEvent_Starting_date'>{value.No_of_Sessions}</div>
              <div className='eEvent_Ending_date'>{value.pricing}</div>
              <div className='eEvent_Feature'>{value.Event_Feature}</div>
              <div className='ePayment'>{value.Payment}</div>
              <div className='eFeature_access'>{value.Feature_access}</div>
              <div className='eEvent_access'>
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
    </>
  );
}

export default SeeAllMentorList;
