import React, { useState, useEffect } from 'react';
import '../css_Files/seealljobs.css';
import axios from 'axios';
import Header from './Header';
import '../css_Files/adminseealljob.css';
import { useHistory } from 'react-router-dom';

function AdminSeeAllJobList() {
  const [mydata, setMydata] = useState([]);
  let history = useHistory();

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
    await axios.post(`api/users/seeAllJobFeature/${val1}/${Job_id}`);
  };

  const rejectclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/seeAllJobFeature/${val2}/${Job_id}`);
  };

  const editseealljob = (event) => {
    console.log('hello');
    let variable = event.target.getAttribute('value');
    let Job_data = mydata[variable];
    history.push({
      pathname: '/login/edit/userseealljobedit',
      state: {
        mydata: Job_data,
        index: variable,
      },
    });
  };

  return (
    <>
      <div className='seeallevents_container'>
        <div className='a11headercontainer11'>
          <div className='a11job_id'>Job Id</div>
          <div className='a11Event_profile'>Job Profile</div>
          <div className='a11Event_description'>Company Size </div>
          <div className='a11Category'>Company Type </div>
          <div className='a11Event_mode'>Required Experience</div>
          <div className='a11Event_Type'>Work from </div>
          <div className='a11Event_Starting_date'>About Role </div>
          <div className='a11Event_Ending_date'>About Company </div>
          <div className='a11Event_Feature'>Email_id </div>
          {/* <div className='Payment'>Job_Feature </div> */}
          <div className='a11Feature_access'>Payment</div>
          <div className='a11Event_access'>Job_access</div>
          {/* <div className='Event_access'> </div> */}
        </div>

        {mydata.map((value, index) => {
          return (
            <div className='headercontainer1'>
              <div className='a11job_id'>{value.Job_id}</div>
              <div className='a11Event_profile'>{value.Job_profile}</div>
              <div className='a11Event_description'>{value.Company_size}</div>
              <div className='a11Category'>{value.Company_Type}</div>
              <div className='a11Event_mode'>{value.Required_Experience}</div>
              <div className='a11Event_Type'>{value.Work_from}</div>
              <div className='a11Event_Starting_date'>{value.About_Role}</div>
              <div className='a11Event_Ending_date'>{value.About_Company}</div>
              <div
                className='a11Event_Feature'
                value={index}
                onClick={editseealljob}
              >
                {value.Email_id}
              </div>
              {/* <div className='Payment'>{value.Event_Feature}</div> */}
              <div className='a11Feature_access'>{value.Payment}</div>
              <div className='a11Event_access'>
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

export default AdminSeeAllJobList;
