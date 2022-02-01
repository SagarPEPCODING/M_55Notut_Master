import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/profilecss.css';
import { Link } from 'react-router-dom';
import logo from '../foreantech_logo.png';
import { withRouter } from 'react-router';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import FirstFiveProducts from './FirstFiveProducts';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';
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

class MiddlewareProducts extends Component {
  constructor(props) {
    super(props);
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

  AddProductClicked = () => {
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

  render() {
    return (
      <div className='profile_page'>
        <HomeResponsiveHeader />
        <SeeAllHeader />
        <div className='event_body'>
          <div className='event_body_heading'>PRODUCTS</div>
          <FirstFiveProducts />
          <div className='see_more'>
            <Link to='/login/Products' className='text_decoration clr'>
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
)(withRouter(MiddlewareProducts));
