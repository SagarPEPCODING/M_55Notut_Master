import React, { Component } from 'react';
import axios from 'axios';
import CardMentorDescriptionEditor from './CardMentorDescriptionEditor';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import FinalFooter from './FinalFooter';
import '../css_Files/individualMentorbyid.css';
import IndividualMentorShow from './IndividualMentorShow';
import HomeResponsiveHeader from './HomeResponsiveHeader';

export class IndividualMentorbyid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: [],
      myimg: '',
      CareerSummary: '',
      datacome: false,
    };
  }

  componentDidMount = async () => {
    let arr = window.location.href.split('/');
    let id = arr[arr.length - 1];
    let { data } = await axios.get(`/api/users/getMentor/${id}`);
    console.log(data);
    this.setState({ mydata: data.user });
    let decodedcareerSummary = atob(data.user[0].CareerSummary);
    this.setState({ CareerSummary: decodedcareerSummary });
    this.setState({ datacome: true });

    if (data.user[0].ImageName === 'undefined') {
      let myreq = require('../mentorImageFolder/blank-profile-picture-973460_640.png');
      this.setState({ myimg: myreq });
    } else {
      let myreq = require(`../mentorImageFolder/${data.user[0].ImageName}`);
      this.setState({ myimg: myreq });
    }
  };

  render() {
    if (this.state.mydata.length > 0) {
      return (
        <>
          <HomeResponsiveHeader />
          <SeeAllHeader></SeeAllHeader>
          <div className='jobContainer displayflexJob'>
            <div className='singlejobpageContainer '>
              <div className='firstContainer'>
                <div className='jbdescrheCont'>
                  <div className='jbtypeCont'>
                    {this.state.mydata[0].First_Name}{' '}
                    {this.state.mydata[0].Last_Name}
                  </div>
                  <div className='dash'>-</div>
                  <div className='jbCompaName'>
                    {this.state.mydata[0].Mentor_profile}
                  </div>
                </div>

                <div className='firstContainerjobdescpart2'>
                  <div className='comptypo widthsndcomp fontsixe08rem fontweight'>
                    Experience
                  </div>
                  <div className='JobTypo widthsndcomp fontsixe08rem fontweight'>
                    EmailId
                  </div>
                  <div className='langreq fontsixe08rem fontweight'>
                    Language Known
                  </div>
                  <div className='package widthsndcomp fontsixe08rem fontweight'>
                    Gender
                  </div>
                </div>

                <div className='firstContainerjobdescpart2'>
                  <div className='comptypo widthsndcomp fontsixe08rem'>
                    {this.state.mydata[0].Experience} years
                  </div>
                  <div className='JobTypo widthsndcomp fontsixe08rem'>
                    {this.state.mydata[0].Email_id}
                  </div>
                  <div className='langreq fontsixe08rem'>
                    {this.state.mydata[0].Languages_known}
                  </div>
                  <div className='package widthsndcomp fontsixe08rem'>Male</div>
                </div>

                <div className='aboutCompCont'>
                  <div className='aboutCom'>Carrer Summary</div>
                  <div className='aboutCompans visibilityhidden'>
                    {this.state.datacome && (
                      <IndividualMentorShow
                        value={this.state.CareerSummary}
                      ></IndividualMentorShow>
                    )}
                  </div>
                </div>

                <div className='ReqSkillsContainer'>
                  <div className='reqskillsComp'>Topics</div>
                  <div className='ansreqskillsComp'>
                    {this.state.mydata[0].topics}
                  </div>
                </div>
                <div className='ReqSoftSkillsContainer'>
                  <div className='reqsoftskillsComp'>Number Of Sessions</div>
                  <div className='ansreqsoftskillsComp'>
                    {this.state.mydata[0].No_of_Sessions}
                  </div>
                </div>
                <div className='ReqSoftSkillsContainer'>
                  <div className='reqsoftskillsComp'>Pricing</div>
                  <div className='ansreqsoftskillsComp'>
                    {this.state.mydata[0].pricing}
                  </div>
                </div>
              </div>
              <div className='secondContainer'>
                {/* image */}
                <div className='imgContainerjbs'>
                  <div className='divofimg'>
                    <img
                      src={this.state.myimg.default}
                      className='imagejobindi'
                    ></img>
                  </div>
                </div>

                {/* posted on */}
                <div className='postedonCont'>
                  <div className='postedonheading'>Created on</div>
                  <div className='postedon'>12/03/2020</div>
                </div>

                {/* views */}
                <div className='viewsCont'>
                  <div className='viewsheading'>Views</div>
                  <div className='viewson'>2020</div>
                </div>
              </div>
            </div>
          </div>
          <FinalFooter />
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default IndividualMentorbyid;
