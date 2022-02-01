import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/login.css';
import ParticlesBg from 'particles-bg';
import axios from 'axios';
import Logined from '../files/Logined.js';
import ProfilePage from './ProductPage.js';
// const db = require('../Express/connection');
import '../css_Files/poplogincss.css';
import LoginAlert from './LoginAlert';
import '../css_Files/alert.css';
import InvalidPassword from './InvalidPassword';
import store from '../Store/store';
import InvalidEmail from './InvalidEmail';
import { withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Auth';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';
// import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp';

const mapStateToProps = (props) => {
  return {
    inc: props.increment,
    dec: props.decrement,
    log: props.loggin,
    emailid: props.myemail,
  };
};

// mapStateToProps,mapDispatchToProps

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Increment()),
    decrement: () => dispatch(Decrement()),
    loggin: (logornot) => dispatch(loggedin(logornot)),
    email: (email) => dispatch(emailid(email)),
  };
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail_id: '',
      password: '',
      // confirm_password: '',
      username: '',
      isvalid: 'false',
      logined: false,
      notAuthorized: false,
      invalidpassword: false,
      invalidEmail: false,
      headerSecond: false,
      myuser: [],
      notaseniorprofessional: false,
    };
    this.Submit = this.Submit.bind(this);
  }

  onChangeMail_id = (event) => {
    // console.log(event.target.value);
    this.setState({ mail_id: event.target.value });
  };

  onChangePassword = (event) => {
    // console.log(event.target.value);
    this.setState({ password: event.target.value });
  };

  componentDidMount = () => {
    console.log(this.props.inc + ' klklkl');
    console.log(this.props.log + 'llllllllllllll');
    let s = store.getState();
    console.log(s);
  };

  async Submit(event) {
    event.preventDefault();
    let { data } = await axios.get(`api/users/${this.state.mail_id}`);
    let user = data.user[0];
    this.setState({ myuser: user });
    this.setState({ username: user.User_name });
    if (user.Email_id === this.state.mail_id) {
      if (user.password === this.state.password) {
        if (user.Authorization === 'true') {
          this.setState({ logined: true });
          this.setState({ headerSecond: true });
          this.props.loggin(true);
          this.props.email(this.state.mail_id);
          let myurl = localStorage.getItem('url');
          if (myurl !== null && myurl.length > 0) {
            let arrmyurl = myurl.split('/');
            console.log(arrmyurl);

            let loginornot = false;
            arrmyurl.map((value) => {
              if (value === 'login') {
                loginornot = true;
              }
            });

            if (loginornot) {
              var res = myurl.substring(27);
              console.log(res);
              this.props.history.push({
                pathname: res,
              });
            } else {
              var res = myurl.substring(22);
              console.log(myurl);
              this.props.history.push({
                pathname: res,
              });
            }
          }
          localStorage.removeItem('url');
        } else {
          this.setState({ notAuthorized: true });
          setTimeout(() => {
            this.props.closePopUp();
          }, 2000);
        }
      } else {
        this.setState({ invalidpassword: true });
      }
    } else {
      this.setState({ invalidEmail: true });
    }

    if (user.UserType === 'Not a Senior Professional') {
      console.log('hello i am not a senior proffessional');
      this.setState({ notaseniorprofessional: true });
    }

    let s = store.getState();
    console.log(s);
  }

  myresponse = async (value) => {
    if (!(value === undefined)) {
      let { data } = await axios.get(`api/users/${value.email}`);
      console.log(value);
      console.log(value.email);
      console.log(data.user.length);
      if (data.user.length == 0) {
        this.setState({ invalidEmail: true });
      } else {
        console.log(data.user[0].Email_id);
        if (data.user[0].Email_id === value.email) {
          this.setState({ logined: true });
        }
      }
    }
  };

  googlebtnclicked = () => {
    console.log('hii google clicked');
  };

  timeinterval = () => {
    setTimeout(() => {
      if (this.state.invalidEmail == true) {
        this.setState({ invalidEmail: false });
      }
      if (this.state.invalidpassword == true) {
        this.setState({ invalidpassword: false });
      }
      if (this.state.notAuthorized == true) {
        this.setState({ notAuthorized: false });
      }
    }, 2000);
  };

  render() {
    if (!this.state.logined) {
      return (
        <div className='login_container'>
          <form className='flex form' onSubmit={this.Submit}>
            <label className='flex_row'>
              <div>Enter your Email_id:</div>
              <input
                type='Mail_id'
                name='Mail_id'
                placeholder='Write Your Mail_id...'
                value={this.state.mail_id}
                className='search_input'
                onChange={this.onChangeMail_id}
              />
            </label>

            <label className='flex_row'>
              <div>Password:</div>
              <input
                type='Password'
                name='Password'
                placeholder='Write Your Password...'
                value={this.state.password}
                className='margin_left'
                onChange={this.onChangePassword}
              />
            </label>
            {this.state.notAuthorized && (
              <div className='alert' onClick={this.timeinterval}>
                {this.state.notAuthorized && <LoginAlert />}
              </div>
            )}
            {this.state.invalidpassword && (
              <div className='alert' onClick={this.timeinterval}>
                {this.state.invalidpassword && <InvalidPassword />}
              </div>
            )}
            {this.state.invalidEmail && (
              <div className='alert' onClick={this.timeinterval}>
                {this.state.invalidEmail && <InvalidEmail />}
              </div>
            )}
            <div className='btn'>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                className='flex_row'
              >
                Login
              </Button>
            </div>
            <div
              className='auth'
              onClick={this.googlebtnclicked}
              onClick={this.timeinterval}
            >
              <Auth myresponse={this.myresponse} />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <ProfilePage
          username={this.state.username}
          logined={this.state.logined}
          email={this.state.mail_id}
          notaseniorprofessional={this.state.notaseniorprofessional}
        />
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
