import React, { useEffect, useState } from 'react';
import '../css_Files/productlistingcss.css';
import axios from 'axios';
import UserDataLoopFile from './UserDataLoopFile';
import Checkbox from '@material-ui/core/Checkbox';
import Header from './Header';
import '../css_Files/adminproduct.css';
import { useHistory } from 'react-router-dom';

function OrganisationListingPage() {
  const [userData, setUserData] = useState(false);
  const [mydata, setMydata] = useState([]);
  const [myindex, setMyIndex] = useState(null);
  const [checked, setChecked] = React.useState(true);
  let history = useHistory();

  // componentDidMount...
  // componentDidUpdate...
  // componentDidMount...
  useEffect(async () => {
    let { data } = await axios.get(`api/users/getallUsers`);
    console.log(data.user);
    setMydata(data.user);
  }, []);

  const productedit = (event) => {
    let variable = event.target.getAttribute('value');
    let productdata = mydata[variable];
    history.push({
      pathname: '/login/edit/userFeaturedProduct',
      state: {
        mydata: productdata,
        index: variable,
      },
    });
  };

  const val1 = 'true';
  const val2 = 'false';

  const allowclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].jobid;
    console.log(Job_id);
    await axios.post(`api/users/featureProduct/${val1}/${Job_id}`);
  };

  const rejectclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].jobid;
    console.log(Job_id);
    await axios.post(`api/users/featureProduct/${val2}/${Job_id}`);
  };

  return (
    <div className='container1'>
      <div className='containerOfUsers'>
        <div className='name1111'>Product Name</div>
        <div className='email111'>Event_Feature </div>
        <div className='phonenumber111'>Payment </div>
        <div className='usertype111'>Feature_access </div>
      </div>
      {mydata.map((value, index) => {
        return (
          <div className='containerOfUsers'>
            <div className='name1111' value={index} onClick={productedit}>
              {value.Name_of_product}
            </div>
            <div className='email111'>{value.Event_Feature}</div>
            <div className='phonenumber111'>{value.Payment}</div>

            <div className='usertype111'>
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
  );
}

export default OrganisationListingPage;
