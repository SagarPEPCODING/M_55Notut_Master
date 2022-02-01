import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css_Files/productpage.css';
import axios from 'axios';
import Footer from './Footer';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import HomeResponsiveHeader from './HomeResponsiveHeader';

class Talent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      talent: '',
      description: '',
      Event_img_Url: '',
    };
  }

  onChangeTalentname = (event) => {
    console.log('talent is :- ' + event.target.value);
    this.setState({ talent: event.target.value });
  };

  onChangeTalentDescription = (event) => {
    console.log('description is :- ' + event.target.value);
    this.setState({ description: event.target.value });
  };

  onChangeEventImgUrl = (event) => {
    console.log('description is :- ' + event.target.value);
    this.setState({ Event_img_Url: event.target.value });
  };

  Submit = async () => {
    let { data } = await axios.post(
      `/api/users/addtalent/${this.state.talent}/${this.state.description}`
    );
    this.setState({
      talent: '',
      description: '',
      Event_img_Url: '',
    });
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        <div className='addpro'>ADD TALENT...</div>
        <div className='adduserform'>
          <form onSubmit={this.Submit}>
            <label className='flex_row'>
              <div className='labelpro'>Talent ABC: </div>
              <input
                type='talent'
                name='talent'
                placeholder='Fill this field...'
                value={this.state.talent}
                className='search_inputproTalent'
                onChange={this.onChangeTalentname}
              />
            </label>
            <label className='flex_row'>
              <div className='labelpro'>Talent Description: </div>
              <input
                type='productname'
                name='productname'
                placeholder='Write Description...'
                value={this.state.description}
                className='search_inputdescription'
                onChange={this.onChangeTalentDescription}
              />
            </label>
            <label className='flex_row'>
              <div className='labelpro'>Event Image Url: </div>
              <input
                name='Event'
                type='Event'
                placeholder='Write Description...'
                value={this.state.Event_img_Url}
                className='search_inputimageurltalent'
                onChange={this.onChangeEventImgUrl}
              />
            </label>
            <div className='btn'>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                className='flex_row'
              >
                ADD TALENT
              </Button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Talent;
