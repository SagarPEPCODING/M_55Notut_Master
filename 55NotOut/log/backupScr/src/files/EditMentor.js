import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/productpage.css';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import { v4 as uuidv4 } from 'uuid';
import {
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  InputLabel,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import MentorTextEditorUpdate from './MentorTextEditorUpdate';
import HomeResponsiveHeader from './HomeResponsiveHeader';

class LoginedMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      First_Name: '',
      Last_Name: '',
      Experience: '',
      Mentor_profile: '',
      topics: '',
      Contact_Number: '',
      Email_id: '',
      Languages_known: '',
      CareerSummary: '',
      No_of_Sessions: '',
      pricing: '',
      Gender: '',
      question: '',
      FeatureEvent: '',
      file: '',
      sizeNotFit: '',
      jobid: '',
      imagename: '',
      datacome: false,
    };
  }

  onChangeMentorprofile = (event) => {
    console.log('Organisation is :- ' + event.target.value);
    this.setState({ Mentor_profile: event.target.value });
  };

  onChangeFirst_Name = (event) => {
    console.log('FirstName :- ' + event.target.value);
    this.setState({ First_Name: event.target.value });
  };

  componentDidMount = () => {
    let {
      Job_id,
      First_Name,
      Last_Name,
      Experience,
      Mentor_profile,
      topics,
      Contact_Number,
      Email_id,
      Languages_known,
      CareerSummary,
      No_of_Sessions,
      pricing,
      Gender,
      question,
      Event_Feature,
      Payment,
      Feature_access,
      Event_access,
      ImageName,
    } = this.props.history.location.state.value;

    this.setState({ jobid: Job_id });
    this.setState({ First_Name: First_Name });
    this.setState({ Last_Name: Last_Name });
    this.setState({ Experience: Experience });
    this.setState({ Mentor_profile: Mentor_profile });
    this.setState({ topics: topics });
    this.setState({ Contact_Number: Contact_Number });
    this.setState({ Email_id: Email_id });
    this.setState({ Languages_known: Languages_known });
    let decodedcareer = atob(CareerSummary);
    console.log(decodedcareer);
    this.setState({ CareerSummary: decodedcareer });
    this.setState({ No_of_Sessions: No_of_Sessions });
    this.setState({ pricing: pricing });
    this.setState({ Gender: Gender });
    this.setState({ question: question });
    this.setState({ FeatureEvent: Event_Feature });
    this.setState({ imagename: ImageName });
    this.setState({ datacome: true });
  };

  onChangeEventFeature = (event) => {
    console.log(event.target.value);
    this.setState({ FeatureEvent: event.target.value });
    if (event.target.value === 'Yess') {
      console.log(true);
      console.log(this.props);
      console.log(this.state.file.name);

      this.props.history.push({
        pathname: '/login/event/featurementor',
        state: {
          First_Name: this.state.First_Name,
          Last_Name: this.state.Last_Name,
          FeatureEvent: event.target.value,
          Experience: this.state.Experience,
          Mentor_profile: this.state.Mentor_profile,
          topics: this.state.topics,
          Contact_Number: this.state.Contact_Number,
          Email_id: this.state.Email_id,
          Languages_known: this.state.Languages_known,
          CareerSummary: this.state.CareerSummary,
          No_of_Sessions: this.state.No_of_Sessions,
          pricing: this.state.pricing,
          Gender: this.state.Gender,
          question: this.state.question,
          Image_Name: this.state.file.name,
        },
      });
    }
  };

  onChangeLast_Name = (event) => {
    console.log('Last Name :- ' + event.target.value);
    this.setState({ Last_Name: event.target.value });
  };

  onChangeExperience = (event) => {
    console.log('Experience :- ' + event.target.value);
    this.setState({ Experience: event.target.value });
  };

  onChangeMentorprofile = (event) => {
    console.log('Mentor Profile :- ' + event.target.value);
    this.setState({ Mentor_profile: event.target.value });
  };

  onChangetopics = (event) => {
    console.log('topics :- ' + event.target.value);
    this.setState({ topics: event.target.value });
  };

  onChangeContact_Number = (event) => {
    console.log('Contact number :- ' + event.target.value);
    this.setState({ Contact_Number: event.target.value });
  };

  onChangeEmail_id = (event) => {
    console.log('Email is :- ' + event.target.value);
    this.setState({ Email_id: event.target.value });
  };

  onChangeLanguages_known = (event) => {
    console.log('Languages are :- ' + event.target.value);
    this.setState({ Languages_known: event.target.value });
  };

  onChangeCareerSummary = (event) => {
    console.log('career summary :- ' + event.target.value);
    this.setState({ CareerSummary: event.target.value });
  };

  onChangeNo_of_Sessions = (event) => {
    console.log('No Of sessions :- ' + event.target.value);
    this.setState({ No_of_Sessions: event.target.value });
  };

  onChangepricing = (event) => {
    console.log('Pricing is :- ' + event.target.value);
    this.setState({ pricing: event.target.value });
  };

  onChangeGender = (event) => {
    console.log('gender is :- ' + event.target.value);
    this.setState({ Gender: event.target.value });
  };

  onChangequestion = (event) => {
    console.log('Answer is :- ' + event.target.value);
    this.setState({ question: event.target.value });
  };

  upload = async (e) => {
    e.preventDefault();

    if (this.state.file.size / 1000000 > 1.0) {
      this.setState({ sizeNotFit: true });
    } else {
      const formdata = new FormData();
      formdata.append('file', this.state.file);

      console.log(formdata);
      alert(formdata.get('file'));
      console.log(this.state.file);
      try {
        const res = await axios.post('/MentorImageupload', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const { fileName, filePath } = res.data;
        this.setState({ uploadedfile: fileName, filePath });
      } catch (err) {
        if (err.response.status === 5000) {
          console.log('there was a problem with the server');
        } else {
          console.log(err.response.data.msg);
        }
      }
      this.setState({ sizeNotFit: false });
    }
  };

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
    setTimeout(() => {
      console.log(this.state.file);
      console.log(this.state.file.name);
    }, 4000);
  };

  Submit = async (event) => {
    event.preventDefault();
    const Jobid = uuidv4();
    let encodecareersummary = btoa(this.state.CareerSummary);
    let imgname = '';
    if (this.state.file.name != undefined && this.state.file.name.length > 0) {
      imgname = this.state.file.name;
    } else {
      imgname = this.state.imagename;
    }
    console.log(imgname);
    const params = JSON.stringify({
      Job_id: this.state.jobid,
      First_Name: this.state.First_Name,
      Last_Name: this.state.Last_Name,
      Experience: this.state.Experience,
      Mentor_profile: this.state.Mentor_profile,
      topics: this.state.topics,
      Contact_Number: this.state.Contact_Number,
      Email_id: this.state.Email_id,
      Languages_known: this.state.Languages_known,
      CareerSummary: encodecareersummary,
      No_of_Sessions: this.state.No_of_Sessions,
      pricing: this.state.pricing,
      Gender: this.state.Gender,
      question: this.state.question,
      Image_Name: this.state.file.name,
    });

    console.log(params);

    let { data } = await axios.post(`/api/users/updateMentor/${params}`);

    this.setState({
      First_Name: '',
      Last_Name: '',
      Experience: '',
      Mentor_profile: '',
      topics: '',
      Contact_Number: '',
      Email_id: '',
      Languages_known: '',
      CareerSummary: '',
      No_of_Sessions: '',
      pricing: '',
      Gender: '',
      question: '',
    });
  };

  mydraftdescription = (value) => {
    console.log(value);
    // var encodedStringBtoA = btoa(value);
    // console.log(encodedStringBtoA);
    this.setState({ CareerSummary: value });
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='addpro'>ADD Mentor...</div>
        <div className='adduserform'>
          <form onSubmit={this.Submit}>
            {/* First Name */}
            <label className='flex_row'>
              <div className='labelpro'>First Name: </div>
              <input
                type='First Name'
                name='First Name'
                placeholder='Write First Name here'
                value={this.state.First_Name}
                className='search_inputproMentor'
                onChange={this.onChangeFirst_Name}
              />
            </label>

            {/* Last Name */}
            <label className='flex_row'>
              <div className='labelpro'>Last Name: </div>
              <input
                type='Last_Name'
                name='Last_Name'
                placeholder='Write Last Name here'
                value={this.state.Last_Name}
                className='search_inputproMentor'
                onChange={this.onChangeLast_Name}
              />
            </label>

            {/* Experience */}

            <label className='flex_row'>
              <div className='labelpro'>Experience: </div>
              <input
                type='Experience'
                name='Experience'
                placeholder='Write Experience here'
                value={this.state.Experience}
                className='search_inputproMentor'
                onChange={this.onChangeExperience}
              />
            </label>

            <label className='flex_row'>
              <div className='labelpro'>Mentor Profile: </div>
              <input
                type='Mentor'
                name='Mentor'
                placeholder='Fill this field...'
                value={this.state.Mentor_profile}
                className='search_inputproMentor'
                onChange={this.onChangeMentorprofile}
              />
            </label>

            {/* Topics */}

            <label className='flex_row'>
              <div className='labelpro'>Topic: </div>
              <input
                type='topic'
                name='topic'
                placeholder='Write Topic here'
                value={this.state.topics}
                className='search_inputproMentor'
                onChange={this.onChangetopics}
              />
            </label>

            {/* Contact  Number */}

            <label className='flex_row'>
              <div className='labelpro'>Contact Number: </div>
              <input
                type='contact_number'
                name='contact_number'
                placeholder='Write contact_number here'
                value={this.state.Contact_Number}
                className='search_inputproMentor'
                onChange={this.onChangeContact_Number}
              />
            </label>

            {/* Email_id */}

            <label className='flex_row'>
              <div className='labelpro'>Email_id: </div>
              <input
                type='email_id'
                name='email_id'
                placeholder='Write Email Id here'
                value={this.state.Email_id}
                className='search_inputproMentor'
                onChange={this.onChangeEmail_id}
              />
            </label>

            {/* Languages_known */}

            <label className='flex_row'>
              <div className='labelpro'>Languages known: </div>
              <input
                type='languages_known'
                name='languages_known'
                placeholder='Add Languages here'
                value={this.state.Languages_known}
                className='search_inputproMentor'
                onChange={this.onChangeLanguages_known}
              />
            </label>

            {/* CareerSummary */}

            <label className='flex_row'>
              <div className='labelpro'>Career Summary: </div>

              {this.state.datacome && (
                <MentorTextEditorUpdate
                  mydraftdescription={this.mydraftdescription}
                  value={this.state.CareerSummary}
                ></MentorTextEditorUpdate>
              )}
            </label>

            {/* No_of_Sessions */}

            <label className='flex_row'>
              <div className='labelpro'>Number Of Sessions: </div>
              <input
                type='no_of_sessions'
                name='no_of_sessions'
                placeholder='Add Number Of Sessions here'
                value={this.state.No_of_Sessions}
                className='search_inputproMentor'
                onChange={this.onChangeNo_of_Sessions}
              />
            </label>

            {/* pricing */}

            <label className='flex_row'>
              <div className='labelpro'>Pricing: </div>
              <input
                type='price'
                name='price'
                placeholder='Add Price here'
                value={this.state.pricing}
                className='search_inputproMentor'
                onChange={this.onChangepricing}
              />
            </label>

            {/* Gender */}

            <label className='flex_row'>
              <div className='labelpro'>Gender: </div>
              <input
                type='gender'
                name='gender'
                placeholder='Add Gender here'
                value={this.state.Gender}
                className='search_inputproMentor'
                onChange={this.onChangeGender}
              />
            </label>

            {this.state.sizeNotFit && (
              <div className='1212'>
                size Not valid, Image Size Should Be Less Than or Equal To 1MB
              </div>
            )}
            <div className='imageinputcontainer'>
              <input type='file' onChange={this.onChange}></input>
              <div className='uploadbtn' onClick={this.upload}>
                upload
              </div>
            </div>

            <label className='flex_row'>
              <div className='labelpro'>Do you want feature this post: </div>
              <Select
                className='search_inputdescription'
                onChange={this.onChangeEventFeature}
                placeholder='Event Type'
                name='Event Feature'
                value = {this.state.FeatureEvent}
              >
                {/* <option disabled={true} value=''>
                  Feature Event
                </option> */}
                <MenuItem value={'Yess'}>Yess</MenuItem>
                <MenuItem value={'No'}>No</MenuItem>
              </Select>
            </label>

            <div className='btn'>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                className='flex_row'
              >
                UPDATE
              </Button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(LoginedMentor);
