import React, { Redirect, Component, useState, useEffect } from 'react';
import logo from '../foreantech_logo.png';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PopUp from './PopUp';
import { Model } from './Model';
import { GlobalStyle } from '../googleStyles';
import SeeAllHeader from './SeeAllHeader';
import { ModelL } from './ModelL';
import axios from 'axios';
import '../css_Files/newheader.css';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';

const Header = (props) => {
  const loggin = useSelector((state) => state.loggin);
  const myemaill = useSelector((state) => state.myemail);

  const dispatch = useDispatch();

  // console.log(props.notaseniorprofessional);
  const [userProfileClicked, setUserProfileClicked] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [openLoginModel, setOpenLoginModel] = useState(false);
  const [myEmail, setMyEmail] = useState('');
  const [mydata, setMydata] = useState([]);
  const [myemail, setMyemail] = useState('');
  const [name, setName] = useState('');
  const [notaseniorprofessional, setNotaseniorprofessional] = useState(
    props.notaseniorprofessional
  );

  const [encodeemailidis, setEncodeemailidis] = useState('');
  const [displayjobprovider, setDisplayjobprovider] = useState('');
  const [displayjobseekerornot, setDisplayjobseekerornot] = useState('');
  const [displaymentor, setDisplaymentor] = useState('');

  const [ismentor, setIsmentor] = useState(false);
  const [isjobseeker, setIsjobseeker] = useState(false);
  const [isjobprovider, setIsjobprovider] = useState(false);
  const [usertype, setUsertype] = useState('');
  const [logined, setLogined] = useState(false);
  const [logoutdate, setLogoutdate] = useState('');
  const [logouttime, setLogouttime] = useState('');

  let history = useHistory();

  useEffect(async () => {
    //login date work // login time work

    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();

    let logouttime = Date().toLocaleString();

    let arroflogintime = logouttime.split(' ');
    logouttime = arroflogintime[4];
    setLogoutdate(date);
    setLogouttime(logouttime);

    //..........................................

    // work for see or not...
    let usertype = localStorage.getItem('usertype');
    let username = localStorage.getItem('username');
    let state = localStorage.getItem('state');
    if (username !== null) {
      setName(username);
    }
    if (state === null) {
    } else {
      setLogined(true);
    }
    const displayjobproviderornot = usertype === 'jobprovider' ? '' : 'none';
    const displayjobseekerornot = usertype === 'jobseeker' ? 'none' : '';
    const displaymentorornot = usertype === 'mentor' ? 'none' : '';

    if (usertype === 'jobprovider') {
      setIsjobprovider(true);
    } else if (usertype === 'jobseeker') {
      setIsjobseeker(true);
    } else if (usertype === 'mentor') {
      setIsmentor(true);
    }

    if (usertype !== null) {
      setUsertype(usertype);
    }

    setDisplayjobprovider(displayjobproviderornot);
    setDisplayjobseekerornot(displayjobseekerornot);
    setDisplaymentor(displaymentorornot);

    let mystate = localStorage.getItem('state');
    // JSON.parse(mystate);
    console.log(myemail);
    setMyemail(myemaill.myemail);
    const myemailvalue = props.email_id;
    if (myemail !== undefined && myemail.length > 0) {
      let { data } = await axios.get(
        `/api/users/getuserprofiledata/${myemail}`
      );
      console.log(data);
      setMydata(data.user);
      if (data.user[0] !== undefined) {
      }
    }
    var encodeemailidinuseeffect = btoa(myemail);
    setEncodeemailidis(encodeemailidinuseeffect);
  }, [props]);

  const openModel = () => {
    setShowModel((prev) => !prev);
  };

  const openLoginModelL = () => {
    setOpenLoginModel(true);
  };

  const job_provider_clicked = async () => {
    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
    // console.log(storage);
    let myemail = storage.myemail.myemail;
    console.log(myemail);
    var encodeemailidinuseeffect = btoa(myemail);

    let { data } = await axios.get(`/api/users/getuserprofiledata/${myemail}`);
    history.push({
      pathname: `/login/JobproviderDashboard/${data.user[0].name}/${encodeemailidinuseeffect}`,
      state: {
        value: data.user[0],
      },
    });

    // let data1 = await axios.get(`/api/users/getuserprofiledata/${myemail}`);
  };

  const logoutclicked = async () => {
    localStorage.removeItem('state');
    localStorage.removeItem('usertype');
    localStorage.removeItem('username');
    localStorage.removeItem('url');

    await axios.post(
      `/api/update/logouttime/logoutdate/${logoutdate}/${logouttime}/${myemail}`
    );
  };

  if (!userProfileClicked) {
    console.log(name + 'sdfjdskljfkldsjfkdoooooooooooooooo');
    return (
      <div className='header'>
        <div className='headerCompartement1'>
          <div className='logo'>
            <img src={logo} />
          </div>
        </div>
        <div className='btncontainer'>
          <div className='btns'>
            <Button variant='contained'>
              <Link to='/middleware/Event' className='text_decoration'>
                Events
              </Link>
            </Button>

            <Button variant='contained' color='primary'>
              <Link to='/middleware/Job' className='text_decoration clr'>
                Jobs
              </Link>
            </Button>
            <Button variant='contained' color='secondary'>
              <Link to='/middleware/Mentor' className='text_decoration clr'>
                Mentor
              </Link>
            </Button>
            <Button variant='contained' color='primary'>
              <Link
                to='/middleware/Organisation'
                className='text_decoration clr'
              >
                Organisation
              </Link>
            </Button>
            <Button variant='contained'>
              <Link to='/middleware/Products' className='text_decoration'>
                Products
              </Link>
            </Button>
            <Button variant='contained' color='primary'>
              <Link to='/Talent_Page' className='text_decoration clr'>
                Talent
              </Link>
            </Button>

            <Button variant='contained' color='secondary'>
              <Link to='/login/allcourses' className='text_decoration clr'>
                Courses
              </Link>
            </Button>

            <Button variant='contained' color='primary'>
              <Link to='/Talent_Page' className='text_decoration clr'>
                Services
              </Link>
            </Button>
          </div>
        </div>
        <div className='login_signup_btns'>
          <div className='logsignbtns'>
            <div className='btnofusername btnofusertype'>
              <div className='loginedusername'>{name}</div>
              {usertype.length > 0 && (
                <div className='loginedusername'>
                  {'(' + `${usertype}` + ')'}
                </div>
              )}
            </div>
            {!logined && (
              <Button
                variant='contained'
                color='secondary'
                onClick={openLoginModelL}
              >
                <Link to='/login' className='text_decoration clr'>
                  Login
                </Link>
              </Button>
            )}
            <Button variant='contained' color='primary'>
              <Link
                to='/'
                className='text_decoration clr'
                onClick={logoutclicked}
              >
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(Header);
