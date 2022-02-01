import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/sliderimages/836844-jivan-sandhya-old-age-home.jpg';
import image2 from '../assets/sliderimages/Old-Man-PNG-Image.png';
import image3 from '../assets/sliderimages/Old-Woman-PNG.png';
import '../css_Files/slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Slider = () => {
  const [mydata, setMydata] = useState([]);
  const [mydatam, setMydatam] = useState([]);
  const [linkdata, setLinkdata] = useState([]);
  const [linkdatam, setLinkdatam] = useState([]);
  const [altdata, setAltdata] = useState([]);
  const [altdatam, setAltdatam] = useState([]);
  const [sliderfordesktop, setSliderfordesktop] = useState([]);
  const [sliderformobile, setSliderformobile] = useState([]);
  const [desktop, setDesktop] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(async () => {
    var screenwidth = window.screen.width;

    if (screenwidth > 480) {
      setDesktop(true);
      setMobile(false);
    } else {
      setMobile(true);
      setDesktop(false);
    }

    let { data } = await axios.get('/api/users/getuserSliderImages');
    console.log('hello slider');
    let myreq = [];
    let mylinkdata = [];
    let myaltdata = [];

    let myreqm = [];
    let mylinkdatam = [];
    let myaltdatam = [];

    let sliderfordesktop = [];
    let sliderformobile = [];
    data.user.map((val) => {
      if (val.forwhat === 'desktop') {
        console.log(val);
        if (val.ImageUrl === 'undefined') {
        } else {
          let req = require(`../publicImageFolder/${val.ImageUrl}`);
          console.log(req);
          myreq.push(req.default);
          console.log(val);
          let decodedstring = atob(val.link);
          console.log(decodedstring);
          mylinkdata.push(decodedstring);
          console.log(val.alt);
          myaltdata.push(val.alt);

          setMydata(myreq);
          console.log(mydata);
          setLinkdata(mylinkdata);
          setAltdata(myaltdata);
          console.log(mylinkdata);
          console.log(myaltdata);
        }
      } else {
        console.log(val);
        if (val.ImageUrl === 'undefined') {
        } else {
          let req = require(`../publicImageFolder/${val.ImageUrl}`);
          console.log(req);
          myreqm.push(req.default);
          console.log(val);
          let decodedstring = atob(val.link);
          console.log(decodedstring);
          mylinkdatam.push(decodedstring);
          console.log(val.alt);
          myaltdatam.push(val.alt);

          setMydatam(myreqm);
          console.log(mydata);
          setLinkdatam(mylinkdatam);
          setAltdatam(myaltdatam);
          console.log(mylinkdatam);
          console.log(myaltdatam);
        }
      }
    });

    console.log(mydata);
    console.log();
  }, []);

  return (
    <>
      {desktop && (
        <Carousel controls={true} fade={true}>
          {mydata.map((value, index) => {
            let link = linkdata[index];
            let alt = altdata[index];
            console.log(link);
            return (
              <Carousel.Item interval={4000}>
                <a href={link}>
                  <img className='d-block w-100' src={value} alt={alt} />
                </a>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
      {mobile && (
        <Carousel controls={true} fade={true}>
          {mydatam.map((value, index) => {
            let link = linkdatam[index];
            let alt = altdatam[index];
            console.log(link);
            return (
              <Carousel.Item interval={4000}>
                <a href={link}>
                  <img className='d-block w-100' src={value} alt={alt} />
                </a>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </>
  );
};

export default Slider;
