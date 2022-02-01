import React from 'react';
import '../css_Files/talent_homecss.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import HomeResponsiveHeader from './HomeResponsiveHeader';

function Talent_home_page() {
  return (
    <>
      <HomeResponsiveHeader></HomeResponsiveHeader>
      <SeeAllHeader></SeeAllHeader>
      <div className='talent_container'>
        <div className='Find_job margin'>
          <h2>Find Jobs</h2>
          <div className='Find_job_div'>
            This Is A Portal On Which You Can Find Jobs Which Are matching with
            Your Status
          </div>
          <Button variant='contained' color='primary'>
            <Link to='' className='text_decoration clr'>
              EXPLORE NOW
            </Link>
          </Button>
        </div>
        <div className='Volunteer margin'>
          <h2>Volunteer For A Good Cause</h2>
          <div className='Volunteer_div'>
            Volunteering doesn’t take any special skills or extensive experience
            – and there’s never a shortage of organizations looking for help.
            Once you begin your volunteer position, don’t hesitate to offer help
            outside of your assigned job.
          </div>
          <Button variant='contained' color='primary'>
            <Link to='' className='text_decoration clr'>
              EXPLORE NOW
            </Link>
          </Button>
        </div>
        <div className='Upskill margin'>
          <h2>Upskill Yourself</h2>
          <div className='Upskill_div'>
            Discover how to upskill yourself with these free online training
            courses from FutureLearn, designed to give the skills you need to
            get the job of your dreams.
          </div>
          <Button variant='contained' color='primary'>
            <Link to='' className='text_decoration clr'>
              EXPLORE NOW
            </Link>
          </Button>
        </div>
        <div className='feature_your_Profile margin'>
          <h2>Feature Your Profile</h2>
          <div className='feature_your_Profile_div'>
            Update Your Profile If You Learn Something More Exciting.
          </div>
          <Button variant='contained' color='primary'>
            <Link to='' className='text_decoration clr'>
              EXPLORE NOW
            </Link>
          </Button>
        </div>
        <div className='Business_list margin'>
          <h2>List Your Business/Services</h2>
          <div className='Business_list_div'>List Your Organisations Here.</div>
        </div>
        <Button variant='contained' color='primary'>
          <Link to='' className='text_decoration clr'>
            EXPLORE NOW
          </Link>
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default Talent_home_page;

{
  /*  */
}
