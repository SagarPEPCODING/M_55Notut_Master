import React, { Component } from 'react';
import axios from 'axios';
import HomeCardFeaturedCourses from './HomeCardFeaturedCourses';
import Carousel from 'react-elastic-carousel';

export class FeaturedCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: [],
      user: [],
    };
  }

  async componentDidMount() {
    let { data } = await axios.get('/api/users/login/getcourse');
    console.log(data);
    console.log(data.user[0]);
    this.setState({ mydata: data.user[0] });

    let actual_data = Object.values(data);
    actual_data = actual_data[1];
    let real_data = [];
    for (
      let i = 0;
      i < actual_data.length && actual_data[i] != undefined;
      i++
    ) {
      if (actual_data[i].feature_access === 'false') {
        real_data[i] = actual_data[i];
      }
    }
    console.log(real_data);
    this.setState({ user: real_data });
  }

  render() {
    console.log(
      '********************************************** + "    "' +
        this.state.mydata
    );
    console.log(this.state.mydata);
    return (
      <Carousel>
        <div className='homebarrelcss'>
          {this.state.user.length > 0 &&
            this.state.user.map((value, index) => {
              return (
                <HomeCardFeaturedCourses
                  value={value}
                ></HomeCardFeaturedCourses>
              );
            })}
        </div>
      </Carousel>
    );
  }
}

export default FeaturedCourses;
