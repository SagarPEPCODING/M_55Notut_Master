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
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallMentors`);
    console.log('my data is :- ' + data);
    let actual_data = Object.values(data);
    this.setState({ table: 'mentor_data' });
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
    setTimeout(() => {}, 700000);
  }

  render() {
    return (
      <div className='homebarrelcss'>
        {this.state.user.length > 0 &&
          this.state.user.map((value, index) => {
            return (
              <HomecardMentor
                Job_id={value.Job_id}
                table={this.state.table}
                name={value.Mentor}
                description={value.CareerSummary}
                imgurl={value.ImageName}
              ></HomecardMentor>
            );
          })}
      </div>
    );
  }
}

export default FirstFiveMentor;
