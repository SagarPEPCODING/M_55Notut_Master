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
import Footer from './Footer';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import SeeAllHeader from './SeeAllHeader';
import '../css_Files/editouserprofilecss.css';
import logo from '../publicImageFolder/PngItem_2383850.png';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import drafttohtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { connect } from 'react-redux';
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

// mapStateToProps,mapDispatchToProps

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Increment()),
    decrement: () => dispatch(Decrement()),
    loggin: (logornot) => dispatch(loggedin(logornot)),
    email: (email) => dispatch(emailid(email)),
  };
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
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

      ImageName: '',
      imageurl: '',
      myimage: '',
      myresume: '',
      myresumeFileName: '',

      editorState: '',
      myhtml: '',
      datacome: false,

      mydataofjobseekers: [],
      clickedjobseeker: false,
      statusdetails: [],
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
    console.log(data);
    var decodedStringAtoB = atob(data.user[0].about);
    console.log(decodedStringAtoB);

    var decodedStringAtoB1 = atob(data.user[0].detailedSummary);
    console.log(decodedStringAtoB1);
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
      console.log(ans[0]);
      this.setState({ statusdetails: ans });
    }

    let storage = localStorage.getItem('state');
    storage = JSON.parse(storage);
    let emailidfromstorage = storage.myemail.myemail;

    let EventData = await axios.get(
      `/api/users/getEventsById/${emailidfromstorage}`
    );

    this.setState({ EventDataArr: EventData });

    let JobsData = await axios.get(
      `/api/users/getJobsById/${emailidfromstorage}`
    );

    this.setState({ JobsDataArr: JobsData });

    let MentorsData = await axios.get(
      `/api/users/getMentorsById/${emailidfromstorage}`
    );

    this.setState({ MentorsDataArr: MentorsData });

    let OrganisationData = await axios.get(
      `/api/users/getOrganisationsById/${emailidfromstorage}`
    );

    this.setState({ OrganisationsDataArr: OrganisationData });

    let ProductsData = await axios.get(
      `/api/users/getProductsById/${emailidfromstorage}`
    );

    this.setState({ ProductsDataArr: ProductsData });

    let CoursesData = await axios.get(
      `/api/users/getCoursessById/${emailidfromstorage}`
    );

    this.setState({ CoursesDataArr: CoursesData });
  };

  jobsappliedclicked = async () => {
    this.setState({ clickedjobseeker: !this.state.clickedjobseeker });
  };

  hello = async (email) => {
    let mydataprofile = await axios.get(
      `/api/users/getuserprofileImagedata/${email}`
    );
    if (
      !(mydataprofile.data.user[0] === undefined) &&
      mydataprofile.data.user[0].ImageName !== 'nothing'
    ) {
      this.setState({ ImageName: mydataprofile.data.user[0].ImageName });
      let ans = `../publicImageFolder/${this.state.ImageName}`;
      this.setState({ imageurl: ans });
      const myreq = require(`../publicImageFolder/${this.state.ImageName}`);
      this.setState({ myimage: myreq });
      this.setState({ myresumeFileName: mydataprofile.data.user[0].resume });
      let myurlofresume = `../resumeUpload/${mydataprofile.data.user[0].resume}`;
      this.setState({ myresume: myurlofresume });
    }
  };

  downloadResume = () => {
    console.log('download');
  };

  render() {
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
                <Button variant='contained' color='secondary'>
                  <Link to='/login' className='text_decoration clr'>
                    Login
                  </Link>
                  {/* Login */}
                </Button>
                <Button variant='contained' color='primary'>
                  <Link to='/signup' className='text_decoration clr'>
                    SignUp
                  </Link>
                  {/* SignUp */}
                </Button>
              </div>
            </div>
            <div className='userProfileContainer'>
              <div className='containerSiderbar'>
                {/* <div className='profileimg'></div> */}
                <img className='profileimg' src={this.state.myimage.default} />
                {/* <div className='resumeuploadContainer'> */}
                <div className='profileimg'>UPLOADED</div>
                <div className='uploadButton' onClick={this.downloadResume}>
                  DOWNLOAD
                </div>
                {/* </div> */}
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
                  {/* <div className='btncontainer1'>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={this.Editbtnclicked}
                    >
                      Edit Profile
                    </Button>
                  </div> */}
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
            <div>hii</div>
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
                <Button variant='contained' color='secondary'>
                  <Link to='/login' className='text_decoration clr'>
                    Login
                  </Link>
                  {/* Login */}
                </Button>
                <Button variant='contained' color='primary'>
                  <Link to='/signup' className='text_decoration clr'>
                    SignUp
                  </Link>
                  {/* SignUp */}
                </Button>
              </div>
            </div>
            <div className='userProfileContainer'>
              <div className='containerSiderbar'>
                {/* <div className='profileimg'></div> */}
                <img className='profileimg' src={this.state.myimage.default} />
                {/* <div className='resumeuploadContainer'> */}
                <div className='profileimg'>UPLOADED</div>
                <div className='uploadButton' onClick={this.downloadResume}>
                  DOWNLOAD
                </div>
                {/* <a href='My Resume.pdf' class='download' download>
                  Download CV
                </a> */}
                {/* </div> */}
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
                      {this.state.proficiency}
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
            <div>hii</div>
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
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

// history.push({
//   pathname: '/login/UserProfile',
//   state: {
//     useremail_id: myemail,
//   },
// });
