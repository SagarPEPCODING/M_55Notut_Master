import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ParticlesBg from 'particles-bg';
import '../css_Files/signup.css';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import AppConfig from '../App.config.js';
import Footer from './Footer';
import NewHeader from './NewHeader';
import PersonIcon from '@material-ui/icons/Person';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
// import '../css_Files/popupsignup.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import HomeResponsiveHeader from './HomeResponsiveHeader';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',

      mail_id: '',
      password: '',
      current_password: '',
      phone_number: '',

      settoken: '',
      setError: '',

      senior: false,
      searchsenior: false,

      optionClicked: false,

      areyouaseniorprofessional: false,
      jobseekerclicked: false,
      mentorclicked: false,
      dataexist: false,
      backColorSenior: 'black',
      backColorSearch: 'black',
      jobseekerbackColor: '',
      mentorbackColor: '',
    };

    this.Submit = this.Submit.bind(this);
  }

  componentDidMount = async () => {
    if (this.state.mail_id.length > 0) {
      let { data } = await axios.get(`api/users/${this.state.mail_id}`);
      console.log(data);
    }
  };

  onChangeMail_id = (event) => {
    this.setState({ mail_id: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeCurrentPassword = (event) => {
    this.setState({ current_password: event.target.value });
  };

  onChangeUserName = (event) => {
    console.log(event.target.value);
    this.setState({ user_name: event.target.value });
  };

  onChangePhoneNumber = (event) => {
    console.log(event.target.value);
    this.setState({ phone_number: event.target.value });
  };

  async Submit(event) {
    event.preventDefault();

    if (!this.state.settoken) {
      this.setState({ setError: 'You Must Verify The Captcha' });
      return;
    }

    if (this.state.mail_id.length == 0) {
      this.setState({ mailidlength: false });
    } else {
      let { data } = await axios.get(`api/users/${this.state.mail_id}`);
      console.log(data);
      if (data.user.length > 0) {
        setTimeout(() => {
          this.setState({ dataexist: true });
        }, 10000);
      } else {
        setTimeout(() => {
          this.setState({ dataexist: false });
        }, 10000);
      }
    }

    if (!this.state.dataexist) {
      console.log(this.state.dataexist);
      let val2 = '';
      if (this.state.senior) {
        val2 = 'Senior professional';
      }

      if (this.state.searchsenior) {
        val2 = 'Not a Senior Professional';
      }

      let mentorORjobseeker = '';
      if (this.state.mentorclicked) {
        mentorORjobseeker = 'Mentor';
      } else {
        mentorORjobseeker = 'Job Seeker';
      }

      let val = `api/users/${this.state.mail_id}`;
      try {
        // console.log(val2 + '*************************************');
        let { data } = await axios.post(
          `api/users/signup/${this.state.mail_id}/${this.state.password}/${this.state.current_password}/${this.state.user_name}/${this.state.phone_number}/${this.state.settoken}/${val2}/${mentorORjobseeker}`
        );
        let user = data.user[0];
        alert('done');
      } catch (error) {
        alert('error :- ' + error);
      }

      const obj = JSON.stringify({
        key1: '',
        key2: '',
        key3: '',
        key4: '',
        key5: '',
        key6: this.state.user_name,
        key7: '',
        key8: '',
        key9: '',
        key10: '',
        key11: '',
        key12: '',
        key13: '',
        key14: '',
        key15: this.state.mail_id,
      });

      try {
        let { data } = await axios.post(`/api/users/login/userprofile/${obj}`);
        let user = data.user[0];
        alert('done');
      } catch (error) {
        alert('error :- ' + error);
      }

      try {
        let { data } = await axios.post(
          `/api/users/addProfileImagetable/nothing/${this.state.mail_id}`
        );
        let user = data.user[0];
        alert('done');
      } catch (error) {
        alert('error :- ' + error);
      }

      if (val2 === 'Not a Senior Professional') {
        let postedjobs = 0;
        try {
          let { data } = await axios.post(
            `/api/users/addinJobProviderDashboard/${this.state.mail_id}/${postedjobs}`
          );
          let user = data.user[0];
          alert('done');
        } catch (error) {
          alert('error :- ' + error);
        }
      }
    }
  }

  // let backColor = '';

  Expired = (event) => {
    alert('Captcha Expired');
  };

  onChangeToken = (event) => {
    console.log(event);
    this.setState({ settoken: event });
  };

  SeniorProfessional = () => {
    this.setState({ senior: true });
    this.setState({ optionClicked: true });
    this.setState({ backColorSenior: '#00000066' });
    this.setState({ backColorSearch: 'black' });
    this.setState({
      areyouaseniorprofessional: !this.state.areyouaseniorprofessional,
    });
  };

  searchSeniorProfessional = () => {
    this.setState({ searchsenior: true });
    this.setState({ optionClicked: true });
    this.setState({ backColorSenior: 'black' });
    this.setState({ backColorSearch: '#00000066' });
    this.setState({ areyouaseniorprofessional: false });
    this.setState({ jobseekerbackColor: 'black' });
    this.setState({ mentorbackColor: 'black' });
  };

  JobSeekerClicked = (event) => {
    console.log('jobseekerClicked');
    this.setState({ jobseekerclicked: true });
    this.setState({ jobseekerbackColor: '#00000066' });
    this.setState({ mentorbackColor: 'black' });
  };

  MentorClicked = (event) => {
    console.log('mentorClicked');
    this.setState({ mentorclicked: true });
    this.setState({ jobseekerbackColor: 'black' });
    this.setState({ mentorbackColor: '#00000066' });
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <div className=' signupContainermm'>
          <div className='signup_container'>
            <form className='flex form' onSubmit={this.Submit}>
              <label className='flex_row margin'>
                <div className='usernameContainerofsignup'>
                  <div className='flex usernameiconContainer'>
                    <i class='fas fa-user'></i>
                  </div>
                </div>
                <div className='maxwidth'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Name'
                    id='username'
                    value={this.state.user_name}
                    onChange={this.onChangeUserName}
                    required
                  ></input>
                </div>
              </label>
              {this.state.dataexist && (
                <div className='thisisalreadyexist'>
                  This Email Already Exist
                </div>
              )}
              <label className='flex_row'>
                <div className='usernameContainerofsignup'>
                  <div className='flex usernameiconContainer'>
                    <i class='fas fa-envelope'></i>
                  </div>
                </div>
                {/* <input
                  type='Mail_id'
                  name='Mail_id'
                  placeholder='Write Your Mail_id...'
                  value={this.state.mail_id}
                  className='search_input'
                  onChange={this.onChangeMail_id}
                /> */}
                <div className='maxwidth'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Email Id'
                    id='Email Id'
                    value={this.state.mail_id}
                    onChange={this.onChangeMail_id}
                    required
                  ></input>
                </div>
              </label>
              <label className='flex_row margin'>
                <div className='usernameContainerofsignup'>
                  <div className='flex usernameiconContainer'>
                    <i class='fas fa-lock'></i>
                  </div>
                </div>
                {/* <input
                  type='Password'
                  name='Password'
                  placeholder='Write Your Password...'
                  value={this.state.password}
                  className='margin_left'
                  onChange={this.onChangePassword}
                /> */}
                <div className='maxwidth'>
                  <input
                    type='password'
                    class='form-control'
                    placeholder='Password'
                    id='Password'
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    required
                  ></input>
                </div>
              </label>
              <label className='flex_row margin'>
                <div className='usernameContainerofsignup'>
                  <div className='flex usernameiconContainer'>
                    <i class='fas fa-lock'></i>
                  </div>
                </div>

                {/* <input
                  type='Password'
                  name='Password'
                  placeholder='Write Your Confirm Password...'
                  value={this.state.cpassword}
                  className='margin_leftcon'
                  onChange={this.onChangeCurrentPassword}
                /> */}
                <div className='maxwidth'>
                  <input
                    type='password'
                    class='form-control'
                    placeholder='Confirm Password'
                    id='Confirm Password'
                    value={this.state.cpassword}
                    onChange={this.onChangeCurrentPassword}
                    required
                  ></input>
                </div>
              </label>
              <label className='flex_row margin'>
                <div className='usernameContainerofsignup'>
                  <div className='flex usernameiconContainer'>
                    <i class='fas fa-phone'></i>
                  </div>
                </div>
                {/* <input
                  type='Phone Number'
                  name='Phone Number'
                  placeholder='Write Your Phone Number here...'
                  value={this.state.phone_number}
                  className='search_input_phone_number'
                  onChange={this.onChangePhoneNumber}
                /> */}
                <div className='maxwidth'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Phone Number'
                    id='Phone Number'
                    value={this.state.phone_number}
                    onChange={this.onChangePhoneNumber}
                    required
                  ></input>
                </div>
              </label>

              <div className='signupTypeOfContainer'>
                <div className='typeofusercontainer'>
                  <div
                    className='seniorprefessional'
                    onClick={this.SeniorProfessional}
                    style={{ background: `${this.state.backColorSenior}` }}
                  >
                    Senior Professional
                  </div>
                  <div
                    className='lookingseniorprofessional'
                    onClick={this.searchSeniorProfessional}
                    style={{ background: `${this.state.backColorSearch}` }}
                  >
                    Looking For A Senior Professional
                  </div>
                </div>

                {this.state.areyouaseniorprofessional && (
                  <div className='whichtypeofseniorContainer'>
                    <div
                      className='JobseekerContainer'
                      onClick={this.JobSeekerClicked}
                      style={{ background: `${this.state.jobseekerbackColor}` }}
                    >
                      Job Seeker
                    </div>

                    <div
                      className='MentorContainer'
                      onClick={this.MentorClicked}
                      style={{ background: `${this.state.mentorbackColor}` }}
                    >
                      Mentor
                    </div>
                  </div>
                )}
              </div>

              <div className='captchaContainer'>
                <ReCAPTCHA
                  sitekey={AppConfig.GOOGLE.reCaptcha}
                  onChange={this.onChangeToken}
                  className='captcha'
                  onExpired={(e) => this.setState({ settoken: '' })}
                  onErrored={this.Expired}
                />
              </div>

              <div className='displayflex justifycontent'>
                <div className='signbtn' onClick={this.Submit}>
                  <Button
                    variant='contained'
                    color='secondary'
                    type='submit'
                    className='flex_row'
                  >
                    SignUp
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default SignUp;
