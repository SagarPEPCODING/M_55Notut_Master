import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/productpage.css';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import ImageInsertion from './ImageInsertion';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  InputLabel,
} from '@material-ui/core';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

class Job extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.location.state.value.Email_id);

    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();

    var today = new Date(),
      time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    this.state = {
      job_profile: '',
      Company_Location: '',
      Job_Industry: '',
      Company_Experience: '',
      Company_size: '',
      Company_Type: '',
      Required_Experience: '',
      Work_from: '',
      Job_Type: '',
      Language_Required: '',
      Pay_Range: '',
      Required_Skills_Competencies: '',
      Soft_Skills: '',
      About_Role: '',
      About_Company: '',
      Email_id: '',
      Starting_Date: '',
      Ending_Date: '',

      Company_Experience_counter: 0,
      ExperienceRequiredCounter: 0,

      FeatureEvent: '',

      sizeNotFit: '',

      currentDate: date,
      currentTime: time,
    };
  }

  onChangecompanyExperience = (event) => {
    console.log('Company Experience' + event.target.value);
    this.setState({ Company_Experience: event.target.value });
  };

  useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 100,
    },
  }));

  onChangeJobprofile = (event) => {
    console.log('Job Profile is :- ' + event.target.value);
    this.setState({ job_profile: event.target.value });
  };

  onChangeEventFeature = (event) => {
    console.log(event.target.value);
    this.setState({ FeatureEvent: event.target.value });
    if (event.target.value === 'Yess') {
      // console.log(true);
      console.log(this.props);
      this.props.history.push({
        pathname: '/login/event/featurejob',
        state: {
          job_profile: this.state.job_profile,
          Company_Location: this.state.Company_Location,
          Job_Industry: this.state.Job_Industry,
          Company_Experience: this.state.Company_Experience_counter,
          Company_size: this.state.Company_size,
          Company_Type: this.state.Company_Type,
          Required_Experience: this.state.ExperienceRequiredCounter,
          Work_from: this.state.Work_from,
          Job_Type: this.state.Job_Type,
          Language_Required: this.state.Language_Required,
          Pay_Range: this.state.Pay_Range,
          Required_Skills_Competencies: this.state.Required_Skills_Competencies,
          Soft_Skills: this.state.Soft_Skills,
          About_Role: this.state.About_Role,
          About_Company: this.state.About_Company,
          Email_id: this.state.Email_id,
          Starting_Date: this.state.Starting_Date,
          Ending_Date: this.state.Ending_Date,
          FeatureEvent: event.target.value,
          Job_Image: this.state.file.name,
        },
      });
    }
  };

  onChangeJobCompanyLocation = (event) => {
    console.log('Company Location is :- ' + event.target.value);
    this.setState({ Company_Location: event.target.value });
  };

  onChangeEvent_Job_Industry = (event) => {
    console.log('Job_industry is :- ' + event.target.value);
    this.setState({ Job_Industry: event.target.value });
  };

  onChangeJob_Type = (event) => {
    const arr = [];
    arr.push('Volunteer');
    arr.push('Advising');
    arr.push('Freelance');
    arr.push('Part Time');
    arr.push('Full Time');

    console.log('Job Type :- ' + arr[event.target.value - 1]);
    this.setState({ Job_Type: arr[event.target.value - 1] });
  };

  onChangeCompanyType = (event) => {
    console.log('Company Type :- ' + event.target.value);
    this.setState({ Company_Type: event.target.value });
  };

  onChangeRequired_Experience = (event) => {
    console.log('Experience Required :- ' + event.target.value);
    this.setState({ Required_Experience: event.target.value });
  };

  onChangeWork_from = (event) => {
    console.log('Work From :- ' + event.target.value);
    this.setState({ Work_from: event.target.value });
  };

  onChangeLanguage_Required = (event) => {
    console.log('Language Required :- ' + event.target.value);
    this.setState({ Language_Required: event.target.value });
  };

  onChangePay_Range = (event) => {
    console.log('pay scale :- ' + event.target.value);
    this.setState({ Pay_Range: event.target.value });
  };

  onChangeRequired_Skills_Competencies = (event) => {
    console.log('Competencies :- ' + event.target.value);
    this.setState({ Required_Skills_Competencies: event.target.value });
  };

  onChangeSoft_Skills = (event) => {
    console.log('Soft Skills are :- ' + event.target.value);
    this.setState({ Soft_Skills: event.target.value });
  };

  onChangeAbout_Role = (event) => {
    console.log('About Role :- ' + event.target.value);
    this.setState({ About_Role: event.target.value });
  };

  onChangeAbout_Company = (event) => {
    console.log('About Company :- ' + event.target.value);
    this.setState({ About_Company: event.target.value });
  };

  onChangeEmail_id = (event) => {
    console.log('Email _ id' + event.target.value);
    this.setState({ Email_id: event.target.value });
  };

  onChangeStarting_Date = (event) => {
    console.log('Strating_date :- ' + event.target.value);
    this.setState({ Starting_Date: event.target.value });
  };

  onChangeEnding_Date = (event) => {
    console.log('Ending_date :- ' + event.target.value);
    this.setState({ Ending_Date: event.target.value });
  };

  onChangeexperienceRequired = (event) => {
    console.log('Experience Required :- ' + event.target.value);
    this.setState({ ExperienceRequiredCounter: event.target.value });
  };

  onChangecompanyExperience = (event) => {
    console.log('Company experience :- ' + event.target.value);
    console.log(typeof event.target.value);
    this.setState({ Company_Experience_counter: event.target.value });
  };

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
    setTimeout(() => {
      console.log(this.state.file);
      console.log(this.state.file.name);
    }, 4000);
  };

  upload = async (e) => {
    const formdata = new FormData();
    formdata.append('file', this.state.file);

    console.log(formdata);
    // alert(formdata.get('file'));
    console.log(this.state.file);

    if (this.state.file.size / 1000000 > 1.0) {
      this.setState({ sizeNotFit: true });
    } else {
      try {
        const res = await axios.post('/JobImageupload', formdata, {
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
    }
  };

  Submit = async (event) => {
    event.preventDefault();
    const Jobid = uuidv4();
    console.log(this.state.Company_Experience_counter);
    console.log(this.state.ExperienceRequiredCounter);
    const params = JSON.stringify({
      // Email_id: this.props.location.state.Email_id,
      Job_id: Jobid,
      job_profile: this.state.job_profile,
      Company_Location: this.state.Company_Location,
      Job_Industry: this.state.Job_Industry,
      Company_Experience: this.state.Company_Experience_counter,
      Company_size: this.state.Company_size,
      Company_Type: this.state.Company_Type,
      Required_Experience: this.state.ExperienceRequiredCounter,
      Work_from: this.state.Work_from,
      Job_Type: this.state.Job_Type,
      Language_Required: this.state.Language_Required,
      Pay_Range: this.state.Pay_Range,
      Required_Skills_Competencies: this.state.Required_Skills_Competencies,
      Soft_Skills: this.state.Soft_Skills,
      About_Role: this.state.About_Role,
      About_Company: this.state.About_Company,
      Email_id: this.state.Email_id,
      Starting_Date: this.state.Starting_Date,
      Ending_Date: this.state.Ending_Date,
      Event_Feature: event.target.value,
      Job_Image: this.state.file.name,
    });

    console.log(params);

    if (this.state.Email_id === this.props.location.state.value.Email_id) {
      console.log('hii i am in job');
      let { data } = await axios.post(`/api/users/addjob/${params}`);
      console.log(this.props.location.state.value.Email_id);
      let data1 = await axios.get(
        `/api/user/getpostjobdata/${this.props.location.state.value.Email_id}`
      );
      console.log(data1.data.user);
      let mycount = 0;
      if (data1.data.user[0] === undefined) {
        mycount = 1;
        await axios.post(
          `/api/user/postjobproviderjob/${this.props.location.state.value.Email_id}/${mycount}`
        );
      } else {
        mycount = data1.data.user[0].NoOfJobsPosted;
        mycount = mycount + 1;
        await axios.post(
          `/api/user/postjobproviderjobdata/${this.props.location.state.value.Email_id}/${mycount}`
        );
      }

      // console.log(data1);

      await axios.post(
        `/api/user/postedjobss/${this.props.location.state.value.Email_id}/${Jobid}/${this.state.job_profile}/${this.state.Company_Location}/${this.state.currentDate}/${this.state.currentTime}`
      );
    }

    this.setState({
      job_profile: '',
      job_description: '',
      Event_img_Url: '',
      Company_Location: '',
      Job_Industry: '',
      Company_Experience: '',
      Comapny_size: '',
      Company_Type: '',
      Required_Experience: '',
      Work_from: '',
      Job_Type: '',
      Language_Required: '',
      Pay_Range: '',
      Required_Skills_Competencies: '',
      Soft_Skills: '',
      About_Role: '',
      About_Company: '',
      Email_id: '',
      Starting_Date: '',
      Ending_Date: '',
    });
  };

  onChangeCompany_size = (event) => {
    const arr = [];
    arr.push('1 - 20');
    arr.push('20 - 50');
    arr.push('50 - 100');
    arr.push('100 - 200');
    arr.push('200 - 300');
    arr.push('More Than 300');
    console.log('Company Size' + arr[event.target.value - 1]);
    this.setState({ Company_size: arr[event.target.value - 1] });
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='addpro'>ADD JOB...</div>
        <div className='adduserform'>
          <form onSubmit={this.Submit}>
            <label className='flex_row'>
              <div className='labelpro'>Job Profile: </div>
              <input
                type='job_profile'
                name='job_profile'
                placeholder='Write Job Profile Here'
                value={this.state.job_profile}
                className='search_inputprojob'
                onChange={this.onChangeJobprofile}
              />
            </label>

            {/* <ImageInsertion /> */}

            {/* Location Of Company */}

            <label className='flex_row'>
              <div className='labelpro'>Location Of Company: </div>
              <input
                type='Company_location'
                name='Company_location'
                placeholder='Write Company Location Here'
                value={this.state.Company_Location}
                className='search_inputdescription'
                onChange={this.onChangeJobCompanyLocation}
              />
            </label>

            {/* Job Industry */}

            <label className='flex_row'>
              <div className='labelpro'>Company Name: </div>
              <input
                name='Event'
                type='Event'
                placeholder='Write Company Name Here'
                value={this.state.Job_Industry}
                className='search_inputimageurlJob'
                onChange={this.onChangeEvent_Job_Industry}
              />
            </label>

            {/* Company Size */}

            <label className='flex_row'>
              <div className='labelpro'>Company Size: </div>

              <Select
                className='search_inputdescription'
                onChange={this.onChangeCompany_size}
                placeholder='Number Of Workers'
              >
                {/* <InputLabel>Number Of Workers</InputLabel> */}
                {/* <option value='DEFAULT' disabled>
                  Number Of Workers
                </option> */}
                <option disabled={true} value=''>
                  Number Of Workers
                </option>
                <MenuItem value={1}>1 - 20</MenuItem>
                <MenuItem value={2}>20 - 50</MenuItem>
                <MenuItem value={3}>50 - 100</MenuItem>
                <MenuItem value={4}>100 - 200</MenuItem>
                <MenuItem value={5}>200 - 300</MenuItem>
                <MenuItem value={6}>More Than 300</MenuItem>
              </Select>
              {/* </FormControl> */}
            </label>

            {/* Job Type */}

            <label className='flex_row'>
              <div className='labelpro'>Job Type: </div>
              {/* <input
                type='Job Type'
                name='Job Type'
                placeholder='Write Job Type Here'
                value={this.state.Job_Type}
                className='search_inputdescription'
                onChange={this.onChangeJob_Type}
              /> */}
              <Select
                className='search_inputdescription'
                onChange={this.onChangeJob_Type}
                placeholder='Job Type'
              >
                {/* <InputLabel>Number Of Workers</InputLabel> */}
                {/* <option value='DEFAULT' disabled>
                  Number Of Workers
                </option> */}
                <option disabled={true} value=''>
                  Job Type
                </option>
                <MenuItem value={1}>Volunteer</MenuItem>
                <MenuItem value={2}>Advising</MenuItem>
                <MenuItem value={3}>Freelance</MenuItem>
                <MenuItem value={4}>Part Time</MenuItem>
                <MenuItem value={5}>Full TIme</MenuItem>
              </Select>
            </label>

            {/* Company Type */}

            <label className='flex_row'>
              <div className='labelpro'>Company Type </div>
              <input
                type='Company Type'
                name='Company Type'
                placeholder='Write Company Type Here'
                value={this.state.Company_Type}
                className='search_inputdescription'
                onChange={this.onChangeCompanyType}
              />
            </label>

            {/* Required Experience For Company */}

            <label className='flex_row'>
              <div className='labelpro'>Experience Required: </div>
              <div class='counter search_inputprojob'>
                {/* <Button variant='contained'>
                  {this.state.Company_Experience_counter}
                </Button> */}
                <input
                  placeholder={this.state.Company_Experience_counter}
                  value={this.state.ExperienceRequiredCounter}
                  className='search_inputdescriptionCompanyExperience'
                  onChange={this.onChangeexperienceRequired}
                />
                <Button
                  variant='contained'
                  onClick={() => {
                    console.log(this.state.ExperienceRequiredCounter);
                    const ans = parseInt(this.state.ExperienceRequiredCounter);
                    this.setState({
                      ExperienceRequiredCounter: ans + 1,
                    });
                  }}
                >
                  Inc
                </Button>
                <Button
                  variant='contained'
                  onClick={() => {
                    console.log(this.state.ExperienceRequiredCounter);
                    this.setState({
                      ExperienceRequiredCounter:
                        this.state.ExperienceRequiredCounter - 1,
                    });
                  }}
                >
                  Dec
                </Button>
              </div>
            </label>

            {/* Work From */}

            <label className='flex_row'>
              <div className='labelpro'>Work From </div>
              <input
                type='Work From'
                name='Work From'
                placeholder='Write Work From Home or Office'
                value={this.state.Work_from}
                className='search_inputdescription'
                onChange={this.onChangeWork_from}
              />
            </label>

            {/* Language Required */}

            <label className='flex_row'>
              <div className='labelpro'>Language Required </div>
              <input
                type='language_required'
                name='language_required'
                placeholder='Write Language Required Here'
                value={this.state.Language_Required}
                className='search_inputdescription'
                onChange={this.onChangeLanguage_Required}
              />
            </label>

            {/* Pay Range */}

            <label className='flex_row'>
              <div className='labelpro'>Pay Per Annum: </div>
              <input
                type='annual_income'
                name='annual_income'
                placeholder='Write Annual Income Here'
                value={this.state.Pay_Range}
                className='search_inputdescription'
                onChange={this.onChangePay_Range}
              />
            </label>

            {/* Required Skills or Competencies */}

            <label className='flex_row'>
              <div className='labelpro'>Required Skills or Competencies: </div>
              <input
                type='RequiredSkills'
                name='RequiredSkills'
                placeholder='Write Required Skills Here'
                value={this.state.Required_Skills_Competencies}
                className='search_inputdescription'
                onChange={this.onChangeRequired_Skills_Competencies}
              />
            </label>

            {/* Soft Skills */}

            <label className='flex_row'>
              <div className='labelpro'>Soft Skills: </div>
              <input
                type='Soft Skills'
                name='Soft Skills'
                placeholder='Write Soft Skills Here'
                value={this.state.Soft_Skills}
                className='search_inputdescription'
                onChange={this.onChangeSoft_Skills}
              />
            </label>

            {/* About the Role */}

            <label className='flex_row'>
              <div className='labelpro'>About the Role :</div>
              <input
                type='aboutRole'
                name='aboutRole'
                placeholder='Write About the Role Here Regarding Job'
                value={this.state.About_Role}
                className='search_inputdescription'
                onChange={this.onChangeAbout_Role}
              />
            </label>

            {/* About Company */}

            <label className='flex_row'>
              <div className='labelpro'>About Company : </div>
              <input
                type='About_company'
                name='About_company'
                placeholder='Write About Company'
                value={this.state.About_Company}
                className='search_inputdescription'
                onChange={this.onChangeAbout_Company}
              />
            </label>

            {/* Email Id */}

            <label className='flex_row'>
              <div className='labelpro'>Email_Id : </div>
              <input
                type='Email_id'
                name='Email_id'
                placeholder='Write Your Email id here'
                value={this.state.Email_id}
                className='search_inputdescription'
                onChange={this.onChangeEmail_id}
              />
            </label>

            {/* Starting Date */}

            <label className='flex_row'>
              <div className='labelpro'>Starting Date Of Application : </div>
              <input
                type='Starting_date'
                name='Starting_date'
                placeholder='Write Starting date of Application here'
                value={this.state.Starting_Date}
                className='search_inputdescription'
                onChange={this.onChangeStarting_Date}
              />
            </label>

            {/* Email Id */}

            <label className='flex_row'>
              <div className='labelpro'>Ending Date Of Application : </div>
              <input
                type='Ending_date'
                name='Ending_date'
                placeholder='Write Ending date of application here'
                value={this.state.Ending_Date}
                className='search_inputdescription'
                onChange={this.onChangeEnding_Date}
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
              <div className='labelpro'>Do you want feature this Job: </div>
              <Select
                className='search_inputdescription'
                onChange={this.onChangeEventFeature}
                placeholder='Event Type'
                name='Event Feature'
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
                ADD JOB
              </Button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Job);
