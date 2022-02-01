import React, { useContext, useState, useEffect } from 'react';
import { Tablename, Sdescription, Cardname } from './HomeCard';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import FinalFooter from './FinalFooter';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import store from '../Store/store';
import '../css_Files/individualOrganisationbyid.css';
import OrganisationEditorshow from './OrganisationEditorshow';
import HomeResponsiveHeader from './HomeResponsiveHeader';

const IndividualOrganisation = (props) => {
  const loggin = useSelector((state) => state.loggin);
  const myemaill = useSelector((state) => state.myemail);

  const dispatch = useDispatch();

  let history = useHistory();

  const [mydata, setMydata] = useState([]);
  const [mailid, setMailid] = useState('');
  const [imagename, setImagename] = useState('');
  const [aboutorganisation, setAboutorganisation] = useState('');
  const [datacome, setDatacome] = useState(false);

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

        let { data } = await axios.get(`/api/users/getOrganisation/${id}`);

        console.log(data);
        setMydata(data.user[0]);
        setMailid(data.user[0].userEmailId);
        console.log(data.user[0].userEmailId);

        if (data.user[0].ImageName === 'undefined') {
          const myreq = require(`../organiationImageFolder/blank-profile-picture-973460_640.png`);
          setImagename(myreq);
        } else {
          const myreq = require(`../organiationImageFolder/${data.user[0].ImageName}`);
          setImagename(myreq);
        }

        let decodedaboutorganisation = atob(data.user[0].about_Organisation);
        setAboutorganisation(decodedaboutorganisation);
        setDatacome(true);
        console.log(decodedaboutorganisation);
        console.log(aboutorganisation);
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

        let { data } = await axios.get(`/api/users/getOrganisation/${id}`);

        console.log(data);
        setMydata(data.user[0]);
        setMailid(data.user[0].userEmailId);
        console.log(data.user[0].userEmailId);
        if (data.user[0].ImageName === 'undefined') {
          const myreq = require(`../organiationImageFolder/blank-profile-picture-973460_640.png`);
          setImagename(myreq);
        } else {
          const myreq = require(`../organiationImageFolder/${data.user[0].ImageName}`);
          setImagename(myreq);
        }

        let decodedaboutorganisation = atob(data.user[0].about_Organisation);
        setAboutorganisation(decodedaboutorganisation);
        setDatacome(true);
        console.log(decodedaboutorganisation);
        console.log(aboutorganisation);
      }
    }
  }, []);

  return (
    <div>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <div className='jobContainer displayflexJob'>
        <div className='singlejobpageContainer '>
          <div className='firstContainer'>
            <div className='jbdescrheCont'>
              <div className='jbtypeCont'>{mydata.Organisation_Name}</div>
            </div>
            <div className='firstContainerjobdescpart2'>
              <div className='comptypo widthsndcomp fontsixe08rem fontweight'>
                Organisation Founder
              </div>
              <div className='JobTypo widthsndcomp fontsixe08rem fontweight'>
                Type Of Organisation
              </div>
            </div>
            <div className='firstContainerjobdescpart2'>
              <div className='comptypo widthsndcomp fontsixe08rem'>
                {mydata.Organisation_Founder}
              </div>
              <div className='JobTypo widthsndcomp fontsixe08rem'>
                {mydata.Type_of_Organisation}
              </div>
            </div>
            <div className='aboutCompCont'>
              <div className='aboutCom'>About Organisation</div>
              <div className='aboutCompans'>
                <div className='aboutCompans visibilityhidden'>
                  {datacome && (
                    <OrganisationEditorshow
                      value={aboutorganisation}
                    ></OrganisationEditorshow>
                  )}
                </div>
              </div>
              <div className='aboutRoleCont'>
                <div className='aboutRole'>Organisation EmailId</div>
                <div className='aboutCompans'>
                  {mydata.Organisation_mail_id}
                </div>
              </div>
            </div>
          </div>

          <div className='secondContainer'>
            {/* image */}
            <div className='imgContainerjbs'>
              <div className='divofimg'>
                <img src={imagename.default} className='imagejobindi'></img>
              </div>
            </div>

            {/* posted on */}
            <div className='postedonCont'>
              <div className='postedonheading'>Posted on</div>
              <div className='postedon'>12/03/2020</div>
            </div>
            {/* views */}
            <div className='viewsCont'>
              <div className='viewsheading'>Views</div>
              <div className='viewson'>2020</div>
            </div>
          </div>
        </div>
      </div>
      <FinalFooter />
    </div>
  );
};

export default IndividualOrganisation;
