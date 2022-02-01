import React, { useEffect, useState } from 'react';
import '../css_Files/userMentorlist.css';
import axios from 'axios';
import UserDataLoopFile from './UserDataLoopFile';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from './Footer';
import Header from './Header';
import '../css_Files/adminmentor.css';
import { useHistory } from 'react-router-dom';

function EventListingPage() {
  const [userData, setUserData] = useState(false);
  const [mydata, setMydata] = useState([]);
  const [myindex, setMyIndex] = useState(null);
  const [checked, setChecked] = React.useState(true);
  let history = useHistory();

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

  const editmentor = (event) => {
    let variable = event.target.getAttribute('value');
    let actualdata = mydata[variable];
    history.push({
      pathname: '/login/edit/userFeaturedMentor',
      state: {
        mydata: actualdata,
        index: variable,
      },
    });
  };

  return (
    <>
      <div className='container1'>
        <div className='containerOfUsers'>
          <div className='name11111'>First Name</div>
          <div className='email11111'>Last Name</div>
          <div className='phonenumber11111'>Experience </div>
          <div className='usertype11111'>Contact_Number </div>
          <div className='startingdate11111'>Email_id </div>
          <div className='endingdate11111'>pricing </div>
          <div className='eventfeature11111'>Gender </div>
          <div className='payment11111'>Event_Feature </div>
          <div className='FeatureAcess111111'>Payment </div>
          <div className='FeatureAcess11111'>Feature_access </div>
        </div>
        {mydata.map((value, index) => {
          return (
            <div className='containerOfUsers'>
              <div className='name11111'>{value.First_Name}</div>
              <div className='email11111'>{value.Last_Name}</div>
              <div className='phonenumber11111'>{value.Experience}</div>
              <div className='usertype11111'>{value.Contact_Number}</div>
              <div
                className='startingdate11111'
                value={index}
                onClick={editmentor}
              >
                {value.Email_id}
              </div>
              <div className='endingdate11111'>{value.pricing}</div>
              <div className='eventfeature11111'>{value.Gender}</div>
              <div className='payment11111'>{value.Event_Feature}</div>
              <div className='FeatureAcess111111'>{value.Payment}</div>
              <div className='FeatureAcess11111'>
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

export default EventListingPage;
