import React, { useEffect, useState } from 'react';
import '../css_Files/featureorganisationcss.css';
import axios from 'axios';
import UserDataLoopFile from './UserDataLoopFile';
import Checkbox from '@material-ui/core/Checkbox';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

function OrganisationListingPage() {
  const [userData, setUserData] = useState(false);
  const [mydata, setMydata] = useState([]);
  const [myindex, setMyIndex] = useState(null);
  const [checked, setChecked] = React.useState(true);

  // componentDidMount...
  // componentDidUpdate...
  // componentDidMount...
  useEffect(async () => {
    let { data } = await axios.get(`api/users/getallOrganisations`);
    console.log(data.user);
    setMydata(data.user);
  }, []);

  const val1 = 'true';
  const val2 = 'false';

  const allowclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/featureOrganisation/${val1}/${Job_id}`);
  };

  const rejectclicked = async (event) => {
    let variable = event.target.getAttribute('value');
    let Job_id = mydata[variable].Job_id;
    console.log(Job_id);
    await axios.post(`api/users/featureOrganisation/${val2}/${Job_id}`);
  };

  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='container1'>
        <div className='containerOfUsers'>
          <div className='name1111'>Organisation Name</div>
          <div className='email111'>Organisation Founder </div>
          <div className='phonenumber111'>Organisation Mail_id </div>
          <div className='usertype111'>Contact_Number </div>
          <div className='startingdate111'>Establishment_Year </div>
          <div className='endingdate111'>Organisation_Feature </div>

          <div className='FeatureAcess11'>Payment </div>
          <div className='FeatureAcess'>Feature_access </div>
        </div>
        {mydata.map((value, index) => {
          return (
            <div className='containerOfUsers'>
              <div className='name1111'>{value.Organisation_Name}</div>
              <div className='email111'>{value.Organisation_Founder}</div>
              <div className='phonenumber111'>{value.Organisation_mail_id}</div>
              <div className='usertype111'>{value.Contact_no}</div>
              <div className='startingdate111'>{value.establishment_Year}</div>
              <div className='endingdate111'>{value.Event_Feature}</div>
              <div className='FeatureAcess11'>{value.Payment}</div>
              {/* <div className='FeatureAcess'>{value.Feature_access}</div> */}
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
      <Footer />
    </>
  );
}

export default OrganisationListingPage;
