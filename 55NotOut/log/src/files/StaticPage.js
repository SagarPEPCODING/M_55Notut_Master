import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import React, { Component } from 'react';
import '../css_Files/staticpage.css';
import RichtextEditor from './RichtextEditor';
import Button from '@material-ui/core/Button';
import TextEditor3 from './TextEditor3';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import HomeResponsiveHeader from './HomeResponsiveHeader';

export class StaticPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      editorState: '',
      writeinhtml: false,
      sizeNotFit: false,
      file: '',
      metatag: '',
    };
  }

  onChangemetatg = (event) => {
    console.log(event.target.value);
    this.setState({ metatag: event.target.value });
  };

  onChangetitle = (event) => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  };

  onChangedescription = (event) => {
    console.log(event.target.value);
    this.setState({ description: event.target.value });
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ description: event.target.value });
    document.getElementById('viewer').srcdoc = event.target.value;
    console.log(document.getElementById('viewer').value);
  };

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
    setTimeout(() => {
      console.log(this.state.file);
    }, 4000);
  };

  handleupload = async (e) => {
    e.preventDefault();
    console.log(this.state.file.size);
    // e.stopPropagation()
    if (this.state.file.size / 1000000 > 1.0) {
      this.setState({ sizeNotFit: true });
      console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    } else {
      const formdata = new FormData();
      formdata.append('file', this.state.file);

      console.log(formdata);
      alert(formdata.get('file'));

      alert('hello');

      try {
        const res = await axios.post(
          '/uploadfeaturedstaticpageimage',
          formdata,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        const { fileName, filePath } = res.data;
        this.setState({ uploadedfile: fileName, filePath });
      } catch (err) {
        if (err.response.status === 5000) {
          console.log('there was a problem with the server');
        } else {
          console.log(err.response.data.msg);
        }
      }

      // var myJSON = JSON.stringify(this.state.file);
      // console.log(this.state.file.name);
      // console.log(this.props.history.location.state.mail_id);
      // alert('hii');

      // let { data } = await axios.post(
      //   `/api/users/addProfileImage/${this.state.file.name}/${this.props.history.location.state.mail_id}`
      // );

      this.setState({ sizeNotFit: false });
    }
  };

  mydraftdescription = (value) => {
    console.log(value);
    var encodedStringBtoA = btoa(value);
    console.log(encodedStringBtoA);
    this.setState({ editorState: encodedStringBtoA });
  };

  onSubmit = async () => {
    const Jobid = uuidv4();
    console.log(this.state.title);
    console.log(this.state.file.name);
    let mydescription = '';
    if (this.state.writeinhtml == true) {
      console.log(this.state.description);
      var encodedStringBtoA = btoa(this.state.description);
      mydescription = encodedStringBtoA;
    } else {
      console.log(this.state.editorState);
      mydescription = this.state.editorState;
    }
    console.log(this.state.metatag);
    let mydummyurl = this.state.title + '@' + Jobid;
    let encodeurl = btoa(mydummyurl);

    let { data } = await axios.post(
      `/api/users/login/staticpage/${this.state.title}/${this.state.file.name}/${mydescription}/${this.state.metatag}/${Jobid}/${encodeurl}`
    );
    alert(`localhost:3000/staticpage/${encodeurl}`);
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='staticpageContainer'>
          <div className='contentcontainer'>
            <div className='contentcontainertitle'>
              <h2 className='contenttitle'>Title :- </h2>
              <input
                type='contenttitle'
                name='contenttitle'
                placeholder='Write title here'
                value={this.state.title}
                className='title'
                onChange={this.onChangetitle}
              />
            </div>
            <div className='contentdescription'>
              <h2 className='description'>Description </h2>
              {!this.state.writeinhtml && (
                <TextEditor3
                  mydraftdescription={this.mydraftdescription}
                ></TextEditor3>
              )}
              {!this.state.writeinhtml && (
                <div
                  className='writehtmlcode'
                  onClick={() => {
                    this.setState({ writeinhtml: true });
                  }}
                >
                  WRITE HTML CODE
                </div>
              )}
              {this.state.writeinhtml && (
                <>
                  <textarea
                    onChange={this.handleChange}
                    className='textareaofdescription'
                  />
                  <iframe id='viewer'></iframe>
                </>
              )}
            </div>
            <div className='contentmetatag'>
              <h2 className='metatag'>Meta Tag :-</h2>
              <input
                type='contentmetatag'
                name='contentmetatag'
                placeholder='Write meta tag here'
                value={this.state.metatag}
                className='title'
                onChange={this.onChangemetatg}
              />
            </div>
            <div className='profileimg'></div>
            {this.state.sizeNotFit && (
              <div className='1212'>
                size Not valid, Image Size Should Be Less Than or Equal To 1MB
              </div>
            )}
            <input type='file' onChange={this.onChange}></input>
            <Button
              variant='contained'
              color='default'
              onClick={this.handleupload}
            >
              UPLOAD
            </Button>

            <div className='submit' onClick={this.onSubmit}>
              SUBMIT
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default StaticPage;
