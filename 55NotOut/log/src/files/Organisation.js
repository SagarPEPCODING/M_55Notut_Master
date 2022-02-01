import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/productpage.css';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import { v4 as uuidv4 } from 'uuid';
import {
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  InputLabel,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';

class Talent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='addpro'>ADD ORGANISATION...</div>
        <div className='adduserform'>
          <form onSubmit={this.Submit}>
            {/* Organisation_Name */}
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

            {/* Organisation Motive */}
            {/* <label className='flex_row'>
              <div className='labelpro'>Organisation Motive: </div>
              <input
                type='Organisation_Motive'
                name='Organisation_Motive'
                placeholder='Write Organisation Motive Here'
                value={this.state.Organisation_Motive}
                className='search_inputproMentor'
                onChange={this.onChangeOrganisation_Motive}
              />
            </label> */}

            {/* Information About Organisation*/}

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

            {/* Organisation Founder */}

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

            {/* Organisation Co-Founder */}

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

            {/* Organisation Mail_id */}

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

            {/* Contact Number */}

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

            {/* No of Members */}

            {/* <label className='flex_row'>
              <div className='labelpro'>No Of Members In Organisation: </div>
              <input
                type='Organisation_Members'
                name='Organisation_Members'
                placeholder='Write Number Of Members In Organisation Here'
                value={this.state.Number_of_members_in_Oranisation}
                className='search_inputproMentor'
                onChange={this.onChangeNumber_of_members_in_Oranisation}
              />
            </label> */}

            {/* Question */}

            {/* <label className='flex_row'>
              <div className='labelpro'>
                Why I Should Choose Your Organisation:
              </div>
              <input
                type='Organisation_question'
                name='Organisation_question'
                placeholder='Write 200 Words Atleast...'
                value={this.state.question}
                className='search_inputproMentor'
                onChange={this.onChangequestion}
              />
            </label> */}

            {/* Organisation Establishment Year */}

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

            {/* Type Of Organisation */}

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
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Talent);
