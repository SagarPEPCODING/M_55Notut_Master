import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  InputLabel,
} from '@material-ui/core';
import DatePickers from './Date';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

export class Seealleventedit extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
    console.log(this.props.location.state.mydata.Job_id);
    this.state = {
      Job_id: this.props.location.state.mydata.Job_id,
      Event_profile: this.props.location.state.mydata.Event_profile,
      Event_description: this.props.location.state.mydata.Event_description,
      Category: this.props.location.state.mydata.Category,
      Event_mode: this.props.location.state.mydata.Event_mode,
      Event_Starting_date: this.props.location.state.mydata.Event_Starting_date,
      Event_Ending_date: this.props.location.state.mydata.Event_Ending_date,
      Event_Type: this.props.location.state.mydata.Event_Type,
      EventEndingTime: this.props.location.state.mydata.EventEndingTime,
      EventStartingTime: this.props.location.state.mydata.Event_Starting_time,
      FeatureEvent: this.props.location.state.mydata.Event_Feature,
      file: this.props.location.state.mydata.ImageName,
      Feature_access: 'false',
      Event_access: 'false',
      Payment: this.props.location.state.mydata.Payment,

      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      currentdate: date,
      EventEndingTime: '',
      currentDateTime: Date().toLocaleString(),

      sizeNotFit: false,

      otherClicked: false,
      OnlineEventClicked: false,
      OfflineEventClicked: false,
      Event_mode_URL: false,
    };
  }

  change_other = (event) => {
    console.log('other clicked :- ' + event.target.value);
    this.setState({ otherClicked: true });
  };

  onChangeEventprofile = (event) => {
    console.log('Organisation is :- ' + event.target.value);
    this.setState({ Event_profile: event.target.value });
  };

  onChangeEventDescription = (event) => {
    console.log('description is :- ' + event.target.value);
    this.setState({ Event_description: event.target.value });
  };

  onChangeCategory = (event) => {
    console.log('Category is :- ' + event.target.value);
    this.setState({ Category: event.target.value });
  };

  onChangeEvent_mode = (event) => {
    const arr = [];
    arr.push('Online');
    arr.push('Offline');
    console.log('Event mode is :- ' + arr[event.target.value - 1]);
    this.setState({ Event_mode: arr[event.target.value - 1] });
  };

  onChangeEvent_Starting_date = (event) => {
    console.log('Starting Date is :- ' + event.target.value);
    this.setState({ Event_Starting_date: event.target.value });
  };

  onChangeEvent_Ending_date = (event) => {
    console.log('Event Ending Date :- ' + event.target.value);
    this.setState({ Event_Ending_date: event.target.value });
  };

  OnlineClicked = (event) => {
    console.log('Online Event Clicked :- ' + event.target.value);
    this.setState({ OnlineEventClicked: true });
  };

  OfflineClicked = (event) => {
    console.log('Offline Event Clicked :- ' + event.target.value);
    this.setState({ OfflineEventClicked: true });
  };

  onChangeEvent_Type = (event) => {
    const arr = [];
    arr.push('Free');
    arr.push('Paid');
    console.log('Event Type :- ' + arr[event.target.value - 1]);
    this.setState({ Event_Type: arr[event.target.value - 1] });
  };

  onChangeEvent_mode_URL = (event) => {
    console.log('Event Mode Url :- ' + event.target.value);
    this.setState({ Event_mode_URL: event.target.value });
  };

  eventStartingTime = (event) => {
    console.log(this.state.currentdate);
    console.log(this.state.currentDateTime);
    console.log(this.state.currentMonth);
    console.log(this.state.currentYear);
    console.log(event.target.value);
    this.setState({ EventStartingTime: event.target.value });
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

    const params = JSON.stringify({
      Job_id: this.state.Job_id,
      Event_profile: this.state.Event_profile,
      Event_description: this.state.Event_description,
      Category: this.state.Category,
      Event_mode: this.state.Event_mode,
      Event_Starting_date: this.state.Event_Starting_date,
      Event_Ending_date: this.state.Event_Ending_date,
      Event_Type: this.state.Event_Type,
      EventStartingTime: this.state.EventStartingTime,
      Event_Feature: this.state.FeatureEvent,
      Payment: 0,
      Image_Name: this.state.file,
      EventEndingTime: this.state.EventEndingTime,
    });

    let { data } = await axios.post(`/api/users/addEventEdit/${params}`);

    this.hello(Jobid);

    emailjs
      .sendForm(
        'service_o3dqeri',
        'template_cgcs8wj',
        '.form',
        'user_dyd6HcwZpfYG9RpNHH6tO'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    this.setState({
      Event_profile: '',
      Event_description: '',
      Category: '',
      Event_mode: '',
      Event_Starting_date: '',
      Event_Ending_date: '',
      Event_Type: '',
    });
  };

  hello = (Job_id) => {
    console.log(Job_id);
  };

  eventEndingTime = (event) => {
    console.log(event.target.value);
    this.setState({ EventEndingTime: event.target.value });
  };

  onChangeEventFeature = (event) => {
    console.log(event.target.value);
    this.setState({ FeatureEvent: event.target.value });
    if (event.target.value === 'Yess') {
      // console.log(true);
      console.log(this.props);

      this.props.history.push({
        pathname: '/login/event/featureevent',
        state: {
          Event_profile: this.state.Event_profile,
          Event_description: this.state.Event_description,
          Category: this.state.Category,
          Event_mode: this.state.Event_mode,
          Event_Starting_date: this.state.Event_Starting_date,
          Event_Ending_date: this.state.Event_Ending_date,
          Event_Type: this.state.Event_Type,
          FeatureEvent: event.target.value,
          EventStartingTime: this.state.EventStartingTime,
          Image_Name: this.state.file.name,
          EventEndingTime: this.state.EventEndingTime,
        },
      });
    }
  };

  automatic = () => {
    console.log('hello');
  };

  upload = async (e) => {
    if (this.state.file.size / 1000000 > 1.0) {
      this.setState({ sizeNotFit: true });
    } else {
      const formdata = new FormData();
      formdata.append('file', this.state.file);
      console.log(this.state.file.size);
      console.log(formdata);
      alert(formdata.get('file'));
      console.log(this.state.file);

      try {
        const res = await axios.post('/EventImageupload', formdata, {
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

  ClickedYess = (event) => {
    console.log('yess clicked');
  };

  ClickedNo = (event) => {
    console.log('No clicked');
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader />
        <SeeAllHeader></SeeAllHeader>
        <form onSubmit={this.Submit} className='form'>
          <label className='flex_row'>
            <div className='labelpro'>Event Title: </div>
            <input
              type='Event Name'
              name='Event Name'
              placeholder='Fill this field...'
              value={this.state.Event_profile}
              className='search_inputproEventss'
              onChange={this.onChangeEventprofile}
            />
          </label>
          <label className='flex_row'>
            <div className='labelpro'>Event Description: </div>
            <input
              name='Event Description'
              type='Event'
              placeholder='Write Description...'
              value={this.state.Event_description}
              className='search_inputdescriptions'
              onChange={this.onChangeEventDescription}
            />
          </label>

          {/* Category */}

          <label className='flex_row'>
            <div className='labelpro'>Event Category: </div>

            {!this.state.otherClicked && (
              <Select
                className='search_inputdescription'
                onChange={this.onChangeCategory}
                placeholder='Event Category'
                name='Event Category'
              >
                <option disabled={true} value=''>
                  Event Category
                </option>
                <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
                <MenuItem value={'Professional'}>Professional</MenuItem>
                <MenuItem value={'Sports'}>Sports</MenuItem>
                <MenuItem value={'Training'}>Training</MenuItem>
                <MenuItem value={'Spiritual & Wellness'}>
                  Spiritual & Wellness
                </MenuItem>
                <MenuItem value={'Campus Event'}>Campus Event</MenuItem>
                <MenuItem value={'Trade Shows'}>Trade Shows</MenuItem>
                <MenuItem value={'Activities'}>Activities</MenuItem>
                <MenuItem value={'Donation'}>Donation</MenuItem>
                <MenuItem value={'Motivational'}>Motivational</MenuItem>
                <MenuItem value={'Other'} onClick={this.change_other}>
                  Other
                </MenuItem>
              </Select>
            )}
            {this.state.otherClicked && (
              <input
                name='Event'
                type='Event'
                placeholder='Write Event Category Here...'
                value={this.state.Category}
                className='search_inputimageurlEvents'
                onChange={this.onChangeCategory}
              />
            )}
          </label>

          {/* Event_Mode */}

          <label className='flex_row'>
            <div className='labelpro'>Event Mode: </div>
            <Select
              className='search_inputdescription'
              onChange={this.onChangeEvent_mode}
              placeholder='Event Mode'
              name='Event Mode'
            >
              <option disabled={true} value=''>
                Event Mode
              </option>
              <MenuItem value={1} onClick={this.OnlineClicked}>
                Online
              </MenuItem>
              <MenuItem value={2} onClick={this.OfflineClicked}>
                Offline
              </MenuItem>
            </Select>
          </label>

          {this.state.OnlineEventClicked ? (
            <>
              <div className='divurl'>Enter Event Url</div>
              <input
                name='Event'
                type='Event'
                value={
                  this.state.OnlineEventClicked
                    ? ''
                    : this.state.OnlineEventClicked
                }
                className='search_inputEventurlEvents'
                onChange={this.onChangeEvent_mode_URL}
              />
            </>
          ) : null}
          <label className='flex_row'>
            <div className='labelpro'>Event Starting Date: </div>
            <form noValidate className='search_endingdate'>
              <TextField
                id='date'
                label='Event Starting Date'
                type='date'
                name='Event Starting Date'
                defaultValue='2021-01-01'
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.onChangeEvent_Starting_date}
              />
            </form>
          </label>

          {/* Event_Ending_date */}

          <label className='flex_row'>
            <div className='labelpro'>Event Ending Date: </div>

            <form noValidate className='search_endingdate'>
              <TextField
                id='date'
                label='Event Ending Date'
                type='date'
                name='Event Ending Date'
                defaultValue='2021-01-01'
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.onChangeEvent_Ending_date}
              />
            </form>
          </label>

          <label className='flex_row'>
            <div className='labelpro'>Event Starting Time: </div>
            <form noValidate className='search_endingdate'>
              <TextField
                id='time'
                label='Event Timing'
                type='time'
                defaultValue='07:30'
                className='EventTime'
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                onChange={this.eventStartingTime}
              />
            </form>
          </label>

          <label className='flex_row'>
            <div className='labelpro'>Event Ending Time: </div>
            <form noValidate className='search_endingdate'>
              <TextField
                id='time'
                label='Event Timing'
                type='time'
                defaultValue='07:30'
                className='EventTime'
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                onChange={this.eventEndingTime}
              />
            </form>
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

          {/* Do you want feature this event */}

          {/* <label className='flex_row'>
            <div className='labelpro'>Do you want feature this event: </div>
            <Select
              className='search_inputdescription'
              onChange={this.onChangeEventFeature}
              placeholder='Event Type'
              name='Event Feature'
            >
              <MenuItem value={'Yess'}>Yess</MenuItem>
              <MenuItem value={'No'}>No</MenuItem>
            </Select>
          </label> */}

          <div className='btn'>
            <Button
              variant='contained'
              color='secondary'
              type='submit'
              className='flex_row'
            >
              ADD EVENT
            </Button>
          </div>
        </form>{' '}
        <Footer />
      </>
    );
  }
}

export default Seealleventedit;
