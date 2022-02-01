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
    console.log(dummyfeaturedeventsindate);
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
      // dot: true,
      speed: 1,
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

    if (this.state.featureEventsInDate.length > 4) {
      return (
        <div className='sliderContainerOfSlick'>
          <div style={mystyle} className='btnshoempage'>
            <SkipPreviousIcon onClick={this.previous} />
          </div>
          <div className='sliderContainer'>
            <Slider ref={(c) => (this.slider = c)} {...settings} dots={true}>
              {this.state.featureEventsInDate.length > 0 &&
                this.state.featureEventsInDate.map((value, index) => {
                  console.log(value);
                  return (
                    <HomecardJobs
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
                    ></HomecardJobs>
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
                  <HomecardJobs
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
                  ></HomecardJobs>
                );
              })}
            {/* </Slider> */}
          </div>
        </div>
      );
    }
  }
}

export default HomePageEvents;
