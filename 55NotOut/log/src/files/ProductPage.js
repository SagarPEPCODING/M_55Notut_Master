import React, { Component } from 'react';
import AddUserForm from './AddUserForm.js';
import ProductFile from './ProductFile';
import axios from 'axios';
import UserProfile from './EditUserProfile.js';
import FinalFooter from './FinalFooter';
import Carousel from './Carousel.js';
import Slider from './Slider';
import HomePageEvents from './HomePageEvents';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import '../css_Files/profilecss.css';
import FirstFiveEvents from './FirstFiveEvents';
import FirstFiveProducts from './FirstFiveProducts';
import FirstFiveJobs from './FirstFiveJobs';
import HomepageFeaturedMentor from './HomepageFeaturedMentor';
import FirstFourTalent from './FirstFourTalent';
import FirstFourOrganisation from './FirstFourOrganisation';
import FirstFourMentor from './FirstFourMentor';
import SimplePopper from './SimplePopper.js';
import Header from './Header';
import HomepagefeaturedCourses from './HomepagefeaturedCourses';
import HomeResponsiveHeader from './HomeResponsiveHeader.js';
import NewHeader from './NewHeader.js';
import HomePageJobs from './HomePageJobs';
import HomePageorganisations from './HomePageorganisations';
import HomePageFeaturedProducts from './HomePageFeaturedProducts';
import FeaturedServices from './FeaturedServices';
import IndexHeader from './IndexHeader';
import DemoFooter from './DemoFooter';
import Footer from './Footer';
import SmallFooter from './FooterAdmin';
import FirstFiveVolunteers from './FirstFiveVolunteers';
import FirstFiveJobsForFeaturedProfile from './FirstFiveJobsForFeaturedProfile';
import FirstFiveEventsForFeaturedProfile from './FirstFiveEventsForFeaturedProfile';
import FeaturedProfileOfMentors from './FeaturedProfileOfMentors';
import FeaturedCourses from './FeaturedCourses';
import SeeAllHeader from './SeeAllHeader';

class ProfilePage extends Component {
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
    console.log(window.screen.width);
    // console.log(this.state.logined + 'lksdjflkdsjfkds_________________');
    // console.log(this.props.username);
    // console.log(this.state.email_id + 'kjfklaljfkasdkfjsdkajfkasjfkasdfjkds');
    setTimeout(() => {
      this.setState({ popUp: true });
    }, 10000);
    setInterval(() => {
      alert(
        'Your screen resolution is: ' +
          window.screen.width +
          'x' +
          window.screen.height
      );
    }, 100000000);
  }

  render() {
    console.log(this.state.notaseniorprofessional);
    console.log(this.state.logined + ' ' + ' ttttt ');
    return (
      <>
        {this.state.logined !== undefined && this.state.logined ? (
          <>
            {/* <HomeResponsiveHeader
              email_id={this.props.email}
            ></HomeResponsiveHeader> */}
            {/* <SeeAllHeader /> */}
            <HomeResponsiveHeader
              logined={this.state.logined}
              email_id={this.props.email}
              username={this.props.username}
              notaseniorprofessional={this.state.notaseniorprofessional}
            ></HomeResponsiveHeader>
            <SeeAllHeader />
          </>
        ) : (
          <>
            <HomeResponsiveHeader
              email_id={this.props.email}
            ></HomeResponsiveHeader>
          </>
        )}

        <Slider></Slider>
        <div className='profilepage'>
          <div className='profile_page'>
            {/* Job Body */}

            <div className='event_body'>
              <div className='event_body_heading'>JOBS</div>
              <HomePageJobs />
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
              {/* <FeaturedProfileOfMentors /> */}
              <FirstFiveEventsForFeaturedProfile />
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
              <HomepageFeaturedMentor />
              <div className='see_more'>
                <Link to='/login/showMentor' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            {/* Featured Courses */}

            <div className='event_body'>
              <div className='event_body_heading'>Courses</div>
              <HomepagefeaturedCourses />
              <div className='see_more'>
                <Link to='/login/showMentor' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            {/* Featured Services */}

            <div className='event_body'>
              <div className='event_body_heading'>Services</div>
              <FeaturedServices />
              <div className='see_more'>
                <Link to='/login/showMentor' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            <div className='event_body'>
              <div className='event_body_heading'>PRODUCTS</div>
              <HomePageFeaturedProducts />
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
              <HomePageorganisations />
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
              <HomePageEvents />
              <div className='see_more'>
                <Link to='/login/showEvents' className='text_decoration clr'>
                  SEE MORE
                </Link>
              </div>
            </div>

            <FinalFooter />
            {/* <SmallFooter /> */}
          </div>
        </div>
      </>
    );
  }
}

export default ProfilePage;
