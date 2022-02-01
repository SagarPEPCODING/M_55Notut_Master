import React, { Component } from 'react';
// import '../css_Files/addcourse.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import NewHeader from './NewHeader';
import Footer from './Footer';
import SeeAllHeader from './SeeAllHeader';
import CourseDescriptionEditor from './CourseDescriptionEditor';
import HomeResponsiveHeader from './HomeResponsiveHeader';

export class Addcourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      file: '',
      sizeNotFit: false,
      datacome: false,
      jobid: '',
      imagename: '',
      emailid: '',
    };
  }

  componentDidMount = () => {
    let {
      uuid,
      name,
      description,
      price,
      feature_access,
      filename,
      see_access,
      Email_id,
    } = this.props.history.location.state.value;

    let decodeddescription = atob(description);
    console.log(decodeddescription);

    this.setState({ jobid: uuid });
    this.setState({ name: name });
    this.setState({ description: decodeddescription });
    this.setState({ price: price });
    this.setState({ imagename: filename });
    this.setState({ emailid: Email_id });
    this.setState({ datacome: true });
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
        const res = await axios.post('/uploadcoursimages', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const { fileName, filePath } = res.data;
        this.setState({ uploadedfile: fileName, filePath });
      } catch (err) {
        if (err.response.status === 5000) {
          console.log('there was a problem with the server');
        } else {
          console.log(err.response.data.msg);
        }
      }

      this.setState({ sizeNotFit: false });
    }
  };

  coursenameChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  descriptionChange = (event) => {
    console.log(event.target.value);
    this.setState({ description: event.target.value });
  };

  priceChange = (event) => {
    console.log(event.target.value);
    this.setState({ price: event.target.value });
  };

  submit = async (event) => {
    const myid = uuidv4();
    console.log(this.state.name);
    console.log(this.state.description);
    console.log(this.state.file.name);
    console.log(this.state.price);
    let imgname = '';
    if (this.state.file.name != undefined && this.state.file.name.length > 0) {
      imgname = this.state.file.name;
    } else {
      imgname = this.state.imagename;
    }
    const params = JSON.stringify({
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      imagename: imgname,
      jobid: this.state.jobid,
    });

    console.log(params);
    let { data } = await axios.post(`/api/users/login/updateCourses/${params}`);
  };

  mydraftdescription = (value) => {
    console.log(value);
    var encodedStringBtoA = btoa(value);
    console.log(encodedStringBtoA);
    this.setState({ description: encodedStringBtoA });
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='coursecontainer'>
          <div className='myicontainer'>
            <div className='coursename'>
              <div className='coursenamecontainer'>Course Name :-</div>
              <input
                type='text'
                label={this.state.name}
                value={this.state.name}
                className='textusername'
                onChange={this.coursenameChange}
              ></input>
            </div>
            <div className='coursedescription'>
              <div className='coursedescriptioncontainer'>Description :-</div>

              {this.state.datacome && (
                <CourseDescriptionEditor
                  mydraftdescription={this.mydraftdescription}
                  value={this.state.description}
                ></CourseDescriptionEditor>
              )}
            </div>
            <div className='price'>
              <div className='pricecontainer'>Price :-</div>
              <input
                type='text'
                label={this.state.price}
                className='textusername'
                value={this.state.price}
                onChange={this.priceChange}
              ></input>
            </div>
            <div className='featuredimage'>
              <div className='featureimagecontainer'>Featured Image :-</div>
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
            </div>
            <div className='availnow' onClick={this.submit}>
              UPDATE
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Addcourse;
