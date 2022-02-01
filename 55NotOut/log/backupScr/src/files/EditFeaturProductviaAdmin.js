import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
import TextEditor from './TextEditor';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';

export class EditFeaturProductviaAdmin extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      Job_id: this.props.location.state.mydata.jobid,
      name: this.props.location.state.mydata.Name_of_product,
      description: this.props.location.state.mydata.Discription,
      Event_img_Url: this.props.location.state.mydata.ImageName,
      FeatureEvent: this.props.location.state.mydata.Feature_access,
      file: this.props.location.state.mydata.ImageName,
      ProductOrgin: this.props.location.state.mydata.ProductOrigin,
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
        },
      });
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
    // console.log('hello');
    const Jobid = uuidv4();
    const objofstate = {
      name: this.state.name,
      description: this.state.description,
    };
    // this.props.adduser(objofstate);
    console.log(objofstate);
    // console.log(
    //   ' link is :- ' +
    //     `api/users/addproduct/${objofstate.name}/${objofstate.description}`
    // );
    let filename = 'blank-profile-picture-973460_640.png';
    if (this.state.file.length == 0) {
    } else {
      filename = this.state.file;
    }

    let productorigin = 'India';
    if (this.state.ProductOrgin === null) {
      console.log('am null');
    } else {
      console.log('not null');
      productorigin = this.state.ProductOrgin;
    }

    let { data } = await axios.post(
      `/api/users/addproductedit/${this.state.Job_id}/${this.state.name}/${
        this.state.description
      }/${this.state.FeatureEvent}/${0}/${filename}/${productorigin}`
    );
    // console.log('data is :- ' + data);
    this.setState({
      name: '',
      description: '',
      Event_img_Url: '',
    });
  };

  render() {
    console.log(this.state.name + '    ' + this.state.description + '    ');
    return (
      <div>
        <NewHeader></NewHeader>
        <SeeAllHeader></SeeAllHeader>
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
        <Footer />
      </div>
    );
  }
}

export default EditFeaturProductviaAdmin;
