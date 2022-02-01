import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/profilecss.css';
import { Redirect, Link } from 'react-router-dom';
import logo from '../foreantech_logo.png';
import FirstFiveJobs from './FirstFiveJobs';
import Footer from './Footer';
import { withRouter } from 'react-router';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import { connect } from 'react-redux';
import store from '../Store/store';
import NewHeader from './NewHeader';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import SeeAllHeader from './SeeAllHeader';

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

class MiddlewareJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameofproduct: '',
      descriptionofobject: '',
      user: [],
      stateProfile: false,
      userType: '',
    };
  }

  componentDidMount = () => {
    let usertype = localStorage.getItem('usertype');
    this.setState({ userType: usertype });
  };

  AddJobClicked = (event) => {
    // const serializedState = localStorage.getItem('state');
    // console.log(serializedState);
    // let obj = JSON.parse(serializedState);
    // console.log(obj);

    // console.log(this.state.Email_id);
    // if (obj !== null && obj.myemail.myemail.length > 0) {
    //   this.props.history.push({
    //     pathname: '/Jobs',
    //     state: {
    //       Email_id: obj.myemail.myemail,
    //     },
    //   });
    // } else {
    //   this.props.history.push({
    //     pathname: '/login/Job',
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
    //       pathname: '/Jobs',
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
    //       pathname: '/Jobs',
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

  EventClicked = () => {
    <Redirect to='/middleware/Event' />;
  };

  render() {
    return (
      <div className='profile_page'>
        <HomeResponsiveHeader />
        <SeeAllHeader />
        {/* <div className='header'>
          <div className='logo'>
            <img src={logo} />
          </div>
          
          <div className='login_signup_btns'>
            <div className='logsignbtns'>
              <Button variant='contained' color='secondary'>
                <Link to='/login' className='text_decoration clr'>
                  Login
                </Link>
              </Button>
              <Button variant='contained' color='primary'>
                <Link to='/signup' className='text_decoration clr'>
                  SignUp
                </Link>
              </Button>
            </div>
          </div>
        </div> */}

        <div className='btncontainer'>
          <div className='btns'>
            {/* <Button
              variant='contained'
              color='primary'
              onClick={this.AddJobClicked}
            >
              ADD JOBS
            </Button> */}
            <Button
              variant='contained'
              color='secondary'
              onClick={this.SeeAllJobsClicked}
            >
              {/* <Link to='/login/showJobs' className='text_decoration clr'> */}
              SEE ALL JOBS
              {/* </Link> */}
            </Button>
          </div>
        </div>

        <div className='event_body'>
          <div className='event_body_heading'>JOBS</div>
          <FirstFiveJobs />
          <div className='see_more'>
            <Link to='/login/showTalents' className='text_decoration clr'>
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
)(withRouter(MiddlewareJob));
