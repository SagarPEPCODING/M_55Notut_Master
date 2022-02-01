import React, { Component } from 'react';
import '../css_Files/jobfeaturecard.css';

export class Jobfeatures extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      stringfeature: this.props.arr[this.props.index],
    };
  }
  componentDidMount = () => {
    console.log(this.props.arr);
    console.log(this.props.count);
    console.log(this.props.index);
  };

  jobfeatureclick = () => {
    console.log('job feature clicked');
    this.props.jobfeatureclicked(this.props);
  };

  render() {
    return (
      <div className='jobfeaturescard' onClick={this.jobfeatureclick}>
        <div className='countoffeature'>{this.props.count}</div>
        <div className='stringoffeature'>{this.state.stringfeature}</div>
      </div>
    );
  }
}

export default Jobfeatures;
