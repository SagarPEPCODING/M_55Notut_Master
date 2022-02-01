import React, { useContext, Component, useEffect, useState } from 'react';
import { Tablename, Sdescription, Cardname } from './HomeCard';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import { useHistory } from 'react-router';

const LoginedIndividualJob = (props) => {
  const [mydata, setMydata] = useState([]);
  const history = useHistory();
  // console.log(props.location.state.myval);
  useEffect(async () => {
    let loginHaiyaNhi = false;
    let url = window.location.href;
    let arrURL = url.split('/');
    console.log(arrURL);
    arrURL.map((value) => {
      if (value === 'login') {
        loginHaiyaNhi = true;
        console.log(localStorage);
        localStorage.setItem('url', url);
        history.push({
          pathname: '/login',
        });
      }
    });

    if (!loginHaiyaNhi) {
      console.log(window.location.href);
      console.log(typeof window.location.href);
      let arr = window.location.href.split('/');
      console.log(arr);
      let id = arr[arr.length - 1];
      let { data } = await axios.get(`/api/users/getJobs/${id}`);
      setMydata(data.user[0]);
      localStorage.removeItem('url');
    }
  }, []);
  return (
    <>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <h2>Full Information About Job...</h2>
      <div>{mydata.Job_id}</div>
      <div>{mydata.Job_profile}</div>
      <h1>{mydata.Company_Location}</h1>
      <h1>{mydata.Required_Skills_Competencies}</h1>
      <Footer />
    </>
  );
};

export default LoginedIndividualJob;
