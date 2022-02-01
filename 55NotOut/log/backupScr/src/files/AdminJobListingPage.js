import React, { useEffect, useState } from 'react';
import '../css_Files/userJoblistcss.css';
import axios from 'axios';
import UserDataLoopFile from './UserDataLoopFile';
import Checkbox from '@material-ui/core/Checkbox';
import Header from './Header';
import '../css_Files/adminjob.css';
import { useHistory } from 'react-router-dom';

function AdminJobListingPage() {
  const [userData, setUserData] = useState(false);
  const [mydata, setMydata] = useState([]);
  const [myindex, setMyIndex] = useState(null);
  const [checked, setChecked] = React.useState(true);
  let history = useHistory();

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

  const editjobfeature = async (event) => {
    let variable = event.target.getAttribute('value');
    console.log(mydata[variable]);
    history.push({
      pathname: '/login/edit/userFeaturedJob',
      state: {
        mydata: mydata[variable],
        index: variable,
      },
    });
  };

  return (
    <>
      <div className='container1'>
        <div className='containerOfUsers'>
          <div className='name1111'>Job Profile</div>
          <div className='email1111'>Company Location</div>
          <div className='phonenumber1111'>Job Industry</div>
          <div className='usertype1111'>Job Type</div>
          <div className='startingdate1111'>Pay Scale</div>
          <div className='endingdate1111'>Company Email_Id</div>
          <div className='eventfeature1111'>Job Feature</div>
          <div className='payment1111'>Payment</div>
          <div className='FeatureAcess1111'>Feature Access</div>
        </div>
        {mydata.map((value, index) => {
          return (
            <div className='containerOfUsers'>
              <div className='name1111'>{value.Job_profile}</div>
              <div className='email1111'>{value.Company_Location}</div>
              <div className='phonenumber1111'>{value.Job_Industry}</div>
              <div className='usertype1111'>{value.Job_Type}</div>
              <div className='startingdate1111'>{value.Pay_Range}</div>
              <div
                className='endingdate1111'
                value={index}
                onClick={editjobfeature}
              >
                {value.Email_id}
              </div>
              <div className='eventfeature1111'>{value.Event_Feature}</div>
              <div className='payment1111'>{value.Payment}</div>
              <div className='FeatureAcess1111'>
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
    </>
  );
}

export default AdminJobListingPage;
