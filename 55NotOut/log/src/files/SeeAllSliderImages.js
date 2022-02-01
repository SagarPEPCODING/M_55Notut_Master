import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClearIcon from '@material-ui/icons/Clear';
import '../css_Files/sliderseeallcss.css';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

function SeeAllSliderImages() {
  const [mydata, setMydata] = useState([]);
  const [myid, setMyid] = useState([]);
  const [changestate, setChangestate] = useState(false);

  useEffect(async () => {
    let { data } = await axios.get('/api/users/getuserSliderImages');
    console.log('hello slider');
    let myreq = [];
    let myId = [];
    data.user.map((val) => {
      console.log(val);
      myId.push(val.ID);
      let req = require(`../publicImageFolder/${val.ImageUrl}`);
      console.log(req);
      myreq.push(req.default);
    });
    setMydata(myreq);
    console.log(mydata);
    setMyid(myId);
  }, []);

  const deleteimage = async (event) => {
    let variable = event.target.getAttribute('valuee');
    console.log(variable);
    console.log('hii');
    console.log(myid[variable]);

    await axios.post(`api/users/seeAllImagesdelete/${myid[variable]}`);

    setChangestate(!changestate);
  };

  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div>
        {mydata.map((value, index) => {
          return (
            <div className='mydataimage'>
              <img src={value} className='imgsrc' />
              <div className='nameimage'>{value}</div>
              <div className='cross' valuee={index} onClick={deleteimage}>
                Delete
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default SeeAllSliderImages;
