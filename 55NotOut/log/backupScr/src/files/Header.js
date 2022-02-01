import React, { Redirect, Component, useState, useEffect } from 'react';
import logo from '../foreantech_logo.png';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PopUp from './PopUp';
import { Model } from './Model';
import { GlobalStyle } from '../googleStyles';
import { ModelL } from './ModelL';
import UserProfile from './EditUserProfile';
import axios from 'axios';

const Header = (props) => {
  const [userProfileClicked, setUserProfileClicked] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [openLoginModel, setOpenLoginModel] = useState(false);
  const [myEmail, setMyEmail] = useState('');
  const [myemail, setMyemail] = useState('');
  const [mydata, setMydata] = useState([]);

  let history = useHistory();

  useEffect(async () => {
    console.log('i am in useEffect');
    console.log(props.email_id === undefined);
    const myemailvalue = props.email_id;

    if (props.email_id !== undefined && props.email_id.length != 0) {
      console.log('hoore my email comes here... :- ' + props.email_id);
      setMyemail(myemailvalue);
      let { data } = await axios.get(
        `/api/users/getuserprofiledata/${props.email_id}`
      );
      setMydata(data.user);
    }
    console.log(myemailvalue);
  }, [props]);

  const openModel = () => {
    setShowModel((prev) => !prev);
  };

  const openLoginModelL = () => {
    setOpenLoginModel(true);
  };

  // const Eventbtnclicked = () => {
  //   history.push({
  //     pathname: '/middleware/Event',
  //     state: {
  //       useremail_id: myemail,
  //     },
  //   });
  // };

  // const Jobsbtnclicked = () => {
  //   history.push({
  //     pathname: '/middleware/Job',
  //     state: {
  //       useremail_id: myemail,
  //     },
  //   });
  // };

  // const MentorbtnClicked = () => {
  //   history.push({
  //     pathname: '/middleware/Mentor',
  //     state: {
  //       useremail_id: myemail,
  //     },
  //   });
  // };

  const userProfilebtnClicked = (props) => {
    // console.log('btn clicked...');

    // console.log(myemail);

    // setUserProfileClicked(true);
    // if (!(props.email_id === undefined)) {
    // console.log('i am not undefined right now');
    // console.log(props.email_id);
    
    history.push({
      pathname: `/login/UserProfile`,
      state: {
        useremail_id: myemail,
      },
    });
    // }
  };

  // openPop = () => {
  //   this.setState({ pop: true });
  // };

  if (!userProfileClicked) {
    // console.log(myemail + 'sdfjdskljfkldsjfkdoooooooooooooooo');
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
              {/* <Redirect
                to={{
                  pathname: '/middleware/Event',
                  state: {
                    myval: props.value,
                  },
                }}
              ></Redirect> */}
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

            {/* /middleware/Talent */}

            <Button
              variant='contained'
              color='primary'
              onClick={(props) => {
                userProfilebtnClicked(props);
              }}
            >
              User Profile
            </Button>

            <Button variant='contained' color='secondary'>
              Courses
            </Button>

            <Button variant='contained' color='secondary'>
              Services
            </Button>
          </div>
        </div>
        <div className='login_signup_btns'>
          <div className='logsignbtns'>
            <Button
              variant='contained'
              color='secondary'
              onClick={openLoginModelL}
            >
              <Link to='/login' className='text_decoration clr'>
                Login
              </Link>
            </Button>
            <Button variant='contained' color='primary' onClick={openModel}>
              <Link to='/signup' className='text_decoration clr'>
                SignUp
              </Link>
              {/* SignUp */}
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(Header);
