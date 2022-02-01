import React, { Component } from 'react';
import CardJob from './CardJob.js';
import '../css_Files/productpage.css';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Button from '@material-ui/core/Button';
import Footer from './Footer';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import HomeResponsiveHeader from './HomeResponsiveHeader';

// name, description, user

class LoginedJobFile extends Component {
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
      user: {},
      Job_profile: '',
      Company_Location: '',
      Required_Experience: '',
      ExperienceRequiredCounter: 0,
      Skills: [],

      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      currentdate: date,
      EventEndingTime: '',
      currentDateTime: Date().toLocaleString(),

      Done: false,
      Filter: false,
    };
  }

  Skills = [
    'Booking',
    'Information Technology',
    'Freelance',
    'Cloud Accounting Tools',
    'GAAP',
    'Analytics',
    'Auditing',
    'Cash Flow Management',
    'Microsoft Office',
    'Risk Analysis',
    'Data Mining',
    'Data Presentation',
    'React',
    'JavaScript',
    'Java',
    'CSS',
    'HTML',
    'Selenium',
    'Puppeteer',
    'NodeJs',
  ];

  MySkills = (event) => {
    console.log(event.target.value);
    this.setState({ Skills: event.target.value });
  };

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallJobs`);
    console.log(data);

    let actual_data = Object.values(data);

    actual_data = actual_data[1];
    console.log(actual_data);
    let real_data = [];
    for (let i = 0; i < actual_data.length; i++) {
      if (actual_data[i].Event_access === 'true') {
        console.log(actual_data[i].Event_access);
        real_data[i] = actual_data[i];
        real_data.push(actual_data[i]);
      }
    }
    console.log(real_data);
    this.setState({ user: real_data });
  }

  onChangeJobprofile = (event) => {
    console.log(event.target.value);
    this.setState({ job_profile: event.target.value });
  };

  onChangeJobCompanyLocation = (event) => {
    console.log(event.target.value);
    this.setState({ Company_Location: event.target.value });
  };

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

              <FormControl>
                <InputLabel className='demo-mutiple-chip-label'>
                  Skills
                </InputLabel>
                <Select
                  className='demo-mutiple-chip'
                  multiple
                  value={this.state.Skills}
                  onChange={this.MySkills}
                  input={<Input className='select-multiple-chip' />}
                  renderValue={(selected) => (
                    <div>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </div>
                  )}
                >
                  {this.Skills.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <label className='flex_row'>
                <div className='labelpro'>Experience Required: </div>
                <div class='counter search_inputprojob'>
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
                      const ans = parseInt(
                        this.state.ExperienceRequiredCounter
                      );
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
            </div>
          )}
        </div>
        <div className='ContainerOfCards'></div>
        <div className='ContainerOfCards'>
          <div className='cardscontainer'>
            {this.state.user.length > 0 &&
              this.state.user.map((value, index) => {
                if (
                  this.state.Job_profile.length > 0 &&
                  this.state.Company_Location.length > 0
                ) {
                  if (
                    this.state.Job_profile === value.Job_profile &&
                    this.state.Company_Location === value.Company_Location &&
                    this.state.ExperienceRequiredCounter ==
                      value.Required_Experience
                  ) {
                    return <CardJob value={value}></CardJob>;
                  } else {
                    return <></>;
                  }
                } else if (
                  this.state.Job_profile.length > 0 &&
                  this.state.Company_Location.length == 0
                ) {
                  if (
                    this.state.Job_profile === value.Job_profile &&
                    this.state.ExperienceRequiredCounter ==
                      value.Required_Experience
                  ) {
                    return <CardJob value={value}></CardJob>;
                  } else {
                    return <></>;
                  }
                } else if (
                  this.state.Job_profile.length == 0 &&
                  this.state.Company_Location.length > 0
                ) {
                  if (
                    this.state.Company_Location === value.Company_Location &&
                    this.state.ExperienceRequiredCounter ==
                      value.Required_Experience
                  ) {
                    return <CardJob value={value}></CardJob>;
                  } else {
                    return <></>;
                  }
                } else {
                  return <CardJob value={value}></CardJob>;
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

            let { data } = await axios.get(`/api/users/getallJobs`);

            let val2 = false;
            let mydata = Object.values(data)[1];
            mydata.map(async (value) => {
              let endingdate = value.Ending_Date.slice(0, 10);

              if (!(endingdate === null) && value.Event_access === 'true') {
                if (endingdate.length == 0) {
                } else {
                  let myendingdate = endingdate.split('-');
                  let myendingyear = myendingdate[0];

                  let myendingmonth = myendingdate[1];
                  let myendingday = myendingdate[2];
                  let Job_id = value.Job_id;

                  if (myendingyear == currentYear) {
                    if (myendingmonth == currentMonth) {
                      if (myendingday == currentday) {
                      } else if (myendingday > currentday) {
                        // nothing
                      } else {
                        // remove access
                        console.log('hello my ending date is less');
                        await axios.post(
                          `/api/users/seeAllJobFeature/${val2}/${Job_id}`
                        );
                        this.setState({ Done: true });
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
                        `/api/users/seeAllJobFeature/${val2}/${Job_id}`
                      );
                      this.setState({ Done: true });
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
                      `/api/users/seeAllJobFeature/${val2}/${Job_id}`
                    );

                    this.setState({ Done: true });
                  }
                }
              }
            });
          }, 10000)}
      </>
    );
  }
}

// return <CardJob value={value}></CardJob>;

export default LoginedJobFile;
