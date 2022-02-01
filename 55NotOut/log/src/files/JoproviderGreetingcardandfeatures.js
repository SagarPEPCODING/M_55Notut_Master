import React, { Component } from 'react';
import '../css_Files/jobprovidergreeting.css';
import { withRouter } from 'react-router-dom';

export class JoproviderGreetingcardandfeatures extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.value.name);
    var today = new Date(),
      time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.state = {
      currentTime: time,
      greeting: '',
      name: this.props.value.name,
      email_id: this.props.value.name,
    };
  }

  componentDidMount = () => {
    let arr = this.state.currentTime.split(':');
    let str1 = '';
    if (arr[0].length == 1) {
      str1 = '0' + arr[0];
      console.log(str1);
    } else {
      str1 = arr[0];
    }
    let str2 = '';
    if (arr[1].length == 1) {
      str2 = '0' + arr[1];
    } else {
      str2 = arr[1];
    }

    let str3 = '';
    if (arr[2].length == 1) {
      str3 = '0' + arr[2];
    } else {
      str3 = arr[2];
    }

    let datestring = str1 + str2 + str3;
    console.log(datestring);
    let value = parseInt(datestring);
    console.log(value);
    console.log(arr);
    if (value >= 120000 && value < 160000) {
      this.setState({ greeting: 'After Noon' });
    }
    if (value >= 160000 && value < 240000) {
      this.setState({ greeting: 'Good Evening' });
    }
    if (value >= 0 && value < 120000) {
      this.setState({ greeting: 'Good Morning' });
    }
  };

  postjobisclicked = () => {
    this.props.history.push({
      pathname: '/login/Job',
      state: {
        value: this.props.value,
      },
    });
  };

  render() {
    console.log(this.state.greeting);
    console.log(this.state.currentTime);
    return (
      <div className='greetingwithfeaturescard'>
        <div className='greetingtojobprovider'>
          <div className='greeting morning evening noon'>
            {this.state.greeting}
          </div>
          <div className='nameofjob_provider'>{this.state.name}</div>
        </div>
        <div className='postjob' onClick={this.postjobisclicked}>
          Post Job
        </div>
      </div>
    );
  }
}

export default withRouter(JoproviderGreetingcardandfeatures);
