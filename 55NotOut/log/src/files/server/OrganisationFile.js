import React, { Component } from 'react';
import CardOrganisation from './CardOrganisation.js';
import '../css_Files/productpage.css';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

class OrganisationFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      Organisation_Name: '',
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallOrganisations`);

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

  onChangeOrganisation_Name = (event) => {
    console.log(event.target.value);
    this.setState({ Organisation_Name: event.target.value });
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='filter'>
          <div className='filterheading'>Filter Organisation</div>
          <div className='filtercategory'>
            <label className='flex_row'>
              <div className='labelpro'>Organisation Name: </div>
              <input
                type='Organisation_name'
                name='Organisation_name'
                placeholder='Write Organisation Name Here'
                value={this.state.Organisation_Name}
                className='search_inputproMentor'
                onChange={this.onChangeOrganisation_Name}
              />
            </label>
          </div>
        </div>
        <div className='cardscontainer'>
          {this.state.user.length > 0 &&
            this.state.user.map((value, index) => {
              if (this.state.Organisation_Name.length > 0) {
                if (this.state.Organisation_Name === value.Organisation_Name) {
                  return <CardOrganisation value={value}></CardOrganisation>;
                } else {
                  return <></>;
                }
              } else {
                return <CardOrganisation value={value}></CardOrganisation>;
              }
            })}
        </div>
        <Footer />
      </>
    );
  }
}
// return <CardOrganisation value={value}></CardOrganisation>;
export default OrganisationFile;
