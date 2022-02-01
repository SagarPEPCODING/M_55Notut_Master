import React, { Component } from 'react';
import axios from 'axios';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import Footer from './Footer';
import '../css_Files/applycss.css';
import logo from '../eventImageFolder/becca-tapert--A_Sx8GrRWg-unsplash.jpg';
import { v4 as uuidv4, stringify } from 'uuid';
import AddExperienceOfJobSeeker from './AddExperienceOfJobSeeker';
import { MdArrowDropDownCircle } from 'react-icons/md';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
import { connect } from 'react-redux';
import HomeResponsiveHeader from './HomeResponsiveHeader';

const mapStateToProps = (props) => {
  return {
    inc: props.increment,
    dec: props.decrement,
    log: props.loggin,
    emailid: props.myemail,
  };
};

// mapStateToProps,mapDispatchToProps

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Increment()),
    decrement: () => dispatch(Decrement()),
    loggin: (logornot) => dispatch(loggedin(logornot)),
    email: (email) => dispatch(emailid(email)),
  };
};

export class Applypages extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
    this.state = {
      mm: false,
      Email_id: '',
      IterestedIn: [],
      Competency: [],
      SoftSkill: [],
      TechProficiency: [],
      LanguageSpoken: [],
      name: '',
      about: '',
      detailedSummary: '',
      transfer1: '',
      transfer2: '',
      transfer3: '',
      calendly: '',
      website: '',
      Linkein: '',
      ImageName: '',

      textareadata: false,
      transerablearr: [],
      addExperience: false,
      experienceid: '',
      exparr: [],
      date: today,
      currentDateTime: Date().toLocaleString(),
      mytime: '',
      shortlistclick: false,

      interviewdate: '',
      interviewtiming: '',
      interviewaddress: '',
      companyemailid: '',
    };
  }

  componentDidMount = async () => {
    let email = '';
    if (this.props.history.location.state !== undefined) {
      this.setState({ mm: this.props.history.location.state.mm });
      email = this.props.history.location.state.email;
    }

    console.log(email);
    let { data } = await axios.get(`/api/users/getuserprofiledata/${email}`);
    console.log(data.user[0]);
    if (data.user[0] !== undefined) {
      this.setState({ Email_id: data.user[0].Email_id });
      let arrinterestedIn = data.user[0].IterestedIn.split(',');
      console.log(arrinterestedIn);
      this.setState({ IterestedIn: arrinterestedIn });
      let arrCompetency = data.user[0].Competency.split(',');
      console.log(arrCompetency);
      this.setState({ Competency: arrCompetency });
      let arrSoftSkill = data.user[0].SoftSkill.split(',');
      console.log(arrSoftSkill);
      this.setState({ SoftSkill: arrSoftSkill });
      let arrTechProficiency = data.user[0].TechProficiency.split(',');
      console.log(arrTechProficiency);
      this.setState({ TechProficiency: arrTechProficiency });
      let arrLanguageSpoken = data.user[0].LanguageSpoken.split(',');
      console.log(arrLanguageSpoken);
      this.setState({ LanguageSpoken: arrLanguageSpoken });
      this.setState({ name: data.user[0].name });
      let abouttoken = atob(data.user[0].about);
      console.log(abouttoken);
      this.setState({ about: abouttoken });
      let detailedtoken = atob(data.user[0].detailedSummary);
      console.log(detailedtoken);
      this.setState({ detailedSummary: detailedtoken });
      let arrtransferable = [];
      arrtransferable.push(data.user[0].transfer1);
      arrtransferable.push(data.user[0].transfer2);
      arrtransferable.push(data.user[0].transfer3);
      this.setState({ transerablearr: arrtransferable });
      this.setState({ transfer1: data.user[0].transfer1 });
      this.setState({ transfer2: data.user[0].transfer2 });
      this.setState({ transfer3: data.user[0].transfer3 });
      this.setState({ calendly: data.user[0].calendly });
      this.setState({ website: data.user[0].website });
      this.setState({ Linkein: data.user[0].Linkein });
      this.setState({ ImageName: data.user[0].ImageName });
      let datavalue = (document.getElementById(
        'myTextarea'
      ).value = this.state.about);
      this.setState({ textareadata: true });
      console.log(datavalue);
      document.getElementById('viewer').srcdoc = datavalue;

      // myTextareadescription
      let datavalue1 = (document.getElementById(
        'myTextareadescription'
      ).value = this.state.detailedSummary);
      console.log(datavalue1);
      document.getElementById('viewerdescription').srcdoc = datavalue1;

      let data3 = await axios.get(
        `/api/users/getExperiencedata/${this.state.Email_id}`
      );
      console.log(data3.data.user);
      this.setState({ exparr: data3.data.user });
      console.log(this.state.currentDateTime);
      let arrofdate = this.state.currentDateTime.split(' ');
      console.log(arrofdate[4]);
      this.setState({ mytime: arrofdate[4] });
      console.log(this.state.date);
    } else {
      let myurl = window.location.href;
      let arrmyurl = myurl.split('/');
      let mypropsdata = arrmyurl[arrmyurl.length - 1];
      let objstringifydata = atob(mypropsdata);
      let finalobj = JSON.parse(objstringifydata);
      console.log(finalobj);
      let { data } = await axios.get(
        `/api/users/getuserprofiledata/${finalobj.email}`
      );
      console.log(data);

      this.setState({ Email_id: data.user[0].Email_id });
      let arrinterestedIn = data.user[0].IterestedIn.split(',');
      console.log(arrinterestedIn);
      this.setState({ IterestedIn: arrinterestedIn });
      let arrCompetency = data.user[0].Competency.split(',');
      console.log(arrCompetency);
      this.setState({ Competency: arrCompetency });
      let arrSoftSkill = data.user[0].SoftSkill.split(',');
      console.log(arrSoftSkill);
      this.setState({ SoftSkill: arrSoftSkill });
      let arrTechProficiency = data.user[0].TechProficiency.split(',');
      console.log(arrTechProficiency);
      this.setState({ TechProficiency: arrTechProficiency });
      let arrLanguageSpoken = data.user[0].LanguageSpoken.split(',');
      console.log(arrLanguageSpoken);
      this.setState({ LanguageSpoken: arrLanguageSpoken });
      this.setState({ name: data.user[0].name });
      let abouttoken = atob(data.user[0].about);
      console.log(abouttoken);
      this.setState({ about: abouttoken });
      let detailedtoken = atob(data.user[0].detailedSummary);
      console.log(detailedtoken);
      this.setState({ detailedSummary: detailedtoken });
      let arrtransferable = [];
      arrtransferable.push(data.user[0].transfer1);
      arrtransferable.push(data.user[0].transfer2);
      arrtransferable.push(data.user[0].transfer3);
      this.setState({ transerablearr: arrtransferable });
      this.setState({ transfer1: data.user[0].transfer1 });
      this.setState({ transfer2: data.user[0].transfer2 });
      this.setState({ transfer3: data.user[0].transfer3 });
      this.setState({ calendly: data.user[0].calendly });
      this.setState({ website: data.user[0].website });
      this.setState({ Linkein: data.user[0].Linkein });
      this.setState({ ImageName: data.user[0].ImageName });
      let datavalue = (document.getElementById(
        'myTextarea'
      ).value = this.state.about);
      this.setState({ textareadata: true });
      console.log(datavalue);
      document.getElementById('viewer').srcdoc = datavalue;

      // myTextareadescription
      let datavalue1 = (document.getElementById(
        'myTextareadescription'
      ).value = this.state.detailedSummary);
      console.log(datavalue1);
      document.getElementById('viewerdescription').srcdoc = datavalue1;

      let data3 = await axios.get(
        `/api/users/getExperiencedata/${this.state.Email_id}`
      );
      console.log(data3.data.user);
      this.setState({ exparr: data3.data.user });
      console.log(this.state.currentDateTime);
      let arrofdate = this.state.currentDateTime.split(' ');
      console.log(arrofdate[4]);
      this.setState({ mytime: arrofdate[4] });
      console.log(this.state.date);
    }
  };

  addexperienceClicked = () => {
    console.log(this.state.addExperience);
    this.setState({ addExperience: !this.state.addExperience });
  };

  expereienceadd = async (value) => {
    console.log(value);
    let { data } = await axios.get(
      `/api/users/getExperiencedata/${this.state.Email_id}`
    );
    this.setState({ exparr: data.user });
    console.log(data.user);
    this.setState({ experienceid: value });
  };

  shortlistClick = async () => {
    this.setState({ shortlistclick: !this.state.shortlistclick });
  };

  applyexperienceClicked = async () => {
    const serializedState = localStorage.getItem('state');
    console.log(serializedState);
    let obj = JSON.parse(serializedState);
    console.log(obj);
    console.log(obj.myemail.myemail);

    this.props.loggin(true);
    this.props.email(obj.myemail.myemail);

    console.log('apply clicked');
    console.log('applybtnclicked');
    const ApplicationId = uuidv4();
    // const email = 'sagarharshsharma12345@gmail.com';
    // console.log(this.props.emailid);
    await axios.post(
      `/api/users/postinapplicationtable/${this.props.location.state.ApplicationId}/${this.props.location.state.job_id}/${obj.myemail.myemail}/${this.props.location.state.Email_id}`
    );
  };

  interviewdateChange = (event) => {
    console.log(event.target.value);
    this.setState({ interviewdate: event.target.value });
  };

  interviewtimingChange = (event) => {
    console.log(event.target.value);
    this.setState({ interviewtiming: event.target.value });
  };

  addressChange = (event) => {
    console.log(event.target.value);
    this.setState({ interviewaddress: event.target.value });
  };

  EmailidChange = (event) => {
    console.log(event.target.value);
    this.setState({ companyemailid: event.target.value });
  };

  doneclicked = async (event) => {
    console.log(this.state.Email_id);
    console.log(window.location.href);
    let urlsplitarr = window.location.href.split('/');
    console.log(urlsplitarr);
    let id = urlsplitarr[urlsplitarr.length - 1];
    console.log('done clicked');
    let kobj = {};
    kobj.date = this.state.interviewdate;
    kobj.time = this.state.interviewtiming;
    kobj.email = this.state.companyemailid;
    kobj.address = this.state.interviewaddress;

    kobj = JSON.stringify(kobj);
    let { data } = await axios.post(
      `/api/users/postapplicationshortlistdetails/${this.props.location.state.email}/${id}/${kobj}`
    );
  };

  render() {
    return (
      <>
        <HomeResponsiveHeader />
        <SeeAllHeader></SeeAllHeader>
        <div className='applyprofile'>
          <div className='containerprofile'>
            <div className='topcontainer'>
              <div className='myimgdiv'>
                <img src={logo} className='profileimgofapply'></img>
                <div className='profilename'>{this.state.name}</div>
              </div>
            </div>
            <div className='bottomcontainer'>
              <div className='mybottomcontainer1'>
                <div className='intereestedindata'>
                  <div className='interestedinheading'>Interested In</div>
                  <div className='interestedinheadingdata'>
                    {this.state.IterestedIn.map((value) => {
                      if (
                        this.state.IterestedIn.length > 0 &&
                        value.length > 0
                      ) {
                        return <div className='realdata'>{value}</div>;
                      }
                    })}
                  </div>
                </div>

                <div className='intereestedindata'>
                  <div className='interestedinheading'>Competency</div>
                  <div className='interestedinheadingdata'>
                    {this.state.Competency.map((value) => {
                      if (
                        this.state.Competency.length > 0 &&
                        value.length > 0
                      ) {
                        return <div className='realdata'>{value}</div>;
                      }
                    })}
                  </div>
                </div>

                <div className='intereestedindata'>
                  <div className='interestedinheading'>SoftSkill</div>
                  <div className='interestedinheadingdata'>
                    {this.state.SoftSkill.map((value) => {
                      if (this.state.SoftSkill.length > 0 && value.length > 0) {
                        return <div className='realdata'>{value}</div>;
                      }
                    })}
                  </div>
                </div>

                <div className='intereestedindata'>
                  <div className='interestedinheading'>Competency</div>
                  <div className='interestedinheadingdata'>
                    {this.state.TechProficiency.map((value) => {
                      if (
                        this.state.TechProficiency.length > 0 &&
                        value.length > 0
                      ) {
                        return <div className='realdata'>{value}</div>;
                      }
                    })}
                  </div>
                </div>

                {/* LanguageSpoken */}
                <div className='intereestedindata'>
                  <div className='interestedinheading'>Competency</div>
                  <div className='interestedinheadingdata'>
                    {this.state.LanguageSpoken.map((value) => {
                      if (
                        this.state.LanguageSpoken.length > 0 &&
                        value.length > 0
                      ) {
                        return <div className='realdata'>{value}</div>;
                      }
                    })}
                  </div>
                </div>
              </div>

              <div className='mybottomcontainer2'>
                <div className='aboutcontainer2'>
                  <div className='myjobseekerinformation'>
                    <div className='aboutheadingcontainer'>
                      Information About Job Seeker
                    </div>
                    <div className='textareaiframecontainer'>
                      <textarea
                        onChange={this.handleChange}
                        className='textareaofdescription'
                        id='myTextarea'
                      ></textarea>
                      <iframe id='viewer'></iframe>
                    </div>
                  </div>

                  <div className='myjobseekerdescription'>
                    <div className='aboutheadingcontainer'>
                      Description Of Job Seeker
                    </div>
                    <div className='textareaiframecontainer'>
                      <textarea
                        className='textareaofimformation'
                        id='myTextareadescription'
                      ></textarea>
                      <iframe id='viewerdescription'></iframe>
                    </div>
                  </div>

                  <div className='myjobseekertransferable'>
                    <div className='aboutheadingcontainer'>
                      Transferable Skills
                    </div>
                    {this.state.transerablearr.map((value) => {
                      if (this.state.transerablearr.length > 0) {
                        return (
                          <div className='mytransferableskillsofseeker'>
                            {value}
                          </div>
                        );
                      }
                    })}
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>

          {!this.state.mm && (
            <div className='addExperience'>
              <div
                className='addexperiencebtn'
                onClick={this.applyexperienceClicked}
              >
                APPLY
              </div>
            </div>
          )}
          {/* {this.state.addExperience && (
          <AddExperienceOfJobSeeker
            Email_id={this.state.Email_id}
            expereienceadd={this.expereienceadd}
          ></AddExperienceOfJobSeeker>
        )} */}
          <div className='containerof shortlistedornot'>
            <div className='shortlisted' onClick={this.shortlistClick}>
              Shortlist
            </div>

            <div className='Reject' onClick={this.RejectClick}>
              Reject
            </div>
          </div>
          {this.state.shortlistclick && (
            <div className='formforfill'>
              <div className='InterviewDatecontainer inputcontainer'>
                <div className='interviewdatelabel'>Interview Date</div>
                <input
                  type='text'
                  id='interviewdate'
                  name='fname'
                  onChange={this.interviewdateChange}
                />
              </div>

              <div className='Interviewtimingcontainer inputcontainer'>
                <div className='interviewtiminglabel'>Interview Timing</div>
                <input
                  type='text'
                  id='interviewtime'
                  name='fname'
                  onChange={this.interviewtimingChange}
                />
              </div>

              <div className='Addresscontainer inputcontainer'>
                <div className='addresslabel'>Address</div>
                <input
                  type='text'
                  id='address'
                  name='fname'
                  onChange={this.addressChange}
                />
              </div>

              <div className='Emailidcontainer inputcontainer'>
                <div className='emailidlabel'>Company Email Id</div>
                <input
                  type='text'
                  id='emailiddate'
                  name='fname'
                  onChange={this.EmailidChange}
                />
              </div>
              <div className='done' onClick={this.doneclicked}>
                Done
              </div>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Applypages);
