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
import HomeCard from './HomeCard';
import HomecardProducts from './HomecardProducts';
import '../css_Files/homecardproduct.css';

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
    let { data } = await axios.get(`/api/users/getallUsers`);
    console.log(data);
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
              {this.state.user.length > 0 &&
                this.state.user.map((value, index) => {
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
                        ProductOrigin={value.ProductOrigin}
                      ></HomecardProducts>
                    );
                  }
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
            {/* <Slider ref={(c) => (this.slider = c)} {...settings}> */}
            {this.state.user.length > 0 &&
              this.state.user.map((value, index) => {
                if (value === undefined) {
                  return <></>;
                } else {
                  return (
                    <HomecardProducts
                      Job_id={value.jobid}
                      table={this.state.table}
                      name={value.Name_of_product}
                      description={value.Discription}
                      imgurl={value.filename}
                      ProductOrigin={value.ProductOrigin}
                    ></HomecardProducts>
                  );
                }
              })}
            {/* </Slider> */}
          </div>
        </div>
      );
    }
  }
}

export default HomePageEvents;
