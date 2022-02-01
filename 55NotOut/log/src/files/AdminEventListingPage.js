import React, { useEffect, useState } from 'react';
import '../css_Files/userEventlistcss.css';
import axios from 'axios';
import UserDataLoopFile from './UserDataLoopFile';
import Checkbox from '@material-ui/core/Checkbox';
import Header from './Header';
import { useHistory } from 'react-router-dom';

function AdminEventListingPage() {
  const [userData, setUserData] = useState(false);
  const [mydata, setMydata] = useState([]);
  const [myindex, setMyIndex] = useState(null);
  const [checked, setChecked] = React.useState(true);
  let history = useHistory();
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

  const eventedit = (event) => {
    let variable = event.target.getAttribute('value');
    let dataevent = mydata[variable];
    history.push({
      pathname: '/login/edit/userFeaturedEvent',
      state: {
        mydata: dataevent,
        index: variable,
      },
    });
  };

  return (
    <>
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
              <div className='name11' value={index} onClick={eventedit}>
                {value.Event_profile}
              </div>
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
    </>
  );
}

export default AdminEventListingPage;
