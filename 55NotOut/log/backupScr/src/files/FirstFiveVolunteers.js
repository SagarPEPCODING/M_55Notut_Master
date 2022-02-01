import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
import '../css_Files/homepageevents.css';
import HomecardJobs from './HomecardJobs';
import HomeCardVolunteer from './HomeCardVolunteer';
import axios from 'axios';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

class HomePageEvents extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      table: '',
      user: [],
      featureEventsInDate: [],
      seeAllEventsInDate: [],
      featureEventOutDate: [],
      seeAllEventOutDate: [],
    };
  }

  async componentDidMount() {
    let { data } = await axios.get(`/api/users/getallJobs`);
    console.log('my data is :- ' + data);
    let actual_data = Object.values(data);
    actual_data = actual_data[1];
    let real_data = [];
    for (
      let i = 0;
      i < actual_data.length && actual_data[i] != undefined;
      i++
    ) {
      if (actual_data[i].Job_Type === 'Volunteer') {
        real_data[i] = actual_data[i];
      }
    }
    console.log(' real data is :- ' + real_data);
    this.setState({ user: real_data });
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      variableWidth: true,
    };
    const mystyle = {
      display: 'flex',
      flexDirection: 'row',
    };
    return (
      <div className='sliderContainerOfSlick'>
        <div style={mystyle} className='btnshoempage'>
          <SkipPreviousIcon onClick={this.previous} />
        </div>
        <div className='sliderContainer'>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {this.state.user.length > 0 &&
              this.state.user.map((value, index) => {
                return (
                  <HomeCardVolunteer
                    value={value}
                    featured={true}
                    Job_profile={value.Job_profile}
                    Company_Location={value.Company_Location}
                    Company_Type={value.Company_Type}
                    Required_Experience={value.Required_Experience}
                    Job_Type={value.Job_Type}
                    packageJob={value.Pay_Range}
                    ImageName={value.ImageName}
                    Job_id={value.Job_id}
                    eventdescription={value.About_Company}
                  ></HomeCardVolunteer>
                );
              })}
          </Slider>
        </div>
        <div style={mystyle} className='btnshoempage'>
          <SkipNextIcon onClick={this.next} />
        </div>
      </div>
    );
  }
}

export default HomePageEvents;
