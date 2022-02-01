import React, { Component } from 'react';
import HomecardProducts from './HomecardProducts';
import axios from 'axios';
import '../css_Files/barrelcss.css';
import Carousel from 'react-elastic-carousel';

class FirstFiveProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: '',
      user: [],
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallUsers`);
    console.log(data.user[0]);
    let actual_data = Object.values(data);
    actual_data = actual_data[1];
    this.setState({ table: 'product_data' });
    let real_data = [];
    for (let i = 0; i < actual_data.length; i++) {
      if (actual_data[i].Feature_access === 'true') {
        real_data[i] = actual_data[i];
      }
    }
    this.setState({ user: real_data });
    setTimeout(() => {}, 3000);
  }

  render() {
    console.log('array is :- ');
    console.log(this.state.user);
    console.log('user data :- ' + this.state.user[0]);
    return (
      <div className='homebarrelcss'>
        {this.state.user.length > 0 &&
          this.state.user.map((value, index) => {
            console.log(value.ImageName);
            if (value === undefined) {
              return <></>;
            } else {
              return (
                <HomecardProducts
                  Job_id={value.jobid}
                  table={this.state.table}
                  name={value.Name_of_product}
                  description={value.Discription}
                  imgurl={value.ImageName}
                ></HomecardProducts>
              );
            }
          })}
      </div>
    );
  }
}

export default FirstFiveProducts;
