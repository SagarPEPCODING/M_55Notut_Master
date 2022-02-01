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

const IndividualEvents = (props) => {
  const loggin = useSelector((state) => state.loggin);
  const myemaill = useSelector((state) => state.myemail);

  const dispatch = useDispatch();

  let history = useHistory();

  const [mydata, setMydata] = useState([]);
  const [myreqimg, setMyreqimg] = useState('');
  const [eventdescription, setEventdescription] = useState('');
  const [datacome, setDatacome] = useState(false);
  const [eventDescriptionIsNull, setEventDescriptionIsNull] = useState(false);

  useEffect(async () => {
    console.log(loggin.loggin + '    ' + myemaill.myemail);

    let storage = localStorage.getItem('state');
    console.log(storage);
    storage = JSON.parse(storage);
    let arr = window.location.href.split('/');
    console.log(arr);
    let id = arr[arr.length - 1];

    let { data } = await axios.get(`/api/users/getEvent/${id}`);

    console.log(data);

    let imagename = data.user[0].ImageName;
    if (imagename === 'undefined') {
      let myimg = require('../eventImageFolder/blank-profile-picture-973460_640.png');
      setMydata(data.user[0]);
      console.log(data.user[0].Event_description);
      var decodedStringAtoB1 = atob(data.user[0].Event_description);
      console.log(decodedStringAtoB1);
      if (data.user[0].Event_description === null) {
        setEventDescriptionIsNull(true);
      }
      setEventdescription(decodedStringAtoB1);
      setMyreqimg(myimg);
      setDatacome(true);
    } else {
      let myimg = require(`../eventImageFolder/${imagename}`);
      setMyreqimg(myimg);
      setMydata(data.user[0]);
      console.log(data.user[0].Event_description);
      var decodedStringAtoB1 = atob(data.user[0].Event_description);
      console.log(decodedStringAtoB1);
      if (data.user[0].Event_description === null) {
        setEventDescriptionIsNull(true);
      }
      setEventdescription(decodedStringAtoB1);
      setDatacome(true);
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
              {eventDescriptionIsNull ? (
                <div className='aboutCompans visibilityhidden'></div>
              ) : (
                <div className='aboutCompans visibilityhidden'>
                  {datacome && (
                    <IndividualEventEditor
                      value={eventdescription}
                    ></IndividualEventEditor>
                  )}
                </div>
              )}
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
