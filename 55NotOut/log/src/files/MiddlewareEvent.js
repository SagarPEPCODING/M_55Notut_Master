import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/profilecss.css';
import { Redirect, Link } from 'react-router-dom';
import logo from '../foreantech_logo.png';
import FirstFiveEvents from './FirstFiveEvents';
import Footer from './Footer';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import { withRouter } from 'react-router';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import { connect } from 'react-redux';
import store from '../Store/store';

const mapStateToProps = (props) => {
  return {
    inc: props.increment,
    dec: props.decrement,
    log: props.loggin,
    emailid: props.myemail,
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

class MiddlewareEvent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      nameofproduct: '',
      descriptionofobject: '',
      user: [],
      stateProfile: false,
      displayjobadd: '',
      displayaddjobseeker: '',
      ismentor: false,
      isjobseeker: false,
      isjobprovider: false,
      displayjobprovider: false,
    };
  }

  componentDidMount = () => {
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
  };

  EventClicked = () => {
    <Redirect to='/middleware/Event' />;
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

  render() {
    return (
      <div className='profile_page'>
        <HomeResponsiveHeader />
        <SeeAllHeader />
        <div className='event_body'>
          <div className='event_body_heading'></div>
          <FirstFiveEvents />
          <div className='see_more'>
            <Link to='/login/showEvents' className='text_decoration clr'>
              SEE MORE
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MiddlewareEvent));
