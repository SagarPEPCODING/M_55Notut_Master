import React, { Component } from 'react';
import Card from './Card.js';
import '../css_Files/productpage.css';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

// name, description, user

class TalentFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallTalents`);
    this.setState({ user: data.user });
    setTimeout(() => {}, 3000);
  }

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='cardscontainer'>
          {this.state.user.length > 0 &&
            this.state.user.map((value, index) => {
              return (
                <Card
                  name={value.Talent}
                  description={value.Description}
                ></Card>
              );
            })}
        </div>
        <Footer />
      </>
    );
  }
}

export default TalentFile;
