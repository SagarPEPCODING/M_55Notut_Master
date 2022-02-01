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
      Accesuser: [],
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallUsers`);
    console.log(data.user[0]);
    let actual_data = Object.values(data);
    actual_data = actual_data[1];
    this.setState({ table: 'product_data' });
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
    console.log('array is :- ');
    console.log(this.state.user);
    console.log('user data :- ' + this.state.user[0]);
    return (
      <div className='productCardContainer'>
        <div className='homebarrelcss'>
          {this.state.user.length > 0 &&
            this.state.user.map((value, index) => {
              console.log(value.ImageName);
              if (value === undefined) {
                return <></>;
              } else {
                return (
                  <HomecardProducts
                    featured={true}
                    Job_id={value.jobid}
                    table={this.state.table}
                    name={value.Name_of_product}
                    description={value.Discription}
                    imgurl={value.ImageName}
                    ProductOrigin={value.ProductOrigin}
                  ></HomecardProducts>
                );
              }
            })}
          {this.state.Accesuser.length > 0 &&
            this.state.Accesuser.map((value, index) => {
              console.log(value.ImageName);
              if (value === undefined) {
                return <></>;
              } else {
                return (
                  <HomecardProducts
                    featured={false}
                    Job_id={value.jobid}
                    table={this.state.table}
                    name={value.Name_of_product}
                    description={value.Discription}
                    imgurl={value.ImageName}
                    ProductOrigin={value.ProductOrigin}
                  ></HomecardProducts>
                );
              }
            })}
        </div>
        <div className='homebarrelcss'></div>
      </div>
    );
  }
}

export default FirstFiveProducts;
