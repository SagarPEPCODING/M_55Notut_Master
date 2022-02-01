import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
import '../css_Files/homepageevents.css';
import HomecardJobs from './HomecardJobs';
import axios from 'axios';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import HomecardOrganisation from './HomeCardOrganisation.js';

class HomePageEvents extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      table: '',
      user: [],
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallOrganisations`);
    console.log('my data is :- ' + data);
    let actual_data = Object.values(data);
    this.setState({ table: 'organisation_data' });
    actual_data = actual_data[1];
    let real_data = [];
    for (
      let i = 0;
      i < actual_data.length && actual_data[i] != undefined;
      i++
    ) {
      if (actual_data[i].Feature_access == 'true') {
        real_data[i] = actual_data[i];
      }
    }
    console.log(real_data);
    this.setState({ user: real_data });
    setTimeout(() => {}, 3000);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: true,
      speed: 1,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      autoplay: true,
      pauseOnHover: true,
      swipeToSlide: true,
      variableWidth: true,
    };
    const mystyle = {
      display: 'flex',
      flexDirection: 'row',
    };

    if (this.state.user.length > 4) {
      return (
        <div className='sliderContainerOfSlick'>
          <div style={mystyle} className='btnshoempage'>
            <SkipPreviousIcon onClick={this.previous} />
          </div>
          <div className='sliderContainer'>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {this.state.user.map((value, index) => {
                return (
                  <HomecardOrganisation
                    Job_id={value.Job_id}
                    table={this.state.table}
                    name={value.Organisation}
                    description={value.Description}
                    imgurl={value.ImageUrl}
                    OrganisationName={value.Organisation_Name}
                    aboutOrganisation={value.about_Organisation}
                  ></HomecardOrganisation>
                );
              })}
            </Slider>
          </div>
          <div style={mystyle} className='btnshoempage'>
            <SkipNextIcon onClick={this.next} />
          </div>
        </div>
      );
    } else {
      return (
        <div className='sliderContainerOfSlick'>
          {/* <div style={mystyle} className='btnshoempage'>
            <SkipPreviousIcon onClick={this.previous} />
          </div> */}
          <div className='sliderContainer'>
            {/* <Slider ref={(c) => (this.slider = c)} {...settings}> */}
            {this.state.user.map((value, index) => {
              return (
                <HomecardOrganisation
                  Job_id={value.Job_id}
                  table={this.state.table}
                  name={value.Organisation}
                  description={value.Description}
                  imgurl={value.ImageUrl}
                ></HomecardOrganisation>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default HomePageEvents;
