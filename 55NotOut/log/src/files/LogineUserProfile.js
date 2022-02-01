import axios from 'axios';
import WebIcon from '@material-ui/icons/Web';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import NotLogined from './NotLogined.js';
import TextEditor from './TextEditor';
import TextEditor2 from './TextEditor2';
import SummaryEdtor from './SummaryEdtor';
import NewHeader from './NewHeader';
import SeeAllHeader from './SeeAllHeader';
import FinalFooter from './FinalFooter';
import { withRouter } from 'react-router-dom';
import '../css_Files/editouserprofilecss.css';
import logo from '../publicImageFolder/PngItem_2383850.png';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import drafttohtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import { connect } from 'react-redux';
import '../css_Files/loginuserprofilepostedcard.css';
import { Increment, Decrement, loggedin, emailid } from '../Actions/action';
const { htmlToText } = require('html-to-text');

const mapStateToProps = (props) => {
  return {
    inc: props.increment,
    dec: props.decrement,
    log: props.loggin,
    emailid: props.myemail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Increment()),
    decrement: () => dispatch(Decrement()),
    loggin: (logornot) => dispatch(loggedin(logornot)),
    email: (email) => dispatch(emailid(email)),
  };
};

class LogineUserProfile extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      Email: '',
      Interested: '',
      Competency: '',
      softskill: '',
      proficiency: '',
      language: '',
      linkedin: '',
      about: '',
      calendly: '',
      detailedsummary: '',
      name: '',
      transfer1: '',
      transfer2: '',
      transfer3: '',
      website: '',
      myresume: '',
      myresumeFileName: '',
      ImageName: '',
      imageurl: '',
      myimage: '',

      editorState: '',
      myhtml: '',
      datacome: false,

      mydataofjobseekers: [],
      clickedjobseeker: false,
      statusdetails: [],

      EventDataArr: [],
      JobsDataArr: [],
      MentorsDataArr: [],
      OrganisationsDataArr: [],
      ProductsDataArr: [],
      CoursesDataArr: [],
      usertype: '',
      experiencein: '',
      myabout: '',
    };
  }

  Editbtnclicked = (event) => {
    console.log(this.state.about);
    this.props.history.push({
      pathname: '/login/userProfile/EditUserProfile',
      state: {
        mail_id: this.state.Email,
        Interested: this.state.Interested,
        Competency: this.state.Competency,
        softskill: this.state.softskill,
        proficiency: this.state.proficiency,
        language: this.state.language,
        linkedin: this.state.linkedin,
        about: this.state.myabout,
        calendly: this.state.calendly,
        detailedsummary: this.state.detailedsummary,
        name: this.state.name,
        transfer1: this.state.transfer1,
        transfer2: this.state.transfer2,
        transfer3: this.state.transfer3,
        website: this.state.website,
        experiencein: this.state.experiencein,
      },
    });
  };

  componentDidMount = async () => {
    let url = window.location.href;
    let urlarr = url.split('/');
    let encodedemail = urlarr[urlarr.length - 1];
    let decodedemail = atob(encodedemail);
    let { data } = await axios.get(
      `/api/users/getuserprofiledata/${decodedemail}`
    );
    // console.log(data);
    var decodedStringAtoB = atob(data.user[0].about);
    console.log(decodedStringAtoB);

    var decodedStringAtoB1 = atob(data.user[0].detailedSummary);
    // console.log(decodedStringAtoB1);
    this.setState({ Email: decodedemail });
    this.setState({ Interested: data.user[0].IterestedIn });
    this.setState({ Competency: data.user[0].Competency });
    this.setState({ softskill: data.user[0].SoftSkill });
    this.setState({ proficiency: data.user[0].TechProficiency });
    this.setState({ language: data.user[0].LanguageSpoken });
    this.setState({ linkedin: data.user[0].Linkein });
    this.setState({ calendly: data.user[0].calendly });
    this.setState({ name: data.user[0].name });
    this.setState({ transfer1: data.user[0].transfer1 });
    this.setState({ transfer2: data.user[0].transfer2 });
    this.setState({ transfer3: data.user[0].transfer3 });
    this.setState({ website: data.user[0].website });
    this.setState({ detailedsummary: decodedStringAtoB1 });
    this.setState({ editorState: decodedStringAtoB });
    this.setState({ experiencein: data.user[0].experiencein });
    console.log(decodedemail);
    this.hello(decodedemail);
    this.setState({ myhtml: this.state.editorState });
    this.setState({ datacome: true });
    this.setState({ myabout: decodedStringAtoB });

    let myreduxemailis = '';
    myreduxemailis = this.state.Email;

    let arrjobappliedbyseeker = [];

    let jobappliedmap = new Map();

    if (myreduxemailis.length > 0) {
      let { data } = await axios.get(
        `/api/user/getallappliedjobsofjobseeker/${myreduxemailis}`
      );
      data.user.map((value) => {
        let val = jobappliedmap.has(value.JobId);
        if (val) {
        } else {
          arrjobappliedbyseeker.push(value.JobId);
          jobappliedmap.set(value.JobId, '');
        }
      });

      let arrofjobseekervals = [];

      if (arrjobappliedbyseeker.length > 0) {
        arrjobappliedbyseeker.map(async (value) => {
          let { data } = await axios.get(`/api/users/getJobs/${value}`);
          arrofjobseekervals.push(data.user[0]);
        });
      }

      this.setState({ mydataofjobseekers: arrofjobseekervals });

      let statusshortlistedornot = arrjobappliedbyseeker.map(async (value) => {
        let { data } = await axios.get(
          `/api/users/getstatusfromapplicationtable/${value}/${myreduxemailis}`
        );
        return data.user[0];
      });
      let ans = await Promise.all(statusshortlistedornot);
      // console.log(ans[0]);
      this.setState({ statusdetails: ans });
    }

    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
    let emailidfromstorage = storage.myemail.myemail;

    let EventData = await axios.get(
      `/api/users/getEventsById/${emailidfromstorage}`
    );

    this.setState({ EventDataArr: EventData.data.user });

    let JobsData = await axios.get(
      `/api/users/getJobsById/${emailidfromstorage}`
    );

    this.setState({ JobsDataArr: JobsData.data.user });

    let MentorsData = await axios.get(
      `/api/users/getMentorsById/${emailidfromstorage}`
    );

    this.setState({ MentorsDataArr: MentorsData.data.user });

    let OrganisationData = await axios.get(
      `/api/users/getOrganisationsById/${emailidfromstorage}`
    );

    this.setState({ OrganisationsDataArr: OrganisationData.data.user });

    let ProductsData = await axios.get(
      `/api/users/getProductsById/${emailidfromstorage}`
    );

    this.setState({ ProductsDataArr: ProductsData.data.user });

    let CoursesData = await axios.get(
      `/api/users/getCoursessById/${emailidfromstorage}`
    );

    this.setState({ CoursesDataArr: CoursesData.data.user });

    // getting usertype from storage...
    let usertype = localStorage.getItem('usertype');
    this.setState({ usertype: usertype });
  };

  jobsappliedclicked = async () => {
    this.setState({ clickedjobseeker: !this.state.clickedjobseeker });
  };

  hello = async (email) => {
    let url = window.location.href;
    let urlarr = url.split('/');
    let encodedemail = urlarr[urlarr.length - 1];
    let decodedemail = atob(encodedemail);

    let mydataprofile = await axios.get(
      `/api/users/getuserprofileImagedata/${decodedemail}`
    );
    console.log(mydataprofile.data.user[0]);
    if (
      !(mydataprofile.data.user[0] === undefined) &&
      mydataprofile.data.user[0].ImageName !== 'nothing'
    ) {
      // console.log(mydataprofile.data.user[0].ImageName);
      this.setState({ ImageName: mydataprofile.data.user[0].ImageName });
      // console.log(this.state.ImageName);
      let ans = `../publicImageFolder/${this.state.ImageName}`;
      // console.log(typeof ans);
      this.setState({ imageurl: ans });
      const myreq = require(`../publicImageFolder/${this.state.ImageName}`);
      // console.log(myreq);
      this.setState({ myimage: myreq });
      this.setState({ myresumeFileName: mydataprofile.data.user[0].resume });
      let myurlofresume = `../resumeUpload/${mydataprofile.data.user[0].resume}`;
      this.setState({ myresume: myurlofresume });
    }
    this.setState({ myresumeFileName: mydataprofile.data.user[0].resume });
  };

  downloadResume = () => {
    console.log(this.state.myresumeFileName);
    this.props.history.push({
      pathname: '/pdfviewer',
      state: {
        filename: this.state.myresumeFileName,
      },
    });
  };

  editbtnclickedEvent = (event) => {
    let variable = event.target.getAttribute('value');
    // let Job_id = mydata[variable].Job_id;
    console.log(variable);
    let objdata = this.state.EventDataArr[variable];
    console.log(objdata);
    console.log('event clicked');
    this.props.history.push({
      pathname: `/login/editevent/${objdata.Job_id}`,
      state: {
        value: objdata,
      },
    });
  };

  editbtnclickedMentor = (event) => {
    let variable = event.target.getAttribute('value');
    console.log(variable);
    let objdata = this.state.MentorsDataArr[variable];
    console.log(objdata);
    console.log('mentor clicked');

    this.props.history.push({
      pathname: `/login/editmentor/${objdata.Job_id}`,
      state: {
        value: objdata,
      },
    });
  };

  editbtnclickedOrganisation = (event) => {
    let variable = event.target.getAttribute('value');
    console.log(variable);
    let objdata = this.state.OrganisationsDataArr[variable];
    console.log(objdata);
    console.log('organisation clicked');

    this.props.history.push({
      pathname: `/login/editorganisation/${objdata.Job_id}`,
      state: {
        value: objdata,
      },
    });
  };

  editbtnclickedCourses = (event) => {
    let variable = event.target.getAttribute('value');
    console.log(variable);
    let objdata = this.state.CoursesDataArr[variable];
    console.log(objdata);
    console.log('Courses Clicked');

    this.props.history.push({
      pathname: `/login/editcourses/${objdata.uuid}`,
      state: {
        value: objdata,
      },
    });
  };

  editbtnclickedEventjobseeker = (event) => {
    let variable = event.target.getAttribute('value');
    console.log(variable);
    let objdata = this.state.EventDataArr[variable];
    console.log(objdata);
    console.log('edit cliked Of JobSeeker');

    this.props.history.push({
      pathname: `/login/editevent/${objdata.Job_id}`,
      state: {
        value: objdata,
      },
    });
  };

  editbtnclickedjobproviderjobs = (event) => {
    let variable = event.target.getAttribute('value');
    console.log(variable);
    let objdata = this.state.JobsDataArr[variable];
    console.log(objdata);
    console.log('jobseeker job clicked');

    this.props.history.push({
      pathname: `/login/editjob/${objdata.Job_id}`,
      state: {
        value: objdata,
      },
    });
  };

  editbtnclickedOrganisationjobprovider = (event) => {
    let variable = event.target.getAttribute('value');
    console.log(variable);
    let objdata = this.state.OrganisationsDataArr[variable];
    console.log(objdata);
    console.log('job provider organsiation');

    this.props.history.push({
      pathname: `/login/editorganisation/${objdata.Job_id}`,
      state: {
        value: objdata,
      },
    });
  };

  editbtnclickedjobproviderProducts = (event) => {
    let variable = event.target.getAttribute('value');
    console.log(variable);
    let objdata = this.state.ProductsDataArr[variable];
    console.log(objdata);
    console.log('job provider products');

    this.props.history.push({
      pathname: `/login/editproduct/${objdata.jobid}`,
      state: {
        value: objdata,
      },
    });
  };

  render() {
    console.log(this.state.EventDataArr);
    console.log(this.state.experiencein);
    return (
      <>
        <HomeResponsiveHeader></HomeResponsiveHeader>
        <SeeAllHeader></SeeAllHeader>
        {this.props.location.state === undefined ? (
          <div className='container'>
            <div className='topbanner'>
              <div className='topbannerlogo'>55notout.com</div>
              <div className='topbanneradd'></div>
              <div className='topbannerLoginSignup'>
                {/* <Button variant='contained' color='secondary'>
                  <Link to='/login' className='text_decoration clr'>
                    Login
                  </Link>
                </Button>
                <Button variant='contained' color='primary'>
                  <Link to='/signup' className='text_decoration clr'>
                    SignUp
                  </Link>
                </Button> */}
              </div>
            </div>
            <div className='userProfileContainer'>
              <div className='containerSiderbar'>
                <img className='profileimg' src={this.state.myimage.default} />
                <div className='resumeuploadContainer'>
                  <div className='profileimg'>UPLOADED</div>
                  <div className='uploadButton' onClick={this.downloadResume}>
                    See Your Resume
                  </div>
                </div>
                <div className='interested'>
                  <div className='compe'>Interested In</div>
                  <div className='selectinterestedin'>
                    {this.state.Interested}
                  </div>
                </div>

                <div className='competencies'>
                  <div className='compe'>Competencies</div>
                  <div className='selectinterestedin'>
                    {this.state.Competency}
                  </div>
                </div>

                <div className='softskills'>
                  <div className='compe'>Soft Skills</div>
                  <div className='selectinterestedin'>
                    {this.state.softskill}
                  </div>
                </div>

                <div className='techproficencies'>
                  <div className='compe'>Tech Proficiency</div>
                  <div className='selectinterestedin'>
                    {this.state.proficiency}
                  </div>
                </div>

                <div className='Language'>
                  <div className='compe'>Language Spoken</div>
                  <div className='selectinterestedin'>
                    {this.state.language}
                  </div>
                </div>
              </div>
              <div className='containerUserprofile'>
                <div className='usernameContainer'>
                  <div className='name1'>{this.state.name}</div>
                </div>

                <div className='about_yourself'>About Yourself</div>
                <div className='content_viewer'>
                  {this.state.datacome && (
                    <TextEditor2 value={this.state.editorState}></TextEditor2>
                  )}
                </div>

                <div className='detailedContent'>
                  <div className='about_yourself'>Detailed Summary</div>
                  <div className='content_viewer'>
                    {this.state.datacome && (
                      <SummaryEdtor
                        value={this.state.detailedsummary}
                      ></SummaryEdtor>
                    )}
                  </div>
                </div>

                <div className='Top3skills'>
                  <div className='about_yourself'>
                    Top Three Transeferable Skills
                  </div>
                  <div className='selectinterestedin'>
                    {this.state.transfer1}
                  </div>

                  <div className='selectinterestedin'>
                    {this.state.transfer2}
                  </div>

                  <div className='selectinterestedin'>
                    {this.state.transfer3}
                  </div>

                  <div className='Top3skills'>
                    <div className='about_yourself'>
                      Top Three Roles Worked In
                    </div>
                    <div className='selectinterestedin'>
                      {this.state.experiencein}
                    </div>
                  </div>

                  <div className='Top3skills'>
                    <div className='about_yourself'>Professional Links</div>
                    <div className='linkedin'>
                      <LinkedInIcon />
                      {this.state.linkedin}
                    </div>
                    <div className='blogwebsite'>
                      <WebIcon />
                      {this.state.website}
                    </div>
                    <div className='calendly'>
                      <LinkIcon />
                      {this.state.calendly}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {(this.state.usertype === 'mentor' ||
              this.state.usertype === 'jobprovider') &&
              this.state.EventDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Events Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.EventDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Event_profile}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Category}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Event_mode}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedEvent}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            {this.state.usertype === 'mentor' &&
              this.state.MentorsDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Mentors Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.MentorsDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.First_Name} {value.Last_Name}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Mentor_profile}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Job_id}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedMentor}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            {this.state.usertype === 'mentor' &&
              this.state.OrganisationsDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Organisations Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.OrganisationsDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Organisation_Name}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Organisation_Founder}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Organisation_mail_id}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedOrganisation}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            {this.state.usertype === 'mentor' &&
              this.state.CoursesDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Courses Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.CoursesDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.name}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.price}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.uuid}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedCourses}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            {this.state.usertype === 'jobseeker' &&
              this.state.EventDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Events Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.EventDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Event_profile}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Category}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Event_mode}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedEventjobseeker}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            {this.state.usertype === 'jobprovider' &&
              this.state.JobsDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Jobs Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.JobsDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Job_profile}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Company_Location}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Job_Type}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedjobproviderjobs}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

            {this.state.usertype === 'jobprovider' &&
              this.state.OrganisationsDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Organisations Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.OrganisationsDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Organisation_Name}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Organisation_Founder}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Organisation_mail_id}
                            </div>
                            <div
                              className='editbtn'
                              onClick={
                                this.editbtnclickedOrganisationjobprovider
                              }
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

            {this.state.usertype === 'jobprovider' &&
              this.state.ProductsDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Products Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.ProductsDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Name_of_product}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.ProductOrigin}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.jobid}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedjobproviderProducts}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            <div
              className='jobsforwhichapplied appliedforjobs'
              onClick={this.jobsappliedclicked}
            >
              Jobs For Which Applied
            </div>
            {this.state.clickedjobseeker &&
              this.state.mydataofjobseekers.map((val, index) => {
                return (
                  <>
                    <div className='detailscontainer'>
                      <div className='firstcontainerofjbseeker'>
                        <div className='mydata jobseeker applied'>
                          <div className='firstdata marginjobseeker'>
                            {val.Job_id}
                          </div>
                          <div className='seconddata marginjobseeker'>
                            {val.Job_profile}
                          </div>
                          <div className='thirddata marginjobseeker'>
                            {val.Company_Location}
                          </div>
                          <div className='fourthdata marginjobseeker'>
                            {val.Required_Experience}
                          </div>
                          <div className='fifthdata marginjobseeker'>
                            {val.Pay_Range}
                          </div>
                          <div className='sixthdata marginjobseeker'>
                            {val.Required_Skills_Competencies}
                          </div>
                          <div className='seventhdata marginjobseeker'>
                            {val.Soft_Skills}
                          </div>
                        </div>
                        {this.state.statusdetails[index].shortlistedornot ===
                          'true' && (
                          <div className='secondContainershortliste'>
                            <div className='shortlisted'>
                              <div className='yesornorshort'>Shortlist</div>
                              <div className='ansshortlist'>
                                {
                                  this.state.statusdetails[index]
                                    .shortlistedornot
                                }
                              </div>
                            </div>

                            <div className='interviewdate'>
                              <div className='interviewdateheading'>
                                Interview Date
                              </div>
                              <div className='ansinterviewdate'>
                                {this.state.statusdetails[index].interviewdate}
                              </div>
                            </div>

                            <div className='interviewtime'>
                              <div className='interviewtimeheading'>
                                Interview Time
                              </div>
                              <div className='ansinterviewtime'>
                                {this.state.statusdetails[index].interviewtime}
                              </div>
                            </div>

                            <div className='applicationid'>
                              <div className='applicationidheading'>
                                Application Id
                              </div>
                              <div className='ansapplicationid'>
                                {this.state.statusdetails[index].ApplicationId}
                              </div>
                            </div>

                            <div className='emailofjobprovider'>
                              <div className='emailidheading'>
                                Job Provider Email
                              </div>
                              <div className='ansemailid'>
                                {this.state.statusdetails[index].EmailIdOfJP}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        ) : (
          <div className='container'>
            <div className='topbanner'>
              <div className='topbannerlogo'>55notout.com</div>
              <div className='topbanneradd'></div>
              <div className='topbannerLoginSignup'>
                {/* <Button variant='contained' color='secondary'>
                  <Link to='/login' className='text_decoration clr'>
                    Login
                  </Link>
                </Button>
                <Button variant='contained' color='primary'>
                  <Link to='/signup' className='text_decoration clr'>
                    SignUp
                  </Link>
                </Button> */}
              </div>
            </div>
            <div className='userProfileContainer'>
              <div className='containerSiderbar'>
                {/* <div className='profileimg'></div> */}
                <img className='profileimg' src={this.state.myimage.default} />
                <div className='resumeuploadContainer'>
                  <div className='profileimg'>UPLOADED</div>
                  <div className='uploadButton' onClick={this.downloadResume}>
                    See Your Resume
                  </div>
                </div>
                <div className='interested'>
                  <div className='compe'>Interested In</div>
                  {/* <div className='CompetenciesContaner'></div> */}
                  <div className='selectinterestedin'>
                    {this.state.Interested}
                  </div>
                </div>

                <div className='competencies'>
                  <div className='compe'>Competencies</div>
                  {/* <div className='CompetenciesContaner'></div> */}
                  <div className='selectinterestedin'>
                    {this.state.Competency}
                  </div>
                </div>

                <div className='softskills'>
                  <div className='compe'>Soft Skills</div>
                  {/* <div className='CompetenciesContaner'></div> */}
                  <div className='selectinterestedin'>
                    {this.state.softskill}
                  </div>
                </div>

                <div className='techproficencies'>
                  <div className='compe'>Tech Proficiency</div>
                  {/* <div className='CompetenciesContaner'></div> */}
                  <div className='selectinterestedin'>
                    {this.state.proficiency}
                  </div>
                </div>

                <div className='Language'>
                  <div className='compe'>Language Spoken</div>
                  {/* <div className='CompetenciesContaner'></div> */}
                  <div className='selectinterestedin'>
                    {this.state.language}
                  </div>
                </div>
              </div>
              <div className='containerUserprofile'>
                <div className='usernameContainer'>
                  <div className='name1'>{this.state.name}</div>
                  <div className='btncontainer1'>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={this.Editbtnclicked}
                    >
                      Edit Profile
                    </Button>
                  </div>
                </div>

                <div className='about_yourself'>About Yourself</div>
                <div className='content_viewer'>
                  {/* <div className='content'>{this.state.about}</div> */}
                  {/* {this.state.editorState} */}
                  {this.state.datacome && (
                    <TextEditor2 value={this.state.editorState}></TextEditor2>
                  )}
                </div>

                <div className='detailedContent'>
                  <div className='about_yourself'>Detailed Summary</div>
                  <div className='content_viewer'>
                    {/* <div className='content'>{this.state.detailedsummary}</div> */}
                    {this.state.datacome && (
                      <SummaryEdtor
                        value={this.state.detailedsummary}
                      ></SummaryEdtor>
                    )}
                  </div>
                </div>

                <div className='Top3skills'>
                  <div className='about_yourself'>
                    Top Three Transeferable Skills
                  </div>
                  <div className='selectinterestedin'>
                    {this.state.transfer1}
                  </div>

                  <div className='selectinterestedin'>
                    {this.state.transfer2}
                  </div>

                  <div className='selectinterestedin'>
                    {this.state.transfer3}
                  </div>

                  <div className='Top3skills'>
                    <div className='about_yourself'>
                      Top Three Roles Worked In
                    </div>
                    {/* <div className='CompetenciesContaner'></div> */}
                    <div className='selectinterestedin'>
                      {this.state.experiencein}
                    </div>
                  </div>

                  <div className='Top3skills'>
                    <div className='about_yourself'>Professional Links</div>
                    {/* // linked in */}
                    <div className='linkedin'>
                      <LinkedInIcon />
                      {this.state.linkedin}
                    </div>
                    {/* blog/website */}
                    <div className='blogwebsite'>
                      <WebIcon />
                      {this.state.website}
                    </div>
                    {/* calendly link */}
                    <div className='calendly'>
                      <LinkIcon />
                      {this.state.calendly}
                      {/* <div className='textareaclass'></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* work for postedEvent For Mentor */}
            {(this.state.usertype === 'mentor' ||
              this.state.usertype === 'jobprovider') &&
              this.state.EventDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Events Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.EventDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Event_profile}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Category}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Event_mode}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedEvent}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            {/* work for postedMentor For Mentor */}
            {this.state.usertype === 'mentor' &&
              this.state.MentorsDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Mentors Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.MentorsDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.First_Name} {value.Last_Name}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Mentor_profile}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Job_id}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedMentor}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            {/* work for postedOrganisation For Organisations */}
            {this.state.usertype === 'mentor' &&
              this.state.OrganisationsDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Organisations Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.OrganisationsDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Organisation_Name}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Organisation_Founder}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Organisation_mail_id}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedOrganisation}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            {/* work for postedCourses For Courses */}
            {this.state.usertype === 'mentor' &&
              this.state.CoursesDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Courses Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.CoursesDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.name}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.price}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.uuid}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedCourses}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            {/* work for postedEvents For jobseeker */}
            {this.state.usertype === 'jobseeker' &&
              this.state.EventDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Events Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.EventDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Event_profile}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Category}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Event_mode}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedEventjobseeker}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            {/* || this.state.usertype === 'jobprovider' */}
            {this.state.usertype === 'jobprovider' &&
              this.state.JobsDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Jobs Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.JobsDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Job_profile}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Company_Location}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Job_Type}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedjobproviderjobs}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

            {/* || this.state.usertype === 'jobprovider' */}
            {this.state.usertype === 'jobprovider' &&
              this.state.OrganisationsDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Organisations Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.OrganisationsDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Organisation_Name}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Organisation_Founder}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.Organisation_mail_id}
                            </div>
                            <div
                              className='editbtn'
                              onClick={
                                this.editbtnclickedOrganisationjobprovider
                              }
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

            {/* || this.state.usertype === 'jobprovider' */}
            {this.state.usertype === 'jobprovider' &&
              this.state.ProductsDataArr.length > 0 && (
                <>
                  <div className='headingofeachcard'>Products Posted</div>
                  <div className='postedcardContainer'>
                    {this.state.ProductsDataArr.map((value, index) => {
                      return (
                        <div className='cardofeachposted' key={index}>
                          <div className='cardofeachpostedEventprofile'>
                            <div className='cardofeachpostedeventprofile'>
                              {value.Name_of_product}
                            </div>
                            <div className='cardofeachpostedeventprofile'>
                              {value.ProductOrigin}
                            </div>
                            <div className='eachcardEvent_mode '>
                              {value.jobid}
                            </div>
                            <div
                              className='editbtn'
                              onClick={this.editbtnclickedjobproviderProducts}
                              value={index}
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

            <div
              className='jobsforwhichapplied appliedforjobs'
              onClick={this.jobsappliedclicked}
            >
              Jobs For Which Applied
            </div>
            {this.state.clickedjobseeker &&
              this.state.mydataofjobseekers.map((val, index) => {
                return (
                  <>
                    <div className='detailscontainer'>
                      <div className='firstcontainerofjbseeker'>
                        <div className='mydata jobseeker applied'>
                          <div className='firstdata marginjobseeker'>
                            {val.Job_id}
                          </div>
                          <div className='seconddata marginjobseeker'>
                            {val.Job_profile}
                          </div>
                          <div className='thirddata marginjobseeker'>
                            {val.Company_Location}
                          </div>
                          <div className='fourthdata marginjobseeker'>
                            {val.Required_Experience}
                          </div>
                          <div className='fifthdata marginjobseeker'>
                            {val.Pay_Range}
                          </div>
                          <div className='sixthdata marginjobseeker'>
                            {val.Required_Skills_Competencies}
                          </div>
                          <div className='seventhdata marginjobseeker'>
                            {val.Soft_Skills}
                          </div>
                        </div>
                        {this.state.statusdetails[index].shortlistedornot ===
                          'true' && (
                          <div className='secondContainershortliste'>
                            <div className='shortlisted'>
                              <div className='yesornorshort'>Shortlist</div>
                              <div className='ansshortlist'>
                                {
                                  this.state.statusdetails[index]
                                    .shortlistedornot
                                }
                              </div>
                            </div>

                            <div className='interviewdate'>
                              <div className='interviewdateheading'>
                                Interview Date
                              </div>
                              <div className='ansinterviewdate'>
                                {this.state.statusdetails[index].interviewdate}
                              </div>
                            </div>

                            <div className='interviewtime'>
                              <div className='interviewtimeheading'>
                                Interview Time
                              </div>
                              <div className='ansinterviewtime'>
                                {this.state.statusdetails[index].interviewtime}
                              </div>
                            </div>

                            <div className='applicationid'>
                              <div className='applicationidheading'>
                                Application Id
                              </div>
                              <div className='ansapplicationid'>
                                {this.state.statusdetails[index].ApplicationId}
                              </div>
                            </div>

                            <div className='emailofjobprovider'>
                              <div className='emailidheading'>
                                Job Provider Email
                              </div>
                              <div className='ansemailid'>
                                {this.state.statusdetails[index].EmailIdOfJP}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        )}
        <FinalFooter />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LogineUserProfile));

// history.push({
//   pathname: '/login/UserProfile',
//   state: {
//     useremail_id: myemail,
//   },
// });
