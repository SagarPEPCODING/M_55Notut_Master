import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/profilecss.css';
import { Link } from 'react-router-dom';
import logo from '../foreantech_logo.png';
import FirstFourOrganisation from './FirstFourOrganisation';
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

// mapStateToProps,mapDispatchToProps

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Increment()),
    decrement: () => dispatch(Decrement()),
    loggin: (logornot) => dispatch(loggedin(logornot)),
    email: (email) => dispatch(emailid(email)),
  };
};

class MiddlewareOrganisation extends Component {
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
    let displayaddjobseeker = usertype === 'jobseeker' ? 'none' : '';
    let displayjobprovider = usertype === 'jobprovider' ? '' : '';
    this.setState({ displayjobadd: displayaddjob });
    this.setState({ displayaddjobseeker: displayaddjobseeker });
    this.setState({ displayjobprovider: displayjobprovider });
    console.log(displayaddjob);
  };

  OrganisationClicked = (event) => {
    // const serializedState = localStorage.getItem('state');
    // console.log(serializedState);
    // let obj = JSON.parse(serializedState);
    // console.log(obj);

    // console.log(this.state.Email_id);
    // if (obj !== null && obj.myemail.myemail.length > 0) {
    //   this.props.history.push({
    //     pathname: '/AddOrganisation',
    //     state: {
    //       Email_id: obj.myemail.myemail,
    //     },
    //   });
    // } else {
    //   this.props.history.push({
    //     pathname: '/login/Organisation',
    //     state: {
    //       Email_id: this.state.Email_id,
    //     },
    //   });
    // }

    console.log(this.props.log + '    ' + this.props.emailid);

    let storage = localStorage.getItem('state');
    console.log(storage);
    let url = window.location.href;
    storage = JSON.parse(storage);
    // if (this.props.log === undefined && this.props.emailid === undefined) {
    //   console.log('redux m state nhi hai...........................');

    //   localStorage.setItem('url', url);
    //   if (storage === null) {
    //     console.log(
    //       'redux m state nhi hai && storage mai bhi nhi hain...........................'
    //     );
    //     this.props.history.push({
    //       pathname: '/login',
    //     });
    //   } else {
    //     console.log(
    //       'redux m state nhi hai && but storage m hai...........................'
    //     );
    //     console.log(storage.myemail.myemail);
    //     console.log(storage.loggin.loggin);
    //     this.props.email(storage.myemail.myemail);
    //     this.props.loggin(storage.loggin.loggin);
    //     this.props.history.push({
    //       pathname: '/AddOrganisation',
    //       state: {
    //         Email_id: storage.myemail.myemail,
    //       },
    //     });
    //   }
    // } else {
    //   if (storage === null) {
    //     localStorage.setItem('url', url);
    //     console.log('application m nhi hai ... new tab');
    //     let s = store.getState();
    //     console.log(s);
    //     this.props.history.push({
    //       pathname: '/login',
    //     });
    //     // localStorage.setItem('state', stringifystore);
    //   } else {
    //     console.log('user loggined... same tab...');

    //     // url work
    //     this.props.history.push({
    //       pathname: '/AddOrganisation',
    //       state: {
    //         Email_id: storage.myemail.myemail,
    //       },
    //     });
    //   }
    // }

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

  render() {
    return (
      <div className='profile_page'>
        <HomeResponsiveHeader />
        <SeeAllHeader />
        {/* <div className='btncontainer'>
          <div className='btns'>
            {this.state.ismentor && (
              <div
                className='btnjobadd'
                style={{ display: `${this.state.displayjobadd}` }}
              >
                <Button
                  variant='contained'
                  color='primary'
                  onClick={this.OrganisationClicked}
                >
                  ADD ORGANISATION
                </Button>
              </div>
            )}
            {this.state.isjobprovider && (
              <div
                className='btnjobadd'
                style={{ display: `${this.state.displayjobprovider}` }}
              >
                <Button
                  variant='contained'
                  color='primary'
                  onClick={this.OrganisationClicked}
                >
                  ADD ORGANISATION
                </Button>
              </div>
            )}

            <Button
              variant='contained'
              color='secondary'
              onClick={this.SeeAllOrganisationClicked}
            >
              SEE ALL ORGANISATIONS
            </Button>
          </div>
        </div> */}
        <div className='event_body'>
          <div className='event_body_heading'>ORGANISATION</div>
          <FirstFourOrganisation />
          <div className='see_more'>
            <Link to='/login/showOrganisation' className='text_decoration clr'>
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
)(withRouter(MiddlewareOrganisation));
