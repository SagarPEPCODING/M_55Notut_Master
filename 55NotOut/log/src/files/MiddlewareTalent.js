import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/profilecss.css';
import { Link } from 'react-router-dom';
import logo from '../foreantech_logo.png';
import FirstFourTalent from './FirstFourTalent';
import Footer from './Footer';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import HomeResponsiveHeader from './HomeResponsiveHeader';

class MiddlewareTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameofproduct: '',
      descriptionofobject: '',
      user: [],
      stateProfile: false,
    };
  }

  render() {
    return (
      <div className='profile_page'>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='event_body'>
          <div className='event_body_heading'>TALENT</div>
          <FirstFourTalent />
          <div className='see_more'>
            <Link to='/login/showTalents' className='text_decoration clr'>
              SEE MORE
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MiddlewareTalent;
