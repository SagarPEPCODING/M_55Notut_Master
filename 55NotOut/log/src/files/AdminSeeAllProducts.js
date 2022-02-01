import React, { useState, useEffect } from 'react';
import '../css_Files/eeallproducts.css';
import axios from 'axios';
import Header from './Header';
import { useHistory } from 'react-router-dom';

function AdminSeeAllProducts() {
  const [mydata, setMydata] = useState([]);
  let history = useHistory();

  useEffect(async () => {
    let { data } = await axios.get(`api/users/getallUsers`);
    console.log(data);
    setMydata(data.user);
  }, []);

  const val1 = 'true';
  const val2 = 'false';

  const allowclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].jobid;
    console.log(Job_id);
    await axios.post(`api/users/seeAllproductFeature/${val1}/${Job_id}`);
  };

  const rejectclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].jobid;
    console.log(Job_id);
    await axios.post(`api/users/seeAllproductFeature/${val2}/${Job_id}`);
  };

  const editseealljob = (event) => {
    console.log('hello');
    let variable = event.target.getAttribute('value');
    let Job_data = mydata[variable];
    history.push({
      pathname: '/login/edit/userseeallProductedit',
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
          <div className='job_id1'>Job Id</div>
          <div className='Event_profile1'>name</div>
          <div className='Event_description1'>Product Discription</div>
          <div className='Category1'>Event Feature</div>
          <div className='Event_mode1'>Feature access</div>
          <div className='Event_Type1'>Payment</div>
          {/* <div className='Event_Starting_date'>Contact No </div>
        <div className='Event_Ending_date'>Organisation Type</div>
        <div className='Event_Feature'>Organisation Feature </div>
        <div className='Payment'>Payment</div>
        <div className='Feature_access'>Feature_access</div> */}
          <div className='Event_access1'>Event_access</div>
          {/* <div className='Event_access'> </div> */}
        </div>

        {mydata.map((value, index) => {
          return (
            <div className='headercontainer1'>
              <div className='job_id1'>{value.jobid}</div>
              <div
                className='Event_profile1'
                value={index}
                onClick={editseealljob}
              >
                {value.Name_of_product}
              </div>
              <div className='Event_description1'>{value.Discription}</div>
              <div className='Category1'>{value.Event_Feature}</div>
              <div className='Event_mode1'>{value.Feature_access}</div>
              {/* <div className='Event_Type'>{value.Organisation_mail_id}</div>
            <div className='Event_Starting_date'>{value.Contact_no}</div>
            <div className='Event_Ending_date'>
              {value.Type_of_Organisation}
            </div>
            <div className='Event_Feature'>{value.Event_Feature}</div> */}
              <div className='Event_Type1'>{value.Payment}</div>
              {/* <div className='Feature_access'>{value.Feature_access}</div> */}
              <div className='Event_access1'>
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

export default AdminSeeAllProducts;
