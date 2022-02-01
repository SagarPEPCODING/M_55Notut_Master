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
    let myreq = [];
    let myId = [];
    data.user.map((val) => {
      if (val.ImageUrl !== 'undefined') {
        let obj = {};
        let req = require(`../publicImageFolder/${val.ImageUrl}`);
        obj['id'] = val.ID;
        obj['defaultURL'] = req.default;
        obj['ImageURL'] = val.ImageUrl;
        myreq.push(obj);
      }
    });
    setMydata(myreq);
  }, []);

  const deleteimage = async (event) => {
    let variable = event.target.getAttribute('valuee');
    console.log(variable);
    await axios.post(
      `/api/users/seeAllImagesdelete/${variable}`
    );
    setChangestate(!changestate);
  };

  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='width100percent'>
        <div className='containerOfAllImages'>
          {mydata.map((value, index) => {
            console.log(value);
            return (
              <div className='mydataimage'>
                <img src={value.defaultURL} className='imgsrc' />
                <div className='nameimage'>{value.ImageURL}</div>
                <div className='cross' valuee={value.id} onClick={deleteimage}>
                  Delete
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SeeAllSliderImages;
