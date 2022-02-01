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
import HomecardEvents from './HomeHomecardEvents.js';

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
    let { data } = await axios.get(`/api/users/getallEvents`);
    let datauser = data.user;
    console.log(datauser);
    this.setState({ user: datauser });
    console.log(this.state.user);

    let dummyfeaturedeventsindate = [];

    datauser.map((value) => {
      // featured Events.................................................
      if (value.Feature_access === 'true') {
        console.log(value);
        dummyfeaturedeventsindate.push(value);
      }
    });

    this.setState({ featureEventsInDate: dummyfeaturedeventsindate });
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
      slidesToShow: 3,
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

    if (this.state.user.length > 4) {
      return (
        <div className='sliderContainerOfSlick'>
          <div style={mystyle} className='btnshoempage'>
            <SkipPreviousIcon onClick={this.previous} />
          </div>
          <div className='sliderContainer'>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {this.state.featureEventsInDate.length > 0 &&
                this.state.featureEventsInDate.map((value, index) => {
                  return (
                    <HomecardEvents
                      Job_id={value.Job_id}
                      name={value.Job_profile}
                      description={value.Description}
                      imgurl={value.ImageName}
                      Event_profile={value.Event_profile}
                      Category={value.Category}
                      Event_mode={value.Event_mode}
                      Event_Starting_date={value.Event_Starting_date}
                      Event_Ending_date={value.Event_Ending_date}
                      Event_Starting_time={value.Event_Starting_time}
                      EventEndingTime={value.EventEndingTime}
                    ></HomecardEvents>
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
          <div className='sliderContainer'>
            {this.state.featureEventsInDate.length > 0 &&
              this.state.featureEventsInDate.map((value, index) => {
                return (
                  <HomecardEvents
                    Job_id={value.Job_id}
                    name={value.Job_profile}
                    description={value.Description}
                    imgurl={value.ImageName}
                    Event_profile={value.Event_profile}
                    Category={value.Category}
                    Event_mode={value.Event_mode}
                    Event_Starting_date={value.Event_Starting_date}
                    Event_Ending_date={value.Event_Ending_date}
                    Event_Starting_time={value.Event_Starting_time}
                    EventEndingTime={value.EventEndingTime}
                  ></HomecardEvents>
                );
              })}
          </div>
        </div>
      );
    }
  }
}

export default HomePageEvents;
