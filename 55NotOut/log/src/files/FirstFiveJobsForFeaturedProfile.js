import React, { Component } from 'react';
import HomeCard1 from './HomeCard1';
import axios from 'axios';
import '../css_Files/barrelcss.css';

class FirstFiveJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: '',
      user: [],
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallJobs`);
    console.log('my data is :- ' + data);
    let actual_data = Object.values(data);
    this.setState({ table: 'job_data' });
    actual_data = actual_data[1];
    let real_data = [];
    for (
      let i = 0;
      i < actual_data.length && actual_data[i] != undefined;
      i++
    ) {
      if (actual_data[i].Feature_access === 'true') {
        real_data[i] = actual_data[i];
      }
    }
    console.log(real_data);
    this.setState({ user: real_data });
    setTimeout(() => {}, 3000);
  }

  render() {
      console.log(this.state.user);
    return (
      <div className='homebarrelcss'>
        {this.state.user.length > 0 &&
          this.state.user.map((value, index) => {
            return <HomeCard1 value={value}></HomeCard1>;
          })}
      </div>
    );
  }
}

export default FirstFiveJobs;
