import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
import '../css_Files/homepageevents.css';
import HomecardMentor from './HomecardMentor';
import axios from 'axios';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import HomeCardFeaturedCourses from './HomeCardFeaturedCourses';

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
    let { data } = await axios.get(`/api/users/getallMentors`);
    console.log('my data is :- ' + data);
    let actual_data = Object.values(data);
    this.setState({ table: 'mentor_data' });
    actual_data = actual_data[1];
    let real_data = [];
    for (
      let i = 0;
      i < actual_data.length && actual_data[i] != undefined;
      i++
    ) {
      if (actual_data[i].Feature_access === 'true') {
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
      // autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      // autoplay: true,
      pauseOnHover: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
          {/* <button className='button' onClick={this.previous}>
            Previous
          </button> */}
          <SkipPreviousIcon onClick={this.previous} />
        </div>
        <div className='sliderContainer'>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {this.state.user.length > 0 &&
              this.state.user.map((value, index) => {
                return (
                  <HomecardMentor
                    Job_id={value.Job_id}
                    table={this.state.table}
                    First_Name={value.First_Name}
                    LastName={value.Last_Name}
                    description={value.Description}
                    imgurl={value.ImageName}
                    mentorProfile={value.Mentor_profile}
                    CareerSummary={value.CareerSummary}
                  ></HomecardMentor>
                );
              })}
          </Slider>
        </div>
        <div style={mystyle} className='btnshoempage'>
          {/* <button className='button' onClick={this.next}>
            Next
          </button> */}
          <SkipNextIcon onClick={this.next} />
        </div>
      </div>
    );
  }
}

export default HomePageEvents;
