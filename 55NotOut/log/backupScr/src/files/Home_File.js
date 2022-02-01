import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../css_Files/home.css';
import NewHomePage from './NewHomePage';
import '../css_Files/newhomepagecss.css';

class Home_File extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* <NewHomePage /> */}
        <div className='bg'>
          <div className='home'>
            <div className='container_home'>
              <Button variant='contained' color='primary' type='submit'>
                <Link to='/login'>Login</Link>
              </Button>
              <Button variant='contained' color='secondary' type='submit'>
                <Link to='/signup'>Signup</Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home_File;
