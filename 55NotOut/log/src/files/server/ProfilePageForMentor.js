import React, { Component } from 'react';
// import '../css_Files/productpage.css';
import AddUserForm from './AddUserForm.js';
import ProductFile from './ProductFile';
import axios from 'axios';
import UserProfile from './EditUserProfile.js';
import Carousel from './Carousel.js';
import Slider from './Slider';

// import Link from '';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import '../css_Files/profilecss.css';
import FirstFiveEvents from './FirstFiveEvents';
import FirstFiveProducts from './FirstFiveProducts';
import FirstFiveJobs from './FirstFiveJobs';
import FirstFourTalent from './FirstFourTalent';
import FirstFourOrganisation from './FirstFourOrganisation';
import FirstFourMentor from './FirstFourMentor';
import SimplePopper from './SimplePopper.js';
import Header from './Header';
import NewHeader from './NewHeader.js';
import NewHeaderForMentor from './NewHeaderForMentor';
import IndexHeader from './IndexHeader';
import DemoFooter from './DemoFooter';
import Footer from './Footer';
import SmallFooter from './FooterAdmin';
import FirstFiveVolunteers from './FirstFiveVolunteers';
import FirstFiveJobsForFeaturedProfile from './FirstFiveJobsForFeaturedProfile';
import FirstFiveEventsForFeaturedProfile from './FirstFiveEventsForFeaturedProfile';
import FeaturedProfileOfMentors from './FeaturedProfileOfMentors';
import FeaturedCourses from './FeaturedCourses';

class ProfilePageForMentor extends Component {
  constructor(props) {
    super(props);
    console.log(' Hello Props ');
    console.log(props.logined);
    this.state = {
      email_id: this.props.email,
      logined: this.props.logined,
      nameofproduct: '',
      descriptionofobject: '',
      user: [],
      stateProfile: false,
      popUp: false,
      loginedkk: false,
      notaseniorprofessional: this.props.notaseniorprofessional,
    };
  }

  EventClicked = () => {
    // console.log('Event Clicked');
  };

  headerchanger = () => {
    // console.log('this is a header changer.....');
  };

  componentDidMount() {
    console.log(this.state.logined + 'lksdjflkdsjfkds_________________');
    console.log(this.props.username);
    console.log(this.state.email_id + 'kjfklaljfkasdkfjsdkajfkasjfkasdfjkds');
    setTimeout(() => {
      this.setState({ popUp: true });
    }, 10000);
  }

  render() {
    console.log(this.state.notaseniorprofessional);
    return (
      <>
        {this.state.logined === undefined ? (
          <Header email_id={this.props.email}></Header>
        ) : (
          <NewHeaderForMentor
            logined={this.state.logined}
            email_id={this.props.email}
            username={this.props.username}
            notaseniorprofessional={this.state.notaseniorprofessional}
          ></NewHeaderForMentor>
        )}

        <Slider></Slider>
        <div className='profilepage'>
          <div className='profile_page'>
            {/* Job Body */}

            <div className='event_body'>
              <div className='event_body_heading'>JOBS</div>
              <FirstFiveJobs />
              <div className='see_more'>
                <Link to='/login/showTalents' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            {/* Volunteer Body*/}

            <div className='event_body'>
              <div className='event_body_heading'>Volunteer</div>
              <FirstFiveVolunteers />
              <div className='see_more'>
                <Link to='/login/showTalents' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            {/* Featured Profile Body */}

            <div className='event_body'>
              <div className='event_body_heading'>Featured Profile</div>
              <FeaturedProfileOfMentors />
              {/* <FirstFiveEventsForFeaturedProfile /> */}
              {/* <FirstFiveProductsForFeaturedProfile /> */}
              <div className='see_more'>
                <Link to='/login/showTalents' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            {/* Mentor Body */}

            <div className='event_body'>
              <div className='event_body_heading'>MENTOR</div>
              <FirstFourMentor />
              <div className='see_more'>
                <Link to='/login/showMentor' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            {/* Featured Courses */}

            <div className='event_body'>
              <div className='event_body_heading'>Courses</div>
              <FeaturedCourses />
              <div className='see_more'>
                <Link to='/login/showMentor' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            {/* Featured Services */}

            <div className='event_body'>
              <div className='event_body_heading'>Services</div>
              <FirstFourOrganisation />
              <div className='see_more'>
                <Link to='/login/showMentor' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            <div className='event_body'>
              <div className='event_body_heading'>PRODUCTS</div>
              <FirstFiveProducts />
              <div className='see_more'>
                <Link to='/login/Products' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            <div className='event_body'>
              <div className='event_body_heading'>TALENT</div>
              <FirstFourTalent />
              <div className='see_more'>
                <Link to='/login/showTalents' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>
            <div className='event_body'>
              <div className='event_body_heading'>ORGANISATION</div>
              <FirstFourOrganisation />
              <div className='see_more'>
                <Link
                  to='/login/showOrganisation'
                  className='text_decoration clr'
                >
                  SEE MORE
                </Link>
              </div>
            </div>

            {/* Event Body */}

            <div className='event_body'>
              <div className='event_body_heading'>EVENTS</div>
              <FirstFiveEvents />
              <div className='see_more'>
                <Link to='/login/showEvents' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            <Footer />
            {/* <SmallFooter /> */}
          </div>
        </div>
      </>
    );
  }
}

export default ProfilePageForMentor;
