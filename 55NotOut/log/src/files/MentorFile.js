import React, { Component } from 'react';
import CardMentor from './CardMentor.js';
import '../css_Files/productpage.css';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

// name, description, user

class MentorFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      Experience: '',
      topics: '',
    };
  }

  onChangeExperience = (event) => {
    console.log(event.target.value);
    this.setState({ Experience: event.target.value });
  };

  onChangetopics = (event) => {
    console.log(event.target.value);
    this.setState({ topics: event.target.value });
  };

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallMentors`);
    console.log(data);
    this.setState({ user: data.user });
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

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='filter'>
          <div className='filterheading'>Filter Mentor</div>
          <div className='filtercategory'>
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
          </div>
        </div>
        <div className='cardscontainer'>
          {this.state.user.length > 0 &&
            this.state.user.map((value, index) => {
              if (
                this.state.topics.length > 0 &&
                this.state.Experience.length > 0
              ) {
                if (
                  this.state.topics === value.topics &&
                  this.state.Experience === value.Experience
                ) {
                  return <CardMentor value={value}></CardMentor>;
                } else {
                  return <></>;
                }
              } else if (
                this.state.topics.length == 0 &&
                this.state.Experience.length > 0
              ) {
                if (this.state.Experience === value.Experience) {
                  return <CardMentor value={value}></CardMentor>;
                } else {
                  return <></>;
                }
              } else if (
                this.state.topics.length > 0 &&
                this.state.Experience.length == 0
              ) {
                if (this.state.topics === value.topics) {
                  return <CardMentor value={value}></CardMentor>;
                } else {
                  return <></>;
                }
              } else {
                return <CardMentor value={value}></CardMentor>;
              }
            })}
        </div>
        <Footer />
      </>
    );
  }
}
// return <CardMentor value={value}></CardMentor>;
export default MentorFile;
