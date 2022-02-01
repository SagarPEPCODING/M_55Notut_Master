import React, { Redirect, Component, useState, useEffect } from 'react';
import logo from '../assets/img/logo_55NotoutFinal-1.jpg';
import Button from '@material-ui/core/Button';
import '../css_Files/newheaderFinal.css';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import Dropdown from 'react-bootstrap/Dropdown';
import * as FaIcons from 'react-icons/fa';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const HomeResponsiveHeader = (props) => {
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
  const [screenWidth, setScreenWidth] = useState('');
  const [screenHeight, setScreenHeight] = useState('');
  const [menuClicked, setMenuClicked] = useState(false);
  const [sidebar, setSidebar] = useState(false);

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

    setScreenWidth(window.screen.width);

    function handleResize() {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      console.log(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
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
  };

  const menubtnClicked = () => {
    console.log(menuClicked);
    setMenuClicked(!menuClicked);
  };

  const logoutclicked = async () => {
    localStorage.removeItem('state');
    localStorage.removeItem('usertype');
    localStorage.removeItem('username');
    localStorage.removeItem('url');
    setLogined(!logined);
    await axios.post(
      `/api/update/logouttime/logoutdate/${logoutdate}/${logouttime}/${myemail}`
    );
  };

  if (!userProfileClicked) {
    console.log(name + 'sdfjdskljfkldsjfkdoooooooooooooooo');
    return (
      <div className='headerContainer'>
        <div className='hc1'>
          <img src={logo} className='myimgofheader'></img>
        </div>
        <div className='hc2'>
          <div class='topnav'>
            <input type='text' placeholder='Search..' />
          </div>
        </div>
        {screenWidth >= 865 && (
          <div className='hc3'>
            <div className='hc3ci'>
              <div className='jkjskdjf'>
                <div className='Ejsdf fontsize'>
                  <Link to='/middleware/Event' className='text_decoration'>
                    Events
                  </Link>
                </div>
                <div className='Jjsdf fontsize'>
                  <Link to='/middleware/Job' className='text_decoration'>
                    Jobs
                  </Link>
                </div>
                <div className='MEjsdf fontsize'>
                  <Link to='/middleware/Mentor' className='text_decoration'>
                    Mentor
                  </Link>
                </div>
                <div className='OEjsdf fontsize'>
                  <Link
                    to='/middleware/Organisation'
                    className='text_decoration'
                  >
                    Organisation
                  </Link>
                </div>
                <div className='Pjsdf fontsize'>
                  <Link to='/middleware/Products' className='text_decoration'>
                    Products
                  </Link>
                </div>
                <div className='Tjsdf fontsize'>
                  <Link to='/Talent_Page' className='text_decoration'>
                    Talent
                  </Link>
                </div>
                <div className='Cjsdf fontsize'>
                  <Link to='/login/allcourses' className='text_decoration'>
                    Courses
                  </Link>
                </div>
                <div className='Sjsdf fontsize'>
                  <Link to='/Talent_Page' className='text_decoration'>
                    Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {screenWidth < 865 && (
          <>
            <div
              className='navbar'
              onClick={() => {
                setSidebar(!sidebar);
              }}
            >
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars />
              </Link>
            </div>
            {sidebar && (
              <>
                <div id='navMenuIndex' class='navbar-menu is-active'>
                  <div class='navbar-start'>
                    <div class='navbar-item has-dropdown is-hoverable'>
                      <div class='navbar-dropdown is-boxed'>
                        <div class='navbar-item'>
                          <Link
                            to='/middleware/Event'
                            className='text_decoration'
                          >
                            Events
                          </Link>
                        </div>
                        <div class='navbar-item'>
                          <Link
                            to='/middleware/Job'
                            className='text_decoration'
                          >
                            Jobs
                          </Link>
                        </div>
                        <div class='navbar-item'>
                          <Link
                            to='/middleware/Mentor'
                            className='text_decoration'
                          >
                            Mentor
                          </Link>
                        </div>
                        <div class='navbar-item'>
                          <Link
                            to='/middleware/Organisation'
                            className='text_decoration'
                          >
                            Organisation
                          </Link>
                        </div>
                        <div class='navbar-item'>
                          <Link
                            to='/middleware/Products'
                            className='text_decoration'
                          >
                            Products
                          </Link>
                        </div>
                        <div class='navbar-item'>
                          <Link to='/Talent_Page' className='text_decoration'>
                            Talent
                          </Link>
                        </div>
                        <div class='navbar-item'>
                          <Link
                            to='/login/allcourses'
                            className='text_decoration'
                          >
                            Courses
                          </Link>
                        </div>
                        <div class='navbar-item'>
                          <Link to='/Talent_Page' className='text_decoration'>
                            Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='navbar-end'>
                    <div class='gxx_search' id='bdcs'></div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
        <div className='hc4'>
          {!logined && (
            <>
              <div className='btnloginnm'>
                <Link to='/login' className='text_decoration'>
                  Login
                </Link>
              </div>
              <div className='btnloginsp'>
                <Link
                  to='/signup'
                  className='text_decoration'
                  onClick={logoutclicked}
                >
                  SignUp
                </Link>
              </div>
            </>
          )}
          {logined && (
            <>
              {screenWidth > 485 && (
                <div className='nameContainer fontsize1'>{name}</div>
              )}
              <div className='btnlogingt'>
                <Link
                  to='/'
                  className='text_decoration'
                  onClick={logoutclicked}
                >
                  Logout
                </Link>
              </div>
              {/* <div className='btnloginsp'>
                <Link
                  to='/signup'
                  className='text_decoration'
                  onClick={logoutclicked}
                >
                  SignUp
                </Link>
              </div> */}
            </>
          )}
        </div>
      </div>
    );
  }
};

export default withRouter(HomeResponsiveHeader);
