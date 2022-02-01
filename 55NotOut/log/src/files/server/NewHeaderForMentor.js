import React, { Redirect, Component, useState, useEffect } from 'react';
import logo from '../foreantech_logo.png';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PopUp from './PopUp';
import { Model } from './Model';
import { GlobalStyle } from '../googleStyles';
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

  let history = useHistory();

  useEffect(async () => {
    setMyemail(myemaill.myemail);
    const myemailvalue = props.email_id;
    if (myemail !== undefined && myemail.length > 0) {
      let { data } = await axios.get(
        `/api/users/getuserprofiledata/${myemail}`
      );
      setMydata(data.user);
      setName(data.user[0].name);
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

  const userProfilebtnClicked = async (props) => {
    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
    console.log(storage.myemail.myemail);

    let { data } = await axios.get(
      `/api/users/getuserprofiledata/${storage.myemail.myemail}`
    );
    setMyEmail(data.user[0].Email_id);
    setName(data.user[0].name);
    let encodedemailid = btoa(data.user[0].Email_id);
    let url = `/UserProfile/${data.user[0].name}/${encodedemailid}`;
    history.push({
      pathname: url,
      state: {
        useremail_id: data.user[0].Email_id,
      },
    });
  };

  const job_provider_clicked = async () => {
    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
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

  const logoutclicked = () => {
    localStorage.removeItem('state');
  };

  //   if (!userProfileClicked) {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='btncontainer'>
        <div className='btns'>
          <Button variant='contained'>
            <Link to='/middleware/Event' className='text_decoration'>
              Events
            </Link>
          </Button>

          <Button variant='contained' color='primary'>
            <Link to='/middlewareformentor/Job' className='text_decoration clr'>
              Jobs
            </Link>
          </Button>
          <Button variant='contained' color='secondary'>
            <Link to='/middleware/Mentor' className='text_decoration clr'>
              Mentor
            </Link>
          </Button>
          <Button variant='contained' color='primary'>
            <Link to='/middleware/Organisation' className='text_decoration clr'>
              Organisation
            </Link>
          </Button>
          <Button variant='contained'>
            <Link to='/middlewarementor/Products' className='text_decoration'>
              Products
            </Link>
          </Button>
          <Button variant='contained' color='primary'>
            <Link to='/Talent_Page' className='text_decoration clr'>
              Talent
            </Link>
          </Button>

          <Button variant='contained' color='secondary'>
            <Link to='/login/courses' className='text_decoration clr'>
              Courses
            </Link>
          </Button>

          <Button variant='contained' color='primary'>
            <Link to='/Talent_Page' className='text_decoration clr'>
              Services
            </Link>
          </Button>

          {/* /middleware/Talent */}

          <Button
            variant='contained'
            color='secondary'
            onClick={job_provider_clicked}
          >
            Job Provider
          </Button>

          <Button
            variant='contained'
            color='primary'
            onClick={(props) => {
              userProfilebtnClicked(props);
            }}
          >
            User Profile
          </Button>
        </div>
      </div>
      <div className='login_signup_btns'>
        <div className='logsignbtns'>
          <div className='loginedusername'>{name}</div>
          <Button variant='contained' color='primary'>
            <Link
              to='/'
              className='text_decoration clr'
              onClick={logoutclicked}
            >
              Logout
            </Link>
            {/* SignUp */}
          </Button>
        </div>
      </div>
    </div>
  );
  //   }
};

export default withRouter(Header);
