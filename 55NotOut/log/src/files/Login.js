import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/login.css';
import ParticlesBg from 'particles-bg';
import axios from 'axios';
import Logined from '../files/Logined.js';
import ProfilePage from './ProductPage.js';
import LoginAlert from './LoginAlert';
import '../css_Files/alert.css';
import InvalidPassword from './InvalidPassword';
import store from '../Store/store';
import InvalidEmail from './InvalidEmail';
import { withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Auth';
import NewHeader from './NewHeader';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import Footer from './Footer';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import { connect } from 'react-redux';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const mapStateToProps = (props) => {
  return {
    inc: props.increment,
    dec: props.decrement,
    log: props.loggin,
    emailid: props.myemail,
    ismentor: false,
    isjobseeker: false,
    isjobprovider: false,
  };
};

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
      logindate: '',
      logintime: '',
    };
    this.Submit = this.Submit.bind(this);
  }

  onChangeMail_id = (event) => {
    this.setState({ mail_id: event.target.value });
  };

  onChangePassword = (event) => {
    // console.log(event.target.value);
    this.setState({ password: event.target.value });
  };

  componentDidMount = () => {
    let s = store.getState();
    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
    if (storage != null && storage.loggin) {
      this.setState({ logined: true });
    }

    //login date work // login time work

    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();

    let logintime = Date().toLocaleString();

    let arroflogintime = logintime.split(' ');
    logintime = arroflogintime[4];
    console.log(logintime + '       ' + date);
    this.setState({ logindate: date });
    this.setState({ logintime: logintime });
  };

  async Submit(event) {
    event.preventDefault();
    let { data } = await axios.get(`api/users/${this.state.mail_id}`);
    console.log(data);
    let user = data.user[0];
    this.setState({ myuser: user });
    this.setState({ username: user.User_name });

    if (user.Email_id === this.state.mail_id) {
      if (user.password === this.state.password) {
        if (user.Authorization === 'true') {
          this.setState({ logined: true });
          this.setState({ headerSecond: true });
          console.log('i am entered');
          console.log(user.UserType);
          console.log(user);
          // updating logintime logindate of a particular user

          await axios.post(
            `/api/update/logintime/logindate/${this.state.logindate}/${this.state.logintime}/${this.state.mail_id}`
          );
          console.log(user);
          if (user.UserType === 'Not a Senior Professional') {
            console.log(user.UserType);
            this.setState({ isjobprovider: true });
            localStorage.setItem('usertype', 'jobprovider');
            localStorage.setItem('username', user.User_name);
          }
          if (user.UserType === 'Senior professional') {
            console.log(user.UserType);
            if (user.typeofuser === 'Mentor') {
              this.setState({ ismentor: true });
              localStorage.setItem('usertype', 'mentor');
              localStorage.setItem('username', user.User_name);
            } else if (user.typeofuser === 'Job Seeker') {
              this.setState({ isjobseeker: true });
              localStorage.setItem('usertype', 'jobseeker');
              localStorage.setItem('username', user.User_name);
            }
          }
          this.props.loggin(true);
          this.props.email(this.state.mail_id);
          let myurl = localStorage.getItem('url');
          if (myurl !== null && myurl.length > 0) {
            let arrmyurl = myurl.split('/');
            let loginornot = false;
            arrmyurl.map((value) => {
              if (value === 'login') {
                loginornot = true;
              }
            });

            if (loginornot) {
              var res = myurl.substring(27);
              this.props.history.push({
                pathname: res,
              });
            } else {
              var res = myurl.substring(22);
              this.props.history.push({
                pathname: res,
              });
            }
          }
          localStorage.removeItem('url');
        } else {
          this.setState({ notAuthorized: true });
          // setTimeout(() => {
          //   this.props.closePopUp();
          // }, 2000);
        }
      } else {
        this.setState({ invalidpassword: true });
      }
    } else {
      this.setState({ invalidEmail: true });
    }

    if (user.UserType === 'Not a Senior Professional') {
      this.setState({ notaseniorprofessional: true });
    }

    let s = store.getState();
  }

  myresponse = async (value) => {
    if (!(value === undefined)) {
      let { data } = await axios.get(`api/users/${value.email}`);
      if (data.user.length == 0) {
        this.setState({ invalidEmail: true });
      } else {
        console.log('in elase');
        if (data.user[0].Email_id === value.email) {
          console.log(value.email + '     ' + data.user[0].Email_id);
          console.log(data.user[0].Authorization);
          if (data.user[0].Authorization === 'true') {
            this.setState({ logined: true });
            this.setState({ headerSecond: true });
            this.props.loggin(true);
            this.props.email(value.email);

            // updating logintime logindate of a particular user

            await axios.post(
              `/api/update/logintime/logindate/${this.state.logindate}/${this.state.logintime}/${this.state.mail_id}`
            );

            if (data.user[0].UserType === 'Not a Senior Professional') {
              console.log(data.user[0].UserType);
              this.setState({ isjobprovider: true });
              localStorage.setItem('usertype', 'jobprovider');
              localStorage.setItem('username', value.name);
            }

            if (data.user[0].UserType === 'Senior professional') {
              console.log('Senior professional');
              if (data.user[0].typeofuser === 'Mentor') {
                this.setState({ ismentor: true });
                localStorage.setItem('usertype', 'mentor');
                localStorage.setItem('username', value.name);
              } else if (data.user[0].typeofuser === 'Job Seeker') {
                this.setState({ isjobseeker: true });
                localStorage.setItem('usertype', 'jobseeker');
                localStorage.setItem('username', value.name);
              }

              let myurl = localStorage.getItem('url');
              if (myurl !== null && myurl.length > 0) {
                let arrmyurl = myurl.split('/');
                let loginornot = false;
                arrmyurl.map((value) => {
                  if (value === 'login') {
                    loginornot = true;
                  }
                });

                if (loginornot) {
                  var res = myurl.substring(27);
                  this.props.history.push({
                    pathname: res,
                  });
                } else {
                  var res = myurl.substring(22);
                  this.props.history.push({
                    pathname: res,
                  });
                }
              }
              localStorage.removeItem('url');
            }
          }
        }
      }
    }
  };

  googlebtnclicked = () => {};

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
        <>
          <HomeResponsiveHeader></HomeResponsiveHeader>
          <div className='login_container'>
            <div className='myLoginContainer'>
              <form className='flex form' onSubmit={this.Submit}>
                <div className='lockopeniconContainer'>
                  {/* <div className='flex usernameiconContainer transform'>
                    <LockOpenIcon></LockOpenIcon>
                  </div> */}
                </div>
                <label className='flex_row'>
                  <div className='usernameContainerofsignup'>
                    <div className='flex usernameiconContainer'>
                      <i class='fas fa-envelope'></i>
                    </div>
                  </div>
                  <div className='maxwidth'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Email Id'
                      id='Password'
                      value={this.state.mail_id}
                      onChange={this.onChangeMail_id}
                      required
                    ></input>
                  </div>
                  {/* <input
                    type='Mail_id'
                    name='Mail_id'
                    placeholder='Write Your Mail_id...'
                    value={this.state.mail_id}
                    className='search_input'
                    onChange={this.onChangeMail_id}
                  /> */}
                </label>

                <label className='flex_row'>
                  <div className='usernameContainerofsignup'>
                    <div className='flex usernameiconContainer'>
                      <i class='fas fa-lock'></i>
                    </div>
                  </div>
                  <div className='maxwidth'>
                    <input
                      type='Password'
                      class='form-control'
                      placeholder='Password'
                      id='Password'
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      required
                    ></input>
                  </div>
                  {/* <input
                    type='Password'
                    name='Password'
                    placeholder='Write Your Password...'
                    value={this.state.password}
                    className='margin_left'
                    onChange={this.onChangePassword}
                  /> */}
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
                <div className='btnloginContainer'>
                  <div className='btnlogin'>
                    <Button
                      variant='contained'
                      color='secondary'
                      type='submit'
                      className='flex_row'
                    >
                      Login
                    </Button>
                  </div>
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
          </div>
          <Footer></Footer>
        </>
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
