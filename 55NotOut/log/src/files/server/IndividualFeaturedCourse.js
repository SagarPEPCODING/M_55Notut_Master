import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SeeAllHeader from './SeeAllHeader';
import NewHeader from './NewHeader';
import FinalFooter from './FinalFooter';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import IndividualCoursedescriptionshowEditor from './IndividualCoursedescriptionshowEditor';

function IndividualFeaturedCourse() {
  const [user, setuser] = useState([]);
  const [mydata, setMydata] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [myimg, setMyimg] = useState('');
  const [price, setPrice] = useState('');
  const [datacome, setDatacome] = useState(false);
  useEffect(async () => {
    console.log(window.location.href);
    console.log(typeof window.location.href);
    let arr = window.location.href.split('/');
    console.log(arr);
    let id = arr[arr.length - 1];
    console.log(id);
    let { data } = await axios.get(`/api/users/getCourse/${id}`);
    setMydata(data.user[0]);
    console.log(data);

    setName(data.user[0].name);
    let decodeddescription = atob(data.user[0].description);
    setDescription(decodeddescription);
    setPrice(data.user[0].price);
    setDatacome(true);

    if (data.user[0].filename === 'undefined') {
      let myreqimg = require('../publicImageFoldercourse/blank-profile-picture-973460_640.png');
      setMyimg(myreqimg);
    } else {
      let myreqimg = require(`../publicImageFoldercourse/${data.user[0].filename}`);
      setMyimg(myreqimg);
    }
    let actual_data = Object.values(data);
    actual_data = actual_data[1];
    let real_data = [];
    for (
      let i = 0;
      i < actual_data.length && actual_data[i] != undefined;
      i++
    ) {
      if (actual_data[i].feature_access === 'false') {
        real_data[i] = actual_data[i];
      }
    }
    console.log(real_data);
    setuser(real_data);
  }, []);
  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='jobContainer displayflexJob'>
        <div className='singlejobpageContainer '>
          <div className='firstContainer'>
            <div className='jbdescrheCont'>
              <div className='jbtypeCont'>{name}</div>
            </div>
            <div className='aboutCompCont'>
              <div className='aboutCom'>About Course</div>
              <div className='aboutCompans visibilityhidden'>
                {datacome && (
                  <IndividualCoursedescriptionshowEditor
                    value={description}
                  ></IndividualCoursedescriptionshowEditor>
                )}
              </div>
              <div className='ReqSkillsContainer'>
                <div className='reqskillsComp'>Price</div>
                <div className='ansreqskillsComp'>{price}</div>
              </div>
            </div>
          </div>
          <div className='secondContainer'>
            {/* image */}
            <div className='imgContainerjbs'>
              <div className='divofimg'>
                <img src={myimg.default} className='imagejobindi'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalFooter></FinalFooter>
    </>
  );
}

export default IndividualFeaturedCourse;
