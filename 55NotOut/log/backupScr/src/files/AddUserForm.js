import React, { Component } from 'react';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import '../css_Files/productpage.css';
import TextEditor from './TextEditor';
import '../css_Files/addproduct.css';
import { v4 as uuidv4 } from 'uuid';
import {
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  InputLabel,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import HomeResponsiveHeader from './HomeResponsiveHeader';

export class LoginedAddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      description: '',
      Event_img_Url: '',
      FeatureEvent: '',
      file: '',
      ProductOrgin: '',
      sizeNotFit: '',
    };
  }

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
    setTimeout(() => {
      console.log(this.state.file);
      console.log(this.state.file.name);
    }, 4000);
  };

  onChangeOriginOfProduct = (event) => {
    console.log(event.target.value);
    this.setState({ ProductOrgin: event.target.value });
  };

  upload = async (e) => {
    const formdata = new FormData();
    formdata.append('file', this.state.file);

    console.log(formdata);
    // alert(formdata.get('file'));
    console.log(this.state.file);

    if (this.state.file.size / 1000000 > 1.0) {
      this.setState({ sizeNotFit: true });
    } else {
      console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
      try {
        const res = await axios.post('/ProductImageupload', formdata, {
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
    }
  };

  onChangeProductname = (event) => {
    console.log(this.state.name);
    this.setState({ name: event.target.value });
  };

  onChangeProductDescription = (event) => {
    console.log(this.state.description);
    this.setState({ description: event.target.value });
  };

  onChangeEventImgUrl = (event) => {
    console.log('description is :- ' + event.target.value);
    this.setState({ Event_img_Url: event.target.value });
  };

  mydraft = (value) => {
    console.log(value);
    console.log('uuuuuuuuuuuuuuuuuuuuu');
    this.setState({ description: value });
  };

  Submit = async (event) => {
    event.preventDefault();
    const Jobid = uuidv4();
    console.log(this.state.name);
    console.log(this.state.description);
    console.log(this.state.FeatureEvent);
    console.log(this.state.file.name);
    console.log(this.state.ProductOrgin);
    let encodeddescription = btoa(this.state.description);
    console.log(encodeddescription);
    let { data } = await axios.post(
      `/api/users/addproduct/${Jobid}/${
        this.state.name
      }/${encodeddescription}/${this.state.FeatureEvent}/${0}/${
        this.state.file.name
      }/${this.state.ProductOrgin}`
    );
    // console.log('data is :- ' + data);
    this.setState({
      name: '',
      description: '',
      Event_img_Url: '',
    });
  };

  onChangeEventFeature = (event) => {
    console.log(event.target.value);
    this.setState({ FeatureEvent: event.target.value });
    if (event.target.value === 'Yess') {
      // console.log(true);
      console.log(this.props);

      this.props.history.push({
        pathname: '/login/event/featureproducts',
        state: {
          name: this.state.name,
          description: this.state.description,
          FeatureEvent: event.target.value,
          Image_Name: this.state.file.name,
          productOrigin: this.state.ProductOrgin,
        },
      });
    }
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Go Back To previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='addpro'>ADD PRODUCT...</div>
        <div className='adduserform'>
          <form onSubmit={this.Submit}>
            <label className='flex_row'>
              <div className='labelpro'>Product Name: </div>
              <input
                type='productname'
                name='productname'
                placeholder='Write Your Product Name...'
                value={this.state.name}
                className='search_inputpro'
                onChange={this.onChangeProductname}
              />
            </label>
            <label className='flex_row1'>
              <div className='labelpro'>Description: </div>
              {/* <input
              type='productname'
              name='productname'
              placeholder='Write Description...'
              value={this.state.description}
              className='search_inputdescriptionproduct'
              onChange={this.onChangeProductDescription}
            /> */}
              <TextEditor mydraft={this.mydraft} />
            </label>

            <label className='flex_row'>
              <div className='labelpro'>Origin Of Product: </div>
              <input
                type='productOrigin'
                name='productOrigin'
                placeholder='Write Country Name...'
                value={this.state.ProductOrgin}
                className='search_inputdescriptionproduct'
                onChange={this.onChangeOriginOfProduct}
              />
            </label>

            <label className='flex_row'>
              <div className='labelpro'>Do you want feature this event: </div>
              <Select
                className='search_inputdescription'
                onChange={this.onChangeEventFeature}
                placeholder='Event Type'
                name='Event Feature'
              >
                <MenuItem value={'Yess'}>Yess</MenuItem>
                <MenuItem value={'No'}>No</MenuItem>
              </Select>
            </label>

            {this.state.sizeNotFit && (
              <div className='1212'>
                size Not valid, Image Size Should Be Less Than or Equal To 1MB
              </div>
            )}

            <div className='imageinputcontainer'>
              <input type='file' onChange={this.onChange}></input>
              <div className='uploadbtn' onClick={this.upload}>
                upload
              </div>
            </div>

            <div className='btn'>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                className='flex_row'
              >
                ADD PRODUCT
              </Button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(LoginedAddProduct);
