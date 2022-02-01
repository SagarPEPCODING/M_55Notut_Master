import React, { useState, useEffect } from 'react';
import '../css_Files/seeallOrganisation.css';
import axios from 'axios';
import Header from './Header';
import '../css_Files/adminseeallorganisation.css';
import { useHistory } from 'react-router-dom';

function SeeAllOrganiationList() {
  const [mydata, setMydata] = useState([]);
  let history = useHistory();

  useEffect(async () => {
    let { data } = await axios.get(`api/users/getallOrganisations`);
    console.log(data);
    setMydata(data.user);
  }, []);

  const val1 = 'true';
  const val2 = 'false';

  const allowclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/seeAllOrganisationFeature/${val1}/${Job_id}`);
  };

  const editseealljob = (event) => {
    console.log('hello');
    let variable = event.target.getAttribute('value');
    let Job_data = mydata[variable];
    history.push({
      pathname: '/login/edit/userseeallOrganisationedit',
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
    await axios.post(`api/users/seeAllOrganisationFeature/${val2}/${Job_id}`);
  };

  return (
    <>
      <div className='seeallevents_container'>
        <div className='headercontainer11'>
          <div className='job_id1111'>Job Id</div>
          <div className='Event_profile'>name</div>
          <div className='Event_description'>Organisation_Motive</div>
          <div className='Category'>about_Organisation</div>
          <div className='Event_mode'>Organisation Founder</div>
          <div className='Event_Type1111'>Organisation Mail_id </div>
          <div className='Event_Starting_date'>Contact No </div>
          <div className='Event_Ending_date'>Organisation Type</div>
          <div className='Event_Feature'>Organisation Feature </div>
          <div className='Payment'>Payment</div>
          <div className='Feature_access'>Feature_access</div>
          <div className='Event_access'>Event_access</div>
          {/* <div className='Event_access'> </div> */}
        </div>

        {mydata.map((value, index) => {
          return (
            <div className='headercontainer1'>
              <div className='job_id1111'>{value.Job_id}</div>
              <div className='Event_profile'>{value.Organisation_Name}</div>
              <div className='Event_description'>
                {value.Organisation_Motive}
              </div>
              <div className='Category'>{value.about_Organisation}</div>
              <div className='Event_mode'>{value.Organisation_Founder}</div>
              <div
                className='Event_Type1111'
                value={index}
                onClick={editseealljob}
              >
                {value.Organisation_mail_id}
              </div>
              <div className='Event_Starting_date'>{value.Contact_no}</div>
              <div className='Event_Ending_date'>
                {value.Type_of_Organisation}
              </div>
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

export default SeeAllOrganiationList;
