import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import '../css_Files/edituserprofileviaadmin.css';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

class EdituserProfileviaAdmin extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.history.location.state.myemail);
    this.state = {
      myemail: this.props.history.location.state.myemail,
      myindex: this.props.history.location.state.index,
      mydata: [],
      myusername: '',
      myemail_id: '',
      mypassword: '',
      myphonenumber: '',
      datacame: false,
    };
  }

  onChangeUserName = (event) => {
    console.log(event.target.value);
    this.setState({ myusername: event.target.value });
  };

  onChangeMail_id = (event) => {
    console.log(event.target.value);
    this.setState({ myemail_id: event.target.value });
  };

  onChangePassword = (event) => {
    console.log(event.target.value);
    this.setState({ mypassword: event.target.value });
  };

  onChangePhoneNumber = (event) => {
    console.log(event.target.value);
    this.setState({ myphonenumber: event.target.value });
  };

  componentDidMount = async () => {
    let { data } = await axios.get('/api/usersList');
    console.log(data);
    console.log(data.user[this.state.myindex]);
    const myactualdata = data.user[this.state.myindex];
    if (!this.state.datacame) {
      console.log('am in');
      this.setState({ myusername: myactualdata.User_name });
      this.setState({ myemail_id: myactualdata.Email_id });
      this.setState({ mypassword: myactualdata.confirm_Password });
      this.setState({ myphonenumber: myactualdata.Phone_number });
      this.setState({ datacame: true });
    }
    this.setState({ mydata: myactualdata });
  };

  Submit = async (event) => {
    event.preventDefault();
    // console.log(event.target);
    let val = `api/users/${this.state.mail_id}`;
    try {
      let { data } = await axios.post(
        `/api/users/Editsignup/${this.state.myemail_id}/${this.state.mypassword}/${this.state.mypassword}/${this.state.myusername}/${this.state.myphonenumber}/${this.state.mydata.token}/${this.state.mydata.Authorization}`
      );
      let user = data.user[0];
      alert('done');
    } catch (error) {
      // this.setState('');
      console.log('error :- ' + error);
    }
  };

  render() {
    console.log(this.state.myusername);
    console.log(this.state.myemail_id);
    return (
      <>
        <HomeResponsiveHeader />
        <SeeAllHeader></SeeAllHeader>
        <div className='edituserEmail'>
          <form className='editflexviaadmin' onSubmit={this.Submit}>
            {/* <ParticlesBg num={50} type='circle' bg={true} /> */}
            <label className='editflexviaadminusername'>
              <div className='editusername'>User Name </div>
              <input
                type='user_name'
                name='user_name'
                placeholder='Write Your User Name here...'
                value={this.state.myusername}
                className='search_user_name'
                onChange={this.onChangeUserName}
              />
            </label>
            <label className='editflexviaadminuserEmail_id'>
              <div className='editEmail_id'>Enter your Email_id </div>
              <input
                type='Mail_id'
                name='Mail_id'
                placeholder='Write Your Mail_id...'
                value={this.state.myemail_id}
                className='searchinput'
                //   onChange={this.onChangeMail_id}
              />
            </label>
            <label className='editflexviaadminuserPassword'>
              <div className='editPassword'>Password </div>
              <input
                type='CPassword'
                name='Password'
                placeholder='Write Your Password...'
                value={this.state.mypassword}
                className='marginleft'
                onChange={this.onChangePassword}
              />
            </label>

            <label className='editflexviaadminuserPhoneNumber'>
              <div className='editPhoneNumber'>Phone Number </div>
              <input
                type='Phone Number'
                name='Phone Number'
                placeholder='Write Your Phone Number here...'
                value={this.state.myphonenumber}
                className='searchinput_phone_number'
                onChange={this.onChangePhoneNumber}
              />
            </label>

            <div className='btnAdmin'>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                className='flexrow'
              >
                ADD
              </Button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default EdituserProfileviaAdmin;
