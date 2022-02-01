import React, { Component } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  InputLabel,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import { connect } from 'react-redux';
import store from '../Store/store';
import axios from 'axios';
import NewHeader from './NewHeader';
import { v4 as uuidv4 } from 'uuid';

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Increment()),
    decrement: () => dispatch(Decrement()),
    loggin: (logornot) => dispatch(loggedin(logornot)),
    email: (email) => dispatch(emailid(email)),
  };
};

const mapStateToProps = (props) => {
  return {
    inc: props.increment,
    dec: props.decrement,
    log: props.loggin,
    emailid: props.myemail,
  };
};

export class OrganisationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstclass: '',
      lastclass: '',

      Organisation_Name: '',
      Organisation_Motive: '',
      Information_about_Organisation: '',
      Organisation_Founder: '',
      Organisation_Co_Founder: '',
      Organisation_mail_id: '',
      Contact_no: '',
      Number_of_members_in_Oranisation: 0,
      question: '',
      Organisation_establishment_Year: '',
      Type_of_Organisation: '',
      FeatureEvent: '',
      file: '',
      sizeNotFit: '',
    };
  }

  componentDidMount = () => {
    console.log(this.props.log + '    ' + this.props.emailid);

    let storage = localStorage.getItem('state');
    console.log(storage);
    let url = window.location.href;
    storage = JSON.parse(storage);
    if (this.props.log === undefined && this.props.emailid === undefined) {
      console.log('redux m state nhi hai...........................');

      localStorage.setItem('url', url);
      if (storage === null) {
        console.log(
          'redux m state nhi hai && storage mai bhi nhi hain...........................'
        );
        this.props.history.push({
          pathname: '/login',
        });
      } else {
        console.log(
          'redux m state nhi hai && but storage m hai...........................'
        );
        console.log(storage.myemail.myemail);
        console.log(storage.loggin.loggin);
        this.props.email(storage.myemail.myemail);
        this.props.loggin(storage.loggin.loggin);
        // this.props.history.push({
        //   pathname: '/AddOrganisation',
        //   state: {
        //     Email_id: storage.myemail.myemail,
        //   },
        // });
      }
    } else {
      if (storage === null) {
        localStorage.setItem('url', url);
        console.log('application m nhi hai ... new tab');
        let s = store.getState();
        console.log(s);
        this.props.history.push({
          pathname: '/login',
        });
        // localStorage.setItem('state', stringifystore);
      } else {
        console.log('user loggined... same tab...');
      }
    }
  };

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
    setTimeout(() => {
      console.log(this.state.file);
      console.log(this.state.file.name);
    }, 4000);
  };

  upload = async (e) => {
    e.preventDefault();

    if (this.state.file.size / 1000000 > 1.0) {
      this.setState({ sizeNotFit: true });
    } else {
      const formdata = new FormData();
      formdata.append('file', this.state.file);

      console.log(formdata);
      alert(formdata.get('file'));
      console.log(this.state.file);
      try {
        const res = await axios.post('/OrganisationImageupload', formdata, {
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

  onChangeEventFeature = (event) => {
    console.log(event.target.value);
    this.setState({ FeatureEvent: event.target.value });
    if (event.target.value === 'Yess') {
      console.log(true);
      console.log(this.props);

      this.props.history.push({
        pathname: '/login/event/featureorganisation',
        state: {
          Organisation_Name: this.state.Organisation_Name,
          Organisation_Motive: this.state.Organisation_Motive,
          Information_about_Organisation: this.state
            .Information_about_Organisation,
          Organisation_Founder: this.state.Organisation_Founder,
          Organisation_Co_Founder: this.state.Organisation_Co_Founder,
          Organisation_mail_id: this.state.Organisation_mail_id,
          Contact_no: this.state.Contact_no,
          Number_of_members_in_Oranisation: this.state
            .Number_of_members_in_Oranisation,
          question: this.state.question,
          Organisation_establishment_Year: this.state
            .Organisation_establishment_Year,
          Type_of_Organisation: this.state.Type_of_Organisation,
          FeatureEvent: event.target.value,
          Image_Name: this.state.file.name,
        },
      });
    }
  };

  onChangeOrganisationname = (event) => {
    console.log('Organisation is :- ' + event.target.value);
    this.setState({ organisation: event.target.value });
  };

  onChangeOrganisationDescription = (event) => {
    console.log('description is :- ' + event.target.value);
    this.setState({ description: event.target.value });
  };

  onChangeOrganisation_Name = (event) => {
    console.log('Organisation Name :- ' + event.target.value);
    this.setState({ Organisation_Name: event.target.value });
  };

  onChangeOrganisation_Motive = (event) => {
    console.log('Organisation Motive Is :- ' + event.target.value);
    this.setState({ Organisation_Motive: event.target.value });
  };

  onChangeInformation_about_Organisation = (event) => {
    console.log('Information :- ' + event.target.value);
    this.setState({ Information_about_Organisation: event.target.value });
  };

  onChangeOrganisation_Founder = (event) => {
    console.log('Organisation Founder' + event.target.value);
    this.setState({ Organisation_Founder: event.target.value });
  };

  onChangeOrganisation_Co_Founder = (event) => {
    console.log('Co-founder :- ' + event.target.value);
    this.setState({ Organisation_Co_Founder: event.target.value });
  };

  onChangeOrganisation_mail_id = (event) => {
    console.log('Organisation Mail Id :- ' + event.target.value);
    this.setState({ Organisation_mail_id: event.target.value });
  };

  onChangeContact_no = (event) => {
    console.log('contact Number :- ' + event.target.value);
    this.setState({ Contact_no: event.target.value });
  };

  onChangeNumber_of_members_in_Oranisation = (event) => {
    console.log('Number of members :- ' + event.target.value);
    this.setState({ Number_of_members_in_Oranisation: event.target.value });
  };

  onChangequestion = (event) => {
    console.log('question :- ' + event.target.value);
    this.setState({ question: event.target.value });
  };

  onChangeOrganisation_establishment_Year = (event) => {
    console.log('Organisation Establishment Year :- ' + event.target.value);
    this.setState({ Organisation_establishment_Year: event.target.value });
  };

  onChangeType_of_Organisation = (event) => {
    console.log('Type of Organisation :- ' + event.target.value);
    this.setState({ Type_of_Organisation: event.target.value });
  };

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };

  prevStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  Submit = async (event) => {
    event.preventDefault();
    const Jobid = uuidv4();
    const params = JSON.stringify({
      Job_id: Jobid,
      Organisation_Name: this.state.Organisation_Name,
      Organisation_Motive: this.state.Organisation_Motive,
      Information_about_Organisation: this.state.Information_about_Organisation,
      Organisation_Founder: this.state.Organisation_Founder,
      Organisation_Co_Founder: this.state.Organisation_Co_Founder,
      Organisation_mail_id: this.state.Organisation_mail_id,
      Contact_no: this.state.Contact_no,
      Number_of_members_in_Oranisation: this.state
        .Number_of_members_in_Oranisation,
      question: this.state.question,
      Organisation_establishment_Year: this.state
        .Organisation_establishment_Year,
      Type_of_Organisation: this.state.Type_of_Organisation,
      Image_Name: this.state.file.name,
    });
    console.log(params);
    let { data } = await axios.post(`/api/users/addorganisation/${params}`);
    this.setState({
      Organisation_Name: '',
      Organisation_Motive: '',
      Information_about_Organisation: '',
      Organisation_Founder: '',
      Organisation_Co_Founder: '',
      Organisation_mail_id: '',
      Contact_no: '',
      Number_of_members_in_Oranisation: '',
      question: '',
      Organisation_establishment_Year: '',
      Type_of_Organisation: '',
    });
  };

  render() {
    const firstPageClass = this.state.step === 1 ? 'disabled' : 'clickable';
    const lastPageClass = this.state.step === 11 ? 'disabled' : 'clickable';
    const firstpage = this.state.step === 1 ? 'none' : 'flex';
    const lastpage = this.state.step === 11 ? 'none' : 'flex';
    switch (this.state.step) {
      case 1:
        return (
          <>
            <label className='flex_row'>
              <div className='labelpro'>Organisation Name: </div>
              <input
                type='Organisation_name'
                name='Organisation_name'
                placeholder='Write Organisation Name Here'
                value={this.state.Organisation_Name}
                className='search_inputproMentor'
                onChange={this.onChangeOrganisation_Name}
              />
            </label>
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );
      case 2:
        return (
          <>
            <label className='flex_row'>
              <div className='labelpro'>Organisation Information: </div>
              <input
                type='Organisation_Information'
                name='Organisation_Information'
                placeholder='Write Organisation Information Here'
                value={this.state.Information_about_Organisation}
                className='search_inputproMentor'
                onChange={this.onChangeInformation_about_Organisation}
              />
            </label>
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );
      case 3:
        return (
          <>
            <label className='flex_row'>
              <div className='labelpro'>Organisation Founder: </div>
              <input
                type='Organisation_Founder'
                name='Organisation_Founder'
                placeholder='Write Organisation Founder Here'
                value={this.state.Organisation_Founder}
                className='search_inputproMentor'
                onChange={this.onChangeOrganisation_Founder}
              />
            </label>
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );
      case 4:
        return (
          <>
            <label className='flex_row'>
              <div className='labelpro'>Organisation Co-Founder: </div>
              <input
                type='Organisation_CoFounder'
                name='Organisation_CoFounder'
                placeholder='Write Organisation Co-Founder Here'
                value={this.state.Organisation_Co_Founder}
                className='search_inputproMentor'
                onChange={this.onChangeOrganisation_Co_Founder}
              />
            </label>
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );
      case 5:
        return (
          <>
            <label className='flex_row'>
              <div className='labelpro'>Organisation Mail_Id: </div>
              <input
                type='Organisation_Mail_ID'
                name='Organisation_Mail_ID'
                placeholder='Write Organisation Mail_Id Here'
                value={this.state.Organisation_mail_id}
                className='search_inputproMentor'
                onChange={this.onChangeOrganisation_mail_id}
              />
            </label>
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );

      case 6:
        return (
          <>
            <label className='flex_row'>
              <div className='labelpro'>Organisation Contact No: </div>
              <input
                type='Organisation_Contact'
                name='Organisation_Contact'
                placeholder='Write Organisation Contact Here'
                value={this.state.Contact_no}
                className='search_inputproMentor'
                onChange={this.onChangeContact_no}
              />
            </label>
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );

      case 7:
        return (
          <>
            <label className='flex_row'>
              <div className='labelpro'>Organisation Establishment Year:</div>
              <input
                type='Establishment'
                name='Establishment'
                placeholder='Write Organisation Establishment Year Here'
                value={this.state.Organisation_establishment_Year}
                className='search_inputproMentor'
                onChange={this.onChangeOrganisation_establishment_Year}
              />
            </label>
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );

      case 8:
        return (
          <>
            <label className='flex_row'>
              <div className='labelpro'>Type Of Organisation:</div>
              <input
                type='type'
                name='type'
                placeholder='Write Type Of Organisation Here'
                value={this.state.Type_of_Organisation}
                className='search_inputproMentor'
                onChange={this.onChangeType_of_Organisation}
              />
            </label>
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );

      case 9:
        return (
          <>
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
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );

      case 10:
        return (
          <>
            <label className='flex_row'>
              <div className='labelpro'>
                Do you want feature this Organisation:{' '}
              </div>
              <Select
                className='search_inputdescription'
                onChange={this.onChangeEventFeature}
                placeholder='Event Type'
                name='Event Feature'
              >
                {/* <option disabled={true} value=''>
                  Feature Event
                </option> */}
                <MenuItem value={'Yess'}>Yess</MenuItem>
                <MenuItem value={'No'}>No</MenuItem>
              </Select>
            </label>
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );

      case 11:
        return (
          <>
            <div className='btn'>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                className='flex_row'
              >
                ADD ORGANISATION
              </Button>
            </div>
            <div
              className={`${lastPageClass}`}
              style={{ display: `${lastpage}` }}
              onClick={this.nextStep}
            >
              Next
            </div>
            <div
              className={`${firstPageClass}`}
              style={{ display: `${firstpage}` }}
              onClick={this.prevStep}
            >
              Prev
            </div>
          </>
        );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrganisationForm));
