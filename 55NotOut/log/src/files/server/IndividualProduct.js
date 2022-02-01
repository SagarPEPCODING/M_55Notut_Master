import React, { useContext, useEffect, useState } from 'react';
import { Tablename, Sdescription, Cardname } from './HomeCard';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import store from '../Store/store';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';
// import { Sdecription } from './HomeCard';
// import { Cardname } from './HomeCard';
// import '';

const IndividualProduct = (props) => {
  const loggin = useSelector((state) => state.loggin);
  const myemaill = useSelector((state) => state.myemail);

  const dispatch = useDispatch();

  let history = useHistory();

  const [mydata, setMydata] = useState([]);

  // console.log(props.location.state.myval);

  useEffect(async () => {
    console.log(loggin.loggin + '    ' + myemaill.myemail);

    let storage = localStorage.getItem('state');
    console.log(storage);
    storage = JSON.parse(storage);
    if (loggin.loggin === undefined && myemaill.myemail === undefined) {
      // redux m state nhi hai...........................

      let url = window.location.href;

      localStorage.setItem('url', url);
      if (storage === null) {
        // redux m state nhi hai && storage mai bhi nhi hain...........................
        history.push({
          pathname: '/login',
        });
      } else {
        // redux m state nhi hai && but storage m hai...........................
        dispatch(emailid(storage.myemail.myemail));
        dispatch(loggedin(storage.loggin.loggin));
        let arr = window.location.href.split('/');
        console.log(arr);
        let id = arr[arr.length - 1];

        let { data } = await axios.get(`/api/users/getProduct/${id}`);

        console.log(data);
        setMydata(data.user[0]);
      }
    } else {
      if (storage === null) {
        // application m nhi hai ... new tab
        let s = store.getState();
        console.log(s);
        let stringifystore = JSON.parse(s);
        history.push({
          pathname: '/login',
        });
        // localStorage.setItem('state', stringifystore);
      } else {
        // user loggined... same tab...

        // url work
        let arr = window.location.href.split('/');
        console.log(arr);
        let id = arr[arr.length - 1];

        let { data } = await axios.get(`/api/users/getProduct/${id}`);

        console.log(data);
        setMydata(data.user[0]);
      }
    }
  });

  // useEffect(async () => {
  //   console.log(window.location.href);
  //   let arr = window.location.href.split('/');
  //   console.log(arr);
  //   let id = arr[arr.length - 1];
  //   let { data } = await axios.get(`/api/users/getProduct/${id}`);
  //   console.log(data);
  //   setMydata(data.user[0]);
  //   // console.log(mydata[0].Event_profile);
  // }, []);
  return (
    <>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <div className='mydataofevent'>
        <div className='myid'>{mydata.Job_id}</div>
        <div className='myeventprofile'>{mydata.Event_profile}</div>
        <div className='myeventdescription'>{mydata.Event_description}</div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default IndividualProduct;
