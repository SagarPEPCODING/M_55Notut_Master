import React, { useState, useEffect } from 'react';
import '../css_Files/seealleventcss.css';
import axios from 'axios';
import Header from './Header';
import '../css_Files/adminseeallevent.css';
import { useHistory } from 'react-router-dom';

function AdminSeeAllEventList() {
  const [mydata, setMydata] = useState([]);
  let history = useHistory();

  useEffect(async () => {
    let { data } = await axios.get(`api/users/getallEvents`);
    console.log(data);
    setMydata(data.user);
  }, []);

  const val1 = 'true';
  const val2 = 'false';

  const allowclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/seeAllEventFeature/${val1}/${Job_id}`);
  };

  const editseealljob = (event) => {
    console.log('hello');
    let variable = event.target.getAttribute('value');
    let Job_data = mydata[variable];
    history.push({
      pathname: '/login/edit/userseealleventedit',
      state: {
        mydata: Job_data,
        index: variable,
      },
    });
  };

  const rejectclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/seeAllEventFeature/${val2}/${Job_id}`);
  };

  return (
    <>
      <div className='seeallevents_container'>
        <div className='headercontainer11'>
          <div className='jsob_id'>Event Id</div>
          <div className='Event_profile'>Event Profile</div>
          <div className='Event_description'>Event Description</div>
          <div className='Category'>Event Category</div>
          <div className='Event_mode'>Event Mode</div>
          <div className='Event_Type'>Event Type</div>
          <div className='Event_Starting_date'>Starting Date</div>
          <div className='Event_Ending_date'>Ending Date</div>
          <div className='Event_Feature'>Event Feature</div>
          <div className='Payment'>Payment</div>
          <div className='Feature_access'>Feature_access</div>
          <div className='Event_access'>Event_access</div>
        </div>

        {mydata.map((value, index) => {
          return (
            <div className='headercontainer1'>
              <div className='jsob_id' value={index} onClick={editseealljob}>
                {value.Job_id}
              </div>
              <div className='Event_profile'>{value.Event_profile}</div>
              <div className='Event_description'>{value.Event_description}</div>
              <div className='Category'>{value.Category}</div>
              <div className='Event_mode'>{value.Event_mode}</div>
              <div className='Event_Type'>{value.Event_Type}</div>
              <div className='Event_Starting_date'>
                {value.Event_Starting_date}
              </div>
              <div className='Event_Ending_date'>{value.Event_Ending_date}</div>
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
    </>
  );
}

export default AdminSeeAllEventList;
