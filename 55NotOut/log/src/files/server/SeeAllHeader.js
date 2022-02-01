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
import '../css_Files/seeallheader.css';
import { connect } from 'react-redux';
import ButtonBootstrap from 'react-bootstrap/Button';

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

export class SeeAllHeader extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      nameofproduct: '',
      descriptionofobject: '',
      userEvent: [],
      stateProfile: false,
      displayjobadd: '',
      displayaddjobseeker: '',
      ismentor: false,
      isjobseeker: false,
      isjobprovider: false,
      displayjobprovider: false,
      myemail: '',
      name: '',
      allset: false,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      let usertype = localStorage.getItem('usertype');
      this.setState({ userType: usertype });
      console.log(usertype);
      if (usertype === 'mentor') {
        this.setState({ ismentor: true });
      } else if (usertype === 'jobseeker') {
        this.setState({ isjobseeker: true });
      } else if (usertype === 'jobprovider') {
        this.setState({ isjobprovider: true });
      }
      let displayaddjob = usertype === 'mentor' ? '' : '';
      let displayaddjobseeker = usertype === 'jobseeker' ? '' : '';
      let displayjobprovider = usertype === 'jobprovider' ? '' : '';
      this.setState({ displayjobadd: displayaddjob });
      this.setState({ displayaddjobseeker: displayaddjobseeker });
      this.setState({ displayjobprovider: displayjobprovider });
      console.log(displayaddjob);
      if (
        this.state.ismentor ||
        this.state.isjobseeker ||
        this.state.isjobprovider
      ) {
        this.setState({ allset: true });
      }
    }, 1000);
  };

  EventClicked = () => {
    <Redirect to='/middleware/Event' />;
  };

  SeeAllJobsClicked = (event) => {
    const serializedState = localStorage.getItem('state');
    console.log(serializedState);
    let obj = JSON.parse(serializedState);
    console.log(obj);

    console.log(this.state.Email_id);
    if (obj !== null && obj.myemail.myemail.length > 0) {
      this.props.history.push({
        pathname: '/Jobs/showJobs',
        state: {
          Email_id: obj.myemail.myemail,
        },
      });
    } else {
      this.props.history.push({
        pathname: '/login/showJobs',
        state: {
          Email_id: this.state.Email_id,
        },
      });
    }
  };

  SeeAllEventClicked = (event) => {
    const serializedState = localStorage.getItem('state');
    console.log(serializedState);
    let obj = JSON.parse(serializedState);
    console.log(obj);

    console.log(this.state.Email_id);
    if (obj !== null && obj.myemail.myemail.length > 0) {
      this.props.history.push({
        pathname: '/Events/showEvents',
        state: {
          Email_id: obj.myemail.myemail,
        },
      });
    } else {
      this.props.history.push({
        pathname: '/login/showEvents',
        state: {
          Email_id: this.state.Email_id,
        },
      });
    }
  };

  SeeAllMentorClicked = (event) => {
    const serializedState = localStorage.getItem('state');
    console.log(serializedState);
    let obj = JSON.parse(serializedState);
    console.log(obj);

    console.log(this.state.Email_id);
    if (obj !== null && obj.myemail.myemail.length > 0) {
      this.props.history.push({
        pathname: '/showMentor',
        state: {
          Email_id: obj.myemail.myemail,
        },
      });
    } else {
      this.props.history.push({
        pathname: '/login/showMentor',
        state: {
          Email_id: this.state.Email_id,
        },
      });
    }
  };

  SeeAllOrganisationClicked = (event) => {
    const serializedState = localStorage.getItem('state');
    console.log(serializedState);
    let obj = JSON.parse(serializedState);
    console.log(obj);

    console.log(this.state.Email_id);
    if (obj !== null && obj.myemail.myemail.length > 0) {
      this.props.history.push({
        pathname: '/showOrganisation',
        state: {
          Email_id: obj.myemail.myemail,
        },
      });
    } else {
      this.props.history.push({
        pathname: '/login/showOrganisation',
        state: {
          Email_id: this.state.Email_id,
        },
      });
    }
  };

  OrganisationClicked = (event) => {
    console.log(this.props.log + '    ' + this.props.emailid);

    let storage = localStorage.getItem('state');
    console.log(storage);
    let url = window.location.href;
    storage = JSON.parse(storage);

    if (storage === null) {
      localStorage.setItem('url', window.location.href);
      this.props.history.push({
        pathname: '/login',
      });
    } else {
      if (typeof this.props.emailid === 'object') {
        this.props.history.push({
          pathname: '/AddOrganisation',
        });
        console.log(this.props.emailid.myemail);
        this.props.loggin(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
      } else {
        this.props.history.push({
          pathname: '/AddOrganisation',
        });
        this.props.loggin(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
      }
    }
  };

  userProfilebtnClicked = async (props) => {
    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
    let username = localStorage.getItem('username');
    console.log(storage.myemail.myemail);

    let { data } = await axios.get(
      `/api/users/getuserprofiledata/${storage.myemail.myemail}`
    );
    // console.log(data.user[0].Email_id);
    // setMyEmail(data.user[0].Email_id);
    console.log(data.user[0].experiencein);
    this.setState({ myemail: data.user[0].Email_id });
    // setName(data.user[0].name);
    this.setState({ name: data.user[0].name });
    let encodedemailid = btoa(data.user[0].Email_id);
    let url = `/UserProfile/${username}/${encodedemailid}`;
    this.props.history.push({
      pathname: url,
      state: {
        useremail_id: data.user[0].Email_id,
      },
    });
  };

  SeeAllProductClicked = () => {
    const serializedState = localStorage.getItem('state');
    console.log(serializedState);
    let obj = JSON.parse(serializedState);
    console.log(obj);

    console.log(this.state.Email_id);
    if (obj !== null && obj.myemail.myemail.length > 0) {
      this.props.history.push({
        pathname: '/Products',
        state: {
          Email_id: obj.myemail.myemail,
        },
      });
    } else {
      this.props.history.push({
        pathname: '/login/Products',
        state: {
          Email_id: this.state.Email_id,
        },
      });
    }
  };

  AddEventClicked = (event) => {
    let storage = localStorage.getItem('state');
    console.log(storage);
    let url = window.location.href;
    storage = JSON.parse(storage);

    if (storage === null) {
      localStorage.setItem('url', window.location.href);
      this.props.history.push({
        pathname: '/login',
      });
    } else {
      if (typeof this.props.emailid === 'object') {
        this.props.history.push({
          pathname: '/Events',
        });
        console.log(this.props.emailid.myemail);
        this.props.loggin(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
      } else {
        this.props.history.push({
          pathname: '/Events',
        });
        this.props.loggin(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
      }
    }
  };

  SeeAllMentorClicked = (event) => {
    const serializedState = localStorage.getItem('state');
    console.log(serializedState);
    let obj = JSON.parse(serializedState);
    console.log(obj);

    console.log(this.state.Email_id);
    if (obj !== null && obj.myemail.myemail.length > 0) {
      this.props.history.push({
        pathname: '/showMentor',
        state: {
          Email_id: obj.myemail.myemail,
        },
      });
    } else {
      this.props.history.push({
        pathname: '/login/showMentor',
        state: {
          Email_id: this.state.Email_id,
        },
      });
    }
  };

  AddJobClicked = (event) => {
    console.log(this.props.log + '    ' + this.props.emailid);

    let storage = localStorage.getItem('state');
    console.log(storage);
    let url = window.location.href;
    storage = JSON.parse(storage);

    if (storage === null) {
      localStorage.setItem('url', window.location.href);
      this.props.history.push({
        pathname: '/login',
      });
    } else {
      if (typeof this.props.emailid === 'object') {
        this.props.history.push({
          pathname: '/Jobs',
        });
        console.log(this.props.emailid.myemail);
        this.props.loggin(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
      } else {
        this.props.history.push({
          pathname: '/Jobs',
        });
        this.props.loggin(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
      }
    }
  };

  AddProductClicked = () => {
    console.log(this.props.emailid + '  66666666666666666  ' + this.props.log);

    let storage = localStorage.getItem('state');
    let url = window.location.href;
    storage = JSON.parse(storage);
    if (storage === null) {
      localStorage.setItem('url', window.location.href);
      this.props.history.push({
        pathname: '/login',
      });
    } else {
      if (typeof this.props.emailid === 'object') {
        this.props.history.push({
          pathname: '/AddProduct',
        });
        console.log(this.props.emailid.myemail);
        this.props.loggin(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
      } else {
        this.props.history.push({
          pathname: '/AddProduct',
        });
        this.props.loggin(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
      }
    }
  };

  AddMentorClicked = () => {
    console.log(this.props.emailid + '  66666666666666666  ' + this.props.log);

    let storage = localStorage.getItem('state');
    let url = window.location.href;
    storage = JSON.parse(storage);
    if (storage === null) {
      localStorage.setItem('url', window.location.href);
      this.props.history.push({
        pathname: '/login',
      });
    } else {
      if (typeof this.props.emailid === 'object') {
        this.props.history.push({
          pathname: '/AddMentor',
        });
        console.log(this.props.emailid.myemail);
        this.props.loggin(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
      } else {
        this.props.history.push({
          pathname: '/AddMentor',
        });
        this.props.loggin(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
      }
    }
  };

  job_provider_clicked = async () => {
    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);

    let myemail = storage.myemail.myemail;
    console.log(myemail);
    var encodeemailidinuseeffect = btoa(myemail);

    let { data } = await axios.get(`/api/users/getuserprofiledata/${myemail}`);
    this.props.history.push({
      pathname: `/login/JobproviderDashboard/${data.user[0].name}/${encodeemailidinuseeffect}`,
      state: {
        value: data.user[0],
      },
    });

    // let data1 = await axios.get(`/api/users/getuserprofiledata/${myemail}`);
  };

  render() {
    console.log(
      this.state.isjobprovider +
        '   ' +
        this.state.ismentor +
        '   ' +
        this.state.isjobseeker
    );
    if (this.state.allset) {
      return (
        <div className='seeallbtnheadercontainer'>
          <div className='seeallContainer'>
            {this.state.ismentor && (
              <div
                className='btnjobadd'
                style={{ display: `${this.state.displayjobadd}` }}
              >
                {/* <Button
                  variant='contained'
                  color='secondary'
                  onClick={this.AddEventClicked}
                >
                  ADD EVENTS
                </Button> */}
                <div onClick={this.AddEventClicked} className='addevent'>
                  ADD EVENTS
                </div>
              </div>
            )}

            {this.state.isjobseeker && (
              <div
                className='btnjobadd'
                style={{ display: `${this.state.displayaddjobseeker}` }}
              >
                {/* <Button
                  variant='contained'
                  color='secondary'
                  onClick={this.AddEventClicked}
                >
                  ADD EVENTS
                </Button> */}
                <div onClick={this.AddEventClicked} className='addevent'>
                  ADD EVENTS
                </div>
              </div>
            )}

            {this.state.isjobprovider && (
              <div
                className='btnjobadd'
                style={{ display: `${this.state.displayjobprovider}` }}
              >
                {/* <Button
                  variant='contained'
                  color='secondary'
                  onClick={this.AddEventClicked}
                >
                  ADD EVENTS
                </Button> */}
                <div onClick={this.AddEventClicked} className='addevent'>
                  ADD EVENTS
                </div>
              </div>
            )}
            {this.state.isjobprovider && (
              <div
                className='btnjobadd'
                style={{ display: `${this.state.displayjobprovider}` }}
              >
                {/* <Button
                  variant='contained'
                  color='primary'
                  onClick={this.AddJobClicked}
                >
                  ADD JOBS
                </Button> */}
                <div onClick={this.AddJobClicked} className='addjob'>
                  ADD JOBS
                </div>
              </div>
            )}
            {this.state.ismentor && (
              <div
                className='btnjobadd'
                style={{ display: `${this.state.displayjobadd}` }}
              >
                {/* <Button
                  variant='contained'
                  color='primary'
                  onClick={this.AddMentorClicked}
                >
                  ADD MENTOR
                </Button> */}
                <div onClick={this.AddMentorClicked} className='addmentor'>
                  ADD MENTOR
                </div>
              </div>
            )}
            {this.state.ismentor && (
              <div
                className='btnjobadd'
                style={{ display: `${this.state.displayjobadd}` }}
              >
                {/* <Button
                  variant='contained'
                  color='primary'
                  onClick={this.OrganisationClicked}
                >
                  ADD ORGANISATION
                </Button> */}
                <div
                  onClick={this.OrganisationClicked}
                  className='addorganisation'
                >
                  ADD ORGANISATION
                </div>
              </div>
            )}

            {this.state.isjobprovider && (
              <div
                className='btnjobadd'
                style={{ display: `${this.state.displayjobprovider}` }}
              >
                {/* <Button
                  variant='contained'
                  color='primary'
                  onClick={this.OrganisationClicked}
                >
                  ADD ORGANISATION
                </Button> */}
                <div
                  onClick={this.OrganisationClicked}
                  className='addorganisation'
                >
                  ADD ORGANISATION
                </div>
              </div>
            )}
            {this.state.isjobprovider && (
              <div
                className='btnjobadd'
                style={{ display: `${this.state.displayjobprovider}` }}
              >
                {/* <Button
                  variant='contained'
                  color='primary'
                  onClick={this.AddProductClicked}
                >
                  ADD PRODUCTS
                </Button> */}
                <div onClick={this.AddProductClicked} className='addproduct'>
                  ADD PRODUCTS
                </div>
              </div>
            )}

            {this.state.ismentor && (
              /* <Button variant='contained' color='secondary'>
                <Link to='/login/courses' className='text_decoration clr'>
                  Add Courses
                </Link>
              </Button> */
              <div className='addcourses'>
                <Link to='/login/courses' className='text_decoration clr'>
                  Add COURSES
                </Link>
              </div>
            )}

            {this.state.isjobprovider && (
              <div className='addservices'>
                <Link to='/Talent_Page' className='text_decoration clr'>
                  Add SERVICES
                </Link>
              </div>
            )}

            {this.state.isjobprovider && (
              <div
                className='bt'
                style={{ display: `${this.state.displayjobprovider}` }}
              >
                <div
                  className='jobprovider'
                  onClick={this.job_provider_clicked}
                >
                  JOB PROVIDER
                </div>
              </div>
            )}

            <div
              className='userprofile'
              onClick={(props) => {
                this.userProfilebtnClicked(props);
              }}
            >
              USER PROFILE
            </div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SeeAllHeader));
