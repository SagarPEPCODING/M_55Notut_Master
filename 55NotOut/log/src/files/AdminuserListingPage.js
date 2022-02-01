import React, { useEffect, useState } from 'react';
import '../css_Files/userlistcss.css';
import axios from 'axios';
import UserDataLoopFile from './UserDataLoopFile';
import Header from './Header';
import '../css_Files/adminuserlistingpage.css';
import { useHistory } from 'react-router-dom';

function AdminuserListingPage() {
  const [userData, setUserData] = useState(false);
  const [mydata, setMydata] = useState([]);
  const [myindex, setMyIndex] = useState(null);
  const [index, setIndex] = useState(null);
  let history = useHistory();
  // componentDidMount...
  // componentDidUpdate...
  // componentDidMount...
  useEffect(async () => {
    let { data } = await axios.get('/api/usersList');
    // console.log(data);
    setMydata(data.user);
  }, []);

  const val1 = 'true';
  const val2 = 'false';

  const Accept = async (event) => {
    console.log(event.target.getAttribute('value'));
    let variable = event.target.getAttribute('value');
    let email_id = mydata[variable].Email_id;
    // console.log(email_id);
    await axios.post(`api/users/authorization/${val1}/${email_id}`);
  };

  const Reject = async (event) => {
    let variable = event.target.getAttribute('value');
    let email_id = mydata[variable].Email_id;
    await axios.post(`api/users/authorization/${val2}/${email_id}`);
  };

  const EditableviaEmail = (event) => {
    let variable = event.target.getAttribute('value');
    console.log(variable);
    console.log(mydata[variable].Email_id);
    history.push({
      pathname: '/login/edit/user',
      state: {
        myemail: mydata[variable].Email_id,
        index: variable,
      },
    });
  };

  return (
    <>
      <div className='container1'>
        <div className='containerOfUsers'>
          <div className='mname'>Name</div>
          <div className='memail'>Email_Id</div>
          <div className='mphonenumber'>Phone Number</div>
          <div className='musertype'>UserType</div>
          <div className='mcheck'>Access Permit</div>
        </div>
        {mydata.map((value, index) => {
          return (
            <div className='containerOfUsers'>
              <div className='mname'>{value.User_name}</div>
              <div className='memail' value={index} onClick={EditableviaEmail}>
                {value.Email_id}
              </div>
              <div className='mphonenumber'>{value.Phone_number}</div>
              <div className='musertype'>{value.UserType}</div>
              <div className='mcheck'>
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
      </div>
    </>
  );
}

export default AdminuserListingPage;
