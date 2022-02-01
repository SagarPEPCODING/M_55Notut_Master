import React, { Component } from 'react';
import HomeCardOrganisation from './HomeCardOrganisations.js';
import axios from 'axios';
import '../css_Files/barrelcss.css';
import Carousel from 'react-elastic-carousel';

class FirstFiveOrganisation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: '',
      user: [],
      Accesuser: [],
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallOrganisations`);
    console.log('my data is :- ' + data);
    let actual_data = Object.values(data);
    this.setState({ table: 'organisation_data' });
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
    console.log(SeeAccessreal_data);
    this.setState({ user: featuredreal_data });
    this.setState({ Accesuser: SeeAccessreal_data });
  }

  render() {
    return (
      <div className='organisationCardContainer'>
        <div className='homebarrelcss'>
          {this.state.user.length > 0 &&
            this.state.user.map((value, index) => {
              console.log(value);
              return (
                <HomeCardOrganisation
                  featured={true}
                  Organisation_Name={value.Organisation_Name}
                  Organisation_Founder={value.Organisation_Founder}
                  Type_of_Organisation={value.Type_of_Organisation}
                  about_Organisation={value.about_Organisation}
                  ImageName={value.ImageName}
                  Job_id={value.Job_id}
                ></HomeCardOrganisation>
              );
            })}
          {this.state.Accesuser.length > 0 &&
            this.state.Accesuser.map((value, index) => {
              console.log(value);
              return (
                <HomeCardOrganisation
                  featured={false}
                  Organisation_Name={value.Organisation_Name}
                  Organisation_Founder={value.Organisation_Founder}
                  Type_of_Organisation={value.Type_of_Organisation}
                  about_Organisation={value.about_Organisation}
                  ImageName={value.ImageName}
                  Job_id={value.Job_id}
                ></HomeCardOrganisation>
              );
            })}
        </div>
        <div className='homebarrelcss'></div>
      </div>
    );
  }
}

export default FirstFiveOrganisation;
