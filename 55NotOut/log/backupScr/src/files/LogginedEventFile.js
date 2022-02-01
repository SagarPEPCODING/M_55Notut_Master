import React, { Component } from 'react';
import Card from './Card.js';
import '../css_Files/productpage.css';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import {
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  InputLabel,
} from '@material-ui/core';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

class LogginedEventFile extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
    this.state = {
      user: [],
      Category: '',
      Eventtype: '',
      Eventmode: '',
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      currentdate: date,
      EventEndingTime: '',
      currentDateTime: Date().toLocaleString(),
      Filter: false,
    };
  }

  onChangeCategory = (event) => {
    console.log(event.target.value);
    this.setState({ Category: event.target.value });
  };

  onChangeEvent_Type = (event) => {
    console.log(event.target.value);
    this.setState({ Eventtype: event.target.value });
  };

  onChangeEvent_mode = (event) => {
    console.log(event.target.value);
    this.setState({ Eventmode: event.target.value });
  };

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallEvents`);
    console.log(data);

    let actual_data = Object.values(data);

    // this.setState({ table: 'job_data' });
    actual_data = actual_data[1];
    console.log(actual_data);
    let real_data = [];
    for (let i = 0; i < actual_data.length; i++) {
      if (actual_data[i].Event_access === 'true') {
        console.log(actual_data[i].Event_access);
        real_data[i] = actual_data[i];
      }
    }
    console.log(real_data);
    this.setState({ user: real_data });
  }

  filterclicked = () => {
    this.setState({ Filter: !this.state.Filter });
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='filter'>
          <div className='filterheading' onClick={this.filterclicked}>
            <i class='fa fa-filter filtericon' aria-hidden='true'>
              Filter
            </i>
          </div>
          {this.state.Filter && (
            <div className='filtercategory'>
              <div className='labelpro'>Event Category: </div>
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
                <MenuItem value={11} onClick={this.change_other}>
                  Other
                </MenuItem>
              </Select>

              <div className='labelpro'>Event Type: </div>
              <Select
                className='search_inputdescription'
                onChange={this.onChangeEvent_Type}
                placeholder='Event Type'
                name='Event Type'
              >
                {/* <InputLabel>Number Of Workers</InputLabel> */}
                {/* <option value='DEFAULT' disabled>
                  Number Of Workers
                </option> */}
                <option disabled={true} value=''>
                  Event Type
                </option>
                <MenuItem value={'Free'}>Free</MenuItem>
                <MenuItem value={'Paid'}>Paid</MenuItem>
              </Select>

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
                <MenuItem value={'Online'}>Online</MenuItem>
                <MenuItem value={'Offline'}>Offline</MenuItem>
              </Select>
            </div>
          )}
        </div>
        <div className='ContainerOfCards'>
          <div className='cardscontainer'>
            {this.state.user.length > 0 &&
              this.state.user.map((value, index) => {
                if (
                  this.state.Category.length > 0 &&
                  this.state.Eventtype.length > 0 &&
                  this.state.Eventmode.length > 0
                ) {
                  if (
                    this.state.Category === value.Category &&
                    this.state.Eventtype === value.Event_Type &&
                    this.state.Eventmode === value.Event_mode
                  ) {
                    return (
                      <Card
                        value={value}
                        Category={this.state.Category}
                        Eventtype={this.state.Eventtype}
                        Eventmode={this.state.Eventmode}
                      ></Card>
                    );
                  } else {
                    return <></>;
                  }
                } else if (
                  this.state.Category.length > 0 &&
                  this.state.Eventtype.length > 0 &&
                  this.state.Eventmode.length == 0
                ) {
                  if (
                    this.state.Category === value.Category &&
                    this.state.Eventtype === value.Event_Type
                  ) {
                    return (
                      <Card
                        value={value}
                        Category={this.state.Category}
                        Eventtype={this.state.Eventtype}
                        Eventmode={this.state.Eventmode}
                      ></Card>
                    );
                  } else {
                    return <></>;
                  }
                } else if (
                  this.state.Category.length > 0 &&
                  this.state.Eventtype.length == 0 &&
                  this.state.Eventmode.length > 0
                ) {
                  if (
                    this.state.Category === value.Category &&
                    this.state.Eventmode === value.Event_mode
                  ) {
                    return (
                      <Card
                        value={value}
                        Category={this.state.Category}
                        Eventtype={this.state.Eventtype}
                        Eventmode={this.state.Eventmode}
                      ></Card>
                    );
                  } else {
                    return <></>;
                  }
                } else if (
                  this.state.Category.length == 0 &&
                  this.state.Eventtype.length > 0 &&
                  this.state.Eventmode.length > 0
                ) {
                  if (
                    this.state.Eventtype === value.Event_Type &&
                    this.state.Eventmode === value.Event_mode
                  ) {
                    return (
                      <Card
                        value={value}
                        Category={this.state.Category}
                        Eventtype={this.state.Eventtype}
                        Eventmode={this.state.Eventmode}
                      ></Card>
                    );
                  } else {
                    return <></>;
                  }
                } else if (
                  this.state.Category.length > 0 &&
                  this.state.Eventtype.length == 0 &&
                  this.state.Eventmode.length == 0
                ) {
                  if (this.state.Category === value.Category) {
                    return (
                      <Card
                        value={value}
                        Category={this.state.Category}
                        Eventtype={this.state.Eventtype}
                        Eventmode={this.state.Eventmode}
                      ></Card>
                    );
                  } else {
                    return <></>;
                  }
                } else if (
                  this.state.Category.length == 0 &&
                  this.state.Eventtype.length > 0 &&
                  this.state.Eventmode.length == 0
                ) {
                  if (this.state.Eventtype === value.Event_Type) {
                    return (
                      <Card
                        value={value}
                        Category={this.state.Category}
                        Eventtype={this.state.Eventtype}
                        Eventmode={this.state.Eventmode}
                      ></Card>
                    );
                  } else {
                    return <></>;
                  }
                } else if (
                  this.state.Category.length == 0 &&
                  this.state.Eventtype.length == 0 &&
                  this.state.Eventmode.length > 0
                ) {
                  if (this.state.Eventmode.length == value.Event_mode) {
                    return (
                      <Card
                        value={value}
                        Category={this.state.Category}
                        Eventtype={this.state.Eventtype}
                        Eventmode={this.state.Eventmode}
                      ></Card>
                    );
                  } else {
                    return <></>;
                  }
                } else {
                  return (
                    <Card
                      value={value}
                      Category={this.state.Category}
                      Eventtype={this.state.Eventtype}
                      Eventmode={this.state.Eventmode}
                    ></Card>
                  );
                }
              })}
          </div>
        </div>
        <Footer />
        {true &&
          setTimeout(async () => {
            let value = this.state.currentDateTime.split(' ');
            let currentYear = value[3];
            let currentday = value[2];
            let currenttime = value[4];
            let currentMonth = this.state.currentMonth + 1;
            console.log(
              currentYear +
                '    ' +
                currentday +
                '    ' +
                currenttime +
                '    ' +
                currentMonth
            );
            {
              /* /api/users/getallEvents */
            }
            let { data } = await axios.get(`/api/users/getallEvents`);
            {
              /* console.log(data); */
            }
            let val2 = false;
            let mydata = Object.values(data)[1];
            mydata.map(async (value) => {
              let endingdate = value.Event_Ending_date;
              {
                /* console.log(endingdate); */
              }
              {
                /* console.log(typeof endingdate); */
              }
              {
                /* console.log(endingdate.length); */
              }
              if (!(endingdate === null)) {
                if (endingdate.length == 0) {
                } else {
                  let myendingdate = endingdate.split('-');
                  let myendingyear = myendingdate[0];

                  let myendingmonth = myendingdate[1];
                  let myendingday = myendingdate[2];
                  let Job_id = value.Job_id;

                  {
                    /* console.log(
                    myendingday + ' ' + myendingyear + ' ' + myendingmonth
                  ); */
                  }
                  {
                    /* console.log(Job_id); */
                  }
                  if (myendingyear == currentYear) {
                    if (myendingmonth == currentMonth) {
                      if (myendingday == currentday) {
                      } else if (myendingday > currentday) {
                        // nothing
                      } else {
                        // remove access
                        console.log('hello my ending date is less');
                        await axios.post(
                          `/api/users/seeAllEventFeature/${val2}/${Job_id}`
                        );
                      }
                    } else if (myendingmonth > currentMonth) {
                      //dont do anything
                      console.log(
                        'current :- ' +
                          '      ' +
                          currentYear +
                          ' <=> ' +
                          myendingyear +
                          ' ' +
                          currentMonth +
                          ' <=> ' +
                          myendingmonth +
                          ' ' +
                          currentday +
                          ' <=> ' +
                          myendingday
                      );
                    } else {
                      console.log('hello my ending month is less');
                      // remove access
                      await axios.post(
                        `/api/users/seeAllEventFeature/${val2}/${Job_id}`
                      );
                    }
                  } else if (myendingyear > currentYear) {
                  } else {
                    console.log(
                      'remove Access :- ' +
                        Job_id +
                        'lllllllll ' +
                        endingdate +
                        'lllllllll ' +
                        myendingyear
                    );
                    console.log('hello my ending year is less');

                    await axios.post(
                      `/api/users/seeAllEventFeature/${val2}/${Job_id}`
                    );
                  }
                }
              }
            });
          }, 40000)}
      </>
    );
  }
}

export default LogginedEventFile;
