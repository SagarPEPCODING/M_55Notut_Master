import React, { Component } from 'react';
import '../css_Files/postedjobsofcard.css';
import { withRouter } from 'react-router';
import axios from 'axios';

export class Myjobprofilecards extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.value);
    this.state = {
      countofjobsapplication: 0,
    };
  }

  componentDidMount = async () => {
    let data2 = await axios.get(
      `/api/user/getallapplications/${this.props.value.Email_id}/${this.props.value.Job_id}`
    );
    console.log(data2.data.user.length);
    this.setState({ countofjobsapplication: data2.data.user.length });
  };

  mycardclickedofjob = () => {
    console.log('myjobcard');
    console.log(this.props.value.Job_id);
    this.props.history.push({
      pathname: `/individual_Jobs/${this.props.value.Job_id}`,
      state: this.props.value,
    });
  };

  totalapplicationsclick = () => {
    // console.log('total button clicked');
    this.props.applicationclicked(this.props.value);
  };

  render() {
    return (
      <>
        {/* onClick={this.mycardclickedofjob} */}
        <div
          className='cardjobsposted'
          val={this.props.value.Job_id}
          value={this.props.index}
        >
          <div
            className='jobidofpostedjob'
            val={this.props.value.Job_id}
            value={this.props.index}
          >
            {this.props.value.Job_id}
          </div>
          <div
            className='jobprofileofpostedjob'
            val={this.props.value.Job_id}
            value={this.props.index}
          >
            {this.props.value.Job_profile}
          </div>
          <div
            className='companylocationofpostedjob'
            val={this.props.value.Job_id}
            value={this.props.index}
          >
            {this.props.value.CompanyLocation}
          </div>
          <div
            className='applicationfeatures'
            val={this.props.value.Job_id}
            value={this.props.index}
          >
            <div
              className='totalappications'
              onClick={this.totalapplicationsclick}
            >
              Total Applications({this.state.countofjobsapplication})
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Myjobprofilecards);
