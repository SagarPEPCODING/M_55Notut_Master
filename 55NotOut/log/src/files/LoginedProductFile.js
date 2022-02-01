import React, { Component } from 'react';
import CardProducts from './CardProducts.js';
import '../css_Files/productpage.css';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

// name, description, user

class LoginedProductFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallUsers`);
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

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='ContainerOfCards'>
          <div className='cardscontainer'>
            {this.state.user.length > 0 &&
              this.state.user.map((value, index) => {
                return <CardProducts value={value}></CardProducts>;
              })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default LoginedProductFile;
