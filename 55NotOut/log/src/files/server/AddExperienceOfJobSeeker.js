import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export class AddExperienceOfJobSeeker extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.Email_id);
    this.state = {
      companyName: '',
      companyExpereience: '',
    };
  }

  onChangeCompanyname = (event) => {
    this.setState({ companyName: event.target.value });
  };

  onChangecompanyExpereience = (event) => {
    this.setState({ companyExpereience: event.target.value });
  };

  addexperienceofjobprovider = async () => {
    const Jobid = uuidv4();
    let { data } = await axios.post(
      `/api/users/addExperienceJobSeeker/${Jobid}/${this.props.Email_id}/${this.state.companyName}/${this.state.companyExpereience}`
    );
    this.props.expereienceadd(Jobid);
  };

  render() {
    return (
      <div className='addexperienceofjobseeker'>
        <div className='addcontianer'>
          <div className='headingcontainer'>Company Name</div>
          <input
            type='Event Name'
            name='Event Name'
            placeholder='Fill this field...'
            value={this.state.companyName}
            className='search_inputCompanyname'
            onChange={this.onChangeCompanyname}
          />
        </div>

        <div className='addcontianer'>
          <div className='headingcontainer'>Experience</div>
          <input
            type='Event Name'
            name='Event Name'
            placeholder='Fill this field...'
            value={this.state.companyExpereience}
            className='search_inputcompanyExpereience'
            onChange={this.onChangecompanyExpereience}
          />
        </div>

        <div
          className='experiencebtn'
          onClick={this.addexperienceofjobprovider}
        >
          ADD
        </div>
      </div>
    );
  }
}

export default AddExperienceOfJobSeeker;
