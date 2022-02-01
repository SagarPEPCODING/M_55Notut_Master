import React, { Component } from 'react';
import HomecardMentor from './HomecardMentor';
import axios from 'axios';
import '../css_Files/barrelcss.css';

class FirstFiveMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: '',
      user: [],
      Accesuser: [],
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallMentors`);
    console.log('my data is :- ' + data);
    let actual_data = Object.values(data);
    this.setState({ table: 'mentor_data' });
    actual_data = actual_data[1];
    let featuredreal_data = [];
    let SeeAccessreal_data = [];
    for (
      let i = 0;
      i < actual_data.length && actual_data[i] != undefined;
      i++
    ) {
      if (
        actual_data[i].Feature_access === 'true' &&
        actual_data[i].Event_access === 'true'
      ) {
        featuredreal_data[i] = actual_data[i];
      } else {
        if (actual_data[i].Feature_access === 'true') {
          featuredreal_data[i] = actual_data[i];
        } else if (
          actual_data[i].Event_access === 'true' &&
          actual_data[i].Feature_access !== 'true'
        ) {
          SeeAccessreal_data[i] = actual_data[i];
        } else {
        }
      }
    }
    console.log(featuredreal_data);
    this.setState({ user: featuredreal_data });
    this.setState({ Accesuser: SeeAccessreal_data });
  }

  render() {
    return (
      <div className='mentorCardContainer'>
        <div className='homebarrelcss'>
          {this.state.user.length > 0 &&
            this.state.user.map((value, index) => {
              console.log(value);
              return (
                <HomecardMentor
                  featured={true}
                  firstName={value.First_Name}
                  lastName={value.Last_Name}
                  mentorProfile={value.Mentor_profile}
                  Experience={value.Experience}
                  Job_id={value.Job_id}
                  table={this.state.table}
                  name={value.Mentor}
                  description={value.CareerSummary}
                  imgurl={value.ImageName}
                ></HomecardMentor>
              );
            })}
          {this.state.Accesuser.length > 0 &&
            this.state.Accesuser.map((value, index) => {
              return (
                <HomecardMentor
                  featured={false}
                  firstName={value.First_Name}
                  lastName={value.Last_Name}
                  mentorProfile={value.Mentor_profile}
                  Experience={value.Experience}
                  Job_id={value.Job_id}
                  table={this.state.table}
                  name={value.Mentor}
                  description={value.CareerSummary}
                  imgurl={value.ImageName}
                ></HomecardMentor>
              );
            })}
        </div>
        <div className='homebarrelcss'></div>
      </div>
    );
  }
}

export default FirstFiveMentor;
