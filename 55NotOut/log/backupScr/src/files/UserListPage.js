import React, { useEffect, useState } from 'react';
import '../css_Files/userlistcss.css';
import axios from 'axios';
import Footer from './Footer';
import UserDataLoopFile from './UserDataLoopFile';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import { useHistory } from 'react-router-dom';

function UserListPage() {
  const [userData, setUserData] = useState(false);
  const [mydata, setMydata] = useState([]);
  const [myindex, setMyIndex] = useState(null);
  const [authorization, setAuthorization] = useState(true);
  const [authorizationtrue, setAuthorizationtrue] = useState('green');
  const [authorizationfalse, setAuthorizationfalse] = useState('white');
  let history = useHistory();

  useEffect(async () => {
    let { data } = await axios.get(`api/usersList`);
    setMydata(data.user);
  }, []);

  const val1 = 'true';
  const val2 = 'false';

  const Accept = async (event) => {
    console.log(event.target.getAttribute('value'));
    let variable = event.target.getAttribute('value');
    let email_id = mydata[variable].Email_id;
    setAuthorization(true);
    await axios.post(`api/users/authorization/${val1}/${email_id}`);
  };

  const Reject = async (event) => {
    let variable = event.target.getAttribute('value');
    let email_id = mydata[variable].Email_id;
    await axios.post(`api/users/authorization/${val2}/${email_id}`);
  };

  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='container1'>
        <div className='containerOfUsers'>
          <div className='name'>Name</div>
          <div className='email'>Email_Id</div>
          <div className='phonenumber'>Phone Number</div>
          <div className='usertype'>UserType</div>
          <div className='check'>Access Permit</div>
        </div>
        {mydata.map((value, index) => {
          let val = value.Authorization;
          let color = '';
          if (val === 'true') {
            color = 'green';
          } else {
            color = 'white';
          }
          return (
            <div className='containerOfUsers' style={{ background: color }}>
              <div className='name'>{value.User_name}</div>
              <div className='email'>{value.Email_id}</div>
              <div className='phonenumber'>{value.Phone_number}</div>
              <div className='usertype'>{value.UserType}</div>
              <div className='check'>
                <div className='accept' value={index} onClick={Accept}>
                  Accept
                </div>
                <div className='reject' value={index} onClick={Reject}>
                  Reject
                </div>
              </div>
            </div>
          );
        })}
        <Footer />
      </div>
    </>
  );
}
{
  /* <div className='containerOfUsers'>
          <div className='name'>{value.User_name}</div>
          <div className='email'>{value.Email_id}</div>
          <div className='phonenumber'>{value.Phone_number}</div>
          <div className='usertype'>{value.UserType}</div>
        </div> */
}
export default UserListPage;
