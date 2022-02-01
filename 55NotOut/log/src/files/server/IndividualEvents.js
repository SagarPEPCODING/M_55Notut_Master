import React, { useContext, useEffect, useState } from 'react';
import { Tablename, Sdescription, Cardname } from './HomeCard';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import FinalFooter from './FinalFooter';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import store from '../Store/store';
import '../css_Files/individualEventbyid.css';
import IndividualEventEditor from './IndividualEventEditor';
import HomeResponsiveHeader from './HomeResponsiveHeader';
// import { Sdecription } from './HomeCard';
// import { Cardname } from './HomeCard';
// import '';

const IndividualEvents = (props) => {
  const loggin = useSelector((state) => state.loggin);
  const myemaill = useSelector((state) => state.myemail);

  const dispatch = useDispatch();

  let history = useHistory();

  const [mydata, setMydata] = useState([]);
  const [myreqimg, setMyreqimg] = useState('');
  const [eventdescription, setEventdescription] = useState('');
  const [datacome, setDatacome] = useState(false);

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

        let { data } = await axios.get(`/api/users/getEvent/${id}`);

        console.log(data);
        setMydata(data.user[0]);
        var decodedStringAtoB1 = atob(data.user[0].Event_description);
        console.log(decodedStringAtoB1);
        setEventdescription(decodedStringAtoB1);

        let imagename = data.user[0].ImageName;
        if (imagename === 'undefined') {
          let myimg = require('../eventImageFolder/blank-profile-picture-973460_640.png');
          setMyreqimg(myimg);
        } else {
          let myimg = require(`../eventImageFolder/${imagename}`);
          setMyreqimg(myimg);
          setDatacome(true);
        }
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
      } else {
        let arr = window.location.href.split('/');
        console.log(arr);
        let id = arr[arr.length - 1];

        let { data } = await axios.get(`/api/users/getEvent/${id}`);

        console.log(data);

        let imagename = data.user[0].ImageName;
        if (imagename === 'undefined') {
          let myimg = require('../eventImageFolder/blank-profile-picture-973460_640.png');
          setMyreqimg(myimg);
        } else {
          let myimg = require(`../eventImageFolder/${imagename}`);
          setMyreqimg(myimg);
          setDatacome(true);
        }
        setMydata(data.user[0]);
        var decodedStringAtoB1 = atob(data.user[0].Event_description);
        console.log(decodedStringAtoB1);
        setEventdescription(decodedStringAtoB1);
      }
    }
  }, []);

  return (
    <>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <div className='jobContainer displayflexJob'>
        <div className='singlejobpageContainer '>
          <div className='firstContainer'>
            <div className='jbdescrheCont'>
              <div className='jbtypeCont'>{mydata.Event_profile}</div>
            </div>

            <div className='firstContainerjobdescpart2'>
              <div className='comptypo widthsndcomp fontsixe08rem fontweight'>
                Event Category
              </div>
              <div className='JobTypo widthsndcomp fontsixe08rem fontweight'>
                Event Mode
              </div>
            </div>

            <div className='firstContainerjobdescpart2'>
              <div className='comptypo widthsndcomp fontsixe08rem'>
                {mydata.Category}
              </div>
              <div className='JobTypo widthsndcomp fontsixe08rem'>
                {mydata.Event_mode}
              </div>
            </div>

            <div className='aboutCompCont'>
              <div className='aboutCom'>Event Description</div>
              <div className='aboutCompans visibilityhidden'>
                {datacome && (
                  <IndividualEventEditor
                    value={eventdescription}
                  ></IndividualEventEditor>
                )}
              </div>
            </div>

            <div className='ReqSkillsContainer'>
              <div className='reqskillsComp'>Event Starting Date</div>
              <div className='ansreqskillsComp'>
                {mydata.Event_Starting_date}
              </div>
            </div>
            <div className='ReqSoftSkillsContainer'>
              <div className='reqsoftskillsComp'>Event Ending date</div>
              <div className='ansreqsoftskillsComp'>
                {mydata.Event_Ending_date}
              </div>
            </div>

            <div className='ReqSkillsContainer'>
              <div className='reqskillsComp'>Event Starting Time</div>
              <div className='ansreqskillsComp'>
                {mydata.Event_Starting_time}
              </div>
            </div>
            <div className='ReqSoftSkillsContainer'>
              <div className='reqsoftskillsComp'>Event Ending Time</div>
              <div className='ansreqsoftskillsComp'>
                {mydata.EventEndingTime}
              </div>
            </div>
          </div>
          <div className='secondContainer'>
            {/* image */}
            <div className='imgContainerjbs'>
              <div className='divofimg'>
                <img src={myreqimg.default} className='imagejobindi'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalFooter />
    </>
  );
};

export default IndividualEvents;
