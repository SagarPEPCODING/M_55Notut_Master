import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import slider from '../sliderimages/frank-mckenna-OD9EOzfSOh0-unsplash.jpg';
import '../css_Files/sliderimagefrontend.css';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

export class SliderImageFrontent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeNotFit: false,
      file: '',
      myimage: '',
      mydata: '',
      link: '',
      alt: '',
      mobileclicked: false,
      desktopclicked: false,
      truecolor: 'black',
      falsecolor: '#80808026',
    };
  }

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
    setTimeout(() => {
      console.log(this.state.file);
    }, 4000);
  };

  componentDidMount = async () => {
    let { data } = await axios.get('/api/users/getuserSliderImages');
    console.log('hello slider');

    let myreq = [];
    data.user.map((val) => {
      console.log(val);
      if (val.ImageUrl !== 'undefined') {
        let req = require(`../publicImageFolder/${val.ImageUrl}`);
        console.log(req);
        myreq.push(req.default);
      }
    });
    this.setState({ mydata: myreq });
    console.log(this.state.mydata);
  };

  handleupload = async (e) => {
    e.preventDefault();
    console.log(this.state.file.size);

    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');

    const formdata = new FormData();
    formdata.append('file', this.state.file);

    console.log(formdata);
    alert(formdata.get('file'));

    alert('hello');

    try {
      const res = await axios.post('/uploadsliderimage', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { fileName, filePath } = res.data;
      console.log(fileName + '    ' + filePath);
      this.setState({ uploadedfile: fileName, filePath });
    } catch (err) {
      if (err.response.status === 5000) {
        console.log('there was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
    console.log(this.state.file.name);
    setTimeout(() => {
      const myreq = require(`../publicImageFolder/${this.state.file.name}`);
      console.log(myreq);
      this.setState({ myimage: myreq });
    }, 7000);
  };

  onChangelink = (event) => {
    console.log(event.target.value);
    this.setState({ link: event.target.value });
  };

  onChangealt = (event) => {
    console.log(event.target.value);
    this.setState({ alt: event.target.value });
  };

  submit = async (event) => {
    const Jobid = uuidv4();
    console.log(this.state.link);
    console.log(this.state.alt);
    let encodestring = btoa(this.state.link);
    console.log(encodestring);
    let forwhat = '';
    if (this.state.desktopclicked) {
      forwhat = 'desktop';
    } else {
      forwhat = 'mobile';
    }
    let { data } = await axios.post(
      `/api/users/addsliderimages/${Jobid}/${this.state.file.name}/${encodestring}/${this.state.alt}/${forwhat}`
    );

    this.setState({ link: '' });
    this.setState({ alt: '' });
  };

  MobileClicked = () => {
    console.log('mobile clicked');
    this.setState({ mobileclicked: !this.state.mobileclicked });
    this.setState({ desktopclicked: false });
  };

  DesktopClicked = () => {
    console.log('desktop clicked');
    this.setState({ desktopclicked: !this.state.desktopclicked });
    this.setState({ mobileclicked: false });
  };

  render() {
    let vv = this.state.mydata;
    console.log(this.state.mobileclicked + '    ' + 'it is for mobile');
    console.log(this.state.desktopclicked + '    ' + 'it is for desktop');
    return (
      <div>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <img src={this.state.myimage.default} className='profileimg'></img>
        {this.state.sizeNotFit && (
          <div className='1212'>
            size Not valid, Image Size Should Be Less Than or Equal To 1MB
          </div>
        )}
        <input type='file' onChange={this.onChange}></input>
        <Button variant='contained' color='default' onClick={this.handleupload}>
          UPLOAD
        </Button>
        <div className='containerlink'>
          <div className='link'>Link :- </div>
          <input
            type='contentlink'
            name='contentlink'
            placeholder='Write Link here'
            value={this.state.link}
            className='title'
            onChange={this.onChangelink}
          />
        </div>
        <div className='containeralt'>
          <div className='link'>Alt :- </div>
          <input
            type='contentalt'
            name='contentlink'
            placeholder='Write alt here'
            value={this.state.alt}
            className='title'
            onChange={this.onChangealt}
          />
        </div>

        <div className='outershell'>
          <div className='DesktopMobileContainer'>
            {this.state.desktopclicked && (
              <div className='checkbtnContainer'>
                <div
                  className='checkboxContainer'
                  onClick={this.DesktopClicked}
                  style={{
                    background: `${this.state.truecolor}`,
                    color: 'white',
                  }}
                >
                  <div className='desktoptext'>Desktop</div>
                </div>
              </div>
            )}

            {!this.state.desktopclicked && (
              <div className='checkbtnContainer'>
                <div
                  className='checkboxContainer'
                  onClick={this.DesktopClicked}
                  style={{
                    background: `${this.state.falsecolor}`,
                  }}
                >
                  <div className='desktoptext'>Desktop</div>
                </div>
              </div>
            )}

            {this.state.mobileclicked && (
              <div className='checkbtnContainer'>
                <div
                  className='checkboxContainer'
                  onClick={this.MobileClicked}
                  style={{
                    background: `${this.state.truecolor}`,
                    color: 'white',
                  }}
                >
                  <div className='mobiletext'>Mobile</div>
                </div>
              </div>
            )}

            {!this.state.mobileclicked && (
              <div className='checkbtnContainer'>
                <div
                  className='checkboxContainer'
                  onClick={this.MobileClicked}
                  style={{ background: `${this.state.falsecolor}` }}
                >
                  <div className='mobiletext'>Mobile</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='containbtn' onClick={this.submit}>
          SUBMIT
        </div>
        <Footer />
      </div>
    );
  }
}

export default SliderImageFrontent;
