import React, { useContext, useState, useEffect } from 'react';
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

const IndividualEvents = (props) => {
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

        let { data } = await axios.get(`/api/users/getMentor/${id}`);

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

        let { data } = await axios.get(`/api/users/getMentor/${id}`);

        console.log(data);
        setMydata(data.user[0]);
      }
    }
  });

  return (
    <>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <h2>Full Information About Mentor...</h2>
      <div>{mydata.Job_id}</div>
      {/* <img src={myreq.default} /> */}
      <div>{mydata.First_Name}</div>
      <h1>{mydata.Last_Name}</h1>
      <h1>{mydata.Experience}</h1>
      <Footer />
    </>
  );
};

export default IndividualEvents;
